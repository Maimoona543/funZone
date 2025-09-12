'use client'

import  { useEffect, useState } from 'react'

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
     setTimeout(() => {
    handleNext();
  }, 3000);
 
};

const handleNext = () => {
  if (countries.length > 0) {
    setCurrent(countries[Math.floor(Math.random() * countries.length)]);
    setFeedBack("");
    setGuess("");
  }
};
const handleReset = () => {
  setCurrent(countries[Math.floor(Math.random() * countries.length)]);
  setFeedBack("");
  setGuess("");
  setScores(0);
  setShowResult(false);
};
  return (
  <div className="flex justify-center items-center flex-col min-h-screen bg-custom">
    {countries.length === 0 || !current ? (
      <h2 className="text-xl font-semibold">⏳ Loading...</h2>
    ) : 
      (
      <>
          <h1 className="text-style text-2xl lg:text-6xl md:text-5xl sm:text-4xl font-bold mb-4 text-white md:p-4">Can You Guess the Country?</h1>
        <div className="relative movie-bg  w-full md:w-[70%] xl:w-[70%] h-[60vh] flex justify-center items-center flex-col  movie-box">
        <button 
      className="absolute right-4 top-[1rem]  px-4  py-1 bg-red-500 hover:bg-red-400 hover:cursor-pointer text-white rounded"
      onClick={() => setShowResult(true)}
    >
      Abort
    </button>
     <img className="md:w-10 w-7 h-auto absolute right-[5.8rem] top-[0.9rem] md:top-[0.6rem] cursor-pointer" onClick={handleReset} src='/reset.png' alt="reset btn" />
        <div className="w-full flex justify-center pt-4">
          <img
            key={current.code}
            src={`https://flagcdn.com/w160/${current.code}.png`}
            alt={current.name}
            className="md:w-[30%] w-[50%] max-w-[600px] object-cover h-auto"
          />
        </div>

        <input
  type="text"
  placeholder="Guess the Country..."
  value={guess}
  onChange={(e) => setGuess(e.target.value)}
  className="py-1 px-3 md:w-[64%] w-[70%] text-white rounded-xl border border-[#080575] 
             focus:shadow-[0_0_15px_#080575] outline-none focus:ring-0
             md:text-lg mt-5 text-sm"
/>

        <h3 className="mt-3 font-semibold text-white pt-2">{feedBack}</h3>

      <div className="my-5">
          <button
            onClick={handleClick}
            className="px-4 md:py-2 py-1 bg-green-500  hover:bg-green-400 hover:cursor-pointer text-white rounded mr-2  "
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
