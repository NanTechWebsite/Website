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
    tagline?: string;
    image: string;
    description: string;
    benefits: string[];
    details: string;
    ctaTitle?: string;
    ctaBody?: string;
    ctaButton?: string;
}> = {
    "process-workflow-improvement": {
        title: "Process & Workflow Improvement",
        tagline: "Where is work getting stuck?",
        image: "/images/service-process-workflow.jpg",
        description: "We help organizations understand how work gets done today and where it can work better. Through workflow assessment and process mapping, we identify bottlenecks, manual effort, unclear handoffs, documentation gaps, and opportunities to improve efficiency, consistency, and visibility.",
        benefits: [
            "Workflow Assessment & Process Mapping",
            "Bottleneck & Handoff Analysis",
            "Manual Effort & Documentation Review",
            "Practical Improvement Recommendations",
            "Automation & Technology Opportunities"
        ],
        details: "NanTech helps organizations uncover the friction that slows work down—from manual steps and repeated follow-ups to unclear handoffs, documentation gaps, and disconnected processes. We assess how the work gets done today and identify practical opportunities to make it simpler, clearer, and more effective.",
        ctaTitle: "Start With One Workflow",
        ctaBody: "Choose one process that takes too much time, requires too much follow-up, or simply isn't working as well as it should. Let NanTech help you find a better way.",
        ctaButton: "Request an Assessment"
    },
    "project-program-management": {
        title: "Project & Program Management",
        tagline: "Turning priorities into progress.",
        image: "/images/service-project-management.jpg",
        description: "NanTech helps organizations turn priorities into execution. We provide hands-on leadership and coordination to keep complex initiatives aligned, risks visible, stakeholders engaged, and delivery moving forward.",
        benefits: [
            "Project & Program Planning",
            "Stakeholder Coordination & Alignment",
            "Requirements & Delivery Management",
            "Risk, Issue & Dependency Management",
            "Implementation & Modernization Support",
            "Executive Reporting & Decision Support"
        ],
        details: "Complex initiatives require more than a plan. NanTech helps organizations coordinate people, priorities, technology, and decisions to move critical work forward with clarity and accountability.",
        ctaTitle: "Move Critical Initiatives Forward",
        ctaBody: "Whether launching a new initiative, modernizing technology, or getting a complex project back on track, NanTech provides the structure and leadership needed to turn plans into measurable progress.",
        ctaButton: "Get Started"
    },
    "ai-strategy-solutions": {
        title: "AI Strategy & Solutions",
        tagline: "AI should solve a problem—not become one.",
        image: "/images/service-ai-strategy.jpg",
        description: "NanTech helps organizations identify where AI can create meaningful value. From AI readiness and use-case assessment to targeted pilots and AI-enabled solutions, we focus on practical, responsible applications of AI tied to real organizational needs.",
        benefits: [
            "AI Readiness & Opportunity Assessment",
            "AI Use-Case Identification",
            "AI Strategy & Adoption Planning",
            "Targeted AI Pilots & Prototypes",
            "AI-Enabled Process Automation",
            "Responsible AI Implementation"
        ],
        details: "NanTech helps organizations move beyond the hype to identify practical opportunities where AI can improve operations, support decision-making, automate appropriate tasks, or enhance existing services.",
        ctaTitle: "Start With the Right Opportunity",
        ctaBody: "We begin with the business or mission need, evaluate where AI can add meaningful value, and help define a practical path from idea to implementation.",
        ctaButton: "Explore an AI Opportunity"
    },
    "edtech-ai-learning": {
        title: "EdTech & AI Learning (MathPi)",
        image: "/images/service-edtech.jpg",
        description: "We design AI-powered educational platforms that personalize learning, improve engagement, and drive measurable outcomes. From adaptive tutoring systems to intelligent assessments and analytics, our EdTech solutions help students, educators, and institutions learn smarter and scale impact.",
        benefits: [
            "Personalized Learning Paths",
            "Adaptive Tutoring Systems",
            "Intelligent Assessments",
            "Real-time Analytics",
            "Student Engagement",
            "Scalable Educational Impact"
        ],
        details: "Our EdTech solutions are designed to transform the learning experience. By leveraging the power of AI, we create platforms that adapt to individual student needs, providing personalized content and feedback. Whether for K-12, higher education, or corporate training, MathPi helps unlock potential and drive academic and professional success."
    },
    "workforce-development": {
        title: "Workforce Development (TrainPi)",
        image: "/images/service-workforce.jpg",
        description: "We build AI-driven workforce and career development platforms that help individuals and organizations identify skills gaps, deliver targeted training, and align learning with real-world outcomes. Our solutions support reskilling, upskilling, and career mobility at scale.",
        benefits: [
            "Skills Gap Analysis",
            "Targeted Training Delivery",
            "AI-Driven Career Pathways",
            "Reskilling & Upskilling",
            "Performance Alignment",
            "Workforce Analytics"
        ],
        details: "TrainPi is committed to bridging the gap between talent and opportunity. Our platforms utilize advanced algorithms to map skills to career trajectories, ensuring that training initiatives are aligned with market demands. We empower organizations to build a future-ready workforce and help individuals achieve their career aspirations."
    },
    "hr-talent-operations": {
        title: "HR & Talent Operations",
        image: "/images/service-hr.jpg",
        description: "We deliver intelligent HR solutions that streamline recruiting, onboarding, training, and workforce analytics. By combining automation and AI insights, we help organizations make better talent decisions, improve employee experience, and operate more efficiently.",
        benefits: [
            "Recruiting Automation",
            "Onboarding Optimization",
            "Workforce Planning",
            "Employee Experience",
            "Talent Analytics",
            "Operational Efficiency"
        ],
        details: "Our HR & Talent Operations solutions bring data-driven insights and automation to human resources. We help you move beyond administrative tasks to strategic talent management. From identifying top talent to fostering a positive workplace culture, our tools provide the clarity and efficiency needed to build high-performing teams."
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
            <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <Link href="/services" className="inline-flex items-center text-primary mb-6 hover:underline">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                {service.title}
                            </h1>
                            {service.tagline && (
                                <p className="text-2xl font-semibold text-primary mb-4">
                                    {service.tagline}
                                </p>
                            )}
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
                        <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden glass-card border-0 shadow-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                                priority
                            />
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
                        <h3 className="text-2xl font-bold mb-4">{service.ctaTitle ?? "Ready to start your project?"}</h3>
                        <p className="mb-8 text-muted-foreground">{service.ctaBody ?? `Contact us today to discuss how our ${service.title} services can help you achieve your goals.`}</p>
                        <Link href="#contact">
                            <Button size="lg">{service.ctaButton ?? "Get in Touch"}</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
