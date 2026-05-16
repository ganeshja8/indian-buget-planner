import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import { CheckCircle2, ArrowRight, PieChart, IndianRupee, MapPin, Calculator, TrendingDown, Star, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    q: "Why is IndiaBudgetPlanner different from 50/30/20 rule calculators?",
    a: "The standard 50/30/20 rule does not account for the high cost of living in Indian metros. For instance, spending exactly 30% on rent in Mumbai might force you into a grueling 2-hour commute, while in a Tier 2 city, 30% is too much. IndiaBudgetPlanner dynamically adjusts based on your city, family size, and EMI burden to give you a realistic Indian budget."
  },
  {
    q: "Is my financial data secure?",
    a: "Absolutely. All calculations happen locally directly in your browser. We do NOT store, transmit, or save any of your financial data (income, EMIs, etc.) on our servers."
  },
  {
    q: "How often should I use this calculator?",
    a: "We recommend revisiting IndiaBudgetPlanner whenever your financial situation changes—like getting an appraisal, paying off a loan, getting married, or moving to a different city."
  },
  {
    q: "Does IndiaBudgetPlanner account for income tax and PF?",
    a: "The calculator requires you to enter your 'take-home' pay, which implies you have already accounted for TDS (Tax Deducted at Source) and PF (Provident Fund) deductions."
  },
  {
    q: "Why shouldn't my EMIs exceed 40% of my income?",
    a: "Banks and financial planners agree that an FOIR (Fixed Obligation to Income Ratio) above 40-50% puts you at a high risk of defaulting or living paycheck to paycheck if emergencies arise."
  },
  {
    q: "Can I use IndiaBudgetPlanner if I live in a Tier 2 or Tier 3 city?",
    a: "Yes! Simply select 'Other' in the city dropdown. The calculator will supply baseline percentages that work well for moderately priced regions."
  },
  {
    q: "Does this budget include annual vacations?",
    a: "Annual vacations should ideally be funded from your 'Savings' bucket (specifically short-term savings). Our calculator allocates a generous percentage to Savings to help you build those funds."
  },
  {
    q: "Is this financial advice?",
    a: "No. IndiaBudgetPlanner provides educational estimates based on well-established financial rules of thumb. For tailored portfolio management or debt restructuring, please consult a SEBI-registered fee-only advisor."
  }
];

const TESTIMONIALS = [
  {
    name: "Rohan Khanna",
    city: "Mumbai",
    text: "I was making ₹1.2L a month but saving nothing because of my Bandra rent and weekend pub visits. IndiaBudgetPlanner's city-wise constraints opened my eyes. I've cut my entertainment spend and saved ₹25k this month."
  },
  {
    name: "Sneha Patel",
    city: "Bangalore",
    text: "Finally, a calculator that takes my home loan EMI into account! The 50/30/20 rule never worked for me because the moment I paid my EMI, the math fell apart. IndiaBudgetPlanner is incredibly realistic."
  },
  {
    name: "Arun Vijay",
    city: "Chennai",
    text: "I moved to Chennai from my hometown, and this tool helped me decide exactly how much rent I could afford without compromising my mutual fund SIPs. I love the clean, ad-free interface."
  }
];

export const HomeContent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  return (
    <div className="w-full">
      {/* Why IndiaBudgetPlanner Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why IndiaBudgetPlanner is the Best Budget Planner for Indians</h2>
            <p className="text-lg text-slate-600">Standard western templates fail in the Indian context. 50/30/20 rule? That's broken if you're paying Mumbai rents or servicing an education loan. We fix that.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">City-Wise Realities</h3>
              <p className="text-slate-600">We adjust allocations recognizing that living in Delhi NCR has drastically different costs than living in Pune.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">EMI Conscious</h3>
              <p className="text-slate-600">Most calculators ask you to save 20%, but what if you have a massive loan? We factor in your active EMIs first.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <PieChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lifestyle Based</h3>
              <p className="text-slate-600">Whether you are a bachelor who eats out every day or a family cooking at home, the ratios reflect your reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How IndiaBudgetPlanner Works</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Get your personalized financial breakdown in under 60 seconds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-slate-700 -z-10"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_15px_rgba(37,99,235,0.5)]">1</div>
              <h3 className="text-xl font-bold mb-2">Input Income & City</h3>
              <p className="text-slate-400 text-sm">Tell us your take-home pay and which metro you live in to set the baseline constraints.</p>
            </div>
            
            <div className="text-center mt-8 md:mt-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_15px_rgba(37,99,235,0.5)]">2</div>
              <h3 className="text-xl font-bold mb-2">Share EMIs & Lifestyle</h3>
              <p className="text-slate-400 text-sm">Provide your current loan obligations and spending habits (like eating out) for personalization.</p>
            </div>
            
            <div className="text-center mt-8 md:mt-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_15px_rgba(37,99,235,0.5)]">3</div>
              <h3 className="text-xl font-bold mb-2">Get Actionable Budget</h3>
              <p className="text-slate-400 text-sm">Instantly receive a color-coded pie chart with precise monetary limits for Rent, Food, EMIs, and Savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Benefits of using an Income Allocation Calculator</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Most salary earners in India suffer from "Parkinson's Law of Money" — expenditures rise to meet income. By forcing a framework onto your paycheck the day it arrives, you take control of your future.
              </p>
              <ul className="space-y-4">
                {[
                  "Prevents lifestyle creep when you get a promotion.",
                  "Highlights immediately if you are overspending on rent.",
                  "Stops the paycheck-to-paycheck cycle by automating savings.",
                  "Provides guilt-free spending money (Entertainment bucket).",
                  "Reduces financial anxiety with clear mathematical boundaries."
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
               <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-50 -ml-10 -mb-10"></div>
               
               <div className="relative z-10 space-y-6">
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                   <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                     <IndianRupee className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-medium">Without Plan</p>
                     <p className="text-lg font-bold text-slate-900">Savings: ₹0 (End of month)</p>
                   </div>
                 </div>
                 
                 <ArrowRight className="w-6 h-6 text-slate-400 mx-auto transform rotate-90 lg:rotate-0 lg:-ml-2" />
                 
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                   <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-medium">With IndiaBudgetPlanner</p>
                     <p className="text-lg font-bold text-slate-900">Savings: ₹20,000+ (First of month)</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
              <p className="text-slate-600 text-lg">Read our comprehensive guides on managing your money across various Indian cities, tackling EMIs, and optimizing savings.</p>
            </div>
            <Link to="/blog" className="shrink-0 text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
              View all articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">{post.readTime}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Indian Professionals</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">See how people are using IndiaBudgetPlanner to gain financial clarity and independence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.city}, India</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about the IndiaBudgetPlanner methodology.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
