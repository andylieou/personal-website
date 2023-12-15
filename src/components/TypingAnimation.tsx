// TypingAnimation.js
import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const typingText = 'Hi, I\'m Andy Lieou.';

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(typingText.slice(0, index));
      index++;

      if (index > typingText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="typing-text">
      {text}<span className="cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
