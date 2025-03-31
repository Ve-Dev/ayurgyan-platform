import { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://api.fireworks.ai/inference/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_FIREWORKS_API_KEY}`,
// Corrected API Key Reference
        },
        body: JSON.stringify({
          model: "accounts/fireworks/models/llama-v3p1-70b-instruct", // Ensure this is the correct model name
          messages: [
            { role: "system", content: "You are a bot answering medicinal plant-related questions." },
            userMessage,
          ],
        }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging

      if (!data.choices || data.choices.length === 0) {
        throw new Error("No response from the model.");
      }

      const botMessage = { role: "bot", text: data.choices[0].message.content || "I couldn't fetch a response." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { role: "bot", text: "Error fetching response. Check console." }]);
    }
  };

  return (
    <div className="chat-container">
      <h2>Plant Informant Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>{msg.text}</p>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about medicinal plants..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
