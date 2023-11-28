export type LightItemData = {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  youtubeUrl: string;
};

export type RealmProgressData = {
  inProgress: LightItemData[];
  collected: LightItemData[];
};
