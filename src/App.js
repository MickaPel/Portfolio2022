import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Technologies from './Components/Technologies/Technologies';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div id="Header">
        <Header />
      </div>
      <div className="Hero">
        <Hero />
      </div>
      <div className="Projects" id="Portfolio">
        <Projects />
      </div>
      <div className="Technologies" id="Technologies">
        <Technologies />
      </div>
      <div className="Contact" id="Contact">
        <Contact />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
