import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Automotive } from './pages/services/Automotive';
import { Industrial } from './pages/services/Industrial';
import { Commercial } from './pages/services/Commercial';
import { Marine } from './pages/services/Marine';
import { SurfaceCleaning } from './pages/services/SurfaceCleaning';
import { TruckChassis } from './pages/services/TruckChassis';
import { Projects } from './pages/Projects';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/automotive" element={<Automotive />} />
            <Route path="/services/industrial" element={<Industrial />} />
            <Route path="/services/commercial" element={<Commercial />} />
            <Route path="/services/marine" element={<Marine />} />
            <Route path="/services/surface-cleaning" element={<SurfaceCleaning />} />
            <Route path="/services/truck-chassis" element={<TruckChassis />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
