type LightCardProps = {
    location: string
    title: string
    isCollected: boolean
    imageUrl: string
    youtubeUrl: string
    onButtonClick: () => void
}

export default function LightCard({ location, title, isCollected, imageUrl, youtubeUrl, onButtonClick }: LightCardProps) {
    return (
        <div className="flex flex-col dark:shadow-xl shadow-xl rgba(153,153,153,1)] gap-1.5 bg-white dark:bg-neutral-700 p-4 transition-all duration-300 rounded-xl max-w-[16rem] select-none cursor-default">
            <div className="flex justify-center">
                <img className="rounded-lg mb-2 w-[15rem] h-[8rem] object-cover" src={imageUrl} alt={title} />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-black/40 dark:text-white/40 uppercase font-semibold text-xs transition-all duration-300">{location}</span>
                <h1 className="text-4xl text-black dark:text-white font-semibold transition-all duration-300 min-h-[6.5rem] break-words whitespace-pre-wrap max-h-[6.5rem]">{title.length <= 12 ? title.replace(" ", "\n") : title}</h1>
                <button className="self-start text-sm justify-center text-blue-500 dark:text-[#4d90ff] transition-all duration-300 bg-neutral-200 dark:bg-neutral-600 px-3 py-1 rounded-full font-semibold" onClick={onButtonClick}>{isCollected ? "Remove from Collected" : "Mark as Collected"}</button>
            </div>
        </div>
    )
}
