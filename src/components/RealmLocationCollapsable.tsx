import { useState, useContext } from "react";
import { LightItemData } from "../types/RealmProgressData";
import LightCard from "./LightCard";
import { ProgressDataDispatchContext } from "../data/ProgressDataManager";

export default function RealmLocationCollapsable({ realmId, locationName, lightItems }: { realmId: string, locationName: string, lightItems: LightItemData[] }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const progressDataDispatch = useContext(ProgressDataDispatchContext);
    const isCollectedCollapsable = locationName === 'Collected';

    function onButtonClick(item: LightItemData) {
        progressDataDispatch({
            type: isCollectedCollapsable ? "MARK_IN_PROGRESS" : "MARK_COLLECTED",
            payload: {
                realm: realmId,
                id: item.id
            }
        })
    }

    function RealmLocationCollapsableContent() {
        if (lightItems.length === 0) {
            if (!isCollectedCollapsable) {
                return (
                    <div className="flex flex-1 flex-col justify-center items-center py-6 select-none cursor-default gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="36" width="36"><path fill="#DD2E44" d="M11.626 7.488c-.112.112-.197.247-.268.395l-.008-.008L.134 33.141l.011.011c-.208.403.14 1.223.853 1.937.713.713 1.533 1.061 1.936.853l.01.01L28.21 24.735l-.008-.009c.147-.07.282-.155.395-.269 1.562-1.562-.971-6.627-5.656-11.313-4.687-4.686-9.752-7.218-11.315-5.656z"/><path fill="#EA596E" d="M13 12L.416 32.506l-.282.635.011.011c-.208.403.14 1.223.853 1.937.232.232.473.408.709.557L17 17l-4-5z"/><path fill="#A0041E" d="M23.012 13.066c4.67 4.672 7.263 9.652 5.789 11.124-1.473 1.474-6.453-1.118-11.126-5.788-4.671-4.672-7.263-9.654-5.79-11.127 1.474-1.473 6.454 1.119 11.127 5.791z"/><path fill="#AA8DD8" d="M18.59 13.609c-.199.161-.459.245-.734.215-.868-.094-1.598-.396-2.109-.873-.541-.505-.808-1.183-.735-1.862.128-1.192 1.324-2.286 3.363-2.066.793.085 1.147-.17 1.159-.292.014-.121-.277-.446-1.07-.532-.868-.094-1.598-.396-2.11-.873-.541-.505-.809-1.183-.735-1.862.13-1.192 1.325-2.286 3.362-2.065.578.062.883-.057 1.012-.134.103-.063.144-.123.148-.158.012-.121-.275-.446-1.07-.532-.549-.06-.947-.552-.886-1.102.059-.549.55-.946 1.101-.886 2.037.219 2.973 1.542 2.844 2.735-.13 1.194-1.325 2.286-3.364 2.067-.578-.063-.88.057-1.01.134-.103.062-.145.123-.149.157-.013.122.276.446 1.071.532 2.037.22 2.973 1.542 2.844 2.735-.129 1.192-1.324 2.286-3.362 2.065-.578-.062-.882.058-1.012.134-.104.064-.144.124-.148.158-.013.121.276.446 1.07.532.548.06.947.553.886 1.102-.028.274-.167.511-.366.671z"/><path fill="#77B255" d="M30.661 22.857c1.973-.557 3.334.323 3.658 1.478.324 1.154-.378 2.615-2.35 3.17-.77.216-1.001.584-.97.701.034.118.425.312 1.193.095 1.972-.555 3.333.325 3.657 1.479.326 1.155-.378 2.614-2.351 3.17-.769.216-1.001.585-.967.702.033.117.423.311 1.192.095.53-.149 1.084.16 1.233.691.148.532-.161 1.084-.693 1.234-1.971.555-3.333-.323-3.659-1.479-.324-1.154.379-2.613 2.353-3.169.77-.217 1.001-.584.967-.702-.032-.117-.422-.312-1.19-.096-1.974.556-3.334-.322-3.659-1.479-.325-1.154.378-2.613 2.351-3.17.768-.215.999-.585.967-.701-.034-.118-.423-.312-1.192-.096-.532.15-1.083-.16-1.233-.691-.149-.53.161-1.082.693-1.232z"/><path fill="#AA8DD8" d="M23.001 20.16c-.294 0-.584-.129-.782-.375-.345-.432-.274-1.061.156-1.406.218-.175 5.418-4.259 12.767-3.208.547.078.927.584.849 1.131-.078.546-.58.93-1.132.848-6.493-.922-11.187 2.754-11.233 2.791-.186.148-.406.219-.625.219z"/><path fill="#77B255" d="M5.754 16c-.095 0-.192-.014-.288-.042-.529-.159-.829-.716-.67-1.245 1.133-3.773 2.16-9.794.898-11.364-.141-.178-.354-.353-.842-.316-.938.072-.849 2.051-.848 2.071.042.551-.372 1.031-.922 1.072-.559.034-1.031-.372-1.072-.923-.103-1.379.326-4.035 2.692-4.214 1.056-.08 1.933.287 2.552 1.057 2.371 2.951-.036 11.506-.542 13.192-.13.433-.528.712-.958.712z"/><circle fill="#5C913B" cx="25.5" cy="9.5" r="1.5"/><circle fill="#9266CC" cx="2" cy="18" r="2"/><circle fill="#5C913B" cx="32.5" cy="19.5" r="1.5"/><circle fill="#5C913B" cx="23.5" cy="31.5" r="1.5"/><circle fill="#FFCC4D" cx="28" cy="4" r="2"/><circle fill="#FFCC4D" cx="32.5" cy="8.5" r="1.5"/><circle fill="#FFCC4D" cx="29.5" cy="12.5" r="1.5"/><circle fill="#FFCC4D" cx="7.5" cy="23.5" r="1.5"/></svg>
                        <div className="flex flex-col items-center">
                            <p className="dark:text-white/40 text-black/40 transition-all duration-300 font-semibold text-xl p-0 text-center">You've collected all the light at this location!</p>
                            <p className="dark:text-white/40 text-black/40 text-sm text-center transition-all duration-300">You can view the light that you've collected under the "Collected" tab at the bottom.</p>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="flex flex-1 flex-col justify-center items-center py-6 select-none cursor-default">
                        <p className="dark:text-white/40 text-black/40 transition-all duration-300 font-semibold text-xl p-0 text-center">You haven't collected any light yet!</p>
                        <p className="dark:text-white/40 text-black/40 text-sm text-center transition-all duration-300">When you collect winged light, it'll show up here.</p>
                    </div>
                )
            }
        }
        else {
            return (
                lightItems.map(item => {
                    return (
                        <LightCard key={item.id} location={item.location} title={item.title} isCollected={locationName === "Collected"} imageUrl={item.imageUrl} youtubeUrl={item.youtubeUrl} onButtonClick={() => { onButtonClick(item) } } />
                    )
                })
            )
        }
    }

    return (
        // <div className={`${isExpanded ? "pb-8 pt-4" : "py-3"} bg-neutral-100 dark:bg-neutral-800 pl-4 select-none flex flex-col gap-4 transition-all duration-300 rounded-xl`}>
        <div className={`${isExpanded ? "bg-neutral-100 dark:bg-neutral-800 pt-4 pb-8" : ""} select-none flex flex-col gap-4 transition-all duration-300 rounded-xl`}>
            <div className="flex justify-between pr-6 items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className={`flex gap-2 items-center select-none flex-1 transition-all duration-300 ${isExpanded ? "pl-4" : ""}`}>
                    <svg className={`opacity-30 dark:invert transition-all duration-300 ${isExpanded ? 'rotate-90' : ""}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" /></svg>
                    <h3 className="dark:text-white transition-all duration-300 text-xl font-bold cursor-pointer">{locationName}</h3>
                </div>
                {
                    (() => {
                        if (!isCollectedCollapsable) {
                            return (
                                <div className="text-black/40 dark:text-white/40 transition-all duration-300">
                                    {lightItems.length === 0 ? "Done" : `${lightItems.length} left`}
                                </div>
                            )
                        }
                    })()
                }
            </div>
            <div className={`${!isExpanded ? "hidden" : ""} ${lightItems.length > 0 ? "pl-10" : ""} flex flex-wrap gap-3 justify-start px-[1.625rem] flex-1`}>
                <RealmLocationCollapsableContent />
            </div>
        </div>
    );
}
