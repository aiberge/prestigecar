import Header from './components/Header';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="fleet">
          <Fleet />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Map />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;