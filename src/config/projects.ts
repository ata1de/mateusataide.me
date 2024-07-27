export type ProjectHomeModel = {
    id: string;
    image: string;
    link_visit: string;
    link_source: string;
    category: string;
}

export const projectsListHome: ProjectHomeModel[] = [
    {
        id: "Libertas",
        image: "/projects/mockup-libertas.png",
        link_visit: "https://libertas-frontend.vercel.app/",
        link_source: "https://github.com/ata1de/Libertas_frontend",
        category: "front-end",
    },
    {
        id: "ecommerce-store",
        image: "/projects/mockup-ecommerce.png",
        link_visit: "https://ecommerce-store-vert.vercel.app/",
        link_source: "https://github.com/ata1de/Ecommerce-Store",
        category: "front-end",
    },
    {
        id: "Dashboard Arkan Seguros",
        image: "/projects/mockup-dashboard-arkan.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        category: "back-end",
    },

    {
        id: "Arkan Seguros",
        image: "/projects/mockup-arkan.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        category: "front-end",
    },

    {
        id: "Onebitflix",
        image: "/projects/mockup-onebitflix.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        category: "front-end",
    }
];
