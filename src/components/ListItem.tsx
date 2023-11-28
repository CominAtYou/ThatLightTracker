type ListItemComponentProps = {
  title: string;
  subtitle: string;
  onClick: () => void;
  isFirstElement: boolean;
  isLastElement: boolean;
  isSelected: boolean;
};

export default function ListItem({ title, subtitle, onClick, isFirstElement, isLastElement, isSelected }: ListItemComponentProps) {
  return (
    <div className={`flex px-4 py-2 cursor-pointer transition duration-300 ${isSelected ? "bg-neutral-300 dark:bg-neutral-700" : "bg-neutral-100 dark:bg-neutral-800"} transition duration-300 ${!isSelected ? "lg:hover:bg-neutral-200 dark:lg:hover:bg-neutral-700" : ""} ${isFirstElement ? 'rounded-t-lg' : ""} ${isLastElement ? "rounded-b-lg" : `border-b-[1px] border-neutral-200 dark:border-neutral-700`}`} onClick={onClick}>
      <div className='flex flex-col select-none'>
        <p className="dark:text-white transition duration-300 font-semibold">{title}</p>
        <p className="text-sm transition duration-300 text-black/40 dark:text-white/40">{subtitle}</p>
      </div>
    </div>
  );
}
