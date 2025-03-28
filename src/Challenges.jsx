import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Challenges.css';

const challenges = [
  {
    id: 1,
    title: 'Security Quiz',
    desc: 'Test your knowledge with multiple-choice questions.',
    icon: 'quiz-icon.png',
    path: '/games/security-quiz',
    isNew: false,
    rules: 'Answer 10 questions within 60 seconds each. Correct answers earn 10 points. No penalties for wrong answers.',
  },
  {
    id: 2,
    title: 'Cyber Escape Room',
    desc: 'Solve puzzles to escape a hacker’s trap.',
    icon: 'escape-icon.png',
    path: '/games/escape-room',
    isNew: true,
    rules: 'Solve 5 cybersecurity riddles. Each correct solution unlocks the next step. Finish within 15 minutes.',
  },
  {
    id: 3,
    title: 'Capture The Flag (CTF)',
    desc: 'Find vulnerabilities in code to retrieve flags.',
    icon: 'ctf-icon.png',
    path: '/games/ctf',
    isNew: false,
    rules: 'Analyze code snippets to find 3 hidden flags. Each flag is worth 50 points.',
  },
  {
    id: 4,
    title: 'Attack Simulator',
    desc: 'React to threats in real-time.',
    icon: 'sim-icon.png',
    path: '/games/attack-sim',
    isNew: true,
    rules: 'Choose the correct security action within 10 seconds for 5 scenarios. Earn 20 points per correct choice.',
  },
  {
    id: 5,
    title: 'Hack The Hacker',
    desc: 'Decrypt messages and analyze vulnerabilities.',
    icon: 'hack-icon.png',
    path: '/games/hack-hacker',
    isNew: false,
    rules: 'Decrypt 3 messages and identify 2 vulnerabilities. Each task is worth 30 points.',
  },
];

function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const openPreview = (challenge) => setSelectedChallenge(challenge);
  const closePreview = () => setSelectedChallenge(null);

  return (
    <div className="challenges">
      <h2>Explore Challenges</h2>
      <div className="challenges-grid">
        {challenges.map(challenge => (
          <div key={challenge.id} className="challenge-card">
            {challenge.isNew && <span className="new-label">NEW</span>}
            <img src={`/assets/${challenge.icon}`} alt={challenge.title} className="challenge-icon" />
            <h3>{challenge.title}</h3>
            <p>{challenge.desc}</p>
            <div className="challenge-buttons">
              <button onClick={() => openPreview(challenge)} className="preview-btn">Preview</button>
              <Link to={challenge.path} className="start-btn">Start Challenge</Link>
            </div>
          </div>
        ))}
      </div>

      {selectedChallenge && (
        <div className="preview-modal">
          <div className="preview-content">
            <h3>{selectedChallenge.title}</h3>
            <p><strong>Description:</strong> {selectedChallenge.desc}</p>
            <p><strong>Rules:</strong> {selectedChallenge.rules}</p>
            <button onClick={closePreview} className="close-btn">Close</button>
            <Link to={selectedChallenge.path} className="start-btn">Start Now</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Challenges;