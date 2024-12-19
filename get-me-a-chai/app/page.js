import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center text-white h-[64vh]">
        <div className="flex relative items-center justify-center font-bold text-5xl">
          Buy me a chai
          <span>
            <img
              className="absolute bottom-[-5px]"
              src="/tea.gif"
              width={88}
              alt=""
            />
          </span>
        </div>
        <p className="w-1/2 text-lg text-center">
          Welcome to our crowdfunding platform, designed specifically for
          creators! Whether you're an artist, musician, writer, or any type of
          creative, our platform allows you to get funded directly by your fans
          and followers. 
        </p>

        <div>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>

      <div className="text-white container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center">
          Your Fans can buy you a Chai
        </h2>
        <div className="flex gap-5 justify-around my-3">
          <div className="item space-y-3 flex flex-col items-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/man.gif"
              alt=""
            />
            <p className="font-bold">Fund yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold">Fund yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/group.gif"
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
