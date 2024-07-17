import { useTranslations } from "next-intl";


interface ExperienceDetailsProps {
    id: string
}

export default function ExperienceDetails({ id }: ExperienceDetailsProps) {
    const t = useTranslations('About.experiences.' + id)

    return (
        <div className="my-5">
            <p className="font-medium text-base">{t('title')}</p>
            <p className="font-regular text-sm text-Brown">{t('duration')}</p>
            <p className="font-regular text-sm text-Brown">{t('description')}</p>
        </div>
    )
}