'use client'
import { createSecureServer } from 'http2';
import React, { use, useEffect, useState } from 'react'

const moviePage = () => {
   const [countries, setCountries] = useState<{ code: string; name: string }[]>(
    []
  );
  const [current, setCurrent] = useState<{ code: string; name: string } | null>(null);
  const [feedBack,setFeedBack] = useState("")
  const [scores , setScores] = useState(0)
  const [guess,setGuess] = useState("")
  const [showResult, setShowResult] = useState(false)

useEffect(() => {
  fetch("https://flagcdn.com/en/codes.json")
    .then((res) => res.json())
    .then((data) => {
      const arr = Object.entries(data).map(([code, name]) => ({
        code,
        name:name as string,
      }));

      setCountries(arr); 
       setCurrent(arr[Math.floor(Math.random() * arr.length)]);
    });
}, []);



const handleClick = () => {
  if (!current) return; 

  if (guess.trim().toLowerCase() === current.name.toLowerCase()) {
    setScores((prev) => prev + 1);
    setFeedBack("✅ Correct");
  } else {
    setFeedBack(`❌ Wrong! It was ${current.name}`);
  }
};

const handleNext = () => {
  if (countries.length > 0) {
    setCurrent(countries[Math.floor(Math.random() * countries.length)]);
    setFeedBack("");
    setGuess("");
  }
};
  
  return (
  <div className="flex justify-center items-center flex-col min-h-screen">
    {countries.length === 0 || !current ? (
      <h2 className="text-xl font-semibold">⏳ Loading...</h2>
    ) : 
      (
      <>
        <h1 className="mb-4 text-2xl font-bold">Can You Guess the Country?</h1>
        
        <div className="w-full flex justify-center">
          <img
            src={`https://flagcdn.com/w160/${current.code}.png`}
            alt={current.name}
            className="w-[30%] max-w-[600px] object-cover h-auto"
          />
        </div>

        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess.."
          className="border p-2 mt-4"
        />

        <h3 className="mt-2">{feedBack}</h3>

        <div className="mt-4 space-x-2">
          <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
          <button onClick={handleNext} className="px-4 py-2 bg-gray-500 text-white rounded">
            Skip
          </button>

          <button onClick={() => setShowResult(true)}>Done</button>
        </div>
      </>
    )}
  
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
}

export default moviePage