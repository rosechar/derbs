import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Join from './pages/Join';
import {  Route, Routes, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    
    
      <div className="App">
        <Routes>
      <Route path="/" exact element={ <HomePage/> } />
      <Route path="about" element={ <AboutPage/> } />
      <Route path="join" element={ <Join/> } />
      </Routes>
      </div>
    

  );
}

export default App;
