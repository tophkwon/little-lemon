import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Specials } from './components/Specials';
// import { Testimonials } from './components/Testimonials';
// import { About } from './components/About';
// import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
        <Nav />
        <Hero />
        <Specials />
        {/* <Testimonials />
        <About />
        <Footer /> */}
    </>
  );
}