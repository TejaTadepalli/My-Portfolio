import './App.css';
//import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    //<Routes>
    //  <Route exact path="/" element={<Navbar /> <Hero />}/>
    //  <Route path="/profile" element={<h1>Profile Route</h1>}/>
    //  <Route path="/projects" element={<h1>Projects Route</h1>}/>
    //  <Route path="*" element={<h1>Not Found!</h1>}/>
    //  </Routes>
    <div className={"flex flex-col gap-16"}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default App;
