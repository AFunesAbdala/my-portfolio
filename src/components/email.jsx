"use client";

import { Element } from 'react-scroll';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

export default function EmailComponent() {

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
        <div className="w-full h-screen flex flex-row items-center justify-between">
            <Element name="contact" className="w-full h-screen flex flex-row items-center justify-between">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, translateY: 0, transition: { duration: 1.5, ease: "easeOut", } },
                        hidden: { opacity: 0, translateY: 20 },
                    }}
                    className="h-4/6 w-3/6 bg-[#803BFF] flex flex-col gap-8 rounded-3xl px-8 py-6"
                >
                    <form className="flex flex-col gap-2 grow">
                        <div className="flex flex-col gap-2">
                            <label className="font-darkerGrotesque font-medium text-xl text-white">Email:</label>
                            <input className="rounded-lg px-4 pb-1 font-darkerGrotesque font-medium text-xl text-gray-800"></input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-darkerGrotesque font-medium text-xl text-white">Subject:</label>
                            <input className="rounded-lg px-4 pb-1 font-darkerGrotesque font-medium text-xl text-gray-800"></input>
                        </div>
                        <div className="flex flex-col gap-2 grow">
                            <label className="font-darkerGrotesque font-medium text-xl text-white">Message:</label>
                            <textarea className="rounded-lg px-4 py-3 font-darkerGrotesque font-medium text-xl text-gray-800 leading-5 grow"></textarea>
                        </div>
                        <button className="mt-3 self-center flex flex-row items-center pt-2 pb-[10px] px-4 bg-[#DDCDFF] w-fit rounded-xl gap-1 hover:shadow-lg hover:shadow-purple-200/35 duration-300 font-darkerGrotesque font-medium text-lg text-[#803BFF] leading-none">Send Mail</button>
                    </form>
                </motion.div>
                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, translateX: 0, transition: { duration: 1, ease: "easeOut" } },
                        hidden: { opacity: 0, translateX: 30 },
                    }}
                    className="font-darkerGrotesque font-bold text-right text-gray-800 text-6xl leading-[50px]"
                >Let’s stay<br></br>in touch!</motion.h1>
            </Element>
        </div>
    )
}