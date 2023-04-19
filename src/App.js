import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Specials } from './components/Specials';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <>
        <Nav />
        <Hero />
        <Specials />
        <Testimonials />
        <Footer />
    </>
  );
}