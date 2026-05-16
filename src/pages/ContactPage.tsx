import { useState } from 'react';
import { Mail, MapPin, User, Clock, Send } from 'lucide-react';

export const ContactPage = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Thanks for your message! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="animate-in fade-in duration-500 pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have any questions, feedback, or suggestions? Feel free to reach out to me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl -mr-20 -mt-20"></div>
            
            <h2 className="text-2xl font-bold mb-8 text-white relative z-10">Get in Touch</h2>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Name</p>
                  <p className="text-xl font-medium text-white">Ganesh</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-medium text-white break-all">openthetrueman@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">City</p>
                  <p className="text-xl font-medium text-white">Jaipur, Rajasthan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-xl font-medium text-white">Within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 border-b border-slate-100 pb-4">Send a Message</h2>
            
            {status ? (
              <div className="bg-green-50 text-green-800 py-4 px-5 rounded-xl border border-green-200 mb-6 flex items-center gap-3 animate-in fade-in">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4 text-green-700" />
                </div>
                <p className="font-medium">{status}</p>
              </div>
            ) : null}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                <input type="text" id="name" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                <input type="email" id="email" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" placeholder="your@email.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                <input type="text" id="subject" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" placeholder="How can I help?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none" placeholder="Write your message here..."></textarea>
              </div>
              
              <button type="submit" className="w-full px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-transform active:scale-[0.98] font-bold flex items-center justify-center gap-2 shadow-sm mt-2">
                Send Message <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
