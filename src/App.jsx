import {
  BrowserRouter as Router
} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Hero from './components/Hero';


function App() {

  return (
    <div className='App overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900
      h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <Router>
    
        <NavBar />
        <div className='pt-16 ml-5'>

          
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />

        </div>
      </Router>
    </div>
  )
}

export default App
