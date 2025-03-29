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
  },
  {
    name: 'Mint',
    url: 'models/mint/uploads_files_5780107_mint_leaves.glb',
    info: 'Mint is a popular herb known for its aromatic leaves and refreshing flavor. It is widely used in culinary dishes, beverages, and herbal teas. Mint is also recognized for its medicinal properties, including digestive benefits and soothing effects on headaches. The plant thrives in various climates and is often grown in gardens or pots.'
  },
  {
    name: 'Snake Plant',
    url: 'models/snake plant/uploads_files_5181256_AZR_Snake_Plant.glb',
    info: 'Snake Plant, also known as Sansevieria or Mother-in-Law’s Tongue, is a hardy houseplant known for its striking upright leaves and air-purifying qualities. It is native to West Africa and thrives in various indoor conditions, making it a popular choice for homes and offices. Snake Plant is low-maintenance, drought-tolerant, and can survive in low light, making it ideal for beginners.'
  },
  {
    name: 'Holly',
    url: 'models/holly/Holly_glTF.glb',
    info: 'Holly is a genus of flowering plants in the family Aquifoliaceae, known for its glossy leaves and bright red berries. It is native to temperate and subtropical regions worldwide, particularly in Europe, Asia, and North America. Holly is often associated with Christmas and winter festivities, as its leaves and berries are used in decorations. The plant is also valued for its ornamental qualities in gardens and landscapes.'
  },
  {
    name: 'Sakura',
    url: 'models/sakura/uploads_files_3829098_SAKURA_2.0.glb',
    info: 'Sakura, or cherry blossom, is a flowering tree native to Japan and other parts of East Asia. It is celebrated for its beautiful pink and white flowers that bloom in spring, symbolizing renewal and the transient nature of life. Sakura holds cultural significance in Japan, where hanami (flower viewing) festivals are held to appreciate the beauty of these blossoms. The tree thrives in temperate climates and is often planted in parks and gardens.'
  },
  {
    name: 'Haworthia',
    url: 'models/haworthia/uploads_files_4053947_wall_plant.glb',
    info: 'Haworthia is a genus of succulent plants native to Southern Africa. Known for their rosette-shaped leaves and unique patterns, these plants are popular among succulent enthusiasts. Haworthia species are low-maintenance and thrive in well-drained soil with indirect sunlight, making them ideal for indoor gardening. They are often used in decorative arrangements and terrariums.'
  },
  {
    name: 'Caladium',
    url: 'models/caladium/uploads_files_5656299_Model_Caladium.glb',
    info: 'Caladium is a genus of flowering plants in the family Araceae, native to tropical regions of the Americas. Known for their large, colorful leaves, caladiums are popular ornamental plants often grown in gardens and as houseplants. They thrive in warm, humid conditions and prefer partial shade. Caladiums are valued for their striking foliage, which comes in various colors and patterns, making them a favorite among gardeners.'
  },
  {
    name: 'Benjamina Ficus',
    url: 'models/benjamina ficus/plant_final1.glb',
    info: 'Benjamina Ficus, commonly known as Weeping Fig, is a popular indoor tree native to Southeast Asia. It is characterized by its slender branches and glossy, oval leaves. This plant is known for its air-purifying qualities and is often used in homes and offices for its aesthetic appeal. Benjamina Ficus prefers bright, indirect light and moderate humidity, making it a favorite among indoor gardeners.'
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
