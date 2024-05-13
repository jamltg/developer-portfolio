import Header from "./main/Header.jsx";
import Footer from "./main/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/developer-portfolio" element={<Home/>}/>
        <Route path="/developer-portfolio/about" element={<About/>}/>
        <Route path="/developer-portfolio/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
