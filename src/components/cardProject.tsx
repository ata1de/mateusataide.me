import { ProjectHomeModel } from "@/config/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CardProjectProps {
    project: ProjectHomeModel
}

export default function CardProject({ project }: CardProjectProps) {
    const t = useTranslations(`Home.Projects.${project.id}`);

  return (
    <div className="max-w-[420px] h-auto flex flex-col border-2 p-4 border-zinc-500 gap-3">
        <Image src={project.image} alt={t('title')} width={400} height={400} />
        <div className="flex flex-col gap-1">
            <p className="font-bold text-base">{t('title')}</p>
            <p className="text-base font-normal text-Brown">{t('description')}</p>
        </div>
    </div>
  );
}