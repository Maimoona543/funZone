"use client";

import React, { useEffect, useState } from "react";

type Card = {
  id: number;
  symbol: string;
  flipped: boolean;
  matched: boolean;
};

const cardsData = [
  { id: 1, symbol: "🍎", flipped: false, matched: false },
  { id: 2, symbol: "🍎", flipped: false, matched: false },
  { id: 8, symbol: "🍉", flipped: false, matched: false },
  { id: 9, symbol: "🍓", flipped: false, matched: false },
  { id: 6, symbol: "🍇", flipped: false, matched: false },
  { id: 7, symbol: "🍉", flipped: false, matched: false },
  { id: 20, symbol: "🍑", flipped: false, matched: false },
  { id: 21, symbol: "🍋", flipped: false, matched: false },
  { id: 24, symbol: "🍈", flipped: false, matched: false },
  { id: 25, symbol: "🥥", flipped: false, matched: false },
  { id: 26, symbol: "🥥", flipped: false, matched: false },
  { id: 27, symbol: "🍏", flipped: false, matched: false },
  { id: 28, symbol: "🍏", flipped: false, matched: false },
  { id: 10, symbol: "🍓", flipped: false, matched: false },
  { id: 23, symbol: "🍈", flipped: false, matched: false },
  { id: 29, symbol: "🍐", flipped: false, matched: false },
  { id: 30, symbol: "🍐", flipped: false, matched: false },
  { id: 11, symbol: "🍒", flipped: false, matched: false },
  { id: 12, symbol: "🍒", flipped: false, matched: false },
  { id: 13, symbol: "🍍", flipped: false, matched: false },
  { id: 14, symbol: "🍍", flipped: false, matched: false },
  { id: 15, symbol: "🥭", flipped: false, matched: false },
  { id: 16, symbol: "🥭", flipped: false, matched: false },
  { id: 17, symbol: "🥝", flipped: false, matched: false },
  { id: 18, symbol: "🥝", flipped: false, matched: false },
  { id: 19, symbol: "🍑", flipped: false, matched: false },
  { id: 3, symbol: "🍌", flipped: false, matched: false },
  { id: 4, symbol: "🍌", flipped: false, matched: false },
  { id: 5, symbol: "🍇", flipped: false, matched: false },
  { id: 22, symbol: "🍋", flipped: false, matched: false },
];

function shuffleArray(array: Card[]): Card[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledCards = shuffleArray([...cardsData]);
console.log(shuffledCards);

const MatchingCardsPage = () => {
  const [cards, setCards] = useState<Card[]>(shuffledCards);
  const [firstChoice, setFirstChoice] = useState<Card | null>(null);
  const [secondChoice, setSecondChoice] = useState<Card | null>(null);
  const [firstPlayers , setFirstPlayer] = useState(0)
  const [secondPlayer , setSecondPlayer] = useState(0)
  const [currentPlayer , setCurrentPlayer]  = useState(1)
  const handleCardClick = (card: Card) => {
    if (card.flipped || card.matched) return;

    setCards((prev) =>
      prev.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
    );

    if (!firstChoice) setFirstChoice(card);
    else if (!secondChoice) setSecondChoice(card);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.symbol === secondChoice.symbol) {

       if (currentPlayer === 1){
        setFirstPlayer(prev => prev + 1)
       }

       else setSecondPlayer(prev => prev + 1)
        // matched
        setCards((prev) =>
          prev.map((c) =>
            c.symbol === firstChoice.symbol ? { ...c, matched: true } : c
          )
        );
        setFirstChoice(null);
        setSecondChoice(null);
      } else {
        // not matched 
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstChoice.id || c.id === secondChoice.id
                ? { ...c, flipped: false }
                : c
            )
          );
          setFirstChoice(null);
          setSecondChoice(null);
       
          setCurrentPlayer(prev => prev === 1 ? 2 : 1)
          //flip back after 500ms
        }, 500);
      }
    }
  }, [firstChoice, secondChoice]);



  

  return (
  

   <>

<div className=" min-h-screen flex justify-center items-center  bg-custom">

<div className="flex justify-center items-center flex-col w-[60%]  border border-gray-200 rounded-2xl ">


<div className={`flex justify-center items-center py-[3%] text-5xl font-bold text-white`}>
  Matching Cards
</div>


  <div>
  {firstPlayers}
  {secondPlayer}
</div>


    <div className=" flex items-center justify-center ">
 <div className=" grid grid-cols-5 gap-4 p-3 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-18 h-18 perspective"
          onClick={() => handleCardClick(card)}
        >
          <div
            className={`relative w-full h-full duration-500 transform-style-preserve-3d${
              card.flipped || card.matched ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-2xl text-white backface-hidden">
              ❓
            </div>
            {/* Back */}
            <div className="absolute w-full h-full bg-white rounded-lg flex items-center justify-center text-2xl backface-hidden rotate-y-180">
              {card.symbol}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
</div>

</div>

    </>
   
  );
};

export default MatchingCardsPage;


``