"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, ChevronRight, HardDrive } from "lucide-react";

const reports = [
    {
        id: "PROJECT-001",
        title: "Aegis-Forge",
        description: "An automated Red Teaming harness for AI agents with isolated sandboxing and real-time policy enforcement.",
        tags: ["Red Teaming", "AI Safety", "Sandboxing"],
        date: "2026-02-27",
        debrief: "https://github.com/Mousewarriors/Aegis-Forge/blob/main/README.md",
        source: "https://github.com/Mousewarriors/Aegis-Forge"
    },
    {
        id: "PROJECT-002",
        title: "SentinelPR",
        description: "Automated, high-precision security gate for GitHub Pull Requests. Orchestrates deterministic static analysis with AI-powered semantic audits.",
        tags: ["GitHub Actions", "AppSec", "AI Audit"],
        date: "2026-02-27",
        debrief: "https://github.com/Mousewarriors/SentinelPR/blob/main/README.md",
        source: "https://github.com/Mousewarriors/SentinelPR"
    },
    {
        id: "PROJECT-003",
        title: "SIEM Engineering",
        description: "Full-stack Security Information and Event Management implementation with real-time alerting and incident responde workflows.",
        tags: ["SIEM", "SOC", "Blue Team"],
        date: "2026-02-20",
        debrief: "https://github.com/Mousewarriors/SEIM-Project/blob/main/README.md",
        source: "https://github.com/Mousewarriors/SEIM-Project"
    },
    {
        id: "RESEARCH-001",
        title: "Linux Vulnerability Assessment",
        description: "Comprehensive audit of file permissions and system hardening techniques for Linux environments.",
        tags: ["OS Hardening", "Linux", "Permissions"],
        date: "2026-02-18",
        debrief: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/blob/main/File%20permissions%20in%20Linux%20-%20Portfolio.pdf",
        source: "https://github.com/Mousewarriors/Cybersecurity-Portfolio"
    },
    {
        id: "RESEARCH-002",
        title: "Network Incident Analysis",
        description: "Deep dive into DoS attack vectors and defensive strategies for enterprise networks.",
        tags: ["DoS", "Network Security", "Detection"],
        date: "2026-02-16",
        debrief: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/tree/main/DoS%20attack%20Portfolio",
        source: "https://github.com/Mousewarriors/Cybersecurity-Portfolio"
    },
    {
        id: "REPORT-001",
        title: "SQL Injection Detection and Mitigation",
        description: "Deep dive into SOC127 alert. Analyzing malicious payloads and implementing defensive filtering.",
        tags: ["SQLI", "SOC", "Blue Team"],
        date: "2026-02-19",
        debrief: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/blob/main/SOC127%20-%20SQL%20Injection%20Detected/SOC127%20-%20SQL%20Injection%20Detected%20summary.txt",
        source: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/tree/main/SOC127%20-%20SQL%20Injection%20Detected"
    },
    {
        id: "REPORT-002",
        title: "Vulnerability Assessment: SharePoint RCE",
        description: "Analysis of CVE-2025-53770 exploiting ToolShell Auth Bypass for Remote Code Execution.",
        tags: ["CVE", "RCE", "SharePoint"],
        date: "2026-02-15",
        debrief: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/blob/main/SOC342%20-%20CVE%E2%80%912025%E2%80%9153770%20SharePoint%20ToolShell%20Auth%20Bypass%20and%20RCE/Incident%20summary.pdf",
        source: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/tree/main/SOC342%20-%20CVE%E2%80%912025%E2%80%9153770%20SharePoint%20ToolShell%20Auth%20Bypass%20and%20RCE"
    },
    {
        id: "REPORT-003",
        title: "Palo Alto Command Injection Analysis",
        description: "Exploitation and defense strategies for CVE-2024-3400 (PAN-OS).",
        tags: ["Network", "Exploit", "Defense"],
        date: "2026-02-10",
        debrief: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/blob/main/SOC274%20-%20Palo%20Alto%20Networks%20PAN-OS%20Command%20Injection%20Vulnerability%20Exploitation%20(CVE-2024-3400)/PAN%E2%80%91OS%20Command%20Injection%20(CVE%E2%80%912024%E2%80%913400)%20Investigation%20-%20Google%20Docs.pdf",
        source: "https://github.com/Mousewarriors/Cybersecurity-Portfolio/tree/main/SOC274%20-%20Palo%20Alto%20Networks%20PAN-OS%20Command%20Injection%20Vulnerability%20Exploitation%20(CVE-2024-3400)"
    },
];

export default function ProjectVault() {
    return (
        <section className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-cyber/30 flex-grow" />
                <h2 className="text-2xl font-mono tracking-widest uppercase">
                    <span className="text-cyber">Intelligence</span>_Vault
                </h2>
                <div className="h-px bg-cyber/30 flex-grow" />
            </div>

            <div className="space-y-6">
                {reports.map((report, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-cyber/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                        <div className="relative p-6 sm:p-8 rounded-xl border border-white/5 hover:border-cyber/30 transition-all flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-cyber group-hover:text-matrix group-hover:scale-110 transition-all">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="w-[1px] h-full bg-gradient-to-b from-cyber/30 to-transparent mt-4" />
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">
                                        {report.id} / SEC_CLASS: CONFIDENTIAL
                                    </span>
                                    <span className="text-[10px] font-mono text-gray-500">{report.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{report.title}</h3>
                                <p className="text-gray-400 mb-6 font-light">{report.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {report.tags.map((tag, j) => (
                                        <span key={j} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-mono text-cyber">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="shrink-0 flex md:flex-col gap-2 w-full md:w-auto mt-4 md:mt-0">
                                <a
                                    href={report.debrief}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-grow md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded bg-cyber text-background text-xs font-bold hover:bg-white transition-colors"
                                >
                                    DEBRIEF <ChevronRight className="w-4 h-4" />
                                </a>
                                <a
                                    href={report.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-grow md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors"
                                >
                                    <HardDrive className="w-4 h-4" /> SOURCE
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://github.com/Mousewarriors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full border border-cyber/50 text-cyber font-mono text-xs tracking-widest hover:bg-cyber/10 transition-all uppercase"
                >
                    Access Full Archive [Encrypted]
                </a>
            </div>
        </section>
    );
}
