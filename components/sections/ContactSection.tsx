'use client';

import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useContactInfo} from "@/hooks/useContactInfo";
import SocialLinks from "@/components/SocialLinks";
import {
    IconArrowUpRight,
    IconCircleCheck,
    IconCode,
    IconCpu,
    IconMail,
    IconShare,
    IconSitemap,
    IconStackFront,
    IconTerminal,
    IconWorld
} from "@tabler/icons-react";

const statuses = [
    {label: "Current_Focus", value: "Distributed_Systems_Architecture", icon: <IconCode size={14}/>},
    {label: "Expansion", value: "Scaling_Global_Developer_Nodes", icon: <IconShare size={14}/>},
    {label: "Active_Sprint", value: "High_Fidelity_Interaction_Design", icon: <IconStackFront size={14}/>},
    {label: "Networking", value: "Open_For_Strategic_Partnerships", icon: <IconSitemap size={14}/>}
];

const ActivityStack = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex((prev) => (prev + 1) % statuses.length), 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col gap-2.5 w-full max-w-[340px] shrink-0">
            <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]"/>
                    <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-primary/50 font-semibold">
                        Core_Protocol
                    </span>
                </div>
                <div className="flex gap-1">
                    {statuses.map((_, i) => (
                        <div key={i}
                             className={`h-1 w-1 rounded-full transition-colors duration-500 ${index === i ? 'bg-primary' : 'bg-primary/10'}`}/>
                    ))}
                </div>
            </div>

            <div
                className="relative h-14 w-full bg-secondary/[0.03] backdrop-blur-sm rounded-xl border border-border/30 px-4 flex flex-col justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 4}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -4}}
                        transition={{duration: 0.3, ease: "easeOut"}}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-primary/40 shrink-0">{statuses[index].icon}</span>
                            <span
                                className="text-[7px] font-mono uppercase tracking-[0.5em] text-muted-foreground/80 font-bold">
                                {statuses[index].label}
                            </span>
                        </div>

                        <div className="flex items-center">
                            <h4 className="text-[11px] md:text-[13px] font-mono font-medium tracking-[0.15em] text-foreground/80 uppercase leading-none">
                                {statuses[index].value.split('').map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{delay: i * 0.015}}
                                    >
                                        {char === '_' ? (
                                            <span className="text-primary/30 mx-[2px] font-bold">·</span>
                                        ) : char}
                                    </motion.span>
                                ))}
                            </h4>

                            <motion.span
                                animate={{opacity: [1, 0]}}
                                transition={{duration: 0.8, repeat: Infinity}}
                                className="w-1.5 h-3 bg-primary/40 ml-2"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="relative h-[1px] w-full bg-border/20 rounded-full overflow-hidden">
                <motion.div
                    key={`progress-${index}`}
                    initial={{x: '-100%'}}
                    animate={{x: '0%'}}
                    transition={{duration: 4.5, ease: "linear"}}
                    className="absolute inset-0 bg-primary/30"
                />
            </div>
        </div>
    );
};

const SystemClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });

    return (
        <div
            className="flex items-center gap-[3vw] md:gap-6 p-2 pr-[5vw] md:pr-8 bg-card/40 backdrop-blur-2xl border border-border/40 rounded-[2rem] md:rounded-[2.5rem] w-full max-w-sm lg:max-w-none lg:w-fit shadow-2xl shadow-primary/5 group transition-all duration-500">

            <div
                className="relative flex items-center justify-center w-[18vw] h-[18vw] max-w-[80px] max-h-[80px] min-w-[60px] min-h-[60px] bg-background border border-border/50 rounded-[1.5rem] md:rounded-[2rem] shadow-inner group-hover:border-primary/30 transition-all duration-500 overflow-hidden shrink-0">
                <IconTerminal size="35%"
                              className="text-primary opacity-40 group-hover:opacity-100 transition-opacity"/>

                <motion.div
                    animate={{rotate: 360}}
                    transition={{duration: 10, repeat: Infinity, ease: "linear"}}
                    className="absolute inset-0 border-[2px] border-dashed border-primary/10 rounded-full scale-[1.2] md:scale-[1.4]"
                />
            </div>

            <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <span
                        className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground/40 font-bold truncate">
                        Terminal_Output
                    </span>
                    <span
                        className="text-[7px] md:text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                        IST
                    </span>
                </div>

                <span
                    className="text-[8vw] sm:text-4xl md:text-5xl lg:text-4xl font-mono font-bold tabular-nums tracking-tighter text-foreground leading-none mt-1 md:mt-2">
                    {formattedTime}
                </span>
            </div>
        </div>
    );
};

