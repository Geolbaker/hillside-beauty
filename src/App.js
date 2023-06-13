import './App.scss';
import Body from './pages/body.js';
import FourOneFour from './pages/404.js';
import { Routes, Route } from "react-router-dom";

function App() {
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
