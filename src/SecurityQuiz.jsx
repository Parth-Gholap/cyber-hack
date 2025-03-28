import React, { useState } from 'react';
import './SecurityQuiz.css';

const questions = [
  {
    id: 1,
    question: 'What is phishing?',
    options: [
      { id: 'A', text: 'A type of fish' },
      { id: 'B', text: 'A cyberattack via email' },
      { id: 'C', text: 'A secure protocol' },
      { id: 'D', text: 'A programming language' },
    ],
    correctAnswer: 'B',
    explanation: 'Phishing is a type of cyberattack where attackers send fraudulent emails pretending to be from a legitimate source to trick users into providing sensitive information.',
    securityTip: 'Always verify the sender’s email address and avoid clicking on suspicious links in emails.',
  },
  {
    id: 2,
    question: 'What does a strong password typically include?',
    options: [
      { id: 'A', text: 'Your name and birth year' },
      { id: 'B', text: 'A combination of letters, numbers, and symbols' },
      { id: 'C', text: 'The word "password"' },
      { id: 'D', text: 'Only lowercase letters' },
    ],
    correctAnswer: 'B',
    explanation: 'A strong password should include a mix of uppercase and lowercase letters, numbers, and special symbols to make it harder for attackers to guess or crack.',
    securityTip: 'Use a password manager to generate and store complex passwords securely.',
  },
  {
    id: 3,
    question: 'What is two-factor authentication (2FA)?',
    options: [
      { id: 'A', text: 'A type of firewall' },
      { id: 'B', text: 'A second password' },
      { id: 'C', text: 'An extra layer of security using a second verification method' },
      { id: 'D', text: 'A type of malware' },
    ],
    correctAnswer: 'C',
    explanation: 'Two-factor authentication (2FA) adds an extra layer of security by requiring a second form of verification (e.g., a code sent to your phone) in addition to your password.',
    securityTip: 'Enable 2FA on all your accounts to protect against unauthorized access.',
  },
  {
    id: 4,
    question: 'What should you do if you receive a suspicious email with a link?',
    options: [
      { id: 'A', text: 'Click the link to see what it is' },
      { id: 'B', text: 'Reply to the email asking for more information' },
      { id: 'C', text: 'Delete the email and report it as spam' },
      { id: 'D', text: 'Forward the email to your friends' },
    ],
    correctAnswer: 'C',
    explanation: 'Suspicious emails with links may lead to phishing sites or malware. Deleting the email and reporting it as spam helps protect you and others.',
    securityTip: 'Hover over links (without clicking) to check the URL before interacting with them.',
  },
  {
    id: 5,
    question: 'What is a common sign of a phishing email?',
    options: [
      { id: 'A', text: 'A personalized greeting with your name' },
      { id: 'B', text: 'Urgent language like "Act now or your account will be closed"' },
      { id: 'C', text: 'A secure HTTPS link' },
      { id: 'D', text: 'A professional company logo' },
    ],
    correctAnswer: 'B',
    explanation: 'Phishing emails often use urgent or threatening language to pressure you into acting quickly without thinking, such as "Act now or your account will be closed."',
    securityTip: 'Be cautious of emails that create a sense of urgency; always verify their legitimacy directly through official channels.',
  },
  {
    id: 6,
    question: 'What does a firewall do?',
    options: [
      { id: 'A', text: 'Encrypts your data' },
      { id: 'B', text: 'Monitors and filters network traffic' },
      { id: 'C', text: 'Backs up your files' },
      { id: 'D', text: 'Scans for viruses' },
    ],
    correctAnswer: 'B',
    explanation: 'A firewall monitors and filters incoming and outgoing network traffic based on predefined security rules, helping to protect your device from unauthorized access.',
    securityTip: 'Ensure your firewall is enabled on your device and router to block malicious traffic.',
  },
  {
    id: 7,
    question: 'Why should you avoid using public Wi-Fi for sensitive activities?',
    options: [
      { id: 'A', text: 'It’s usually slow' },
      { id: 'B', text: 'It may not be encrypted, making your data vulnerable' },
      { id: 'C', text: 'It requires a password' },
      { id: 'D', text: 'It’s only for public use' },
    ],
    correctAnswer: 'B',
    explanation: 'Public Wi-Fi networks are often unencrypted, allowing attackers to intercept your data, such as login credentials or personal information.',
    securityTip: 'Use a VPN (Virtual Private Network) when connecting to public Wi-Fi to encrypt your connection.',
  },
];

function SecurityQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleOptionSelect = (optionId) => {
    if (!isAnswered) {
      setSelectedOption(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    setIsAnswered(true);
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: selectedOption,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // For now, we'll just show the final score in the UI
      // You can add navigation to a results page later if needed
    }
  };

  return (
    <div className="quiz-page">
      <main className="quiz-container">
        <div className="quiz-header">
          <a href="/" className="exit-link">
            <span className="arrow-left">←</span> Exit Quiz
          </a>
          <div className="question-counter">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="quiz-card">
          <div className="quiz-card-header">
            <h2>{currentQuestion.question}</h2>
          </div>
          <div className="quiz-card-content">
            <div className="options-grid">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`option-item ${
                    selectedOption === option.id ? 'selected' : ''
                  } ${
                    isAnswered
                      ? option.id === currentQuestion.correctAnswer
                        ? 'correct'
                        : selectedOption === option.id
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                >
                  <div className="option-label">{option.id}</div>
                  <div className="option-text">{option.text}</div>
                  {isAnswered && option.id === currentQuestion.correctAnswer && (
                    <span className="icon correct-icon">✔</span>
                  )}
                  {isAnswered && selectedOption === option.id && option.id !== currentQuestion.correctAnswer && (
                    <span className="icon incorrect-icon">✘</span>
                  )}
                </div>
              ))}
            </div>

            {isAnswered && (
              <div className="feedback-section">
                <div className="explanation">
                  <h4>Explanation:</h4>
                  <p>{currentQuestion.explanation}</p>
                </div>
                <div className="security-tip">
                  <h4>Security Tip:</h4>
                  <p>🛡️ {currentQuestion.securityTip}</p>
                </div>
              </div>
            )}
          </div>
          <div className="quiz-card-footer">
            {currentQuestionIndex === questions.length - 1 && isAnswered ? (
              <div className="final-score">
                <h3>Quiz Completed!</h3>
                <p>Your Score: {score}/{questions.length}</p>
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setSelectedOption(null);
                    setIsAnswered(false);
                    setScore(0);
                    setUserAnswers({});
                  }}
                  className="restart-btn"
                >
                  Restart Quiz
                </button>
              </div>
            ) : !isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="submit-btn"
              >
                Submit Answer
              </button>
            ) : (
              <button onClick={handleNextQuestion} className="next-btn">
                Next Question →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SecurityQuiz;