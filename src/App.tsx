import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ModelViewer from './components/ModelViewer';
import Landing from './Landing';
import HomePage from './pages/HomePage'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const models = [
  {
    name: 'Aloe Vera',
    url: '/models/aloevera/Aloe_Vera_Vedant_cleaned_attempt_Model_6.glb',
    info: 'Aloe Vera is a medicinal plant known for its soothing, anti-inflammatory, and healing properties. It is widely used in skincare for treating burns, wounds, and hydration. The plant’s gel is rich in vitamins, enzymes, and antioxidants that boost overall health. It also aids digestion and strengthens the immune system.'
  },
  {
    name: 'Tulsi',
    url: 'models/tulsi/Tulsi_Vedant_intermediate_attempt_Model_2.glb',
    info: 'Tulsi, also known as Holy Basil, is a plant species of the genus Ocimum. It is native to India and Southeast Asia and grows well in tropical and subtropical climates around the world. It is cultivated for its medicinal, religious, and culinary uses, with a rich history in Ayurvedic medicine for promoting health and wellness.'
  },
  {
    name: 'Bamboo',
    url: 'models/bamboo/Bamboo_Vedant_first_attempt_Model_4.glb',
    info: 'Bamboo is a fast-growing, woody-stemmed plant belonging to the grass family Poaceae. It is native to Asia, particularly East and Southeast Asia, but is found in tropical, subtropical, and temperate regions across the globe. Bamboo thrives in a variety of climates and soil conditions, making it one of the most adaptable plants. It is widely cultivated for its versatile uses in construction, crafts, food, and landscaping. In many cultures, bamboo holds cultural, economic, and ecological significance, and has been valued in traditional medicine, daily utilities, and as a sustainable resource.'
  }
];

function MainApp() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Plant Models</h2>
        <ul>
          {models.map((model, index) => (
            <li key={index} onClick={() => setSelectedModel(model)}>
              {model.name}
            </li>
          ))}
        </ul>
        <button className="back-home-btn" onClick={() => window.location.href = "/home"}>
          Back to Home
        </button>
      </div>
      <div className="main-content">
        <div className="card">
          <ModelViewer modelUrl={selectedModel.url} />
        </div>
        <div className="info">
          <h2>{selectedModel.name}</h2>
          <p>{selectedModel.info}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
