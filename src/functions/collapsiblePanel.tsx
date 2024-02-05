import { useEffect, useState } from "react";

const durationStart = 1;
const durationEnd = 200; // Equals to the CSS transition duration

export const useCollapsiblePanel = () => {
  const [isDone, setIsOpen] = useState(false);
  const [animationOnStart, setAnimationOnStart] = useState(false);
  const [animationOnEnd, setAnimationOnEnd] = useState(false);

  const handleStart = () => {
    setIsOpen(true);
  };

  const handleFinish = () => {
    setAnimationOnEnd(true);
    setTimeout(() => {
      setIsOpen(false);
      setAnimationOnStart(false);
    }, durationEnd);
  };

  useEffect(() => {
    if (isDone) {
      setAnimationOnEnd(false);
      setTimeout(() => setAnimationOnStart(true), durationStart);
    }
  }, [isDone]);

  const isAnimation = animationOnStart && !animationOnEnd;

  return { handleFinish, handleStart, isAnimation, isOpen: isDone };
};
