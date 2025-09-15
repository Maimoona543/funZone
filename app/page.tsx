
import HomePage from "./HomePage/HomePage";
import GameCard from "./components/gameCard";

export default function Home() {
  const games = [
    { id: "1", title: "MemoryMatch", description: "Sharpen your focus and test your recall skills! Flip cards, find pairs, and challenge friends in this classic memory game with a fun twist. Perfect for boosting concentration while having endless fun." },
    { id: "2", title: "CineQuiz", description: "Think you’re a true movie buff? Put your film knowledge to the test with CineQuiz! Guess movies, actors, and iconic scenes — from timeless classics to the latest blockbusters. Lights, camera, challenge!" },
    { id: "3", title: "WorldExplorer", description: "Travel the globe without leaving your seat! WorldExplorer tests your geography knowledge with exciting country flags, landmarks, and cultural trivia. Discover the world, one question at a time." },
  ];

  return (
    <>
      <div className="min-h-screen  bg-[linear-gradient(135deg,rgba(0,0,0,1)_0%,rgba(8,4,41,1)_37%,rgba(4,4,48,0.9)_93%)]  bg-cover">
        {/* pass game titles to homepage */}
        <HomePage titles={games.map((g) => g.title)} />

        {/* game cards with IDs so buttons can scroll here */}
        <div className="sm:w-4/5  w-[95%] mx-auto flex flex-col justify-center gap-6 py-10">
          {games.map((game) => (
            <div key={game.id} id={game.title}>
              
                <GameCard
                  title={game.title}
                  id={game.id}
                  description={game.description}
                />
            
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

