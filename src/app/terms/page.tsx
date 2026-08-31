"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8">
                        Terms of <span className="text-gradient-primary">Use</span>
                    </h1>
                    <p className="text-muted-foreground mb-12">
                        Effective Date: 01/01/2026
                    </p>

                    <div className="space-y-8 text-neutral-300 leading-relaxed">
                        <section>
                            <p className="mb-4">
                                Welcome to the NanTech Inc. website (“Site”). These Terms of Use (“Terms”) govern your
                                access to and use of this Site. By accessing or using the Site, you agree to be bound by
                                these Terms. If you do not agree, please do not use the Site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Use of the Website</h2>
                            <p className="mb-4">
                                The NanTech website is provided for informational and business purposes only. You may
                                use the Site solely for lawful purposes and in accordance with these Terms.
                            </p>
                            <p className="mb-2">You agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Use the Site in any way that violates applicable laws or regulations</li>
                                <li>Attempt to gain unauthorized access to the Site or related systems</li>
                                <li>Interfere with or disrupt the operation or security of the Site</li>
                                <li>Introduce malware, viruses, or other harmful code</li>
                                <li>Use the Site to impersonate any person or entity</li>
                            </ul>
                            <p>
                                NanTech reserves the right to restrict or terminate access to the Site at its discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. No Professional or Legal Advice</h2>
                            <p className="mb-4">
                                Content on this Site is provided for general informational purposes only and does not
                                constitute legal, technical, financial, or professional advice.
                            </p>
                            <p>
                                Engagements for consulting, process and workflow improvement, project or program
                                management, or AI services are governed exclusively by separate written agreements
                                executed between NanTech and its clients.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property Rights</h2>
                            <p className="mb-4">
                                All content on this Site, including but not limited to text, graphics, logos, images, designs,
                                software, and trademarks (“Content”), is the property of NanTech or its licensors and is
                                protected by applicable intellectual property laws.
                            </p>
                            <p className="mb-2">You may not:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Copy, reproduce, modify, distribute, or display Content without prior written permission</li>
                                <li>Use NanTech’s name, logo, or branding without authorization</li>
                                <li>Create derivative works based on Site Content</li>
                            </ul>
                            <p>
                                Limited, non-commercial viewing of Content for personal or internal business evaluation is
                                permitted.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Links</h2>
                            <p className="mb-4">
                                The Site may include links to third-party websites for convenience or informational
                                purposes. NanTech does not control and is not responsible for the content, security, or
                                practices of third-party sites.
                            </p>
                            <p>Accessing third-party websites is at your own risk.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimer of Warranties</h2>
                            <p className="mb-4">
                                The Site and all Content are provided “as is” and “as available.”
                            </p>
                            <p className="mb-4">
                                NanTech makes no warranties or representations of any kind, express or implied, including
                                but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Accuracy or completeness of Content</li>
                                <li>Availability or uninterrupted operation of the Site</li>
                                <li>Fitness for a particular purpose</li>
                                <li>Non-infringement</li>
                            </ul>
                            <p>
                                NanTech does not warrant that the Site will be error-free or free from harmful components.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                            <p className="mb-4">
                                To the maximum extent permitted by law, NanTech shall not be liable for any indirect,
                                incidental, consequential, special, or punitive damages arising out of or related to your use
                                of or inability to use the Site.
                            </p>
                            <p>
                                NanTech’s total liability for any claim related to the Site shall not exceed one hundred U.S.
                                dollars (USD $100).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Indemnification</h2>
                            <p className="mb-4">
                                You agree to indemnify and hold harmless NanTech, its officers, directors, employees, and
                                affiliates from any claims, liabilities, damages, losses, or expenses arising from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your use of the Site</li>
                                <li>Your violation of these Terms</li>
                                <li>Your infringement of any rights of another party</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">8. Privacy</h2>
                            <p>
                                Your use of the Site is also governed by NanTech’s Privacy Policy, which describes how we
                                collect and use information. By using the Site, you consent to the practices described in
                                that policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to the Terms</h2>
                            <p>
                                NanTech may update these Terms at any time. Changes will be effective upon posting to
                                the Site. Continued use of the Site after changes are posted constitutes acceptance of the
                                revised Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the
                                Commonwealth of Virginia, without regard to conflict-of-law principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                            <p className="mb-4">
                                If you have questions regarding these Terms of Use, please contact:
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
