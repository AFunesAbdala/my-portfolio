"use client";

import { Element } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AboutMeComponent() {

    const controls = useAnimation();
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden')
        }
    }, [controls, isInView]);

    return (
        <section
            ref={ref}
            className="w-full h-screen"
        >
            <Element name="about_me" className="w-full h-screen flex flex-col justify-center gap-8 xl:gap-0 xl:flex-row xl:items-center xl:justify-between overflow-hidden xl:overflow-visible">
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, translateX: 0, transition: { duration: .5, ease: "easeOut" } },
                        hidden: { opacity: 0, translateX: -30 },
                    }}
                    className="font-darkerGrotesque font-bold text-gray-800 text-5xl xl:text-6xl leading-[50px]"
                >About Me</motion.h1>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, translateX: 0, transition: { duration: 1, ease: "easeOut" } },
                        hidden: { opacity: 0, translateX: 30 },
                    }}
                    className="w-full xl:w-4/6 bg-white rounded-3xl p-8"
                >
                    <p className="font-darkerGrotesque text-xl leading-7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                </motion.div>
            </Element>
        </section>
    )
}