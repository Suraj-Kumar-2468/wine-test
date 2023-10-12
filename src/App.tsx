import React from 'react';
import FlavanoidsTable from './components/FlavanoidsTable'; // Import your components
import GammaTable from './components/GammaTable'; // Import your components
import { WineData } from './data/WineData';
import "./App.css"
const App: React.FC = () => {
  return (
    <div>
      <FlavanoidsTable data={WineData} />
      <GammaTable data={WineData} />
    </div>
  );
};

export default App;
