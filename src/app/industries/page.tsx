"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Stethoscope, ShoppingBag, GraduationCap } from "lucide-react";

export default function IndustriesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const industries = [
        {
            title: "Government",
            icon: Building2,
            desc: "NanTech supports government agencies in modernizing systems that serve the public good. We deliver secure, scalable software solutions and provide disciplined program leadership to improve service delivery, data integrity, and operational efficiency. Our approach emphasizes accessibility, transparency, and trust—helping agencies responsibly adopt technology and AI to better serve citizens and communities."
        },
        {
            title: "Healthcare",
            icon: Stethoscope,
            desc: "NanTech partners with healthcare organizations to strengthen digital systems that support care, compliance, and outcomes. We design software solutions and data platforms that improve information flow, operational efficiency, and decision-making. Guided by human-centered and ethical technology principles, we help healthcare providers adopt AI and analytics responsibly while keeping patient trust and safety at the core."
        },
        {
            title: "Retail & E-Commerce",
            icon: ShoppingBag,
            desc: "NanTech helps retail and e-commerce organizations build intelligent, scalable digital platforms that adapt to changing customer needs. Through software development, data-driven insights, and delivery leadership, we enable smarter operations, improved customer experiences, and responsible use of AI to drive sustainable growth in a competitive digital marketplace."
        },
        {
            title: "Education",
            icon: GraduationCap,
            desc: "Education is central to NanTech’s mission. We work with schools, institutions, and learning organizations to design technology that expands access, builds confidence, and supports lifelong learning. Drawing from our work on platforms like MathPi and TrainPi, we develop digital learning tools, data systems, and AI-enabled solutions that enhance instruction, streamline administration, and empower learners and educators alike."
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
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            IT Solutions for <span className="text-gradient-primary">Your Business</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            NanTech partners with organizations across sectors to design and deliver technology solutions that expand access, build capability, and create lasting impact. Our work bridges software development, program delivery, and responsible AI, informed by our experience building purpose-driven platforms such as MathPi and TrainPi.
                        </p>

                        <motion.div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/industries-banner.jpg"
                                alt="Industries Served"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                                    <CardContent className="p-10">
                                        <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/20 text-primary">
                                            <item.icon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-lg">
                                            {item.desc}
                                        </p>
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
