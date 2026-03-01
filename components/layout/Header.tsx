'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, LayoutGrid, ArrowUpRight, Circle, Globe } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/toggle-theme';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero', id: '01' },
        { name: 'About', href: '#about', id: '02' },
        { name: 'Skills', href: '#skills', id: '03' },
        { name: 'Projects', href: '#projects', id: '04' },
        { name: 'Contact', href: '#contact', id: '05' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const scrollPosition = window.scrollY + 150;

            for (const item of navItems) {
                const section = document.getElementById(item.href.substring(1));
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(item.href.substring(1));
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        // Small delay to allow sheet closing animation to start
        setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 w-full z-50 px-4 py-4 md:py-6 pointer-events-none"
        >
            <div className="max-w-6xl mx-auto flex justify-center">
                <nav className={`
                    pointer-events-auto flex items-center gap-2 md:gap-6 px-3 py-2 md:px-4 md:py-2 rounded-2xl border transition-all duration-700
                    ${isScrolled
                    ? 'bg-background/60 backdrop-blur-2xl border-border/40 shadow-xl scale-[0.98] md:scale-100'
                    : 'bg-transparent border-transparent'}
                `}>

                    {/* Logo Section (Desktop & Mobile) */}
                    <div
                        className="flex items-center gap-2 md:gap-3 cursor-pointer group pr-3 md:pr-4 border-r border-border/20"
                        onClick={() => handleNavClick('#hero')}
                    >
                        <div className="relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                            <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-primary rounded-sm shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                        </div>
                        <span className="text-xl md:text-2xl font-sofia tracking-tighter text-foreground">
                            myBio
                        </span>
                    </div>

                    {/* Desktop Navigation (Untouched) */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className={`
                                    relative px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300
                                    ${activeSection === item.href.substring(1)
                                    ? 'text-foreground'
                                    : 'text-muted-foreground hover:text-foreground'}
                                `}
                            >
                                {item.name}
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        layoutId="active-glow"
                                        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Utilities & Mobile Trigger */}
                    <div className="flex items-center gap-2 pl-1 md:pl-2 md:border-l border-border/20">
                        <ModeToggle />

                        <div className="md:hidden">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary/10 transition-colors">
                                        <LayoutGrid className="h-4 w-4 text-muted-foreground/80 group-hover:text-primary" strokeWidth={1.5} />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-full sm:w-[350px] bg-background/95 backdrop-blur-2xl border-l border-border/10 p-8 flex flex-col justify-between">
                                    <SheetHeader className="text-left">
                                        <SheetTitle className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-20">Navigation</SheetTitle>
                                    </SheetHeader>

                                    {/* Subtly Animated Mobile List */}
                                    <div className="flex flex-col gap-2 mt-12">
                                        {navItems.map((item, index) => (
                                            <motion.button
                                                key={item.name}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.08 }}
                                                onClick={() => handleNavClick(item.href)}
                                                className="group flex items-center justify-between py-5 border-b border-border/5 text-left transition-all"
                                            >
                                                <span className={`text-4xl font-bold tracking-tighter uppercase transition-colors duration-300
                                                    ${activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground/40'}`}>
                                                    {item.name}
                                                </span>
                                                <ArrowUpRight className={`w-6 h-6 transition-all duration-500 
                                                    ${activeSection === item.href.substring(1) ? 'text-primary opacity-100' : 'opacity-0 -translate-x-2'}`}
                                                />
                                            </motion.button>
                                        ))}
                                    </div>

                                    {/* Clean Mobile Footer */}
                                    <div className="flex flex-col gap-6">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-border/50 to-transparent" />
                                        <div className="flex justify-between items-center px-1">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-mono uppercase tracking-widest opacity-20">Location</span>
                                                <span className="text-[11px] font-bold uppercase tracking-tighter">India — IST</span>
                                            </div>
                                            <div className="h-10 w-10 rounded-full border border-border/20 flex items-center justify-center">
                                                <Globe size={14} className="opacity-20" />
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string, size?: string }>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={`inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${className}`}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";