"use client";

import Link from "next/link";
import { useState } from "react";
import { Link as LinkTo } from 'react-scroll';


export default function ProfileComponent() {

    const [isHover, setIsHover] = useState()

    const handleHover = (event) => {
        if (event) {
            setIsHover(event.target.id)
        } else {
            setIsHover(false)
        }
    }

    return (
        <section className="h-screen w-full flex flex-col gap-20 justify-center items-center">
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
            <div className="w-full flex flex-row items-center justify-between 2xl:pb-8">
                <div className="flex flex-col gap-5">
                    <h1 className="font-darkerGrotesque font-bold text-gray-800 text-6xl leading-[50px] animate-fadeInLeft">So,<br></br>Welcome! </h1>
                    <h2 className="w-60 2xl:w-fit font-darkerGrotesque font-medium text-gray-800 text-xl leading-5 animate-fadeInTopShort1">I’m Alejo, a Front End developer and a UX/UI designer.</h2>
                    <Link href='https://drive.google.com/file/d/18pkpxiqoPESE-i53UBECIpaNYsseMiL8/view' target="_blank" className="flex flex-row items-center pt-2 pb-[10px] px-4 bg-[#DDCDFF] w-fit rounded-xl gap-1 hover:shadow-lg hover:shadow-purple-200 duration-300 animate-fadeInTopShort2">
                        <p className="font-darkerGrotesque font-medium text-lg text-[#803BFF] leading-none">Download CV</p>
                        <div className="w-4 h-4 bg-[url('/icon/download-icon.png')] bg-cover bg-center"></div>
                    </Link>
                </div>
                <div className="w-[300px] h-[300px] bg-gray-500 rounded-3xl animate-fadeInRight"></div>
            </div>
        </section>
    )
}