import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogIntro from './components/BlogIntro';
import Intro from './components/Intro';

import Footer from './components/Footer';
import './assets/css/style.css';



function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Intro />
      {/* <BlogIntro /> */}
      <Footer />


    </>
  )
}

export default App;
