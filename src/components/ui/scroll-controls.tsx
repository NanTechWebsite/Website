"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollControls() {
    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledPast = window.scrollY > 100;
            const nearBottom =
                window.scrollY + window.innerHeight >= document.body.scrollHeight - 100;
            setShowTop(scrolledPast);
            setShowBottom(!nearBottom);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
                {showTop && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            aria-label="Scroll to top"
                            className="rounded-full w-12 h-12 p-0 shadow-lg border border-white/20 bg-black/80 backdrop-blur-md"
                            onClick={scrollToTop}
                        >
                            <ArrowUp className="w-6 h-6" />
                        </Button>
                    </motion.div>
                )}

                {showBottom && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            aria-label="Scroll to bottom"
                            className="rounded-full w-12 h-12 p-0 shadow-lg border border-white/20 bg-black/80 backdrop-blur-md"
                            onClick={scrollToBottom}
                        >
                            <ArrowDown className="w-6 h-6" />
                        </Button>
                    </motion.div>
                )}
            </div>
        </AnimatePresence>
    );
}
