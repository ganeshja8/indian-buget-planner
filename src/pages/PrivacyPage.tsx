import { ShieldCheck, Mail } from 'lucide-react';

export const PrivacyPage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main className="animate-in fade-in duration-500 pb-16 pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-lg">Last Updated: May 15, 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-blue-600">
          
          <section className="mb-8">
            <h2 className="text-2xl mt-0 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to IndiaBudgetPlanner ("we", "our", or "us"). We respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information when you use our website and income allocation calculator services ("Services"), particularly curated for users in India.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with our policies, please do not use IndiaBudgetPlanner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">2. Information We Collect</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded-r-lg">
              <p className="m-0 text-blue-900 font-medium">
                <strong>Crucial Note on Calculator Data:</strong> The financial inputs you provide to our calculator (such as monthly income, EMIs, and lifestyle choices) are processed locally in your browser. <strong>We do NOT store, save, or transmit your personal financial data to our servers.</strong>
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We collect several types of information from and about users of our Website, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li><strong>Non-Personal Data:</strong> Browser types, operating systems, and anonymous usage metrics.</li>
              <li><strong>Contact Information:</strong> If you voluntarily reach out through our Contact Us page or subscribe to our newsletter, we may collect your name and email address.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We use the limited information we collect (which excludes your calculator inputs) for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li>To provide, maintain, and improve our Website.</li>
              <li>To understand and analyze how users interact with our content.</li>
              <li>To answer any explicit queries or support requests you send to us.</li>
              <li>To serve relevant advertisements via Google AdSense.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">4. Cookies, Google Analytics, and Google AdSense</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Google Analytics:</strong> We use Google Analytics to understand website traffic. It collects data such as IP addresses, referring pages, and session durations. You can opt-out of Analytics tracking via Google's browser add-on.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Google AdSense & DoubleClick Cookie:</strong> 
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Google, as a third-party vendor, uses cookies to serve ads on our Service.</li>
              <li>Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.</li>
              <li>You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings web page</a>.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">5. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">6. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. Since we do not process or transmit your financial inputs, the risk of a financial data breach from our service is fundamentally mitigated by our architecture.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">7. Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8 border-t border-slate-200 pt-8 mt-12">
            <h2 className="text-2xl mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              9. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none pl-0 mt-4">
              <li className="text-slate-600"><strong>Email:</strong> privacy@indiabudgetplanner.in</li>
              <li className="text-slate-600"><strong>Address:</strong> IndiaBudgetPlanner HQ, Bengaluru, India</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
};
