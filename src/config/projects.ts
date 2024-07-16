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
        id: "euphoria-ecommerce",
        image: "/projects/project2.png",
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
        id: "blog-template",
        image: "/projects/project3.png",
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
