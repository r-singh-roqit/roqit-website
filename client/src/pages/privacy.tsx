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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            <div className="mb-12 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <p className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Effective Date: 21/07/2025</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Welcome to <strong>ROQIT Greenfleet Digital Solutions Private Limited</strong> ("ROQIT", "we", "our", or "us"). 
                By accessing or using our website <a href="https://www.roqit.com" className="text-primary hover:underline">https://www.roqit.com</a>, 
                you agree to comply with and be bound by the following Terms of Use and Privacy Policy.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you do not agree with any part of these terms, please refrain from using our website.
              </p>
            </div>

            <div className="space-y-16">
              
              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">1. Website Usage</h2>
                <ul className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>The content on this Site is for general information only. It is subject to change without notice.</span></li>
                  <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>You may not use this Site for any unlawful purpose or to violate any laws in your jurisdiction.</span></li>
                  <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Unauthorized use of this Site may give rise to a claim for damages and/or be a criminal offense.</span></li>
                </ul>
              </section>

              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">2. Intellectual Property</h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">All content on this Site—text, graphics, logos, images, design, and software—is the property of ROQIT or its licensors and is protected by applicable intellectual property laws.</p>
                  <p className="leading-relaxed">You may not reproduce, distribute, modify, or reuse content from the Site without our prior written permission.</p>
                </div>
              </section>

              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">3. User Submissions</h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">If you submit any personal or business information through forms or email on our Site, you agree that:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>The information is accurate and not misleading</span></li>
                    <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>You have the right to share it</span></li>
                    <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>We may use this information as described in our Privacy Policy</span></li>
                  </ul>
                </div>
              </section>

              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">4. Limitation of Liability</h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">We strive to provide accurate and up-to-date information, but we make no guarantees regarding the completeness, accuracy, reliability, or availability of the Site or its content.</p>
                  <p className="leading-relaxed">We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Site.</p>
                </div>
              </section>

              <section className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">5. Privacy Policy</h2>
                <div className="space-y-8 text-slate-600 dark:text-slate-300">
                  <p className="text-lg leading-relaxed">We are committed to protecting your privacy. This section outlines how we handle your information.</p>
                  
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">What We Collect</h3>
                    <p className="mb-4 leading-relaxed">We may collect the following types of information:</p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span><strong>Personal Data:</strong> Name, email, phone number, company name, etc., when voluntarily submitted by users.</span></li>
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span><strong>Usage Data:</strong> IP address, browser type, pages visited, and cookies used to improve the website experience.</span></li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">How We Use Your Data</h3>
                    <p className="mb-4 leading-relaxed">We use collected data to:</p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Respond to inquiries or support requests</span></li>
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Improve our website and service</span></li>
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Send promotional emails (only if you opt-in)</span></li>
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Ensure security and prevent fraud</span></li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Data Sharing</h3>
                    <p className="mb-4 leading-relaxed">We do not sell your personal data. We may share your information with:</p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Service providers supporting website operations</span></li>
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Authorities if required by law</span></li>
                      <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span>Successors in case of merger or acquisition</span></li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Cookies</h3>
                    <p className="leading-relaxed">Our Site may use cookies or similar technologies. You can disable cookies through your browser settings, but this may affect Site functionality.</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Data Retention</h3>
                    <p className="leading-relaxed">We retain data as long as necessary for the purposes stated above or as required by law.</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Your Rights</h3>
                    <p className="leading-relaxed">You may request access, correction, or deletion of your data by emailing us at <a href="mailto:privacy@roqit.com" className="text-primary hover:underline">privacy@roqit.com</a>.</p>
                  </div>
                </div>
              </section>

              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">6. Third-Party Links</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Our Site may contain links to third-party websites. These sites are not governed by this policy. We are not responsible for the privacy practices or content of those sites.</p>
              </section>

              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">7. Children's Privacy</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Our website is not intended for children under 13. We do not knowingly collect data from minors.</p>
              </section>

              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">8. Modifications</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">We may update these Terms and this Privacy Policy periodically. Continued use of the Site after changes implies acceptance of the revised terms.</p>
              </section>

              <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">9. Governing Law</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">These Terms shall be governed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana, India.</p>
              </section>

              <section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl border border-primary/20">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">10. Contact Us</h2>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-600">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">If you have any questions regarding these Terms or our Privacy Policy, please contact:</p>
                  <div className="text-slate-900 dark:text-white space-y-2">
                    <p className="font-semibold text-lg">ROQIT Greenfleet Digital Solutions Private Limited</p>
                    <p className="leading-relaxed">T-Hub, Plot-1C, Raidurgam, Knowledge City</p>
                    <p className="leading-relaxed">Hyderabad – 500081, Telangana, India</p>
                    <p className="mt-4 text-lg">Email: <a href="mailto:privacy@roqit.com" className="text-primary hover:underline font-medium">privacy@roqit.com</a></p>
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