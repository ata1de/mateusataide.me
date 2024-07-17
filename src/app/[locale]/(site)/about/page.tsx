import ExperienceDetails from "@/components/experienceDetails";
import { experiencesList } from "@/config/experiences";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <div>
                <div>
                    <Image src="/about.jpg" alt="Personal foto" layout="fill" objectFit="cover" />
                    <div>
                        <p>Joanathan</p>
                        <p>Software Enginner</p>
                        <p>Pernambuco, 🇧🇷</p>
                    </div>
                </div>

                <p>
                    I am a software engineer who loves to build web applications. I have been working with web development for over 10 years. I am passionate about learning new technologies and sharing knowledge.
                </p>
            </div>

            <div>
                <p>Experience</p>
                {experiencesList.map((experience) => (
                    <ExperienceDetails key={experience.id} {...experience} />
                ))}
            </div>
        </div>
    )
}