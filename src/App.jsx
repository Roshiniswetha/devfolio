import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Home, About, Experience, Contact } from './pages';
import Skills from './pages/Skills';
import ProjectsPage from './pages/ProjectsPage';
// import './assets/styles.scss'
import Footer from './pages/Footer';

const App = () => {
return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App