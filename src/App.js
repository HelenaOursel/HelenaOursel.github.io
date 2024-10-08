import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react'; // Add this import
import NavBar from './Components/NavBar';
import Projets from './Components/Projets';
import Profile from './Components/Profile'; // New component to create
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Components/Contact';
import './App.scss';

function App() {
  useEffect(() => {
    document.title = "Héléna Oursel CV"; // Set your desired title here
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/profil" />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;