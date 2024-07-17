import ExperienceDetails from "@/components/about/experienceDetails";
import { experiencesList } from "@/config/experiences";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <div className="flex flex-col px-40 py-7 gap-3">
                <div className="flex gap-4">
                    <Image className="rounded-full" src="/avatar.jpeg" alt="Personal foto" height={128} width={128}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-bold text-lg">Joanathan</p>
                        <p className="font-regular text-base text-Brown">Software Enginner</p>
                        <p className="font-regular text-base text-Brown">Pernambuco, 🇧🇷</p>
                    </div>
                </div>

                <p className="font-regular text-base">
                    I am a software engineer who loves to build web applications. I have been working with web development for over 10 years. I am passionate about learning new technologies and sharing knowledge.
                </p>
            </div>

            <div className="px-40">
                <p className="font-bold text-lg">Experience</p>
                {experiencesList.map((experience) => (
                    <ExperienceDetails key={experience.id} {...experience} />
                ))}
            </div>
        </div>
    )
}