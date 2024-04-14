import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    redirect(302, "/login");
  }
  return {
    currentUser: {
      ...session.user,
      isAdmin: session.user.role === "admin",
    },
    listing: mock.listing,
  };
};

const mock = {
  listing: {
    lists: {
      today: 3,
      all: 12,
      later: 65,
      mark: 12,
      archive: 0,
    },
    entries: {
      feed: [
        {
          type: "item",
          id: "001",
          name: "111",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "002",
          name: "222",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "003",
          name: "333",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "004",
          name: "111",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "005",
          name: "222",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "006",
          name: "333",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "101",
          name: "111",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "102",
          name: "222",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "103",
          name: "333",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "104",
          name: "111",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "105",
          name: "222",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "106",
          name: "333",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "201",
          name: "111",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "202",
          name: "222",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "203",
          name: "333",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "204",
          name: "111",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "205",
          name: "222",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "item",
          id: "206",
          name: "333",
          pic: "https://placehold.co/40/444444/aaaaaa",
          unread: 0,
        },
        {
          type: "folder",
          id: "01",
          name: "folder 1",
          unread: 11,
          items: [
            {
              type: "item",
              id: "011",
              name: "1 111",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "012",
              name: "1 222",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "013",
              name: "1 333",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "014",
              name: "111",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "015",
              name: "222",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "016",
              name: "333",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
          ],
        },
        {
          type: "folder",
          id: "02",
          name: "folder 2",
          unread: 57,
          items: [
            {
              type: "item",
              id: "021",
              name: "2 111",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "022",
              name: "2 222",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "023",
              name: "2 333",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "024",
              name: "111",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "025",
              name: "222",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
            {
              type: "item",
              id: "026",
              name: "333",
              pic: "https://placehold.co/40/444444/aaaaaa",
              unread: 0,
            },
          ],
        },
      ],
      newsletter: [],
      podcast: [],
      tag: [],
    },
  },
};
