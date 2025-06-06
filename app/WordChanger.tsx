'use client';
import React from 'react'

type WordChangerProps = {
  styles?: string;
}

export const WordChanger: React.FC<WordChangerProps> = ({ styles }: WordChangerProps) => {
  const adjectives =["impactful", "revenue generating", "beautiful"];

  const [adjectiveNum, setAdjectiveNum] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAdjectiveNum(prev => (prev + 1 % adjectives.length))
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={'mt-4 text-2xl mb-40' + styles}>{adjectives[adjectiveNum]}</p>
  )
}
