'use client';

import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ArrowUpRight, CheckCircle2, Globe} from "lucide-react";
import {useContactInfo} from "@/hooks/useContactInfo";
import {getIcon} from "@/utils/get-icon";
import SocialLinks from "@/components/SocialLinks";

const SystemStatus = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return (
        <div
            className="group flex items-center gap-5 p-1 pr-6 bg-secondary/10 backdrop-blur-2xl rounded-2xl border border-border/40 w-fit hover:border-primary/30 transition-colors duration-500">
            <div className="relative flex items-center justify-center w-12 h-12 bg-background rounded-xl shadow-inner">
                <span className="relative flex h-3 w-3">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60">
                        System_Uptime
                    </span>
                    <span className="text-[9px] font-mono uppercase opacity-30 tracking-widest">
                        // India_IST
                    </span>
                </div>
                <div
                    className="text-sm md:text-base font-mono font-bold tabular-nums tracking-tighter flex items-center gap-2">
                    <span className="opacity-40 text-[10px]">T-</span>
                    {formattedTime}
                </div>
            </div>
        </div>
    );
};

const InteractionPlate = ({info, index}: { info: any; index: number }) => {
    const [copied, setCopied] = useState(false);
    const IconComponent = getIcon(info.label) || Globe;
    const isEmail = info.label.toLowerCase().includes('email');

    const handleAction = (e: React.MouseEvent) => {
        if (isEmail) {
            e.preventDefault();
            navigator.clipboard.writeText(info.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <motion.a
            href={isEmail ? `mailto:${info.value}` : info.value}
            target={isEmail ? undefined : "_blank"}
            onClick={handleAction}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: index * 0.1, duration: 0.5}}
            className="group relative flex flex-col justify-between p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-card/30 backdrop-blur-xl border border-border/40 hover:border-primary/50 transition-all duration-500 min-h-[160px] md:min-h-[200px]"
        >
            <div className="flex justify-between items-start">
                <div
                    className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <IconComponent size={20} className="md:w-6 md:h-6"/>
                </div>
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div key="check" initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
                                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500"/>
                            </motion.div>
                        ) : (
                            <ArrowUpRight
                                className="w-5 h-5 md:w-6 md:h-6 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">
                    {info.label}
                </span>
                <span className="text-lg md:text-2xl font-bold tracking-tight truncate pr-4">
                    {isEmail ? info.value : info.description || "Connect"}
                </span>
            </div>
        </motion.a>
    );
};

export default function ContactSection() {
    const {contactInfo, isLoading} = useContactInfo();

    if (isLoading) return <div
        className="py-40 text-center font-mono opacity-20 animate-pulse uppercase tracking-[0.3em]">establishing_uplink...</div>;

    return (
        <section id="contact" className="py-20 md:py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    <div className="lg:sticky lg:top-48 h-fit lg:w-1/3 space-y-10 md:space-y-16">
                        <div className="space-y-6 md:space-y-8">
                            <div
                                className="h-1 w-12 md:w-20 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)]"/>
                            <h2 className="text-6xl md:text-8xl lg:text-[7.5vw] font-bold tracking-tighter leading-[0.8]">
                                Reach<br/>Out<span className="text-primary/30">.</span>
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl opacity-60 max-w-sm leading-relaxed font-serif italic">
                            Currently open to full-time roles and high-impact freelance collaborations worldwide.
                        </p>

                        <SystemStatus/>
                    </div>

                    <div className="lg:w-2/3 flex flex-col gap-6 md:gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {contactInfo?.map((info, index) => (
                                <InteractionPlate key={info.label} info={info} index={index}/>
                            ))}
                        </div>

                        <div
                            className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                            <div className="space-y-4 w-full md:w-auto">
                                <span
                                    className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 block mb-2">Global_Nodes</span>
                                <div className="scale-110 origin-left">
                                    <SocialLinks/>
                                </div>
                            </div>

                            {/* Optional: Book Strategy Call
                                <a href="#" className="w-full md:w-auto flex items-center justify-center gap-4 px-8 py-5 bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-900 rounded-[2rem] hover:scale-105 transition-all duration-500 shadow-2xl group">
                                    <span className="text-sm font-bold uppercase tracking-widest">Book Strategy Call</span>
                                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Atmospheric Background Blobs */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -mr-40 -mt-40"/>
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -ml-20 -mb-20"/>
        </section>
    );
}