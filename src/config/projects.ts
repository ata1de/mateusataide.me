export type ProjectHomeModel = {
    id: string;
    image: string;
    link_visit: string;
    link_source: string;
    category: string;
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
        link_visit: "https://libertas-frontend.vercel.app/",
        link_source: "https://github.com/ata1de/Libertas_frontend",
        category: "front-end",
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
        image: "/projects/ecommerce-store.png",
        link_visit: "https://ecommerce-store-vert.vercel.app/",
        link_source: "https://github.com/ata1de/Ecommerce-Store",
        category: "front-end",
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
        image: "/projects/arkan-seguro.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        category: "front-end",
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
