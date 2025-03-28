import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Challenges from "./Challenges";
import Leaderboard from "./Leaderboard";
import About from "./About";
import Resources from "./Resources";
import SecurityQuiz from "./SecurityQuiz";
import CyberEscapeRoom from "./CyberEscapeRoom";
import CaptureTheFlag from "./CaptureTheFlag";
import AttackSimulator from "./AttackSimulator";
import HackTheHacker from "./HackTheHacker";
import HackTheHackerComplete from "./HackTheHackerComplete"; // Uncommented the import
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            CyberSec
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/challenges">Challenges</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/games/security-quiz" element={<SecurityQuiz />} />
          <Route path="/games/escape-room" element={<CyberEscapeRoom />} />
          <Route path="/games/ctf" element={<CaptureTheFlag />} />
          <Route path="/games/attack-sim" element={<AttackSimulator />} />
          <Route path="/games/hack-hacker" element={<HackTheHacker />} />
          <Route path="/games/hack-hacker/complete" element={<HackTheHackerComplete />} /> {/* Added route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;