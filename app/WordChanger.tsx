'use client';
import React from 'react'

export type WordChangerProps = {
  styles?: string;
}

export const WordChanger: React.FC<WordChangerProps> = ({ styles }: WordChangerProps) => {
  const adjectives =["impactful", "revenue generating", "beautiful"];

  const [adjectiveNum, setAdjectiveNum] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setAdjectiveNum(prev => (prev + 1) % adjectives.length)
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={`mt-4 pb-2 text-6xl ${styles} bg-clip-text text-transparent font-bold transition-opacity duration-300 ${isVisible ? `opacity-100` : `opacity-0`}`}>{adjectives[adjectiveNum]}</p>
  )
}
