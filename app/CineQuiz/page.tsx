'use client'
import React, { useState, useEffect } from "react";

const MoviePage = () => {
const [clues,setClues] = useState([
  {"title": "The Lion King", "clue": ["🦁", "👑"]},
  {"title": "Forrest Gump", "clue": ["🏃‍♂️", "🍫", "🪑"]},
  {"title": "Titanic", "clue": ["🚢", "❄️", "💔"]},
  {"title": "Finding Nemo", "clue": ["🐠", "🔎"]},
  {"title": "The Matrix", "clue": ["💊", "🕶️", "🖥️"]},
  {"title": "Jurassic Park", "clue": ["🦖", "🌴", "🚙"]},
  {"title": "Frozen", "clue": ["❄️", "👭", "⛄"]},
  {"title": "Spider-Man", "clue": ["🕷️", "🧑", "🕸️"]},
  {"title": "The Dark Knight", "clue": ["🦇", "🤵", "🤡"]},
  {"title": "Avengers: Endgame", "clue": ["🦸‍♂️", "🦸‍♀️", "💥"]},
  {"title": "Black Panther", "clue": ["🐆", "👑", "🌍"]},
  {"title": "Iron Man", "clue": ["🤖", "❤️", "🦾"]},
  {"title": "Doctor Strange", "clue": ["🧙‍♂️", "🔮", "⏳"]},
  {"title": "Guardians of the Galaxy", "clue": ["🚀", "🌌", "🌱"]},
  {"title": "Shrek", "clue": ["👹", "🐴", "👸"]},
  {"title": "Toy Story", "clue": ["🤠", "🧸", "🚀"]},
  {"title": "Cars", "clue": ["🏎️", "⚡", "🛣️"]},
  {"title": "Inside Out", "clue": ["😊", "😢", "😡", "😱", "🤢"]},
  {"title": "Up", "clue": ["🎈", "🏠", "👴"]},
  {"title": "Coco", "clue": ["🎸", "💀", "🌺"]},
  {"title": "Moana", "clue": ["🌊", "🚤", "🌺"]},
  {"title": "Encanto", "clue": ["🏠", "🌸", "🎶"]},
  {"title": "Aladdin", "clue": ["🧞", "🕌", "🧞‍♀️"]},
  {"title": "Mulan", "clue": ["⚔️", "👩", "🐉"]},
  {"title": "Beauty and the Beast", "clue": ["🌹", "👸", "👹"]},
  {"title": "The Little Mermaid", "clue": ["🧜‍♀️", "🌊", "🐠"]},
  {"title": "Cinderella", "clue": ["👠", "🎃", "👸"]},
  {"title": "Snow White", "clue": ["🍎", "👸", "👑"]},
  {"title": "Sleeping Beauty", "clue": ["😴", "👸", "🌹"]},
  {"title": "Tangled", "clue": ["👸", "🌸", "✂️"]},
  {"title": "Brave", "clue": ["🏹", "👩‍🦰", "🐻"]},
  {"title": "Ratatouille", "clue": ["🐭", "👨‍🍳", "🍝"]},
  {"title": "Zootopia", "clue": ["🦊", "🐰", "🚓"]},
  {"title": "Kung Fu Panda", "clue": ["🐼", "🥋", "🐉"]},
  {"title": "Madagascar", "clue": ["🦁", "🦓", "🦒"]},
  {"title": "Ice Age", "clue": ["🦣", "❄️", "🐅"]},
  {"title": "Monsters, Inc.", "clue": ["👹", "👁️", "🚪"]},
  {"title": "Despicable Me", "clue": ["😈", "🟡", "👓"]},
  {"title": "Minions", "clue": ["🟡", "👖", "😂"]},
  {"title": "Harry Potter", "clue": ["⚡", "🧙‍♂️", "🦉"]},
  {"title": "Fantastic Beasts", "clue": ["🧳", "🦄", "🦖"]},
  {"title": "The Hunger Games", "clue": ["🏹", "🔥", "🐦"]},
  {"title": "Twilight", "clue": ["🧛‍♂️", "🐺", "❤️"]},
  {"title": "The Fault in Our Stars", "clue": ["💙", "🌌", "😭"]},
  {"title": "La La Land", "clue": ["🎶", "💃", "🌆"]},
  {"title": "Frozen II", "clue": ["❄️", "🍂", "🌊"]},
  {"title": "The Incredibles", "clue": ["🦸‍♂️", "🦸‍♀️", "👨‍👩‍👧‍👦"]},
  {"title": "Big Hero 6", "clue": ["🤖", "👦", "❤️"]},
  {"title": "Soul", "clue": ["🎹", "👻", "🌌"]},
  {"title": "Turning Red", "clue": ["🐼", "🔴", "👧"]},
  {"title": "Lightyear", "clue": ["🚀", "👨‍🚀", "🌌"]},
  {"title": "Elemental", "clue": ["🔥", "💧", "🌬️", "🌱"]},
  {"title": "Raya and the Last Dragon", "clue": ["🐉", "⚔️", "🌏"]},
  {"title": "Frozen Fever", "clue": ["❄️", "🎂", "👭"]},
  {"title": "WALL·E", "clue": ["🤖", "🌍", "❤️"]},
  {"title": "The Good Dinosaur", "clue": ["🦕", "👦", "🌾"]},
  {"title": "Onward", "clue": ["🧝‍♂️", "🚐", "✨"]},
  {"title": "Luca", "clue": ["🧒", "🐟", "🌊"]},
  {"title": "Sing", "clue": ["🎤", "🐷", "🐵"]},
  {"title": "Happy Feet", "clue": ["🐧", "💃", "🎶"]},
  {"title": "The Emoji Movie", "clue": ["😀", "📱", "😂"]}

])
  const [current, setCurrent] = useState<{ title: string; clue: string[] } | null>(null);
  const [feedBack, setFeedBack] = useState("");
  const [scores, setScores] = useState(0);
  const [guess, setGuess] = useState("");
  const [showResult, setShowResult] = useState(false);

  // pick random movie on mount
  useEffect(() => {
    setCurrent(clues[Math.floor(Math.random() * clues.length)]);
  }, []);

  const handleClick = () => {
    if (!current) return;

    if (guess.trim().toLowerCase() === current.title.toLowerCase()) {
      setScores((prev) => prev + 1);
      setFeedBack("✅ Correct!");
    } else {
      setFeedBack(`❌ Wrong! It was ${current.title}`);
    }


    // Submit → feedback shows → auto move after 10s.
      setTimeout(() => {
    handleNext();
  }, 3000);
  };

  const handleNext = () => {
    if (clues.length > 0) {
      setCurrent(clues[Math.floor(Math.random() * clues.length)]);
      setGuess("");
      setFeedBack("");
    }
  };
const handleReset = () => {
  setCurrent(clues[Math.floor(Math.random() * clues.length)]);
  setFeedBack("");
  setGuess("");
  setScores(0);
  setShowResult(false);
};
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-6 bg-custom text-center ">
  <h1 className="text-2xl lg:text-6xl md:text-5xl font-bold mb-4 text-white md:p-4">🎬 Can you guess the movie?</h1>

  <div className=" relative movie-bg  w-full md:w-[70%] xl:w-[70%] h-[60vh] flex justify-center items-center flex-col  movie-box">
    {/* Abort button in top-right corner of movie-bg */}
    <button 
      className="absolute right-4 top-4 px-3 py-1 bg-red-500 hover:bg-red-400 hover:cursor-pointer text-white rounded"
      onClick={() => setShowResult(true)}
    >
      Abort
    </button>
         <img className="md:w-10 w-8 h-auto absolute right-[5.5rem] top-[0.9rem] md:top-[0.6rem] cursor-pointer" onClick={handleReset} src='/reset.png' alt="reset btn" />


    {current && (
      <div className="mb-4  w-full flex flex-col items-center">
        <div className="text-4xl md:text-6xl mb-4">{current.clue.join(" ")}</div>

<input
  type="text"
  placeholder="Guess the movie..."
  value={guess}
  onChange={(e) => setGuess(e.target.value)}
  className="py-1 px-3 w-[74%] text-white rounded-xl border border-[#080575] 
             focus:shadow-[0_0_15px_#080575] outline-none focus:ring-0
             md:text-xl text-sm"
/>
        <div className="mt-5">
          <button
            onClick={handleClick}
            className="px-4 md:py-2 py-1 bg-green-500  hover:bg-green-400 hover:cursor-pointer text-white rounded mr-2 "
          >
            Submit
          </button>
          <button
            onClick={handleNext}
            className="px-4 md:py-2 py-1 bg-blue-500  hover:bg-blue-400 hover:cursor-pointer text-white rounded"
          >
            Skip
          </button>
        </div>

        {feedBack && <p className="mt-3 font-semibold text-white pt-2">{feedBack}</p>}
      </div>
    )}
  </div>

  {showResult && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center animate-scaleUp">
        <h2 className="text-2xl font-bold mb-2">🎉 Game Over!</h2>
        <p className="text-lg">Your total score: {scores}</p>
        <button
          onClick={() => setShowResult(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default MoviePage;






