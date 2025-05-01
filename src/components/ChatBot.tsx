import { useState, useRef, useEffect } from "react";
import "../styles/ChatBot.css"; // 🧹 Clean import


const ChatBot = () => {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const systemPrompt = `
You are a highly knowledgeable botanical expert.
Only respond to questions that are directly related to plants, trees, herbs, flowers, or botany.
If the question is asked in Hindi, respond in Hindi only using clear, grammatically correct language.
If I have asked in English, respond in English only using clear, grammatically correct language.

Every valid response must follow this structure:

Start with a short introduction paragraph summarizing the topic.

Follow with 5 to 8 numbered bullet points explaining details, benefits, care instructions, etc.
`;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick-17b-128e-instruct",
          messages: [
            { role: "system", content: systemPrompt.trim() },
            { role: "user", content: input },
          ],
        }),
      });

      const data = await response.json();
      console.log("Groq API Response:", data);

      if (!data.choices || data.choices.length === 0) {
        throw new Error("No response from model.");
      }

      const botMessage = {
        role: "bot",
        text: data.choices[0].message.content || "No reply received.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error fetching response. Check console for details." },
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">🌿 Plant Informant Chat</div>
        <div className="chatbot-body">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.role === "user" ? "user-message" : "bot-message"}`}
            >
              {msg.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="chatbot-footer">
          <input
            type="text"
            placeholder="Ask about medicinal plants..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
