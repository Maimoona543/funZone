"use client";

import React, { useEffect, useState } from "react";

type Card = {
  id: number;
  symbol: string;
  flipped: boolean;
  matched: boolean;
  name:string;
};

const cardsData = [
 { id: 1, name: "apple", symbol: "🍎", flipped: false, matched: false },
  { id: 2, name: "apple", symbol: "🍎", flipped: false, matched: false },
  { id: 8, name: "watermelon", symbol: "🍉", flipped: false, matched: false },
  { id: 9, name: "strawberry", symbol: "🍓", flipped: false, matched: false },
  { id: 6, name: "grape", symbol: "🍇", flipped: false, matched: false },
  { id: 7, name: "watermelon", symbol: "🍉", flipped: false, matched: false },
  { id: 20, name: "peach", symbol: "🍑", flipped: false, matched: false },
  { id: 21, name: "lemon", symbol: "🍋", flipped: false, matched: false },
  { id: 24, name: "melon", symbol: "🍈", flipped: false, matched: false },
  { id: 25, name: "coconut", symbol: "🥥", flipped: false, matched: false },
  { id: 26, name: "coconut", symbol: "🥥", flipped: false, matched: false },
  { id: 27, name: "greenApple", symbol: "🍏", flipped: false, matched: false },
  { id: 28, name: "greenApple", symbol: "🍏", flipped: false, matched: false },
  { id: 10, name: "strawberry", symbol: "🍓", flipped: false, matched: false },
  { id: 23, name: "melon", symbol: "🍈", flipped: false, matched: false },
  { id: 29, name: "pear", symbol: "🍐", flipped: false, matched: false },
  { id: 30, name: "pear", symbol: "🍐", flipped: false, matched: false },
  { id: 11, name: "cherry", symbol: "🍒", flipped: false, matched: false },
  { id: 12, name: "cherry", symbol: "🍒", flipped: false, matched: false },
  { id: 13, name: "pineapple", symbol: "🍍", flipped: false, matched: false },
  { id: 14, name: "pineapple", symbol: "🍍", flipped: false, matched: false },
  { id: 15, name: "mango", symbol: "🥭", flipped: false, matched: false },
  { id: 16, name: "mango", symbol: "🥭", flipped: false, matched: false },
  { id: 17, name: "kiwi", symbol: "🥝", flipped: false, matched: false },
  { id: 18, name: "kiwi", symbol: "🥝", flipped: false, matched: false },
  { id: 19, name: "peach", symbol: "🍑", flipped: false, matched: false },
  { id: 3, name: "banana", symbol: "🍌", flipped: false, matched: false },
  { id: 4, name: "banana", symbol: "🍌", flipped: false, matched: false },
  { id: 5, name: "grape", symbol: "🍇", flipped: false, matched: false },
  { id: 22, name: "lemon", symbol: "🍋", flipped: false, matched: false },
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
  const [disabled, setDisabled] = useState(false);
  const [result , setResult] = useState(false)
  const handleCardClick = (card: Card) => {

     if (disabled) return; // lock board
  if (card.flipped || card.matched) return;

    setCards((prev) =>
      prev.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
    );

    if (!firstChoice) setFirstChoice(card);
    else if (!secondChoice) setSecondChoice(card);
  };
const resetTurn = () => {
  setFirstChoice(null);
  setSecondChoice(null);
  setDisabled(false);
};

useEffect(() => {
  if (firstChoice && secondChoice) {
    setDisabled(true);

    if (firstChoice.name === secondChoice.name) {
      if (currentPlayer === 1) {
        setFirstPlayer(prev => prev + 1);
      } else {
        setSecondPlayer(prev => prev + 1);
      }

      setCards((prev) =>
        prev.map((c) =>
          c.name === firstChoice.name ? { ...c, matched: true } : c
        )
      );

      resetTurn(); // ✅ unlocks after match
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === firstChoice.id || c.id === secondChoice.id
              ? { ...c, flipped: false }
              : c
          )
        );
        setCurrentPlayer(prev => (prev === 1 ? 2 : 1));
        resetTurn(); // ✅ unlocks after mismatch
      }, 900);
    }
  }

  if (firstPlayers + secondPlayer === cardsData.length / 2) {
    setResult(true);
  }
}, [firstChoice, secondChoice, firstPlayers, secondPlayer]);



const handleResult = () => {
setResult(!result)
}
  

const handleReset = () => {
  setCards(shuffleArray([...cardsData])); 
  setFirstPlayer(0);
  setSecondPlayer(0);
  setCurrentPlayer(1);
  setResult(false);
  setFirstChoice(null);
  setSecondChoice(null);
};
  return (
  

   <>

<div className="min-h-screen p-[3%] flex justify-center items-center bg-custom flex-col ">


<div className={`flex  justify-center items-center  lg:text-7xl md:text-6xl  text-4xl  font-bold  text-white white-shadow pb-[3%]`}>
  Matching Cards
</div>
<div className="flex justify-center items-center flex-col relative mb-5 h-[80vh] md:h-[80vh] md:w-[80%] w-[97%]  lg:w-[80%] border  movie-bg  movie-box border-gray-700 rounded-xl ">

   <button 
className="absolute right-4 bottom-4 md:top-[1.3rem] md:bottom-auto px-3 py-1 bg-red-500 text-white rounded"
      onClick={() => setResult(true)}
    >
      Abort
    </button>

  <img className="md:w-9 w-[36px] h-auto absolute md:top-[1.3rem] xl:top-[1.2rem] md:bottom-auto bottom-4 right-21 cursor-pointer" onClick={handleReset} src='/reset.png' alt="reset btn" />

  <div className=" text-white font-extrabold  mt-9">
    <div className="absolute left-[3%] top-[5%]">
      <p className="md:text-2xl text-xl pb-2 underline decoration-1">Scores</p>
<p className={` md:text-lg text-sm${currentPlayer === 1 ? "font-bold text-green-400" : ""}`}>
  Player 1: {firstPlayers}
</p>
<p className={` md:text-lg text-sm${currentPlayer === 2 ? "font-bold text-green-400" : ""}`}>
  Player 2: {secondPlayer}
</p>
  </div>

</div>


    <div className=" flex items-center justify-center md:py-[4%] mt-[6%] mb-[6%]">
 <div className=" grid grid-cols-5 gap-2 lg:gap-4  ">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`w-11 h-11 md:w-16 md:h-16  lg:w-20 lg:h-20   rounded-md lg:rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110 ${card.flipped ? "" : "hover:card"}`}
          onClick={() => handleCardClick(card)}
        >
          <div
            className={`relative w-full cursor-pointer h-full duration-500 transform-style-preserve-3d ${
              card.flipped || card.matched ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full cursor-pointer h-full bg-gray-800 rounded-lg flex items-center justify-center text-2xl text-white backface-hidden">
              ❓
            </div>
            {/* Back */}
            <div className="absolute w-full cursor-pointer h-full bg-white rounded-lg flex items-center justify-center text-2xl backface-hidden rotate-y-180">
              {card.symbol}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
</div>

  {result &&  (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white bg-shadow p-6 rounded-2xl shadow-lg text-center animate-scaleUp">
            <h2 className="text-2xl font-bold mb-2">🎉 Game Over!</h2>
{firstPlayers === secondPlayer
  ? `It's a draw! (${firstPlayers} - ${secondPlayer})`
  : firstPlayers > secondPlayer
    ? `Player 1 has won `
    : `Player 2 has won `}
            <p className="text-lg"></p>
            <button
              onClick={() => setResult(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

</div>

    </>
   
  );
};

export default MatchingCardsPage;
