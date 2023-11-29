type LightCardProps = {
  location: string;
  title: string;
  isCollected: boolean;
  imageUrl: string;
  youtubeUrl: string;
  onButtonClick: () => void;
};

export default function LightCard({ location, title, isCollected, imageUrl, youtubeUrl, onButtonClick }: LightCardProps) {
  return (
    <div className="flex flex-col dark:shadow-xl shadow-xl rgba(153,153,153,1)] gap-1.5 bg-white dark:bg-neutral-700 p-4 transition-all duration-300 rounded-xl max-w-[16rem] select-none cursor-default">
      <div className="flex justify-center">
        <div className="w-[14rem] h-[8rem] mb-2">
          <div className="absolute transition-all duration-300 bg-black/80 opacity-0 hover:opacity-100 rounded-lg z-10 w-[14rem] h-[8rem] cursor-pointer" onClick={() => window.open(youtubeUrl, "_blank", "noreferrer")}>
            <div className="flex flex-col justify-center items-center h-full gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" height="32" viewBox="0 -960 960 960" width="32"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg>
              <span className="text-white text-sm text-center transition-all duration-300">View on YouTube</span>
            </div>
          </div>
          <img className="object-cover w-full h-full rounded-lg" src={imageUrl} alt={title} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-black/40 dark:text-white/40 uppercase font-semibold text-xs transition-all duration-300">{location}</span>
        <h1 className="text-4xl text-black dark:text-white font-semibold transition-all duration-300 min-h-[6.5rem] break-words whitespace-pre-wrap max-h-[6.5rem]">{title.length <= 12 ? title.replace(" ", "\n") : title}</h1>
        <button className="self-start text-sm justify-center text-blue-500 dark:text-[#4d90ff] transition-all duration-300 bg-neutral-200 dark:bg-neutral-600 px-3 py-1 rounded-full font-semibold" onClick={onButtonClick}>{isCollected ? "Remove from Collected" : "Mark as Collected"}</button>
      </div>
    </div>
  );
}
