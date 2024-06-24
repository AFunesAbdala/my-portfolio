"use client";

import useGlobalStore from "@/store";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Element } from 'react-scroll';

export default function ProfileComponent() {

    const ref = useRef(null)
    const { setRef } = useGlobalStore()

    useEffect(() => {
        setRef(ref)
    }, [])

    return (
        <Element name="profile_top" className="h-screen w-full flex flex-col gap-20 justify-center items-center">
            <div ref={ref} className="w-full flex flex-col gap-8 pt-28 xl:p-0 xl:flex-row items-center justify-between 2xl:pb-8">
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
        </Element>
    )
}