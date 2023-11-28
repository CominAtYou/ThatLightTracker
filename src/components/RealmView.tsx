import { useContext } from "react";
import RealmMetadata from "../types/RealmMetadata";
import RealmLocationCollapsable from "./RealmLocationCollapsable";
import { ProgressDataContext } from "../data/ProgressDataManager";

export default function RealmView({ realmMetadata }: { realmMetadata: RealmMetadata }) {
  const progressData = useContext(ProgressDataContext);

  return (
    <div className="flex flex-col gap-3">
      {
        realmMetadata.locations.map((location) => {
          const items = progressData[realmMetadata.id].inProgress.filter(x => x.location === location);
          return (
            <RealmLocationCollapsable realmId={realmMetadata.id} locationName={ location } lightItems={items} key={ `${realmMetadata.id}-${location}` } />
          )
        })
      }
      <hr className="mx-2 dark:border-neutral-800 border-neutral-300 transition-all duration-300"></hr>
      <RealmLocationCollapsable realmId={realmMetadata.id} locationName="Collected" lightItems={progressData[realmMetadata.id].collected} key={`${realmMetadata.id}-collected`} />
    </div>
  )
}