interface InteractionInfo {
    label: string;
    value: string;
    description?: string;
    icon?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

const InteractionPlate = ({ info, index }: { info: InteractionInfo; index: number }) => {
    const [copied, setCopied] = useState(false);
    const isEmail = info.label.toLowerCase().includes("email");
    const isLead = index === 0;
    const IconComponent = info.icon || (isEmail ? IconMail : IconWorld);
    const href = isEmail ? `mailto:${info.value}` : info.value;

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
            href={href}
            target={isEmail ? undefined : "_blank"}
            onClick={handleAction}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
            aria-label={info.label}
            className={`group relative flex flex-col justify-between overflow-hidden border transition-all duration-700 h-full 
        min-h-[420px] lg:min-h-[360px]
        ${isLead
                ? "p-10 md:p-16 rounded-[4rem] md:col-span-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 border-transparent shadow-2xl"
                : "p-10 rounded-[3rem] bg-zinc-100/50 dark:bg-zinc-900/40 backdrop-blur-2xl border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800"
            }`}
        >
            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]
            ${isLead ? "bg-white/10 dark:bg-zinc-100" : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm"}`}>
                        <IconComponent size={26} strokeWidth={1.2} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                            {isLead && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                            <span className={`text-[10px] font-mono leading-none tracking-[0.4em] font-bold uppercase
                ${isLead ? "text-emerald-500" : "text-zinc-400"}`}>
                {isLead ? "Primary_Uplink" : `Node_0${index + 1}`}
              </span>
                        </div>
                        <span className="text-[11px] font-mono opacity-30 uppercase tracking-[0.2em] font-medium">
              {info.label}
            </span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {copied ? (
                        <motion.div
                            key="check"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <IconCircleCheck size={32} className="text-emerald-500" strokeWidth={1.5} />
                        </motion.div>
                    ) : (
                        <div
                            className={`p-2.5 rounded-xl transition-all ${isLead ? 'bg-white/5 border border-white/10' : 'bg-zinc-500/5 opacity-60 group-hover:opacity-100'}`}>
                            <IconArrowUpRight size={20}/>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="z-10 mt-8 md:mt-16">
                <h4 className={`font-calSans tracking-tight leading-[0.9] break-words
          ${isLead ? "text-5xl md:text-[5vw] lg:text-[5.5rem] truncate py-3" : "text-3xl md:text-4xl"}`}>
                    {isEmail ? info.value : info.description}
                </h4>
            </div>

            {isLead && (
                <span className="absolute -bottom-10 -right-6 text-[22rem] font-calSans opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none leading-none -rotate-12 transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-110">
          @
        </span>
            )}

            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />
        </motion.a>
    );
};

export default function ContactSection() {
    const {contactInfo, isLoading} = useContactInfo();

    if (isLoading) return <div
        className="py-40 text-center font-mono opacity-20 text-4xl animate-pulse uppercase tracking-tighter">Initializing_Uplink...</div>;

    return (
        <section id="contact" className="py-32 md:py-56 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div
                                initial={{width: 0}}
                                whileInView={{width: 48}}
                                className="h-1 w-16 bg-primary rounded-full"
                            />
                            <span
                                className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/80">COMMUNICATION_TECH</span>
                        </div>

                        <h2 className="text-8xl md:text-[12vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase">
                            Start<br/>The<br/>Talk<span className="text-primary/20">.</span>
                        </h2>

                        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-sm font-serif italic leading-relaxed">
                                Currently seeking worldwide collaborations and high-impact engineering roles.
                            </p>
                            <div className="h-20 w-[1px] bg-border/40 hidden md:block"/>
                            <ActivityStack/>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-12">
                        <SystemClock/>

                        <div
                            className="hidden lg:flex w-full max-w-[320px] p-8 rounded-[3rem] border border-border/20 bg-secondary/5 flex-col gap-8 relative overflow-hidden group">
                            <div className="flex justify-between items-center">
                                <span
                                    className="text-[9px] font-mono uppercase tracking-widest opacity-40">Network_Topology</span>
                                <IconCpu size={21} className="text-primary/40"/>
                            </div>

                            <div className="relative h-24 flex items-center justify-center">
                                {/* Central Hub */}
                                <div className="w-4 h-4 rounded-full bg-primary relative z-10">
                                    <div className="absolute inset-0 bg-primary animate-ping rounded-full"/>
                                </div>
                                {/* Orbital Nodes */}
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{rotate: 360}}
                                        transition={{duration: 8 + i, repeat: Infinity, ease: "linear"}}
                                        className="absolute w-20 h-20 border border-primary/10 rounded-full"
                                        style={{width: 40 + i * 20, height: 40 + i * 20}}
                                    >
                                        <div
                                            className="w-1.5 h-1.5 rounded-full bg-primary/20 absolute -top-0.75 left-1/2"/>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-1 border-t border-border/20 pt-6">
                                <span
                                    className="text-[8px] font-mono opacity-20 uppercase tracking-widest">Protocol_Status</span>
                                <span
                                    className="text-[10px] font-bold font-mono text-primary uppercase">Synchronization_Optimized</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {contactInfo?.map((info, index) => (
                        <InteractionPlate key={info.label} info={info} index={index}/>
                    ))}

                    <div className="lg:col-span-3 mt-12">
                        <div className="flex items-center gap-8 mb-12">
                            <div
                                className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-border to-transparent"/>
                            <span
                                className="text-[10px] font-mono uppercase tracking-[0.5em] text-muted-foreground/40 whitespace-nowrap">
                                Connection_Nodes
                            </span>
                            <div
                                className="h-[1px] flex-grow bg-gradient-to-r from-border via-transparent to-transparent"/>
                        </div>
                        <SocialLinks fullStyle={true}/>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/[0.02] blur-[160px] pointer-events-none"/>
        </section>
    );
}