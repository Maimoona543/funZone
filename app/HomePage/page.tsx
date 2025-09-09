interface HomeProps {
  titles: string[];
}

export default function Home({ titles }: HomeProps) {
  return (
    <div className="  relative min-h-screen flex justify-center items-center p-4">
      {/* Background div (blurred / low opacity) */}
      <div className="absolute inset-0 flex flex-row justify-center items-center ">
        <div className="flex-1 max-w-[60%]">
          <img
            className="w-full h-auto object-contain rotate-340"
            src="/fun.png"
            alt="Fun Logo"
          />
        </div>

        <div className="max-w-[35%] mr-[-3rem]">
          <img className="w-full h-full" src="/homePage.svg" alt="logo" />
        </div>

        <div className="flex-1 max-w-[80%] pr-10">
          <img
            className="w-full h-auto object-contain rotate-380"
            src="/zone.png"
            alt="Zone Logo"
          />
        </div>
      </div>

      {/* Foreground (text + buttons) */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-[60%] bg-black/40 p-6 rounded-2xl backdrop-blur-sm ">
        <p className="text-gray-200 text-md mb-6">
          Welcome to my mini game zone! Three simple yet fun games for you to
          explore. Whether you want a quick break or just some light
          entertainment, each game is easy to play and designed to give you a
          little dose of fun. Pick one and start playing!
        </p>

        <div className="flex flex-col gap-4 w-full">
          {titles.map((title) => (
            <a
              key={title}
              href={`#${title}`}
              className="px-1 py-1 rounded-lg text-white btn-bg hover:scale-105 transition transform"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
