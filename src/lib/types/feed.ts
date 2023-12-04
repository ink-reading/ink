export type Entry = Feed | Folder;

export type Feed = {
  type: "feed";
  id: string;
  name: string;
  pic: string;
  unread: number;
};

export type Folder = {
  type: "folder";
  id: string;
  name: string;
  unread: number;
  items: Feed[];
};

export type Post = {
  id: string;
  title: string;
  brief: string;
  date: number;
  author?: string;
};
