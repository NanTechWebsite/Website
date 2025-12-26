"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
    action?: {
        label: string;
        handler: () => void;
    };
};

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi there! I'm the NanTech Assistant. How can I help you today?",
            sender: "bot",
        },
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();


    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputText("");
        processBotResponse(userMsg.text);
    };

    const processBotResponse = (text: string) => {
        const lowerText = text.toLowerCase();
        let botText = "";
        let action = undefined;

        // KNOWLEDGE BASE (Rule-Based Logic)
        if (lowerText.match(/hello|hi|hey|greetings|good morning|good afternoon|good evening|yo/)) {
            botText = "Hello! It's great to meet you. I'm here to help you learn about NanTech. How can I assist you today?";
        } else if (lowerText.match(/how are you|how is it going|how're you|how are ya/)) {
            botText = "I'm functioning perfectly, thank you for asking! I'm ready to answer your questions about our services and company.";
        } else if (lowerText.match(/who are you|what are you|your name/)) {
            botText = "I am the NanTech Assistant, a virtual guide designed to help you navigate our services and offerings.";
        } else if (lowerText.match(/what can you do|help me|capabilities/)) {
            botText = "I can provide information about our Software Development, Program Management, and AI Consulting services. I can also help you find our contact details or learn about our company vision.";
        } else if (lowerText.match(/cool|nice|good bot|awesome|great|cloud/)) {
            botText = "Glad you think so! We pride ourselves on delivering premium quality in everything we do.";
        } else if (lowerText.match(/thank|thanks|appreciate/)) {
            botText = "You're very welcome! If you need anything else, just ask.";
        } else if (lowerText.match(/bye|goodbye|see you|later/)) {
            botText = "Goodbye! Have a wonderful day. Feel free to return if you have more questions.";
        } else if (lowerText.match(/service|offer|do|provide|work/)) {
            botText = "We offer three core services: 1. Software Development, 2. Project & Program Management, and 3. AI Consulting. Which one would you like to know more about?";
        } else if (lowerText.match(/software|development|app|web|code/)) {
            botText = "Our Software Development service builds secure, scalable solutions tailored to your needs, focusing on clean architecture and user-centered design.";
            action = { label: "View Software Services", handler: () => router.push("/services/software-development") };
        } else if (lowerText.match(/project|program|management|pmp|agile/)) {
            botText = "We provide hands-on leadership for complex tech initiatives using Agile and hybrid models to ensure projects stay on track.";
            action = { label: "View PM Services", handler: () => router.push("/services/project-program-management") };
        } else if (lowerText.match(/ai|consulting|intelligence|automation/)) {
            botText = "Our AI Consulting helps organizations apply AI ethically and impactfully, from strategy to intelligent automation.";
            action = { label: "View AI Services", handler: () => router.push("/services/ai-consulting") };
        } else if (lowerText.match(/about|vision|founder|company|who/)) {
            botText = "NanTech is a woman-owned, minority-owned SDB & HUBZone business. Our vision is founded on Execution, Responsibility, and Impact.";
            action = { label: "Read Our Story", handler: () => router.push("/about") };
        } else if (lowerText.match(/contact|email|reach|phone|location|address/)) {
            botText = "You can reach us at info@nantechs.com or visit us at Reston, Virginia USA. Would you like to send a message now?";
            action = { label: "Go to Contact Form", handler: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) };
        } else if (lowerText.match(/cert|duns|women|minority/)) {
            botText = "We hold several certifications: DUNS #080494890, Woman-Owned Small Business, Minority-Owned, SDB, HUBZone, PMP, and CSM.";
        } else {
            // FALLBACK
            botText = "I'm not sure I have the answer to that specific question yet. However, our team would love to help!";
            action = { label: "Contact Support", handler: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) };
        }

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    text: botText,
                    sender: "bot",
                    action: action,
                },
            ]);
        }, 600); // Simulate "thinking" delay
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-primary/20 rounded-lg">
                                    <Bot className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-semibold text-white">NanTech Assistant</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                            ? "bg-primary text-primary-foreground rounded-br-none"
                                            : "bg-white/10 text-white rounded-bl-none"
                                            }`}
                                    >
                                        <p>{msg.text}</p>
                                        {msg.action && (
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="mt-3 w-full text-xs"
                                                onClick={msg.action.handler}
                                            >
                                                {msg.action.label} <ChevronRight className="w-3 h-3 ml-1" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage();
                            }}
                            className="p-4 border-t border-white/10 bg-white/5"
                        >
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <Button type="submit" size="sm" className="shrink-0 w-9 p-0" disabled={!inputText.trim()}>
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/20 flex items-center justify-center text-primary-foreground transition-colors hover:bg-primary/90"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
