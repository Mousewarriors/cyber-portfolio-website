"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Terminal, Activity, Zap, Cpu, Search, Database } from "lucide-react";

const stats = [
    { label: "Completed Hubs", value: "12", icon: Shield, color: "text-matrix" },
    { label: "Active Research", value: "03", icon: Activity, color: "text-cyber" },
    { label: "Secure Vaults", value: "08", icon: Lock, color: "text-yellow-400" },
    { label: "Neural Entropy", value: "1.2ms", icon: Zap, color: "text-red-400" },
];

const labs = [
    {
        title: "Aegis Forge",
        status: "Live",
        category: "Red Teaming",
        icon: Shield,
        size: "md:col-span-2 md:row-span-2",
        href: "https://github.com/Mousewarriors/Aegis-Forge",
        image: "/aegis-forge.jpg"
    },
    {
        title: "SentinelPR",
        status: "Production",
        category: "AppSec Gate",
        icon: Lock,
        size: "md:col-span-2 md:row-span-1",
        href: "https://github.com/Mousewarriors/SentinelPR",
        image: "/workflow.png"
    },
    {
        title: "SIEM Engineering",
        status: "Completed",
        category: "SOC Analysis",
        icon: Terminal,
        size: "md:col-span-2 md:row-span-2",
        href: "https://github.com/Mousewarriors/SEIM-Project",
        image: "/dashboard.jpg"
    },
    {
        title: "Network Incident Analysis",
        status: "Active",
        category: "Monitoring",
        icon: Activity,
        size: "col-span-1 row-span-1",
        href: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/tree/main/DoS%20attack%20Portfolio"
    },
    {
        title: "Linux Vulnerability",
        status: "Encrypted",
        category: "Compliance",
        icon: Database,
        size: "col-span-1 row-span-1",
        href: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/blob/main/File%20permissions%20in%20Linux%20-%20Portfolio.pdf"
    },
    {
        title: "SQL Investigation",
        status: "Ready",
        category: "Detection",
        icon: Search,
        size: "col-span-1 row-span-1",
        href: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/blob/main/SOC127%20-%20SQL%20Injection%20Detected/SOC127%20-%20SQL%20Injection%20Detected%20summary.txt"
    },
    {
        title: "SharePoint RCE",
        status: "Stable",
        category: "Engine",
        icon: Cpu,
        size: "col-span-1 row-span-1",
        href: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/blob/main/SOC342%20-%20CVE%E2%80%912025%E2%80%9153770%20SharePoint%20ToolShell%20Auth%20Bypass%20and%20RCE/Incident%20summary.pdf"
    },
];

export default function BentoDashboard() {
    return (
        <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">OPERATIONS <span className="text-matrix">DASHBOARD</span></h2>
                    <p className="text-gray-500 font-mono text-sm max-w-md">
                        Real-time tracking of cybersecurity module progression and tactical intelligence gathering.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-4 rounded border border-cyber/10 text-center min-w-[120px]"
                        >
                            <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color} opacity-80`} />
                            <div className="text-xl font-bold font-mono">{stat.value}</div>
                            <div className="text-[10px] uppercase text-gray-500 tracking-tighter">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[140px]">
                {labs.map((lab, i) => (
                    <motion.a
                        key={i}
                        href={lab.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, borderColor: "rgba(0, 243, 255, 0.4)" }}
                        className={`glass-card p-6 rounded-lg ${lab.size} relative overflow-hidden group cursor-pointer border border-cyber/5 transition-all duration-300 hover:bg-transparent`}
                    >
                        {lab.image && (
                            <div
                                className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity bg-cover bg-center"
                                style={{ backgroundImage: `url(${lab.image})` }}
                            />
                        )}

                        {/* Hover Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber/40 -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[2s] ease-in-out pointer-events-none" />

                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className={`p-2 rounded bg-white/5 border border-white/10 group-hover:border-cyber/30 group-hover:bg-cyber/5 transition-colors`}>
                                    <lab.icon className="w-5 h-5 text-cyber group-hover:text-matrix transition-colors" />
                                </div>
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-white/5 text-[9px] uppercase tracking-widest text-gray-400">
                                    <div className={`w-1.5 h-1.5 rounded-full ${lab.status === 'Completed' ? 'bg-matrix' : 'bg-cyber'} animate-pulse`} />
                                    {lab.status}
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase text-matrix tracking-widest mb-1 font-mono">{lab.category}</p>
                                <h3 className="text-lg font-bold group-hover:text-cyber transition-colors">{lab.title}</h3>
                            </div>
                        </div>

                        {/* Background Texture */}
                        {!lab.image && (
                            <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                <lab.icon size={120} />
                            </div>
                        )}
                    </motion.a>
                ))}

                {/* Action card */}
                <div className="glass-card p-6 rounded-lg col-span-1 row-span-1 flex flex-col items-center justify-center border-dashed border-cyber/30 bg-cyber/5 hover:bg-cyber/10 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-cyber/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <span className="text-cyber text-2xl font-bold">+</span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-cyber font-bold">New Mission</p>
                </div>
            </div>
        </section>
    );
}
