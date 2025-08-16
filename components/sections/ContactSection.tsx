// components/contact-form.tsx
"use client";

import React, {ChangeEventHandler, FormEventHandler, JSX, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Card, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {ArrowRight, Calendar, MessageSquare, Send, User} from "lucide-react";
import {IconMail} from "@tabler/icons-react";
import SocialLinks from "@/components/SocialLinks";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";

// --- Type Definitions ---
interface ContactInfo {
    label: string;
    value: string;
    description: string;
    icon: React.ElementType;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactInfo: ContactInfo[] = [
    {label: "Email", value: "your.email@example.com", description: "Send me a message anytime!", icon: IconMail},
    {label: "Phone", value: "+1 (123) 456-7890", description: "Prefer to talk? Give me a call.", icon: User},
];

// --- Sub-components for better modularity ---

// Correctly define props for both sub-components
interface ContactCardProps {
    cardVariants: any;
    isLargeScreen: boolean;
}

const ContactInfoCard: React.FC<ContactCardProps> = ({cardVariants, isLargeScreen}) => (
    <motion.div
        key="contact"
        className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex flex-col"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{duration: 0.5}}
    >
        <CardHeader className="mb-6 sm:mb-8 p-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-secondary-foreground mb-2 sm:mb-3">Get in Touch</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. Let's create something
                extraordinary together.
            </p>
        </CardHeader>
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
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
                        className="w-10 h-10 sm:w-12 sm:h-12 border border-border/70 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:border-primary/40 transition-all duration-300">
                        <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary"/>
                    </div>
                    <div>
                        <div
                            className="text-sm sm:text-base text-secondary-foreground font-medium mb-1">{info.label}</div>
                        <div className="text-primary text-sm sm:text-base font-medium mb-1">{info.value}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{info.description}</div>
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="mt-auto">
            <h4 className="text-sm sm:text-base text-secondary-foreground font-medium mb-4">Connect with me</h4>
            <SocialLinks fullStyle={isLargeScreen}/>
        </div>
        <div
            className="mt-4 sm:mt-6 flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-green-500/10 border border-green-500/20 rounded-md sm:rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-green-400 font-medium">Available for new projects</span>
        </div>
    </motion.div>
);

interface FormCardProps extends ContactCardProps {
    formData: FormData;
    handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    isSubmitting: boolean;
}

const ContactFormCard: React.FC<FormCardProps> = ({
                                                      cardVariants,
                                                      formData,
                                                      handleInputChange,
                                                      handleSubmit,
                                                      isSubmitting,
                                                  }) => (
    <motion.div
        key="form"
        className="p-6 sm:p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{duration: 0.5}}
    >
        <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-secondary-foreground mb-2 sm:mb-3">Send a Message</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
                Tell me about your project and I'll get back to you within 24 hours.
            </p>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
            <div className="space-y-4 sm:space-y-6 flex-1">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="text-xs sm:text-sm font-medium text-primary">Name *</Label>
                        <div className="relative">
                            <User
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground"/>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your name"
                                className="pl-9 sm:pl-10 bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground text-sm sm:text-base focus:border-primary focus:bg-white/[0.04]"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs sm:text-sm font-medium text-primary">Email *</Label>
                        <div className="relative">
                            <IconMail
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground"/>
                            <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                                className="pl-9 sm:pl-10 bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground text-sm sm:text-base focus:border-primary focus:bg-white/[0.04]"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-medium text-primary">Subject *</Label>
                    <div className="relative">
                        <MessageSquare
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground"/>
                        <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="What's this about?"
                            className="pl-9 sm:pl-10 bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground text-sm sm:text-base focus:border-primary focus:bg-white/[0.04]"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2 flex-1">
                    <Label className="text-xs sm:text-sm font-medium text-primary">Message *</Label>
                    <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                        className="min-h-[100px] sm:min-h-[120px] bg-white/[0.02] border-border text-foreground placeholder:text-muted-foreground text-sm sm:text-base focus:border-primary focus:bg-white/[0.04] resize-none"
                        required
                    />
                </div>
            </div>
            <motion.div className="mt-6 sm:mt-8" whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 sm:py-6 text-sm sm:text-base transition-all duration-300 group"
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
                                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300"/>
                            Send Message
                            <ArrowRight
                                className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
                        </>
                    )}
                </Button>
            </motion.div>
        </form>
    </motion.div>
);

// --- Main Component ---
export default function ContactSection(): JSX.Element {
    const isLargeScreen = useIsLargeScreen();
    const [activeCard, setActiveCard] = useState<"contact" | "form">("contact");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        alert("Thank you for your message!");
    };

    const cardVariants = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x: 0},
        exit: {opacity: 0, x: 100},
    };

    return (
        <section id="contact" className="py-12 sm:py-20 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2 sm:mb-4">Let's Work
                            Together</h2>
                        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Ready to bring your ideas to life? Let's discuss your project and make it happen.
                        </p>
                    </motion.div>

                    {/* Main content card */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <Card className="overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                            <div className="flex justify-center p-4 lg:hidden">
                                <div
                                    className="flex w-full max-w-sm overflow-hidden rounded-full border border-border/70 bg-white/[0.05]">
                                    <Button
                                        onClick={() => setActiveCard("contact")}
                                        className={`flex-1 rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                                            activeCard === "contact"
                                                ? "bg-white/10 text-primary-foreground"
                                                : "bg-transparent text-muted-foreground hover:bg-white/[0.05]"
                                        }`}
                                    >
                                        Contact Info
                                    </Button>
                                    <Button
                                        onClick={() => setActiveCard("form")}
                                        className={`flex-1 rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                                            activeCard === "form"
                                                ? "bg-white/10 text-primary-foreground"
                                                : "bg-transparent text-muted-foreground hover:bg-white/[0.05]"
                                        }`}
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                                {isLargeScreen ? (
                                    <>
                                        <ContactInfoCard cardVariants={cardVariants} isLargeScreen={true}/>
                                        <ContactFormCard
                                            cardVariants={cardVariants}
                                            isLargeScreen={true}
                                            formData={formData}
                                            handleInputChange={handleInputChange}
                                            handleSubmit={handleSubmit}
                                            isSubmitting={isSubmitting}
                                        />
                                    </>
                                ) : (
                                    <AnimatePresence mode="wait">
                                        {activeCard === 'contact' ? (
                                            <ContactInfoCard cardVariants={cardVariants} isLargeScreen={false}/>
                                        ) : (
                                            <ContactFormCard
                                                cardVariants={cardVariants}
                                                isLargeScreen={false}
                                                formData={formData}
                                                handleInputChange={handleInputChange}
                                                handleSubmit={handleSubmit}
                                                isSubmitting={isSubmitting}
                                            />
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        </Card>
                    </motion.div>

                    {/* Bottom Note */}
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="text-center mt-8 sm:mt-12"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/[0.02] border border-border/50 rounded-full">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground"/>
                            <span className="text-xs sm:text-sm text-muted-foreground italic">
                                Prefer a call?
                                <a href="#" className="ml-1 text-primary not-italic hover:underline">
                                    Schedule a meeting
                                </a>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}