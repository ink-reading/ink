export const load = async () => {
  return {
    meta: {
      today: 3,
      unread: 12,
      starred: 65,
    },
    feeds: [
      { id: "001", name: "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", avatar: "https://placehold.co/400", unread: 0 },
      { id: "002", name: "Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", avatar: "https://placehold.co/400", unread: 11 },
      { id: "003", name: "CCC", avatar: "https://placehold.co/400", unread: 120 },
      { id: "004", name: "Aaaa", avatar: "https://placehold.co/400", unread: 0 },
      { id: "005", name: "Bbbbbb", avatar: "https://placehold.co/400", unread: 7 },
      { id: "006", name: "CCC", avatar: "https://placehold.co/400", unread: 1 },
    ],
  };
};
