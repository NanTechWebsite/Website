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


            {/* Hero / Header */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
                            About <span className="text-gradient-primary">NanTech</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed mb-12">
                            Nantech is a woman-owned, minority-owned company, a Small Disadvantaged Business (SDB), and a HUBZone Business dedicated to delivering innovative solutions.
                        </motion.p>

                        <motion.div variants={itemVariants} className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/about-us.jpg"
                                alt="About NanTech"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10" />
            </section>

            {/* Corporate Info & Vision */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Mission/Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Globe className="text-primary" /> Who We Are
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    With a commitment to excellence and diversity, Nantech leverages its unique perspectives and expertise to provide high-quality services and products that meet the evolving needs of its clients.
                                </p>
                                <p className="text-muted-foreground">
                                    The company prides itself on fostering an inclusive environment and driving growth through cutting-edge strategies and a customer-centric approach.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Award className="text-primary" /> Certifications & DUNS
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>DUNS #080494890</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Woman-Owned Small Business #834882</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Minority-Owned Business #834882</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Small Disadvantaged Business (SDB)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>HUBZone Business</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>PMP Certification #1877847</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>CSM (Scrum Master) #924516</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center"
                        >
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Our Vision</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8 relative z-10">
                                    Nantech's vision is to be a leader in innovation, recognized for our commitment to diversity, excellence, and transformative solutions that shape the future. We aspire to create lasting impact by driving growth and sustainability for our clients and contributing positively to the global community.
                                </p>
                                <Shield className="w-32 h-32 text-white/5 absolute bottom-0 right-0 rotate-12" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NAICS Codes */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gradient-primary">NAICS Codes</h2>
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
                                        <span className="text-3xl font-bold text-white/10 absolute right-4 top-2">{item.code}</span>
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
