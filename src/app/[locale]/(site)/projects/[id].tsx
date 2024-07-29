import { projectsListHome, ProjectType } from "@/config/projects"
import { Loader2Icon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const DetailsProjectPage = () => {
    // STATES
    const [project, setProject] = useState<ProjectType>()

    // Params ID
    const router = useRouter()
    const id = router.query.id

    // TRANSLATIONS
    const t = useTranslations("Projects")
    const projectDetails = useTranslations(`Projects.${id}`)

    useEffect(() => {
        const project = projectsListHome.find(project => project.id === id)
        setProject(project)
    }, [id])

    if (!project) {
        return <div className='min-h-screen flex justify-center items-center'>
          <Loader2Icon className='text-Yellow animate-spin' size={80}/>
        </div>;
      }
    
    return (
        <div></div>
    )
}

export default DetailsProjectPage