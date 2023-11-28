import { useState } from 'react';
import ListItem from "./components/ListItem";
import RealmView from './components/RealmView';
import realmMetadata from './data/RealmMetadata';
import sampleRealmProgressData from './sampledata/SampleRealmProgressData';
import RealmMetadata from './types/RealmMetadata';

export default function App() {
  const [selectedItem, setSelectedItem] = useState("");
  // TODO: Create default progress data

  function handleListItemClick(item: RealmMetadata) {
    document.title = `${item.name} • Light Tracker`;
    setSelectedItem(item.id);
  }

  return (
    <div className='flex flex-col h-full bg-neutral-200 dark:bg-neutral-900 transition-all duration-300'>
      <nav className='flex p-3.5 items-center justify-center border-b-[1px] border-neutral-300 dark:border-neutral-800 bg-[rgb(240_240_240)] dark:bg-[rgb(30_30_30)] transition-all duration-300'>
        <div className='flex items-center justify-center'>
            <span className='font-semibold select-none cursor-default dark:text-white transition-all duration-300'>Light Tracker</span>
            <svg className={`${selectedItem ? "" : "hidden"} opacity-30 dark:invert transition-all duration-300`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" /></svg>
            <span className='font-semibold select-none cursor-default dark:text-white transition-all duration-300'>{realmMetadata.find(x => x.id === selectedItem)?.name}</span>
        </div>
      </nav>
      <div className='flex flex-1 overflow-hidden'>
        <div className='lg:max-w-[325px] lg:min-w-[325px] h-full transition-all duration-300 px-4 pt-4 border-neutral-300 dark:border-neutral-800 border-r-[1px] flex-1 overflow-scroll'>
          <div className='mb-1'>
            <span className='ps-4 transition-all duration-300 font-semibold text-black/40 dark:text-white/40 text-xs uppercase select-none cursor-default'>Realms</span>
          </div>
          <div id="side-col-list">
            {
              realmMetadata.map((item, index) => {
                const progressData = sampleRealmProgressData[item.id];

                return (
                  <ListItem
                    key={item.id}
                    title={item.name}
                    subtitle={`${progressData.collected.length === item.totalLight ? "Complete" : item.totalLight - progressData.collected.length + " remaining (" + Math.floor(progressData.collected.length / item.totalLight * 100) + "%)"}`}
                    onClick={() => handleListItemClick(item)}
                    isFirstElement={index === 0}
                    isLastElement={index === realmMetadata.length - 1}
                    isSelected={selectedItem === item.id}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='flex-1 p-6 overflow-auto'>
          {
            (() => {
              if (selectedItem) {
                return <RealmView realmMetadata={realmMetadata.find(x => x.id === selectedItem)!} />
              }
            })()
          }
        </div>
      </div>
    </div>
  );
}
