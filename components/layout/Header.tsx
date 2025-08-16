'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ModeToggle } from '@/components/toggle-theme';

const Header = ({ className = '' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const scrollPosition = window.scrollY + 100;
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
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const isActive = (href: string) => activeSection === href.substring(1);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/95 backdrop-blur-lg border-b border-border'
                    : 'bg-transparent'
            } ${className}`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center cursor-pointer"
                        onClick={() => handleNavClick('#hero')}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                                <div className="w-4 h-4 bg-primary-foreground rounded-xs" />
                            </div>
                            <span className="text-lg font-sofia text-foreground">myBio</span>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="flex items-center rounded-lg border border-border bg-background/70 backdrop-blur px-2 sm:px-4 py-2 mx-2">
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    variant={isActive(item.href) ? 'default' : 'ghost'}
                                    size="sm"
                                    onClick={() => handleNavClick(item.href)}
                                    className={`px-3 sm:px-4 py-2 mx-1 text-sm transition-colors ${
                                        isActive(item.href)
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                            : 'text-muted-foreground hover:text-foreground border-primary/20 hover:border-primary/40'
                                    }`}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </div>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="dark:border-border">
                                    <AnimatePresence mode="wait" initial={false}>
                                        {isMenuOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <X className="w-4 h-4" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Menu className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72 sm:w-80">
                                <SheetHeader className="text-left">
                                    <SheetTitle className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                                            <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
                                        </div>
                                        Navigation
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="mt-6">
                                    <nav className="space-y-1">
                                        {navItems.map((item) => (
                                            <Button
                                                key={item.name}
                                                variant={isActive(item.href) ? 'default' : 'ghost'}
                                                onClick={() => handleNavClick(item.href)}
                                                className={`w-full justify-between h-11 ${
                                                    isActive(item.href)
                                                        ? 'bg-primary text-primary-foreground'
                                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                                                }`}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronRight
                                                    className={`w-4 h-4 transition-transform ${
                                                        isActive(item.href) ? 'translate-x-1' : ''
                                                    }`}
                                                />
                                            </Button>
                                        ))}
                                    </nav>
                                    <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                                        <Badge variant="secondary" className="gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            Available
                                        </Badge>
                                        <ModeToggle />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
