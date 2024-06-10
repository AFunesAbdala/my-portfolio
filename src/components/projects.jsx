"use client";

import Link from "next/link";

import { Element } from 'react-scroll';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

export default function MyProjectsComponent() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const controls = useAnimation()
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, { once: false })
    const controls2 = useAnimation()
    const ref3 = useRef(null)
    const isInView3 = useInView(ref3, { once: false })
    const controls3 = useAnimation()
    const ref4 = useRef(null)
    const isInView4 = useInView(ref4, { once: false })
    const controls4 = useAnimation()
    const ref5 = useRef(null)
    const isInView5 = useInView(ref5, { once: false })
    const controls5 = useAnimation()
    

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }

        if (isInView2) {
            controls2.start("visible")
        } else {
            controls2.start("hidden")
        }

        if (isInView3) {
            controls3.start("visible")
        } else {
            controls3.start("hidden")
        }

        if (isInView4) {
            controls4.start("visible")
        } else {
            controls4.start("hidden")
        }

        if (isInView5) {
            controls5.start("visible")
        } else {
            controls5.start("hidden")
        }
    }, [isInView, isInView2, isInView3, isInView4, isInView5])


    return (
        <section className="w-full flex flex-col items-center">
            <Element name="my_projects" className="w-full flex flex-col items-center gap-5">
                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, translateX: 0, transition: { duration: .5, ease: "easeOut" } },
                        hidden: { opacity: 0, translateX: -30 },
                    }}
                    className="w-3/6 font-darkerGrotesque text-6xl font-bold"
                >My Projects</motion.h1>
                <div className="w-full flex flex-col items-center gap-24">
                    <div className="w-full z-10 flex flex-col items-center gap-2">
                        <div className="w-full flex flex-row gap-16 overflow-hidden py-10 whitespace-nowrap">
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="absolute w-48 h-full bg-gradient-to-r from-[#F5F0FF] to-transparent left-0 z-20"></div>
                            <div className="absolute w-48 h-full bg-gradient-to-l from-[#F5F0FF] to-transparent right-0 z-20"></div>
                        </div>
                        <motion.div
                            ref={ref2}
                            initial="hidden"
                            animate={controls2}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.5, ease: "easeOut" } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="relative w-[600px] flex flex-row items-center justify-between bg-white px-9 py-6 rounded-2xl">
                            <div className="w-[80%] flex flex-col gap-2">
                                <h2 className="font-darkerGrotesque font-medium text-4xl">Care with Love</h2>
                                <p className="font-darkerGrotesque text-xl leading-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="w-fit flex flex-col gap-6">
                                <Link href="https://proyecto-final-front-ashy.vercel.app" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/link-icon.png')] bg-center bg-cover"></div>
                                </Link>
                                <Link href="/care-with-love" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/info-icon.png')] bg-center bg-cover"></div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full z-10 flex flex-col items-center gap-2">
                        <div className="w-full flex flex-row gap-16 overflow-hidden py-10 whitespace-nowrap">
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="absolute w-48 h-full bg-gradient-to-r from-[#F5F0FF] to-transparent left-0 z-20"></div>
                            <div className="absolute w-48 h-full bg-gradient-to-l from-[#F5F0FF] to-transparent right-0 z-20"></div>
                        </div>
                        <motion.div
                            ref={ref3}
                            initial="hidden"
                            animate={controls3}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.5, ease: "easeOut" } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="relative w-[600px] flex flex-row items-center justify-between bg-white px-9 py-6 rounded-2xl">
                            <div className="w-[80%] flex flex-col gap-2">
                                <h2 className="font-darkerGrotesque font-medium text-4xl">Care with Love</h2>
                                <p className="font-darkerGrotesque text-xl leading-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="w-fit flex flex-col gap-6">
                                <Link href="https://proyecto-final-front-ashy.vercel.app" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/link-icon.png')] bg-center bg-cover"></div>
                                </Link>
                                <Link href="/care-with-love" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/info-icon.png')] bg-center bg-cover"></div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full z-10 flex flex-col items-center gap-2">
                        <div className="w-full flex flex-row gap-16 overflow-hidden py-10 whitespace-nowrap">
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="absolute w-48 h-full bg-gradient-to-r from-[#F5F0FF] to-transparent left-0 z-20"></div>
                            <div className="absolute w-48 h-full bg-gradient-to-l from-[#F5F0FF] to-transparent right-0 z-20"></div>
                        </div>
                        <motion.div
                            ref={ref4}
                            initial="hidden"
                            animate={controls4}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.5, ease: "easeOut" } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="relative w-[600px] flex flex-row items-center justify-between bg-white px-9 py-6 rounded-2xl">
                            <div className="w-[80%] flex flex-col gap-2">
                                <h2 className="font-darkerGrotesque font-medium text-4xl">Care with Love</h2>
                                <p className="font-darkerGrotesque text-xl leading-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="w-fit flex flex-col gap-6">
                                <Link href="https://proyecto-final-front-ashy.vercel.app" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/link-icon.png')] bg-center bg-cover"></div>
                                </Link>
                                <Link href="/care-with-love" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/info-icon.png')] bg-center bg-cover"></div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full z-10 flex flex-col items-center gap-2">
                        <div className="w-full flex flex-row gap-16 overflow-hidden py-10 whitespace-nowrap">
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="w-fit grid grid-rows-1 grid-flow-col gap-16 animate-slide">
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                                <div className="flex flex-col gap-2 p-3 h-[350px] w-[600px] rounded-2xl border-2 border-purple-200/80 shadow-xl shadow-purple-200/50 bg-white">
                                    <div className="flex flex-row gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-purple-200"></div>
                                    </div>
                                    <div className="w-full grow bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="absolute w-48 h-full bg-gradient-to-r from-[#F5F0FF] to-transparent left-0 z-20"></div>
                            <div className="absolute w-48 h-full bg-gradient-to-l from-[#F5F0FF] to-transparent right-0 z-20"></div>
                        </div>
                        <motion.div
                            ref={ref5}
                            initial="hidden"
                            animate={controls5}
                            variants={{
                                visible: { opacity: 1, translateY: 0, transition: { duration: 1.5, ease: "easeOut" } },
                                hidden: { opacity: 0, translateY: -30 },
                            }}
                            className="relative w-[600px] flex flex-row items-center justify-between bg-white px-9 py-6 rounded-2xl">
                            <div className="w-[80%] flex flex-col gap-2">
                                <h2 className="font-darkerGrotesque font-medium text-4xl">Care with Love</h2>
                                <p className="font-darkerGrotesque text-xl leading-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="w-fit flex flex-col gap-6">
                                <Link href="https://proyecto-final-front-ashy.vercel.app" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/link-icon.png')] bg-center bg-cover"></div>
                                </Link>
                                <Link href="/care-with-love" className="w-12 h-12 bg-[#DDCDFF] rounded-xl flex flex-row items-center justify-center hover:shadow-lg hover:shadow-purple-200 duration-300">
                                    <div className="w-8 h-8 bg-[url('/icon/info-icon.png')] bg-center bg-cover"></div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="pt-10 w-3/6 flex flex-col gap-6 items-center justify-center">
                        <h1 className="font-darkerGrotesque font-medium text-4xl">And we&apos;re just getting better...</h1>
                        <div className="w-12 h-12 bg-[url('/icon/loading-icon.png')] bg-center bg-cover animate-spin"></div>
                    </div>
                </div>
            </Element>
        </section>
    )
}