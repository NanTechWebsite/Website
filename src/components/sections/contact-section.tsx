"use client";

import { useRef, useState } from "react";
import { MapPin, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsLoading(true);
        setStatus("idle");

        // Service ID: service_0xbb8kn
        // Replace 'YOUR_TEMPLATE_ID' and 'YOUR_PUBLIC_KEY' with actual values
        emailjs.sendForm(
            "service_0xbb8kn",
            "template_v2r6xkt",
            formRef.current,
            {
                publicKey: "p86FbCqtJMqQP67zd",
            }
        )
            .then(
                () => {
                    setStatus("success");
                    setIsLoading(false);
                    if (formRef.current) formRef.current.reset();
                },
                (error) => {
                    console.error("FAILED...", error);
                    setStatus("error");
                    setIsLoading(false);
                }
            );
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-black/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
                        <p className="text-muted-foreground mb-8">
                            We are here to assist you with all your IT and AI needs.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">Address</h4>
                                    <p className="text-muted-foreground">800 3rd St #100, Herndon, VA 20170</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p className="text-muted-foreground">NanTechHub@gamil.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-2xl">
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="user_firstname" className="text-sm font-medium text-muted-foreground">
                                        First Name
                                    </label>
                                    <input
                                        name="user_firstname"
                                        id="user_firstname"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="user_lastname" className="text-sm font-medium text-muted-foreground">
                                        Last Name
                                    </label>
                                    <input
                                        name="user_lastname"
                                        id="user_lastname"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-muted-foreground">
                                    Email
                                </label>
                                <input
                                    name="user_email"
                                    id="user_email"
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <Button className="w-full" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>

                            {status === "success" && (
                                <p className="text-green-500 text-center text-sm">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-center text-sm">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
