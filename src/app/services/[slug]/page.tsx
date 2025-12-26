"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/sections/contact-section";
import { useParams } from "next/navigation";

// Service Data
const servicesData: Record<string, {
    title: string;
    image: string;
    description: string;
    benefits: string[];
    details: string;
}> = {
    "software-development": {
        title: "Software Development",
        image: "/images/service-software.jpg",
        description: "We design and build secure, scalable software solutions tailored to your organization’s needs. From custom applications and platforms to system modernization and integrations, we focus on clean architecture, user-centered design, and long-term maintainability.",
        benefits: [
            "Custom Web & Mobile Applications",
            "Enterprise System Integrations",
            "Legacy System Modernization",
            "Cloud-Native Solutions",
            "API Design & Development",
            "Secure & Scalable Architecture"
        ],
        details: "Our software development services are built on a foundation of engineering excellence and agile methodologies. We don't just write code; we solve business problems. Whether you need a customer-facing portal, an internal workflow tool, or a complex data processing system, our team delivers robust, high-performance solutions that grow with your business. We prioritize security, performance, and user experience at every stage of the development lifecycle."
    },
    "project-program-management": {
        title: "Project & Program Management",
        image: "/images/service-project-management.jpg",
        description: "We provide hands-on leadership to plan, execute, and deliver complex technology initiatives. Using Agile and hybrid delivery models, we align stakeholders, manage risk, and ensure projects stay on track—bridging technical teams with business goals.",
        benefits: [
            "Agile & Hybrid Project Delivery",
            "Program Governance & Oversight",
            "Risk Management & Mitigation",
            "Stakeholder Alignment & Communication",
            "Resource Planning & Optimization",
            "Change Management"
        ],
        details: "Effective project management is the bridge between strategy and execution. Our team of certified project and program managers brings structure and clarity to complex initiatives. We handle the heavy lifting of coordination, timeline management, and blocker removal, allowing your teams to focus on high-value work. From small-scale implementations to large enterprise transformations, we ensure your projects are delivered on time, within budget, and with the desired impact."
    },
    "ai-consulting": {
        title: "AI Consulting",
        image: "/images/service-ai-consulting.jpg",
        description: "We help organizations apply AI in practical, ethical, and impactful ways. From AI strategy and readiness assessments to intelligent automation and data-driven insights, we guide teams in adopting AI solutions that are responsible, transparent, and scalable.",
        benefits: [
            "AI Strategy & Roadmap",
            "Data Readiness Assessments",
            "Intelligent Process Automation",
            "Machine Learning Model Development",
            "Generative AI Implementation",
            "Ethical AI Frameworks"
        ],
        details: "Artificial Intelligence is transforming industries, but navigating the landscape can be overwhelming. Our AI consulting services demystify AI and help you identify high-value use cases relevant to your business. We focus on practical applications that drive efficiency and innovation, rather than chasing hype. Whether you're looking to automate routine tasks, gain deeper insights from your data, or build custom AI agents, we provide the expertise to implement AI responsibly and effectively."
    }
};

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const service = servicesData[slug];

    if (!service) {
        return notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6">
                    <Link href="/services" className="inline-flex items-center text-primary mb-8 hover:underline">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="space-y-4">
                                {service.benefits.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden glass-card border-0 shadow-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">In-Depth Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                        {service.details}
                    </p>

                    <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
                        <p className="mb-8 text-muted-foreground">Contact us today to discuss how our {service.title} services can help you achieve your goals.</p>
                        <Link href="#contact">
                            <Button size="lg">Get in Touch</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
