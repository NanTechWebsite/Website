"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Briefcase, Brain } from "lucide-react";

import Image from "next/image";
//
import Link from "next/link";

export default function ServicesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const services = [
        {
            title: "Software Development",
            icon: Code,
            desc: "We design and build secure, scalable software solutions tailored to your organization’s needs. From custom applications and platforms to system modernization and integrations, we focus on clean architecture, user-centered design, and long-term maintainability.",
            linkText: "Explore More",
            image: "/images/service-software.jpg",
            slug: "software-development"
        },
        {
            title: "Project & Program Management",
            icon: Briefcase,
            desc: "We provide hands-on leadership to plan, execute, and deliver complex technology initiatives. Using Agile and hybrid delivery models, we align stakeholders, manage risk, and ensure projects stay on track—bridging technical teams with business goals.",
            linkText: "Discover More",
            image: "/images/service-project-management.jpg",
            slug: "project-program-management"
        },
        {
            title: "AI Consulting",
            icon: Brain,
            desc: "We help organizations apply AI in practical, ethical, and impactful ways. From AI strategy and readiness assessments to intelligent automation and data-driven insights, we guide teams in adopting AI solutions that are responsible, transparent, and scalable.",
            linkText: "Innovate Now",
            image: "/images/service-ai-consulting.jpg",
            slug: "ai-consulting"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Our Comprehensive <span className="text-gradient-primary">Services</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            NanTech delivers focused, high-impact technology services designed to turn strategy
                            into execution. We specialize in building software, leading complex initiatives, and
                            applying AI responsibly to solve real-world problems.                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-border bg-card hover:bg-accent/50 transition-colors group flex flex-col overflow-hidden">
                                    <div className="relative h-80 w-full">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4 p-2 rounded-lg bg-primary/20 backdrop-blur-md text-primary">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <CardContent className="p-8 flex flex-col items-start gap-4 flex-1">
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                            {service.desc}
                                        </p>
                                        <div className="mt-auto pt-4">
                                            <Link href={`/services/${service.slug}`} className="inline-block">
                                                <span className="text-sm font-medium text-primary group-hover:text-foreground transition-colors flex items-center cursor-pointer">
                                                    {service.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                                                </span>
                                            </Link>
                                        </div>
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
