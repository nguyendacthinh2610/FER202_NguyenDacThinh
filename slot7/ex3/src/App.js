import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Grid />
      <Footer />
    </>
  );
}

export default App;
