import React, { useState, useEffect, useMemo } from 'react';

const Name = () => {
  const words = useMemo(() => ["Welcome to my website!", "Chirag Nayak."], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState(" ");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex <= 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex >= currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingInterval = setInterval(type, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <h1 className="h-16 text-4xl md:text-6xl text-white whitespace-nowrap tracking-wider">
      {text}
    </h1>
  );
};

export default Name;
