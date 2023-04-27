export const load = async () => {
  return {
    meta: {
      today: 3,
      unread: 12,
      later: 65,
      bookmark: 12,
    },
    entries: [
      { type: "feed", id: "001", name: "Aaaaaaa", avatar: "https://placehold.co/400", unread: 0 },
      { type: "feed", id: "002", name: "Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", avatar: "https://placehold.co/400", unread: 11 },
      { type: "feed", id: "003", name: "CCC", avatar: "https://placehold.co/400", unread: 120 },
      { type: "feed", id: "004", name: "Aaaa", avatar: "https://placehold.co/400", unread: 0 },
      { type: "feed", id: "005", name: "Bbbbbb", avatar: "https://placehold.co/400", unread: 7 },
      { type: "feed", id: "006", name: "CCC", avatar: "https://placehold.co/400", unread: 1 },
      {
        type: "folder",
        id: "01",
        name: "folder 1",
        unread: 11,
        feeds: [
          { type: "feed", id: "001", name: "Aaaaaaa", avatar: "https://placehold.co/400", unread: 0 },
          { type: "feed", id: "002", name: "Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", avatar: "https://placehold.co/400", unread: 11 },
          { type: "feed", id: "003", name: "CCC", avatar: "https://placehold.co/400", unread: 120 },
          { type: "feed", id: "004", name: "Aaaa", avatar: "https://placehold.co/400", unread: 0 },
          { type: "feed", id: "005", name: "Bbbbbb", avatar: "https://placehold.co/400", unread: 7 },
          { type: "feed", id: "006", name: "CCC", avatar: "https://placehold.co/400", unread: 1 },
        ],
      },
      {
        type: "folder",
        id: "02",
        name: "folder 2",
        unread: 11,
        feeds: [
          { type: "feed", id: "007", name: "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", avatar: "https://placehold.co/400", unread: 0 },
          { type: "feed", id: "008", name: "Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", avatar: "https://placehold.co/400", unread: 11 },
          { type: "feed", id: "009", name: "CCC", avatar: "https://placehold.co/400", unread: 120 },
          { type: "feed", id: "010", name: "Aaaa", avatar: "https://placehold.co/400", unread: 0 },
          { type: "feed", id: "011", name: "Bbbbbb", avatar: "https://placehold.co/400", unread: 7 },
          { type: "feed", id: "012", name: "CCC", avatar: "https://placehold.co/400", unread: 1 },
        ],
      },
    ],
  };
};
