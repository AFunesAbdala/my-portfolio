"use client";

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function PhraseComponent() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, translateY: 0, transition: { duration: 1, ease: "easeOut" } },
                hidden: { opacity: 0, translateY: 50 },
            }}
            className="w-full flex flex-col items-center justify-center pt-20"
        >
            <h1 className="w-full font-darkerGrotesque font-medium text-5xl xl:text-6xl text-center leading-10 xl:leading-[50px]">&quot;HappyUser = SecuredClient&quot;</h1>
        </motion.div>
    )
}