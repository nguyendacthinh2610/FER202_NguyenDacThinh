import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Crumbs from './components/Crumbs';
import StudentsGrid from './components/StudentsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBar />
      <Hero />
      <Crumbs />
      <StudentsGrid />
      <Footer />
    </>
  );
}

export default App;
