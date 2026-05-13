
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './contexts/AudioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { Home } from './pages/Home';
import { Music } from './pages/Music';
import { About } from './pages/About';

function App() {
  return (
    <AudioProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          {/* The AudioPlayer sits outside the routes so it persists across navigation */}
          <AudioPlayer />
        </div>
      </Router>
    </AudioProvider>
  );
}

export default App;