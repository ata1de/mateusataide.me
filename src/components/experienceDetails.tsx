import { useTranslations } from "next-intl";


interface ExperienceDetailsProps {
    id: string
}

export default function ExperienceDetails({ id }: ExperienceDetailsProps) {
    const t = useTranslations('About.experiences.' + id)

    return (
        <div>
            <p>{t('title')}</p>
            <p>{t('duration')}</p>
            <p>{t('description')}</p>
        </div>
    )
}