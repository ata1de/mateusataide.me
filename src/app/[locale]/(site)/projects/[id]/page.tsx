'use client'

import { projectsListHome, ProjectType } from "@/config/projects"
import { ArrowLeftCircle, Loader2Icon } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"



const DetailsProjectPage = () => {
    // STATES
    const [project, setProject] = useState<ProjectType>()

    // Params ID    
    const params = useParams()
    const { id } = params

    // Router
    const router = useRouter()

    // TRANSLATIONS
    const projectDetails = useTranslations(`Projects.${id}`)
    const init = useTranslations(`Projects.${id}.init`)
    const overview = useTranslations(`Projects.${id}.overview`)
    const problem = useTranslations(`Projects.${id}.problem-statement`)
    const impact = useTranslations(`Projects.${id}.impact`)



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
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full bg-[#f8f8f8] relative">
                <div className="absolute top-2 left-4">
                    <ArrowLeftCircle className="text-[#95BFB8] cursor-pointer" size={40} onClick={() => router.back()}/>
                </div>
                <Image className="m-auto" src={project.image_details} alt={project.id} width={1056} height={1000} />
            </div>  

            <div className="w-full">
                <div className="max-w-[1056px] mx-auto px-3 sm:px-10 my-7">
                    <div className="flex flex-col gap-6 justify-center items-left w-full">
                        <div className="flex flex-col">
                            <p className="text-sm text-[#95BFB8] font-medium">{init('category')}</p>
                            <p className="mb-4 font-semibold text-xl">{projectDetails('title')}</p>
                            <p>{init('description')}</p>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-sm font-semibold">{init('role.title')}</p>
                                <p className="text-sm ">{init('role.description')}</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-sm font-semibold">{init('project.title')}</p>
                                <p className="text-sm">{init('project.description')}</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-sm font-semibold">{init('timeline.title')}</p>
                                <p className="text-sm">{init('timeline.description')}</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-sm font-semibold">{init('tools.title')}</p>
                                <p className="text-sm">{init('tools.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                project.project_video.length > 0 &&  
                <div className="w-full bg-[#f8f8f8]">
                    <div className="max-w-[1056px] mx-auto px-3 sm:px-10 my-7 ">
                        <div className="flex flex-col gap-6 justify-center items-left w-full">
                            <p className="text-sm text-[#95BFB8]">{projectDetails('init.category')}</p>
                            <p className="mb-4 font-semibold text-xl">{projectDetails('video.description')}</p>
                            <video controls width="560" className="w-full bg-[#f8f8f8]" height="315" src={project.project_video}></video>
                        </div>
                    </div>
                </div>

            }

            <div className={`w-full ${project.project_video.length == 0 && 'bg-[#f8f8f8]'}`}>
                <div className="max-w-[1056px] mx-auto px-3 sm:px-10 my-7 ">
                    <div className="flex flex-col">
                        <p className="text-sm text-[#95BFB8] mb-2">{overview('title')}</p>
                        <p className="mb-4 font-semibold text-xl">{overview('prompt.title')}</p>
                        <p className="mb-10">{overview('prompt.description')}</p>

                        <p className="mb-4 font-semibold text-xl">{overview('design-process.title')}</p>
                        <p>{overview('design-process.description')}</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-FooterBg">
                <div className="max-w-[1056px] mx-auto px-3 sm:px-10 my-7 ">
                    <div className="flex flex-col">
                        <p className="text-sm text-[#95BFB8] mb-2 ">{problem('challenge')}</p>
                        <p className="mb-4 font-semibold text-xl text-[#F6F6F6]">{problem('title')}</p>
                        <p className="mb-10 text-[#F6F6F6]">{problem('description')}</p>
                        <Image src='/projects/question.svg' alt={project.id} width={180} height={180} />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="max-w-[1056px] mx-auto px-3 sm:px-10 my-7 ">
                    <div className="flex flex-col">
                        <p className="text-sm text-[#95BFB8] mb-2">{impact('subtitle')}</p>
                        <p className="mb-4 font-semibold text-xl">{impact('title')}</p>
                        <p className="mb-10">{impact('description')}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsProjectPage
