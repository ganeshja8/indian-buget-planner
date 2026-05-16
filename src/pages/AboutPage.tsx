import { Target, Users, MapPin, Mail, Award } from 'lucide-react';

export const AboutPage = () => {
  return (
    <main className="animate-in fade-in duration-500 pb-16 pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">About IndiaBudgetPlanner</h1>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Top blue accent area */}
          <div className="h-32 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          </div>
          
          <div className="px-8 sm:px-12 pb-12">
            
            {/* Avatar / Profile section */}
            <div className="-mt-16 flex justify-center mb-8">
              <div className="w-32 h-32 bg-slate-100 rounded-full border-4 border-white flex items-center justify-center shadow-md relative z-10 text-slate-400">
                 <Users className="w-16 h-16" />
              </div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-blue-600 prose-p:leading-relaxed">
              <p className="text-xl text-slate-700 text-center mb-12">
                Hi, I'm <strong>Ganesh</strong>, a personal finance enthusiast from Jaipur, Rajasthan. I created IndiaBudgetPlanner in 2026 to help working professionals and families across India manage their monthly income, expenses, and savings more effectively.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <h2 className="text-2xl mt-0 mb-4 flex items-center gap-3">
                    <Target className="w-6 h-6 text-blue-600" />
                    Why I Built IndiaBudgetPlanner
                  </h2>
                  <p className="text-slate-600 mb-0 text-base">
                    Living in Indian cities, I personally faced the challenge of balancing rent, EMIs, rising costs, and savings. After years of trial and error with my own budget, I decided to build a simple, practical, and India-specific tool that actually works for middle-class families.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <h2 className="text-2xl mt-0 mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-blue-600" />
                    Our Mission
                  </h2>
                  <p className="text-slate-600 mb-4 text-base">
                    To help 1 Million Indians take better control of their money through smart budgeting and realistic financial planning.
                  </p>
                  <p className="text-slate-600 font-medium mb-0 text-base border-t border-slate-200 pt-4">
                     IndiaBudgetPlanner is completely free and made with love for the Indian middle class.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold text-white mt-0 mb-6 border-b border-slate-700 pb-4">Contact & Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center sm:items-start text-base">
                    <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Creator</span>
                    <strong className="text-lg font-medium text-white">Ganesh</strong>
                  </div>
                  <div className="flex flex-col items-center sm:items-start text-base">
                    <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-1"><MapPin className="w-4 h-4"/> Location</span>
                    <strong className="text-lg font-medium text-white">Jaipur, Rajasthan</strong>
                  </div>
                  <div className="flex flex-col items-center sm:items-start text-base">
                    <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-1"><Mail className="w-4 h-4"/> Email</span>
                    <strong className="text-lg font-medium truncate w-full text-center sm:text-left text-white">openthetrueman@gmail.com</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
