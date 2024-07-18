export type ProjectHomeModel = {
    id: string;
    image: string;
    icons: Icon[];
}

export type Icon = {
    id: string;
    image: string;
}

export const projectsListHome: ProjectHomeModel[] = [
    {
        id: "crypto-screener",
        image: "/projects/project1.png",
        icons: [
            {
                id: "filter-icon",
                image: "/images/filter-icon.png"
            },
            {
                id: "alert-icon",
                image: "/images/alert-icon.png"
            }
        ]
    },
    {
        id: "ecommerce-store",
        image: "/projects/ecommerce-store.jpg",
        icons: [
            {
                id: "cart-icon",
                image: "/images/cart-icon.png"
            },
            {
                id: "heart-icon",
                image: "/images/heart-icon.png"
            }
        ]
    },
    {
        id: "arkan-seguro",
        image: "/projects/arkan_home.png",
        icons: [
            {
                id: "share-icon",
                image: "/images/share-icon.png"
            },
            {
                id: "category-icon",
                image: "/images/category-icon.png"
            }
        ]
    }
];
