"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function PhraseComponent() {

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
        }
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, translateY: 0, transition: { duration: 1, ease: "easeOut" } },
                hidden: { opacity: 0, translateY: 50 },
            }}
            className="w-full h-[200px] flex items-center justify-center"
        >
            <h1 className="font-darkerGrotesque font-medium text-6xl text-center leading-[50px]">"A happy user <br></br> is a secured client"</h1>
        </motion.div>
    )
}