import { AlertTriangle, Scale, FileText } from 'lucide-react';

export const TermsPage = () => {
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
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-slate-500 text-lg">Includes Financial Disclaimer • Last Updated: {currentDate}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold">
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold text-amber-900 mt-0 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Financial Disclaimer
            </h2>
            <p className="text-amber-800 m-0 leading-relaxed font-medium">
              The content, calculators, and tools provided on IndiaBudgetPlanner are for <strong>educational and informational purposes only</strong>. They do not constitute professional financial, investment, legal, or tax advice. The results provided by our calculators are <strong>estimates based on general rules of thumb</strong> and user inputs. <strong>You are solely responsible for your own financial decisions</strong>, and we strongly recommend consulting with a certified financial advisor before making any significant financial commitments.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl mt-0 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using IndiaBudgetPlanner ("we", "our", "us", or "the Website"), you accept and agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must not use our Website or its calculators.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">2. Use of the IndiaBudgetPlanner Calculator</h2>
            <p className="text-slate-600 leading-relaxed">
              Our income allocation calculator is a self-help tool. While we strive to base our logic on sound, traditional financial planning frameworks (such as the 50/30/20 rule adjusted for Indian cities), we make no guarantees regarding the accuracy, completeness, or applicability of the outputs to your specific personal situation.
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li>You agree to use the calculator for personal, non-commercial use only.</li>
              <li>You acknowledge that the percentages and budget limits suggested are mere guidelines, not strict financial mandates.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">3. No Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, IndiaBudgetPlanner, its creators, affiliates, and partners shall not be held liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of our Website or reliance on the estimates provided by our calculators. This includes, but is not limited to, losses in investments, excessive debt, or inability to meet financial obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content, design, code, graphics, and interface elements on IndiaBudgetPlanner are the intellectual property of IndiaBudgetPlanner unless otherwise stated. You may not reproduce, distribute, or create derivative works from our Website without explicit written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">5. Modifications to the Service</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify or discontinue, temporarily or permanently, the Website (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section className="mb-8 pb-8 border-b border-slate-200">
            <h2 className="text-2xl mb-4">6. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Contact Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us via our Contact page or at legal@indiabudgetplanner.in.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
