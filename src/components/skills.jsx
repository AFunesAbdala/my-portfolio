"use client";

import { Element } from 'react-scroll';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

export default function SkillsComponent() {

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
        <section ref={ref} className="w-[90%] xl:w-full h-screen flex flex-col justify-center">
            <Element name="skills" className="w-full h-screen flex flex-col justify-center gap-10">
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, translateX: 0, transition: { duration: .5, ease: "easeOut" } },
                        hidden: { opacity: 0, translateX: -30 },
                    }}
                    className="font-darkerGrotesque text-6xl font-bold">Skill Set</motion.h1>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-end gap-6">
                        <motion.h1
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateX: 0, transition: { duration: 1, ease: "easeOut", delay: 0.2 } },
                                hidden: { opacity: 0, translateX: 15 },
                            }}
                            className="w-3/6 font-darkerGrotesque text-4xl font-bold text-right">Front End</motion.h1>
                        <div className="w-full flex flex-row flex-wrap justify-end gap-5">
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.7 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.6 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.5 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.4 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.3 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.2 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row flex-wrap justify-end gap-5">
                    <motion.h1
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateX: 0, transition: { duration: 1, ease: "easeOut", delay: 0.6 } },
                                hidden: { opacity: 0, translateX: 15 },
                            }}
                            className="w-3/6 font-darkerGrotesque text-4xl font-bold text-right">Designer</motion.h1>
                        <div className="flex flex-row gap-5">
                        <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.9 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.8 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.7 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                            <motion.div 
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.6 } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="w-16 h-16 bg-[#DDCDFF] rounded-2xl"></motion.div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    )
}