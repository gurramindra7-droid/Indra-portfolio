import { useState, useEffect, useCallback } from 'react';

export function useTypingAnimation(words, { typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 } = {}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex] || '';

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  const cursor = isBlinking ? '|' : ' ';

  return { text, cursor, isDeleting };
}
