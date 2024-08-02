export interface ProjectType {
    id: string;
    image: string;
    image_details : string;
    link_visit: string;
    link_source: string;
    project_video: string;
    category: string;
}

export const projectsListHome: ProjectType[] = [
    {
        id: "libertas",
        image: "/projects/libertas/mockup-libertas.png",
        image_details: "/projects/libertas/libertas-details.svg",
        link_visit: "https://libertas-frontend.vercel.app/",
        link_source: "https://github.com/ata1de/Libertas_frontend",
        project_video: '',
        category: "front-end",
    },
    {
        id: "ecommerce-store",
        image: "/projects/ecommerce-store/mockup-ecommerce.png",
        image_details: "/projects/ecommerce-store/ecommerce-details.png",
        link_visit: "https://ecommerce-store-vert.vercel.app/",
        link_source: "https://github.com/ata1de/Ecommerce-Store",
        project_video: '',
        category: "front-end",
    },
    {
        id: "dashboard-arkan-seguros",
        image: "/projects/dashboard-arkan/mockup-dashboard-arkan.png",
        image_details: "/projects/dashboard-arkan/dashboard-arkan-details.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        project_video: 'https://github.com/user-attachments/assets/5f03bb47-d804-45d4-baae-0f26d181489f',
        category: "back-end",
    },

    {
        id: "arkan-seguros",
        image: "/projects/arkan/mockup-arkan.png",
        image_details: "/projects/arkan/arkan-details.svg",    
        link_visit: "",
        link_source: "https://github.com/ata1de/ArkanSeguros",
        project_video: 'https://github.com/user-attachments/assets/0e2177fa-c0ed-4ce9-b9ad-f9e014c0c5e8',
        category: "front-end",
    },

    {
        id: "onebitflix-front",
        image: "/projects/onebitflix-front/mockup-onebitflix.png",
        image_details: "/projects/onebitflix-front/onebitflix-details.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/onebitflix_frontend",
        project_video: 'https://github.com/user-attachments/assets/f7df90c5-a8f4-4d20-bdef-6615c3afd56b',
        category: "front-end",
    },
    {
        id: "onebitflix-back",
        image: "/projects/onebitflix-back/mockup-onebitflix-back.png",
        image_details: "/projects/onebitflix-back/onebitflix-backend-details.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/onebitflix_backend",
        project_video: '',
        category: "back-end",
    },
    {
        id: "python-analytics",
        image: "/projects/python-analytics/mockup-python-analytics.png",
        image_details: "/projects/python-analytics/python-analytics-details.png",
        link_visit: "",
        link_source: "https://github.com/ata1de/PowerBi",
        project_video: '',
        category: "back-end",
    },
    {
        id: "libertas-backend",
        image: "/projects/libertas-back/mockup-libertas-backend.png",
        image_details: "/projects/libertas-back/libertas-backend-details.svg",
        link_visit: "https://libertas-frontend.vercel.app/",
        link_source: "https://github.com/ata1de/libertas_backend",
        project_video: '',
        category: "back-end",
    },
    {
        id: "planner-back",
        image: "/projects/planner-back/mockup-planner-back.png",
        image_details: "/projects/planner-back/planner-back-details.svg",
        link_visit: "",
        link_source: "https://github.com/ata1de/backend_trip",
        project_video: '',
        category: "back-end",
    }

];
