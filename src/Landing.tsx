import { useNavigate } from 'react-router-dom';
import './styles/Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="content">
        <h1>🌿 Welcome to HerbalVista</h1>
        <p>Discover the beauty of medicinal plants in stunning 3D.</p>
        <button onClick={() => navigate('/Home')}>Start Exploring</button>
      </div>
    </div>
  );
}



export default Landing;
