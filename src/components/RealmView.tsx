import sampleRealmProgressData from "../sampledata/SampleRealmProgressData";
import RealmMetadata from "../types/RealmMetadata";
import RealmLocationCollapsable from "./RealmLocationCollapsable";

export default function RealmView({ realmMetadata }: { realmMetadata: RealmMetadata }) {
    return (
      <div className="flex flex-col gap-3">
        {
          realmMetadata.locations.map((location) => {
            const items = sampleRealmProgressData[realmMetadata.id].inProgress.filter(x => x.location === location);
            return (
              <RealmLocationCollapsable locationName={ location } lightItems={items} key={ `${realmMetadata.id}-${location}` } />
            )
          })
        }
        <hr className="mx-2 dark:border-neutral-800 border-neutral-300"></hr>
        <RealmLocationCollapsable locationName="Collected" lightItems={sampleRealmProgressData[realmMetadata.id].collected} key={`${realmMetadata.id}-collected`} />
      </div>
    )
}
