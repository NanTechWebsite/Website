"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Briefcase, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactSection } from "@/components/sections/contact-section";
import whyUsImage from "@/assets/Why Choose Us Image.jpg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6 items-center">
            {/* Text Content - Below Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center text-center order-2 w-full"
            >
              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-4xl font-bold tracking-tight mb-6"
              >
                YOUR <span className="text-gradient-primary">IT & AI</span> HUB!
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              >
                NanTech is a mission-driven IT and AI consulting firm focused on software
                development, project and program management, and AI-powered solutions. We
                help organizations translate ideas into execution by combining technical expertise,
                disciplined delivery, and responsible AI—empowering teams, educators, and
                communities to thrive in the digital age.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact">
                  <Button size="lg" className="w-[160px]">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-[160px]">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image - Top */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full max-w-5xl mx-auto aspect-[24/9] rounded-2xl overflow-hidden order-1"
            >
              <Image
                src="/images/hero-banner-updated.jpg"
                alt="NanTech Dashboard"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NanTech offers comprehensive IT services that cover every aspect of your technology needs. From network management and cybersecurity to cloud solutions and software development, we provide complete support to ensure your business runs smoothly.
            </p>
          </div>

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
                  <CardContent className="p-6 flex flex-col items-start gap-4 flex-1">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {service.desc}
                    </p>
                    <div className="mt-auto pt-4">
                      <Link href={`/services/${service.slug}`} className="inline-block">
                        <span className="text-sm font-medium text-primary group-hover:text-white transition-colors flex items-center">
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

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose <span className="text-primary">NanTech</span>?</h2>
              <div className="text-muted-foreground mb-8 text-lg space-y-4">
                <p>
                  NanTech is not a traditional IT vendor. We are a strategic technology and AI partner specializing in software development, project and program management, and AI consulting—helping organizations design, build, and scale intelligent solutions with clarity, accountability, and purpose.
                </p>
                <p>
                  We bridge the gap between vision and execution, ensuring innovation translates into measurable, real-world outcomes.
                </p>
              </div>

              <div className="space-y-8 mt-8">
                {[
                  {
                    id: "01",
                    title: "Purpose-Driven, Tailored Solutions",
                    desc: "We don’t believe in one-size-fits-all technology. Every engagement is customized around your mission, constraints, and stakeholders—whether we are building custom software, modernizing systems, or guiding AI adoption—so solutions are practical, scalable, and aligned with real-world impact, not hype."
                  },
                  {
                    id: "02",
                    title: "Execution Excellence Across Software, Programs, and AI",
                    desc: "Strategy matters—but execution defines success. We combine disciplined project and program management with modern software engineering and AI expertise to take initiatives from concept to production with confidence, speed, and precision. Ideas don’t just stay on paper—they get delivered."
                  },
                  {
                    id: "03",
                    title: "Responsible, Human-Centered Technology",
                    desc: "Innovation without responsibility creates risk. We design and implement software and AI solutions that are ethical, transparent, and people-first—supporting trust, adoption, and long-term sustainability from day one."
                  }
                ].map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <span className="text-2xl font-bold text-primary/50">{item.id}.</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden glass-card flex items-center justify-center border-0 group"
            >
              <Image
                src={whyUsImage}
                alt="Innovation at Core"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-3xl font-bold text-white mb-2">Innovation</div>
                <div className="text-lg text-primary font-medium">at Core</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-16 md:px-16 md:py-24 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-6">Ready to Elevate Your IT?</h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Take the first step towards optimizing your IT infrastructure. Contact us today for a free consultation and discover how NanTech can empower your business with cutting-edge IT solutions.
              </p>
              <Link href="#contact">
                <Button size="lg" variant="secondary" className="text-primary hover:text-primary font-bold bg-white hover:bg-white/90">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
}
