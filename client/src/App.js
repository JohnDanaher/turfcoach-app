import './App.css';
import EditActivity from './pages/EditActivity';
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/activities/:activityId" element={<EditActivity/>}/>
      </Routes>      
    </div>
  );
}

export default App;
