import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layouts/Container";
import NavBar from "./components/layouts/NavBar";
import Rodape from "./components/layouts/Rodape";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
        <NavBar/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/Company" element={<Company/>}></Route>
            <Route path="/newproject" element={<NewProject/>}></Route>
            <Route path="/Projects" element={<Projects/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
      </Container>
      <Rodape/>
    </Router>
  );
}

export default App;
