'use client'

import ExperienceDetails from "@/components/about/experienceDetails";
import { experiencesList } from "@/config/experiences";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';

export default function About() {
    const role = useTranslations("About.introduction");
    const intro = useTranslations("About.description");
    const academic = useTranslations("About.description.Academic");
    const interests = useTranslations("About.description.Interests");
    const experiences = useTranslations("About.experiences");

    const slideInVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
    const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });

    return (
        <div className="w-full flex justify-center items-center">
            <div className="max-w-[1056px] mx-auto px-10">
                <div className="flex flex-col py-7 gap-3">
                    <motion.div
                        className="flex gap-4"
                        initial="hidden"
                        animate={inView1 ? "visible" : "hidden"}
                        variants={slideInVariants}
                        transition={{ type: "spring", stiffness: 50, damping: 15 }}
                        ref={ref1}
                    >
                        <Image className="rounded-full" src="/avatar.jpeg" alt="Personal foto" height={128} width={128}/>
                        <div className="flex flex-col justify-center items-start">
                            <p className="font-bold text-lg">Mateus Ataide</p>
                            <p className="font-regular text-base text-Brown">{role("role")}</p>
                            <p className="font-regular text-base text-Brown">Pernambuco, 🇧🇷</p>
                        </div>
                    </motion.div>

                    <motion.p
                        className="font-regular text-base"
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        variants={slideInVariants}
                        transition={{ type: "spring", stiffness: 50, damping: 15 }}
                        ref={ref2}
                    >
                        {intro("intro")} <Link target="_blank" href={"https://portal.cin.ufpe.br/"}><span className="underline text-[#669B94] font-semibold">CIN (Centro de Informática da UFPE).</span></Link>
                    </motion.p>

                    <motion.p
                        className="font-regular text-base"
                        initial="hidden"
                        animate={inView3 ? "visible" : "hidden"}
                        variants={slideInVariants}
                        transition={{ type: "spring", stiffness: 50, damping: 15 }}
                        ref={ref3}
                    >
                        {intro("intro_description")}
                    </motion.p>

                    <div className="mt-9">
                        <motion.p
                            className="font-bold text-lg my-3"
                            initial="hidden"
                            animate={inView4 ? "visible" : "hidden"}
                            variants={slideInVariants}
                            transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            ref={ref4}
                        >
                            {academic("title")}
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate={inView5 ? "visible" : "hidden"}
                            variants={slideInVariants}
                            transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            ref={ref5}
                        >
                            {academic("description")}  <Link target="_blank" href={"https://github.com/ata1de/AtomiKingdom"}><span className="underline text-[#669B94] font-semibold">Lequeleto</span></Link>
                        </motion.p>
                        <div className="flex justify-center items-center gap-8 max-[730px]:flex-col my-4 ">  
                            <Image className="h-[350px] w-[350px]" src="/about/cin.png" alt="CIN logo" height={350} width={350}/>
                            <Image className="h-[350px]" src="/about/letoleto.png" alt="Game lequeleto" height={300} width={300}/>
                        </div>
                    </div>

                    <div className="mt-9">
                        <motion.p
                            className="font-bold text-lg my-3"
                            initial="hidden"
                            animate={inView6 ? "visible" : "hidden"}
                            variants={slideInVariants}
                            transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            ref={ref6}
                        >
                            {interests("title")}
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate={inView6 ? "visible" : "hidden"}
                            variants={slideInVariants}
                            transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            ref={ref6}
                        >
                            {interests("description")}
                        </motion.p>
                    </div>
                </div>

                <div>
                    <motion.p
                        className="font-bold text-lg"
                        initial="hidden"
                        animate={inView6 ? "visible" : "hidden"}
                        variants={slideInVariants}
                        transition={{ type: "spring", stiffness: 50, damping: 15 }}
                        ref={ref6}
                    >
                        {experiences('title')}
                    </motion.p>
                    <motion.div 
                    className="border-l-2 border-zinc-500 pl-5"
                    initial="hidden"
                    animate={inView6 ? "visible" : "hidden"}
                    variants={slideInVariants}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    ref={ref6}
                    >
                        {experiencesList.map((experience) => (
                            <ExperienceDetails key={experience.id} {...experience} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
