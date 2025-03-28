import React, { useState, useEffect } from 'react';
import './CyberEscapeRoom.css';

const puzzles = [
  { question: 'Decode this: "P@ssw0rd"', answer: 'Password' },
  { question: 'Spot the phishing clue: "Urgent: Update your bank details now!"', answer: 'Urgent' },
  // Add more puzzles
];

function CyberEscapeRoom() {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !completed) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      alert('Time’s up!');
    }
  }, [timeLeft, completed]);

  const handleSubmit = () => {
    if (input.toLowerCase() === puzzles[currentPuzzle].answer.toLowerCase()) {
      const next = currentPuzzle + 1;
      if (next < puzzles.length) {
        setCurrentPuzzle(next);
        setInput('');
      } else {
        setCompleted(true);
      }
    } else {
      alert('Wrong answer! Try again.');
    }
  };

  return (
    <div className="escape-room">
      <h2>Cyber Escape Room</h2>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      {completed ? (
        <div className="result">
          <h3>You Escaped!</h3>
          <p>Time Remaining: {timeLeft} seconds</p>
        </div>
      ) : (
        <div className="puzzle">
          <p>{puzzles[currentPuzzle].question}</p>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your answer" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default CyberEscapeRoom;