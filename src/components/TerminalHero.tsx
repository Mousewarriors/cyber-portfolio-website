"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
    "SIEM Engineering ...",
    "SOC Operations...",
    "Detection Engineering...",
    "Threat Analysis...",
    "Log Analysis...",
    "AI Integration...",
    "Incident Investigations...",
    "Endpoint Forensics...",
    "Threat Intelligence...",
];

export default function TerminalHero() {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleType = () => {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                setText(currentRole.substring(0, text.length - 1));
                setSpeed(50);
            } else {
                setText(currentRole.substring(0, text.length + 1));
                setSpeed(100);
            }

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleType, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, speed]);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center p-6 pb-24">
            <div className="z-10 w-full max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-matrix/30 bg-matrix/5 text-matrix text-xs font-mono mb-4">
                        STATUS: ACTIVE_PORTFOLIO
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        DIGITAL CYBERSECURITY <br />
                        <span className="text-cyber">CENTER</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl text-lg md:text-xl font-light">
                        Welcome to the secure intelligence hub. Monitoring learning vectors and research conducted by Simon Wood.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="glass-card rounded-lg overflow-hidden border border-cyber/20"
                >
                    <div className="bg-white/5 px-4 py-2 border-b border-cyber/10 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        <span className="ml-2 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                            Intelligence_Terminal_v4.0.1
                        </span>
                    </div>
                    <div className="p-6 font-mono text-sm md:text-base min-h-[160px]">
                        <div className="flex gap-2 text-matrix">
                            <span className="shrink-0">$</span>
                            <p>
                                INITIATING_SEQUENCE: <span className="text-white">RUN_ANALYSIS</span>
                            </p>
                        </div>
                        <div className="flex gap-2 mt-2 text-cyber">
                            <span className="shrink-0">$</span>
                            <p>
                                TARGET_SPECIALIZATION:{" "}
                                <span className="text-white crt-flicker">
                                    {text}
                                    <span className="w-2 h-5 bg-cyber inline-block ml-1 animate-pulse" />
                                </span>
                            </p>
                        </div>
                        <div className="mt-8 text-gray-500 text-xs">
                            [SYSTEM] Connection stable. Neural link verified. Deep packet inspection active...
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Hero Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.1),transparent_70%)]" />
        </section>
    );
}
