import React, { useState } from 'react';
import './Resources.css';

const resources = {
  beginner: [
    { title: 'What is Phishing?', type: 'Article', content: 'Phishing is a cyberattack that uses fraudulent emails to trick users...' },
    { title: 'Password Basics', type: 'Video', link: 'https://example.com/password-basics' },
  ],
  intermediate: [
    { title: 'Understanding Firewalls', type: 'Article', content: 'Firewalls protect networks by filtering traffic...' },
  ],
  advanced: [
    { title: 'Reverse Engineering 101', type: 'Video', link: 'https://example.com/reverse-engineering' },
  ],
};

function Resources() {
  const [search, setSearch] = useState('');

  const filteredResources = (level) =>
    resources[level].filter(r =>
      r.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="resources">
      <h2>Security Resources</h2>
      <input
        type="text"
        placeholder="Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <section>
        <h3>Beginner</h3>
        {filteredResources('beginner').map((r, idx) => (
          <div key={idx} className="resource-card">
            <h4>{r.title}</h4>
            <p>{r.type === 'Article' ? r.content : <a href={r.link}>Watch Video</a>}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Intermediate</h3>
        {filteredResources('intermediate').map((r, idx) => (
          <div key={idx} className="resource-card">
            <h4>{r.title}</h4>
            <p>{r.type === 'Article' ? r.content : <a href={r.link}>Watch Video</a>}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Advanced</h3>
        {filteredResources('advanced').map((r, idx) => (
          <div key={idx} className="resource-card">
            <h4>{r.title}</h4>
            <p>{r.type === 'Article' ? r.content : <a href={r.link}>Watch Video</a>}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Resources;