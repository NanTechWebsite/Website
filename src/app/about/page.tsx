"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award, Globe, Shield } from "lucide-react";

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const naicsCodes = [
        { code: "541511", title: "Custom Computer Programming Services" },
        { code: "541512", title: "Computer Systems Design Services" },
        { code: "541519", title: "Other Computer Related Services" },
        { code: "541611", title: "Admin & General Management Consulting" },
        { code: "541618", title: "Other Management Consulting Services" },
        { code: "541690", title: "Other Scientific and Technical Consulting Services" },
    ];

    return (
        <div className="flex flex-col min-h-screen">


            {/* Hero / Vision Section */}
            <section className="pt-24 pb-12 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-5xl font-bold">About <span className="text-primary">Us</span></h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full flex justify-center lg:justify-start"
                        >
                            <Image
                                src="/images/about-us.jpg"
                                alt="About NanTech"
                                width={800}
                                height={800}
                                className="object-contain rounded-2xl shadow-2xl"
                                priority
                            />
                        </motion.div>

                        {/* Right Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >

                            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-primary">
                                Founded on Execution, Responsibility, and Impact
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    NanTech was founded by a technology leader with deep experience in software delivery, project and program management, and applied AI solutions across complex, high-stakes environments.
                                </p>
                                <p>
                                    With a background spanning enterprise systems, public-sector initiatives, and AI-driven innovation, NanTech’s founder brings a disciplined, execution-first approach—ensuring that strategy translates into reliable, real-world results. This leadership philosophy shapes every engagement, emphasizing accountability, ethical technology, and long-term value.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10" />
            </section>

            {/* Certifications & DUNS */}
            <section className="py-12 bg-muted/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center">
                                <Award className="text-primary" /> Certifications & Identifier Numbers
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: "DUNS #", value: "080494890" },
                                    { label: "Woman-Owned Small Business #", value: "834882" },
                                    { label: "Minority-Owned Business #", value: "834882" },
                                    { label: "Small Disadvantaged Business", value: "(SDB)" },
                                    { label: "HUBZone Business", value: "" },
                                    { label: "PMP Certification #", value: "1877847" },
                                    { label: "CSM (Scrum Master) #", value: "924516" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-background/50 p-3 rounded-lg border border-border">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="font-medium text-muted-foreground">
                                            {item.label} <span className="text-foreground">{item.value}</span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* NAICS Codes */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gradient-primary">NAICS Codes</h2>
                    <p className="text-center text-muted-foreground mb-12">NanTech Qualifies as a Small Business (&lt;$15M) in the following NAICS Codes:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {naicsCodes.map((item, i) => (
                            <motion.div
                                key={item.code}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Card className="hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6">
                                        <span className="text-3xl font-bold text-foreground/10 absolute right-4 top-2">{item.code}</span>
                                        <h4 className="text-xl font-bold text-primary mb-2 relative z-10">{item.code}</h4>
                                        <p className="text-muted-foreground relative z-10">{item.title}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
