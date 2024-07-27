import { ProjectHomeModel } from "@/config/projects";
import { ArrowUpRight, GitFork } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface CardProjectProps {
    project: ProjectHomeModel
}

export default function CardProject({ project }: CardProjectProps) {
    const t = useTranslations(`Home.Projects.${project.id}`);
    const buttons = useTranslations(`Home.Projects.buttons`);

    const isLinkVisitEmpty = project.link_visit.length === 0;

    return (
        <div className="max-w-[420px] w-[400px]  flex flex-col p-5 shadow-md     gap-3">
            <div className="flex justify-center items-center">
                <Image className="rounded-md" src={project.image} alt={t('title')} width={470} height={325} />
            </div>
            <div className="flex flex-col justify-between flex-1 p-5 gap-3">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-lg text-[#585858]">{t('title')}</p>
                </div>
                <div className="flex items-center gap-3">
                    {!isLinkVisitEmpty ? 
                        <Link href={project.link_visit} target="_blank">
                        <Button 
                            className={`bg-Green border-white text-yellow-50  `} 
                            variant='link' 
                        >
                            <ArrowUpRight className="w-4 h-4 mr-2"/>{buttons('button_visit')}
                        </Button>
                        </Link>
                        : 
                        <Button 
                            className={`bg-Green border-white text-yellow-50  `} 
                            variant='link' 
                            disabled={isLinkVisitEmpty}
                        >
                            <ArrowUpRight className="w-4 h-4 mr-2"/>{buttons('button_visit')}
                        </Button>
                    }

                    <Link href={project.link_source} target="_blank">
                        <Button className="bg-Brown border-Black text-yellow-50" variant='link'>
                            <GitFork className="h-4 w-4 mr-2"/>{buttons('button_source')}
                        </Button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}
