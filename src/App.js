import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsIntro from './components/BlogIntro';
import Intro from './components/Intro';

import Footer from './components/Footer';
import './assets/css/style.css';



function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Intro />
      <div className="container">
        <div className="row text-center justify-content-center my-1" >
          <h1>
            THE WORLD OF WEB<span className="text-primary">3</span>
          </h1>
        </div>
      </div>
      <CardsIntro />
      <Footer />


    </>
  )
}

export default App;
