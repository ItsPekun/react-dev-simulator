import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Tareas from "./components/pages/Tareas";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
