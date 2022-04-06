export const sortQuery = [
    {
        id: 1,
        name: "Newest",
        query: "-createdAt"
    },
    {
        id: 2,
        name: "Oldest",
        query: "createdAt"
    },
    {
        id: 3,
        name: "Most Played",
        query: "-played"
    },
    {
        id: 4,
        name: "Least Played",
        query: "played"
    },
]

export const limitQuery = [50, 100, 200, 300, 400, 500, 1000]