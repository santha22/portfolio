import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
// import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Hero from './components/Hero';


function App() {

  return (
    <div className='App overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900
    absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <Router>
    
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <NavBar />
        <div className='pt-16'>

          {/* <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/experience' element={<Experience />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/contact' element={<Contact />} />

          </Routes> */}
          {/* <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact /> */}
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
          {/* <div className='bg-indigo-600 w-full h-screen'></div> */}
        
        </div>
      </Router>
    </div>
  )
}

export default App
