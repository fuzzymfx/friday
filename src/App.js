import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsIntro from './components/BlogIntro';
import Cards from './components/Cards';
import Intro from './components/Intro';
import BlockchainOfferings from './components/BlockchainOfferings';
import Footer from './components/Footer';
import './assets/css/style.css';
import OurCoreValues from './components/OurCoreValues';
import Aos from 'aos';
import React from 'react';


function App() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Dashboard />
      <Intro />
      <div className="container">
        <div className="row text-center justify-content-center my-1" >
          <h1>
            THE WORLD OF <span className='text-secondary'>
              WEB</span> <span className="text-primary">3</span>
          </h1>
        </div>
      </div>
      <CardsIntro />
      <div className="container">
        <div className="row text-center justify-content-center my-1" >
          <h1>
            OUR <span className="text-secondary">TECH</span> <span className="text-primary">EXPERTISE</span>
          </h1>
        </div>
      </div>
      <BlockchainOfferings />
      <Cards />
      <div className="container">
        <div className="row text-center justify-content-center my-1" >
          <h1>
            OUR <span className="text-secondary">CORE</span> <span className="text-primary">VALUES</span>
          </h1>
        </div>
      </div>
      <OurCoreValues />
      <Footer />
    </>
  )
}

export default App;
