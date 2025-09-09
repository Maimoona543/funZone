import Link from "next/link";
import HomePage from "./HomePage/page";
import GameCard from "./components/gameCard";

export default function Home() {
  const games = [
    { id: "1", title: "MemoryMatch", description: "" },
    { id: "2", title: "CineQuiz", description: "" },
    { id: "3", title: "WorldExplorer", description: "" },
  ];

  return (
    <>
      <div className="min-h-screen  bg-[linear-gradient(135deg,rgba(0,0,0,1)_0%,rgba(8,4,41,1)_37%,rgba(4,4,48,0.9)_93%)]  bg-cover">
        {/* pass game titles to homepage */}
        <HomePage titles={games.map((g) => g.title)} />

        {/* game cards with IDs so buttons can scroll here */}
        <div className="w-4/5 mx-auto flex flex-col justify-center gap-6 py-10">
          {games.map((game) => (
            <div key={game.id} id={game.title}>
              <Link href={`/${game.title}`}>
                <GameCard
                  title={game.title}
                  id={game.id}
                  description={game.description}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
