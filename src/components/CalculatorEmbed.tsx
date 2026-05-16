import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export const CalculatorEmbed = () => (
  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden not-prose">
    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
    <div className="relative z-10">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3 justify-center sm:justify-start">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-xl"><Calculator className="w-6 h-6" /></div>
        Try IndiaBudgetPlanner Calculator
      </h3>
      <p className="text-slate-600 text-base max-w-lg mt-2">Get a personalized, city-wise budget breakdown based on your income, EMIs, and lifestyle choices.</p>
    </div>
    <Link to="/calculator" className="relative z-10 whitespace-nowrap px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-md hover:-translate-y-0.5 active:translate-y-0">
      Calculate Now
    </Link>
  </div>
);
