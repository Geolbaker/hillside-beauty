import './App.scss';
import Body from './pages/body.js';
import FourOneFour from './pages/404.js';
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  window.addEventListener("load", (event) => {
    AOS.init();
    console.log('AOS Loaded Successfully!')
  });

  return (
    <div id="home">

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="*" element={<FourOneFour />}/>
      </Routes>

    </div>
  );
}

export default App;
