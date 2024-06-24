"use client";

import useGlobalStore from "@/store";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link as LinkTo } from 'react-scroll';

export default function NavComponent() {

    const [isHover, setIsHover] = useState()

    const { ref } = useGlobalStore()
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation();

    const handleHover = (event) => {
        if (event) {
            setIsHover(event.target.id)
        } else {
            setIsHover(false)
        }
    }

    useEffect(() => {
        if (isInView) {
            controls.start('hidden')
        } else {
            console.log("Visible")
            controls.start('visible')
        }
    }, [isInView]);

    return (
        <div className="h-screen w-full flex flex-col items-center z-30">
            <div className="fixed top-12 px-5 pb-4 pt-2 flex flex-col items-center justify-center gap-2 border-[1px] rounded-2xl backdrop-blur-sm">
                <h1 className="font-darkerGrotesque font-medium text-center text-gray-800 text-lg">Alejo&apos;s Portfolio</h1>
                <div className="flex flex-row gap-10">
                    <LinkTo to="about_me" smooth={true} duration={400} id="about_button" className={"bg-[#DDCDFF] w-10 h-10 rounded-full hover:w-28 duration-300 ease-out flex items-center justify-center text-center pb-[2px] cursor-pointer animate-fadeInTop1"} onMouseEnter={(event) => handleHover(event)} onMouseLeave={() => handleHover(false)}>
                        {
                            isHover === "about_button"
                                ? <h3 className="font-darkerGrotesque text-lg leading-none text-[#803BFF] font-medium animate-fadeIn">About Me</h3>
                                : <div className="bg-[url('/icon/profile-icon.png')] bg-cover bg-center w-6 h-6 animate-fadeIn"></div>
                        }
                    </LinkTo>
                    <LinkTo to="my_projects" smooth={true} duration={600} id="my_projects_button" className={"bg-[#DDCDFF] w-10 h-10 rounded-full hover:w-28 duration-300 ease-out flex items-center justify-center text-center pb-[2px] cursor-pointer animate-fadeInTop2"} onMouseEnter={(event) => handleHover(event)} onMouseLeave={() => handleHover(false)}>
                        {
                            isHover === "my_projects_button"
                                ? <h3 className="font-darkerGrotesque text-lg leading-none text-[#803BFF] font-medium animate-fadeIn">My Projects</h3>
                                : <div className="bg-[url('/icon/projects-icon.png')] bg-cover bg-center w-6 h-6 animate-fadeIn"></div>
                        }
                    </LinkTo>
                    <LinkTo to="experience" smooth={true} duration={800} id="experience_button" className={"bg-[#DDCDFF] w-10 h-10 rounded-full hover:w-28 duration-300 ease-out flex items-center justify-center text-center pb-[2px] cursor-pointer animate-fadeInTop3"} onMouseEnter={(event) => handleHover(event)} onMouseLeave={() => handleHover(false)}>
                        {
                            isHover === "experience_button"
                                ? <h3 className="font-darkerGrotesque text-lg leading-none text-[#803BFF] font-medium animate-fadeIn">Experience</h3>
                                : <div className="bg-[url('/icon/experience-icon.png')] bg-cover bg-center w-6 h-6 animate-fadeIn"></div>
                        }
                    </LinkTo>
                    <LinkTo to="skills" smooth={true} duration={1000} id="education_button" className={"bg-[#DDCDFF] w-10 h-10 rounded-full hover:w-28 duration-300 ease-out flex items-center justify-center text-center pb-[2px] cursor-pointer animate-fadeInTop4"} onMouseEnter={(event) => handleHover(event)} onMouseLeave={() => handleHover(false)}>
                        {
                            isHover === "education_button"
                                ? <h3 className="font-darkerGrotesque text-lg leading-none text-[#803BFF] font-medium animate-fadeIn">Skill Set</h3>
                                : <div className="bg-[url('/icon/education-icon.png')] bg-cover bg-center w-7 h-7 animate-fadeIn"></div>
                        }
                    </LinkTo>
                    <LinkTo to="contact" smooth={true} duration={1200} id="contact_button" className={"bg-[#DDCDFF] w-10 h-10 rounded-full hover:w-28 duration-300 ease-out flex items-center justify-center text-center pb-[2px] cursor-pointer animate-fadeInTop5"} onMouseEnter={(event) => handleHover(event)} onMouseLeave={() => handleHover(false)}>
                        {
                            isHover === "contact_button"
                                ? <h3 className="font-darkerGrotesque text-lg leading-none text-[#803BFF] font-medium animate-fadeIn">Contact</h3>
                                : <div className="bg-[url('/icon/contact-icon.png')] bg-cover bg-center w-6 h-6 animate-fadeIn"></div>
                        }
                    </LinkTo>
                </div>
            </div>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { display: "block", opacity: 1, scale: 1, transition: { duration: .2, ease: "easeOut" } },
                    hidden: { display: "none", opacity: 0, scale: 0.5 },
                }}
                className="fixed bottom-10 right-10"
            >
                <LinkTo to="profile_top" smooth={true} duration={1000} id="top_button" className={"bg-[#DDCDFF] w-10 h-10 rounded-full hover:w-28 duration-300 ease-out flex items-center justify-center text-center pb-[2px] cursor-pointer animate-fadeInTop4"} onMouseEnter={(event) => handleHover(event)} onMouseLeave={() => handleHover(false)}>
                    {
                        isHover === "top_button"
                            ? <h3 className="font-darkerGrotesque text-lg leading-none text-[#803BFF] font-medium animate-fadeIn">Back to Top</h3>
                            : <div className="bg-[url('/icon/arrow-icon.png')] bg-cover bg-center w-7 h-7 animate-fadeIn"></div>
                    }
                </LinkTo>
            </motion.div>
        </div>
    )
}