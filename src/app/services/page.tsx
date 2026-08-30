"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Workflow, Briefcase, Brain, GraduationCap, TrendingUp, Users } from "lucide-react";

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
            title: "Process & Workflow Improvement",
            icon: Workflow,
            desc: "We help organizations understand how work gets done today and where it can work better. Through workflow assessment and process mapping, we identify bottlenecks, manual effort, unclear handoffs, documentation gaps, and opportunities to improve efficiency, consistency, and visibility.",
            linkText: "Explore More",
            image: "/images/service-process-workflow.jpg",
            slug: "process-workflow-improvement"
        },
        {
            title: "Project & Program Management",
            icon: Briefcase,
            desc: "NanTech helps organizations turn priorities into execution. We provide hands-on leadership and coordination to keep complex initiatives aligned, risks visible, stakeholders engaged, and delivery moving forward.",
            linkText: "Explore More",
            image: "/images/service-project-management.jpg",
            slug: "project-program-management"
        },
        {
            title: "AI Strategy & Solutions",
            icon: Brain,
            desc: "NanTech helps organizations identify where AI can create meaningful value. From AI readiness and use-case assessment to targeted pilots and AI-enabled solutions, we focus on practical, responsible applications of AI tied to real organizational needs.",
            linkText: "Explore More",
            image: "/images/service-ai-strategy.jpg",
            slug: "ai-strategy-solutions"
        },
        {
            title: "EdTech & AI Learning (MathPi)",
            icon: GraduationCap,
            desc: "We design AI-powered educational platforms that personalize learning, improve engagement, and drive measurable outcomes. From adaptive tutoring systems to intelligent assessments and analytics, our EdTech solutions help students, educators, and institutions learn smarter and scale impact.",
            linkText: "Watch Demo",
            image: "/images/service-hr.jpg",
            slug: "edtech-ai-learning",
            href: "/demo#mathpi"
        },
        {
            title: "Workforce Development (TrainPi)",
            icon: TrendingUp,
            desc: "We build AI-driven workforce and career development platforms that help individuals and organizations identify skills gaps, deliver targeted training, and align learning with real-world outcomes. Our solutions support reskilling, upskilling, and career mobility at scale.",
            linkText: "Watch Demo",
            image: "/images/service-edtech.jpg",
            slug: "workforce-development",
            href: "/demo#trainpi"
        },
        {
            title: "HR & Talent Operations",
            icon: Users,
            desc: "We deliver intelligent HR solutions that streamline recruiting, onboarding, training, and workforce analytics. By combining automation and AI insights, we help organizations make better talent decisions, improve employee experience, and operate more efficiently.",
            linkText: "Explore More",
            image: "/images/service-workforce.jpg",
            slug: "hr-talent-operations"
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
                            Solutions Built <span className="text-gradient-primary">Around Real Needs</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            NanTech helps organizations solve complex operational and technology challenges through
                            process improvement, program management, software and modernization, and responsible AI.
                            We start by understanding the need, then bring the right combination of expertise and
                            technology to deliver practical, sustainable solutions.
                        </p>
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
                                            <Link href={service.href ?? `/services/${service.slug}`} className="inline-block">
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
