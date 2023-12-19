import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Home, About, Experience, Contact } from './pages';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
// import Footer from './components/Footer';

const App = () => {
return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </main>
  );
}

export default App