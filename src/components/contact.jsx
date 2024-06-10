"use client";

import Link from "next/link";

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

export default function ContactComponent() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView])

    return (
        <div className="w-full pb-20 flex flex-col gap-5">
            <motion.h1
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, translateX: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    hidden: { opacity: 0, translateX: -30 },
                }}
                className="w-3/6 font-darkerGrotesque text-6xl font-bold">Contact</motion.h1>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    hidden: { opacity: 0, translateY: 20 },
                }}
                className="bg-white rounded-3xl px-7 py-6 flex flex-row items-center justify-around gap-7">
                <div className="flex flex-row items-center gap-4">
                    <Link href="https://www.linkedin.com/in/alejo-funes-abdala/" target="_blank" className="w-14 h-14 flex flex-row items-center justify-center bg-[#DDCDFF] rounded-xl hover:shadow-lg hover:shadow-purple-200 duration-300">
                        <div className="bg-[url('/icon/linkedin-icon.png')] w-12 h-12 bg-center bg-cover"></div>
                    </Link>
                    <h1 className="font-darkerGrotesque font-medium text-xl text-gray-800">LinkedIn</h1>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Link href="https://www.behance.net/alejofunesd4eb" target="_blank" className="w-14 h-14 flex flex-row items-center justify-center bg-[#DDCDFF] rounded-xl hover:shadow-lg hover:shadow-purple-200 duration-300">
                        <div className="bg-[url('/icon/behance-icon.png')] w-12 h-12 bg-center bg-cover"></div>
                    </Link>
                    <h1 className="font-darkerGrotesque font-medium text-xl text-gray-800">Behance</h1>
                </div>
                <div ref={ref} className="flex flex-row items-center gap-4">
                    <Link href="mailto:alejofunes1@gmail.com" target="_blank" className="w-14 h-14 flex flex-row items-center justify-center bg-[#DDCDFF] rounded-xl hover:shadow-lg hover:shadow-purple-200 duration-300">
                        <div className="bg-[url('/icon/email-icon.png')] w-12 h-12 bg-center bg-cover"></div>
                    </Link>
                    <h1 className="font-darkerGrotesque font-medium text-xl text-gray-800">alejofunes1@gmail.com</h1>
                </div>
            </motion.div>
        </div>
    )
}