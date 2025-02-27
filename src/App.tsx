import { useState } from 'react';
import './App.css';
import ModelViewer from './components/ModelViewer';

const models = [
  {
    name: 'Aloe Vera',
    url: '/models/aloevera/Aloe_Vera_Vedant_cleaned_attempt_Model_6.glb',
    info: 'Aloe Vera is a succulent plant species of the genus Aloe. It grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.'
  },
  {
    name: 'Tulsi',
    url: 'models/tulsi/Tulsi_Vedant_intermediate_attempt_Model_2.glb',
    info: 'Tulsi, also known as Holy Basil, is a plant species of the genus Ocimum. It is native to India and Southeast Asia and grows well in tropical and subtropical climates around the world. It is cultivated for its medicinal, religious, and culinary uses, with a rich history in Ayurvedic medicine for promoting health and wellness.'
  },
  // Add more models here
];

function App() {
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

export default App;