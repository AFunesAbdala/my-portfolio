"use client";

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';

export default function ExperienceComponent() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const controls = useAnimation()
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, { once: false })
    const controls2 = useAnimation()
    const ref3 = useRef(null)
    const isInView3 = useInView(ref3, { once: false })
    const controls3 = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView])

    return (
        <div ref={ref} className="w-[90%] xl:w-full h-screen flex flex-col justify-center overflow-hidden xl:overflow-visible">
            <Element name='experience' className="w-full h-screen flex flex-col justify-center gap-10">
                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, translateX: 0, transition: { duration: .5, ease: "easeOut" } },
                        hidden: { opacity: 0, translateX: -30 },
                    }}
                    className="w-3/6 font-darkerGrotesque text-6xl font-bold"
                >Experience</motion.h1>
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, translateX: 0, transition: { duration: 1.2, ease: "easeOut"}, delay: 0.1 },
                            hidden: { opacity: 0, translateX: 100 },
                        }}
                        className="bg-white rounded-3xl px-7 py-6 flex flex-row items-center gap-7"
                    >
                        <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-darkerGrotesque font-bold text-xl text-gray-800 leading-none">National University of La Rioja</h1>
                            <h1 className="font-darkerGrotesque font-medium text-xl text-gray-800">FullStack Developer</h1>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, translateX: 0, transition: { duration: 1.2, ease: "easeOut"  , delay: 0.2} },
                            hidden: { opacity: 0, translateX: 100 },
                        }}
                        className="bg-white rounded-3xl px-7 py-6 flex flex-row items-center gap-7"
                    >
                        <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-darkerGrotesque font-bold text-xl text-gray-800 leading-none">National University of La Rioja</h1>
                            <h1 className="font-darkerGrotesque font-medium text-xl text-gray-800">FullStack Developer</h1>
                        </div>
                    </motion.div>
                </div>
            </Element>
        </div>
    )
}