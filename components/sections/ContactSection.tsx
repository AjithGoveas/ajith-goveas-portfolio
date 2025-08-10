'use client';

import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {ArrowRight, Calendar, Clock, Github, Linkedin, Mail, MapPin, MessageSquare, Send, User} from 'lucide-react';
import {Card, CardHeader} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from "@/components/ui/label";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Reset form
        setFormData({name: '', email: '', subject: '', message: ''});
        setIsSubmitting(false);

        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'your.email@example.com',
            description: 'Drop me a line anytime'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'San Francisco, CA',
            description: 'Available for remote work'
        },
        {
            icon: Clock,
            label: 'Response Time',
            value: '< 24 hours',
            description: 'Usually much faster'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            username: '@yourusername',
            href: 'https://github.com',
            color: 'hover:text-gray-300'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            username: '/in/yourname',
            href: 'https://linkedin.com',
            color: 'hover:text-blue-400'
        }
    ];

    return (
        <section id="contact" className="py-20 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Let's Work Together</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Ready to bring your ideas to life? Let's discuss your project and make it happen.
                        </p>
                    </motion.div>

                    {/*Main content card*/}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <Card className="overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                            <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">

                                {/* Left Side */}
                                <div
                                    className="p-8 lg:p-12 bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex flex-col">
                                    <CardHeader className="mb-8 p-0">
                                        <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">Get in
                                            Touch</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            I'm always excited to work on new projects and collaborate with amazing
                                            people.
                                            Let's create something extraordinary together.
                                        </p>
                                    </CardHeader>

                                    <div className="space-y-6 mb-8">
                                        {contactInfo.map((info, index) => (
                                            <motion.div
                                                key={info.label}
                                                initial={{opacity: 0, x: -20}}
                                                whileInView={{opacity: 1, x: 0}}
                                                viewport={{once: true}}
                                                transition={{duration: 0.5, delay: index * 0.1}}
                                                className="flex items-start gap-4 group"
                                            >
                                                <div
                                                    className="w-12 h-12 border border-border/70 rounded-xl flex items-center justify-center group-hover:border-primary/40 transition-all duration-300">
                                                    <info.icon className="w-5 h-5 text-primary"/>
                                                </div>
                                                <div>
                                                    <div
                                                        className="text-secondary-foreground font-medium mb-1">{info.label}</div>
                                                    <div className="text-primary font-medium mb-1">{info.value}</div>
                                                    <div
                                                        className="text-sm text-muted-foreground">{info.description}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <h4 className="text-secondary-foreground font-medium mb-4">Connect with me</h4>
                                        <div className="flex gap-4">
                                            {socialLinks.map((social) => (
                                                <motion.a
                                                    key={social.label}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{scale: 1.05}}
                                                    whileTap={{scale: 0.95}}
                                                    className="flex items-center gap-3 px-4 py-3 border border-border/70 rounded-lg hover:border-primary/40 transition-all duration-300 group"
                                                >
                                                    <social.icon
                                                        className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ${social.color}`}/>
                                                    <div>
                                                        <div
                                                            className="text-sm font-medium text-primary">{social.label}</div>
                                                        <div
                                                            className="text-xs text-muted-foreground">{social.username}</div>
                                                    </div>
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        className="mt-6 flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span
                                            className="text-sm text-green-400 font-medium">Available for new projects</span>
                                    </div>
                                </div>

                                {/* Right Side */}
                                <div
                                    className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col">
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">Send a
                                            Message</h3>
                                        <p className="text-muted-foreground">
                                            Tell me about your project and I'll get back to you within 24 hours.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                                        <div className="space-y-6 flex-1">
                                            {/* Name and Email */}
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label className="text-sm font-medium text-primary">Name
                                                        *</Label>
                                                    <div className="relative">
                                                        <User
                                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                                                        <Input
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            placeholder="Your name"
                                                            className="pl-10 bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/[0.04]"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-sm font-medium text-primary">Email *</Label>
                                                    <div className="relative">
                                                        <Mail
                                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                                                        <Input
                                                            name="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            placeholder="your@email.com"
                                                            className="pl-10 bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/[0.04]"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div className="space-y-2">
                                                <Label className="text-sm font-medium text-primary">Subject *</Label>
                                                <div className="relative">
                                                    <MessageSquare
                                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                                                    <Input
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        placeholder="What's this about?"
                                                        className="pl-10 bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/[0.04]"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-2 flex-1">
                                                <Label className="text-sm font-medium text-primary">Message *</Label>
                                                <Textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                                                    className="min-h-[120px] bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/[0.04] resize-none"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <motion.div className="mt-8" whileHover={{scale: 1.02}}
                                                    whileTap={{scale: 0.98}}>
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-base transition-all duration-300 group"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <motion.div
                                                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                                                            animate={{rotate: 360}}
                                                            transition={{duration: 1, repeat: Infinity, ease: "linear"}}
                                                        />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send
                                                            className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300"/>
                                                        Send Message
                                                        <ArrowRight
                                                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
                                                    </>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </form>
                                </div>
                            </div>
                        </Card>
                    </motion.div>


                    {/* Bottom Note */}
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="text-center mt-12"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-border/50 rounded-full">
                            <Calendar className="w-4 h-4 text-muted-foreground"/>
                            <span className="text-sm text-muted-foreground italic">
                                Prefer a call?
                                <a href="#" className="ml-1 text-primary not-italic hover:underline">Schedule a meeting</a>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;