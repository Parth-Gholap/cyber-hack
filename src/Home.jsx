import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const challenges = [
  {
    id: 1,
    title: 'Security Quiz',
    desc: 'Test your knowledge about social engineering attacks and threats.',
    icon: 'sx.png', // Icon file name in public/
    path: '/games/security-quiz',
    isNew: false,
  },
  {
    id: 2,
    title: 'Cyber Escape Room',
    desc: 'Solve a series of cybersecurity puzzles to escape from a virtual hacker trap.',
    icon: 'escape-room-icon.png', // Icon file name in public/
    path: '/games/escape-room',
    isNew: true,
  },
  {
    id: 3,
    title: 'Capture The Flag',
    desc: 'Complete hacking-related tasks to find hidden flags and earn points.',
    icon: 'escape-room-icon.png', // Icon file name in public/
    path: '/games/ctf',
    isNew: true,
  },
  {
    id: 4,
    title: 'Attack Simulator',
    desc: 'React to threats in real-time.',
    icon: 'attack-sim-icon.png', // Icon file name in public/
    path: '/games/attack-sim',
    isNew: false,
  },
  {
    id: 5,
    title: 'Hack The Hacker',
    desc: 'Decrypt and analyze.',
    icon: 'hack-hacker-icon.png', // Icon file name in public/
    path: '/games/hack-hacker',
    isNew: false,
  },
];

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Cybersecurity Awareness Platform</h1>
        <p>
          Test your knowledge, develop skills, and learn to protect yourself from cyber threats through interactive challenges and simulations.
        </p>
      </div>
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            {challenge.isNew && <span className="new-label">NEW</span>}
            <img src={`/${challenge.icon}`} alt={challenge.title} className="challenge-icon" />
            <h3>{challenge.title}</h3>
            <p>{challenge.desc}</p>
            <Link to={challenge.path} className="start-btn">
              Start Challenge
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;