"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

export function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading time or wait for resources
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds splash screen

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.8, 1.1, 1],
                            opacity: 1
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-64 h-32 md:w-80 md:h-40"
                    >
                        <Image
                            src={logo}
                            alt="NanTech Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
