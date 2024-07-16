import { ProjectHomeModel } from "@/config/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CardProjectProps {
    project: ProjectHomeModel
}

export default function CardProject({ project }: CardProjectProps) {
    const t = useTranslations(`Home.Projects.${project.id}`);

  return (
    <div className="w-[928px] max-h-[256px] flex items-center gap-3">
        <Image src={project.image} alt={t('title')} width={464} height={256} />
        <div className="flex flex-col justify-center gap-1">
            <p className="font-bold text-base">{t('title')}</p>
            <p className="text-base font-normal text-Brown">{t('description')}</p>
        </div>
    </div>
  );
}