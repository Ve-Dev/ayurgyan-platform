import React from "react";
import Navbar from "../components/Navbar"; // FIXED IMPORT
import Footer from "../components/Footer";
import "../styles/HomePage.css"; 

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <h1 className="title">Herbal Vista</h1>
        <p className="subtitle">
          
          Discover the Power of Nature Through AYUSH Medicinal Plants
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About the Project</h2>
        <p>
          <strong>Herbal Vista,</strong> an interactive virtual herbal garden using Unreal Engine and Reality Capture for creating a realistic 3D environment and plant models. It integrates Convai, an AI assistant, to provide real-time information on medicinal plants, with quizzes to reinforce learning.
          By blending AI and immersive technology, Herbal Vista offers an interactive and accessible way to explore medicinal plants!
        </p>
      </section>
      
      {/* Featured Plants Section */}
      <section className="plants">
        <h2>Featured Plants</h2>
        <div className="plant-container">
          <div className="plant">
            <video src="/images/Basil.mp4" autoPlay loop muted playsInline width="500px " />
            <p><strong>Tulsi:</strong> The Queen of Herbs, known for immunity-boosting properties.</p>
          </div>
          <div className="plant">
            <video src="/images/Aloevera Plant.mp4" autoPlay loop muted playsInline width="500px"  />
            <p><strong>Aloe Vera:</strong> A wonder plant for skincare and digestion.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="images\VP.jpg" alt="Team Member 1" />
            <a href="https://www.linkedin.com/in/vedant-pathare-105057265/"><p>Vedant Pathare</p></a>
          </div>
          <div className="team-member">
            <img src="images\AS.jpg" alt="Team Member 2" />
            <a href="https://www.linkedin.com/in/arun-sanyal/"><p>Arun Sanyal</p></a>  
          </div>
          <div className="team-member">
            <img src="images\MK.jpg" alt="Team Member 3" />
            <a href="https://www.linkedin.com/in/melbinkoshy/"><p>Melbin Koshy</p></a>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};


        
      

export default HomePage;
