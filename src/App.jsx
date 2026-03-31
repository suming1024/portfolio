import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact' 

function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />  
        </Routes>
      </HashRouter>      
    </>
  )
}

export default App
