// TypingAnimation.js
import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

interface TypingAnimationProps {
  write: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ write }) => {
  const [text, setText] = useState('');
  const typingText = write;

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
  }, [typingText]);

  return (
    <div className="typing-text">
      {text}<span className="cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
