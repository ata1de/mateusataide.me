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
        <div className="max-w-[420px] h-auto flex flex-col border-2 p-4 border-zinc-500 gap-3">
            <Image src={project.image} alt={t('title')} width={400} height={400} />
            <div className="flex flex-col gap-1">
                <p className="font-bold text-base">{t('title')}</p>
                <p className="text-sm font-medium text-Brown">{t('description')}</p>
            </div>
            <div className="flex items-center gap-3">
                {!isLinkVisitEmpty ? 
                    <Link href={project.link_visit}>
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
    );
}
