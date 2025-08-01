import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6" data-testid="text-privacy-page-title">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto" data-testid="text-privacy-page-description">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Effective Date: 21/07/2025</p>
              <p className="text-slate-600 dark:text-slate-300">
                Welcome to <strong>ROQIT Greenfleet Digital Solutions Private Limited</strong> ("ROQIT", "we", "our", or "us"). 
                By accessing or using our website <a href="https://www.roqit.com" className="text-primary hover:underline">https://www.roqit.com</a>, 
                you agree to comply with and be bound by the following Terms of Use and Privacy Policy.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mt-4">
                If you do not agree with any part of these terms, please refrain from using our website.
              </p>
            </div>

            <div className="space-y-12">
              
              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">1. Website Usage</h2>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li>• The content on this Site is for general information only. It is subject to change without notice.</li>
                  <li>• You may not use this Site for any unlawful purpose or to violate any laws in your jurisdiction.</li>
                  <li>• Unauthorized use of this Site may give rise to a claim for damages and/or be a criminal offense.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">2. Intellectual Property</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p>All content on this Site—text, graphics, logos, images, design, and software—is the property of ROQIT or its licensors and is protected by applicable intellectual property laws.</p>
                  <p>You may not reproduce, distribute, modify, or reuse content from the Site without our prior written permission.</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">3. User Submissions</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p>If you submit any personal or business information through forms or email on our Site, you agree that:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• The information is accurate and not misleading</li>
                    <li>• You have the right to share it</li>
                    <li>• We may use this information as described in our Privacy Policy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">4. Limitation of Liability</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p>We strive to provide accurate and up-to-date information, but we make no guarantees regarding the completeness, accuracy, reliability, or availability of the Site or its content.</p>
                  <p>We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Site.</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">5. Privacy Policy</h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-300">
                  <p>We are committed to protecting your privacy. This section outlines how we handle your information.</p>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">What We Collect</h3>
                    <p className="mb-3">We may collect the following types of information:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Personal Data:</strong> Name, email, phone number, company name, etc., when voluntarily submitted by users.</li>
                      <li>• <strong>Usage Data:</strong> IP address, browser type, pages visited, and cookies used to improve the website experience.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">How We Use Your Data</h3>
                    <p className="mb-3">We use collected data to:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Respond to inquiries or support requests</li>
                      <li>• Improve our website and service</li>
                      <li>• Send promotional emails (only if you opt-in)</li>
                      <li>• Ensure security and prevent fraud</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Data Sharing</h3>
                    <p className="mb-3">We do not sell your personal data. We may share your information with:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Service providers supporting website operations</li>
                      <li>• Authorities if required by law</li>
                      <li>• Successors in case of merger or acquisition</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Cookies</h3>
                    <p>Our Site may use cookies or similar technologies. You can disable cookies through your browser settings, but this may affect Site functionality.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Data Retention</h3>
                    <p>We retain data as long as necessary for the purposes stated above or as required by law.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Your Rights</h3>
                    <p>You may request access, correction, or deletion of your data by emailing us at <a href="mailto:privacy@roqit.com" className="text-primary hover:underline">privacy@roqit.com</a>.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">6. Third-Party Links</h2>
                <p className="text-slate-600 dark:text-slate-300">Our Site may contain links to third-party websites. These sites are not governed by this policy. We are not responsible for the privacy practices or content of those sites.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">7. Children's Privacy</h2>
                <p className="text-slate-600 dark:text-slate-300">Our website is not intended for children under 13. We do not knowingly collect data from minors.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">8. Modifications</h2>
                <p className="text-slate-600 dark:text-slate-300">We may update these Terms and this Privacy Policy periodically. Continued use of the Site after changes implies acceptance of the revised terms.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">9. Governing Law</h2>
                <p className="text-slate-600 dark:text-slate-300">These Terms shall be governed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana, India.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">10. Contact Us</h2>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">If you have any questions regarding these Terms or our Privacy Policy, please contact:</p>
                  <div className="text-slate-900 dark:text-white">
                    <p className="font-semibold">ROQIT Greenfleet Digital Solutions Private Limited</p>
                    <p>T-Hub, Plot-1C, Raidurgam, Knowledge City</p>
                    <p>Hyderabad – 500081, Telangana, India</p>
                    <p className="mt-2">Email: <a href="mailto:privacy@roqit.com" className="text-primary hover:underline">privacy@roqit.com</a></p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}