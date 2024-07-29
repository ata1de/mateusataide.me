export interface ProjectType {
    id: string;
    image: string;
    image_details : string;
    link_visit: string;
    link_source: string;
    category: string;
}

export const projectsListHome: ProjectType[] = [
    {
        id: "libertas",
        image: "/projects/mockup-libertas.png",
        image_details: "/projects/mockup-libertas-details.png",
        link_visit: "https://libertas-frontend.vercel.app/",
        link_source: "https://github.com/ata1de/Libertas_frontend",
        category: "front-end",
    },
    {
        id: "ecommerce-store",
        image: "/projects/mockup-ecommerce.png",
        image_details: "/projects/mockup-ecommerce-details.png",
        link_visit: "https://ecommerce-store-vert.vercel.app/",
        link_source: "https://github.com/ata1de/Ecommerce-Store",
        category: "front-end",
    },
    {
        id: "dashboard-arkan-seguros",
        image: "/projects/mockup-dashboard-arkan.png",
        image_details: "/projects/mockup-dashboard-arkan-details",
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        category: "back-end",
    },

    {
        id: "arkan-seguros",
        image: "/projects/mockup-arkan.png",
        image_details: "/projects/arkan-details.svg",    
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        category: "front-end",
    },

    {
        id: "onebitflix-front",
        image: "/projects/mockup-onebitflix.png",
        image_details: "/projects/mockup-onebitflix-details.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/onebitflix_front",
        category: "front-end",
    },
    {
        id: "onebitflix-back",
        image: "/projects/mockup-onebitflix-back.png",
        image_details: "/projects/mockup-onebitflix-back-details.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/onebitflix_backend",
        category: "back-end",
    },
    {
        id: "python-analytics",
        image: "/projects/mockup-python-analytics.png",
        image_details: "/projects/mockup-python-analytics-details.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/PowerBi",
        category: "back-end",
    },

];
