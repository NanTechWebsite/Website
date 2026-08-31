"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8">
                        Privacy <span className="text-gradient-primary">Policy</span>
                    </h1>
                    <p className="text-muted-foreground mb-12">
                        Effective Date: 01/01/2026
                    </p>

                    <div className="space-y-8 text-neutral-300 leading-relaxed">
                        <section>
                            <p className="mb-4">
                                NanTech Inc. (“NanTech,” “we,” “our,” or “us”) respects your privacy and is committed to
                                protecting the information you share with us. This Privacy Policy describes how we collect,
                                use, disclose, and safeguard information when you visit our website or interact with us in
                                connection with our services.
                            </p>
                            <p>
                                By accessing or using this website, you agree to the practices described in this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                            <p className="mb-4">We collect information in limited and appropriate ways, including:</p>

                            <h3 className="text-xl font-semibold text-foreground mb-2">a. Information You Provide Voluntarily</h3>
                            <p className="mb-2">You may provide personal information such as:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Company name and professional role</li>
                                <li>Information submitted through contact forms, inquiries, or direct communications</li>
                            </ul>
                            <p className="mb-4">Providing this information is voluntary.</p>

                            <h3 className="text-xl font-semibold text-foreground mb-2">b. Information Collected Automatically</h3>
                            <p className="mb-2">
                                When you visit our website, we may automatically collect certain technical information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>IP address</li>
                                <li>Browser type and device information</li>
                                <li>Pages viewed and time spent on the site</li>
                                <li>Referring URLs</li>
                            </ul>
                            <p className="mb-4">This information is used for operational and analytical purposes.</p>
                            <p className="font-semibold text-primary">
                                NanTech does not knowingly collect personal information from children under the age of 13.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                            <p className="mb-2">NanTech uses collected information to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Respond to inquiries and communicate with you</li>
                                <li>Provide and improve our services</li>
                                <li>Operate, maintain, and secure our website</li>
                                <li>Understand usage trends and improve user experience</li>
                                <li>Comply with legal, regulatory, or contractual obligations</li>
                            </ul>
                            <p className="mb-2">NanTech does not sell, rent, or trade personal information.</p>
                            <p>
                                NanTech does not use personal information to train artificial intelligence or machine learning
                                models without explicit consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies and Analytics</h2>
                            <p className="mb-4">
                                We may use cookies and similar technologies to support website functionality and analytics.
                                These tools help us understand how visitors interact with our site so we can improve
                                performance and content.
                            </p>
                            <p>
                                You may control or disable cookies through your browser settings. Disabling cookies may affect
                                certain site features.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="mb-2">NanTech may share information only in the following limited circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>
                                    With trusted service providers who support website hosting, analytics, or communications,
                                    and who are obligated to maintain confidentiality
                                </li>
                                <li>When required by law, regulation, or legal process</li>
                                <li>To protect the rights, property, or safety of NanTech, our clients, or others</li>
                            </ul>
                            <p>
                                We do not authorize third parties to use personal information for their own marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                            <p className="mb-4">
                                NanTech implements reasonable administrative, technical, and organizational safeguards
                                designed to protect information against unauthorized access, disclosure, alteration, or misuse.
                            </p>
                            <p>
                                While we strive to protect your information, no method of transmission over the internet or
                                electronic storage is completely secure. We cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                            <p>
                                We retain personal information only for as long as necessary to fulfill the purposes outlined
                                in this Privacy Policy, unless a longer retention period is required or permitted by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights and Choices</h2>
                            <p className="mb-2">Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Request access to your personal information</li>
                                <li>Request correction or deletion of your information</li>
                                <li>Opt out of certain communications</li>
                            </ul>
                            <p>Requests may be submitted using the contact information below.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. NanTech is not responsible for the
                                privacy practices or content of those external sites. We encourage you to review their
                                privacy policies separately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                            <p>
                                NanTech may update this Privacy Policy from time to time. Updates will be posted on this
                                page with a revised effective date. Continued use of the website after changes constitutes
                                acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                            <p className="mb-4">
                                If you have questions or concerns about this Privacy Policy or our data practices, please
                                contact:
                            </p>
                            <div className="bg-foreground/5 p-6 rounded-lg border border-border">
                                <p className="font-semibold text-foreground">NanTech Inc.</p>
                                <p>Email: <a href="mailto:info@nantechs.com" className="text-primary hover:underline">info@nantechs.com</a></p>
                                <p>Website: <a href="https://www.nantechs.com" className="text-primary hover:underline">https://www.nantechs.com</a></p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
