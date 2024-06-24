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
            className="w-full h-[200px] flex items-center justify-center"
        >
            <h1 className="font-darkerGrotesque font-medium text-6xl text-center leading-[50px]">&quot;HappyUser = SecuredClient&quot;</h1>
        </motion.div>
    )
}