import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { ChevronDown, ChevronUp, AlertCircle, Info, ArrowLeft, Share2, HelpCircle } from 'lucide-react';
import { FormData } from '../types';

const CATEGORIES = [
  { name: 'Rent', percent: 30, color: '#1e3a8a', tip: 'Try to keep rent within 30% of your income. Consider sharing if living in an expensive city like Mumbai or Bangalore.' },
  { name: 'Food', percent: 12, color: '#ea580c', tip: 'Covers eating out and ordering. Limit everyday ordering to stay in budget, prefer home-cooked meals.' },
  { name: 'Grocery', percent: 15, color: '#16a34a', tip: 'Includes daily essentials, toiletries, and cooking supplies. Buying in bulk sizes can save upwards of 20%.' },
  { name: 'Electricity & Utils', percent: 8, color: '#eab308', tip: 'Utility bills, internet, and phone plans. Switch to energy-efficient appliances where possible.' },
  { name: 'Entertainment', percent: 10, color: '#9333ea', tip: 'Movies, subscriptions, and occasional outings. Audit your unused OTT platforms monthly.' },
  { name: 'Savings & EMI', percent: 25, color: '#0d9488', tip: 'Prioritize EMI payments first, then route the remaining directly into SIPs, fixed deposits, or emergency funds.' }
];

const FAQS = [
  {
    q: "How accurate are these estimates for my city?",
    a: "The percentages are calculated based on standard financial models adapted for Indian living costs. However, individual situations vary heavily. We recommend adjusting allocations if you live in extremely high-rent areas like South Mumbai or central Bangalore."
  },
  {
    q: "Why is EMI bundled with Savings?",
    a: "Paying off debt, especially high-interest debt, inherently acts as a guaranteed return on investment (you save on the interest). Once your EMIs are cleared, that exact portion should be seamlessly redirected to your investments."
  },
  {
    q: "What if my actual rent exceeds the suggested amount?",
    a: "You'll have to compensate by reducing discretionary spending in the 'Entertainment' or 'Food (Eating Out)' categories. Lowering your 'Savings' rate should be your absolute last resort."
  }
];

export const Results = ({ data, onReset }: { data: FormData, onReset: () => void }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const chartData = CATEGORIES.map(c => ({
    name: c.name,
    value: (data.income * c.percent) / 100,
    color: c.color,
    tip: c.tip,
    percent: c.percent
  }));

  const insights = [];
  const emiPercent = (data.emi / data.income) * 100;

  if (emiPercent > 40) {
    insights.push({ title: 'High EMI Burden', text: `Your EMI takes up ${emiPercent.toFixed(1)}% of your income. Core bank guidelines suggest keeping this below 40% to avoid crushing your flexibility.`, type: 'warning' });
  }

  if (['Mumbai', 'Bangalore', 'Delhi NCR', 'Gurgaon'].includes(data.city)) {
    const rentAmount = (data.income * 0.3).toLocaleString('en-IN');
    insights.push({ title: 'Tier 1 City Adjustment', text: `Living in ${data.city} means intense real estate prices. The 30% standard rent allocation (₹${rentAmount}) might be tight. Factor in transit costs if you move further out.`, type: 'info' });
  }

  if (data.eatingOut === 'frequently') {
    insights.push({ title: 'Food Budget Overflow', text: `Eating out frequently strongly correlates to exceeding your strict 12% food limit. You may have to pull funds from Entertainment or Savings.`, type: 'warning' });
  }

  const getIcon = (type: string) => {
    if (type === 'warning') return <AlertCircle className="w-5 h-5 text-amber-600" />;
    return <Info className="w-5 h-5 text-blue-600" />;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Calculator link copied to clipboard!');
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
           <div>
             <h2 className="text-2xl font-bold text-slate-800">Your Budget Breakdown</h2>
             <p className="text-slate-500 hidden sm:block">Based on a monthly income of ₹{data.income.toLocaleString('en-IN')}</p>
           </div>
           <div className="flex items-center gap-3 w-full sm:w-auto">
             <button onClick={handleShare} className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
               <Share2 className="w-4 h-4" /> Share
             </button>
             <button onClick={onReset} className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
               <ArrowLeft className="w-4 h-4" /> Recalculate
             </button>
           </div>
         </div>
       </div>

       {/* Charts Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
         <div className="h-[250px] sm:h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} innerRadius={60} outerRadius={80} paddingAngle={3} dataKey="value" stroke="none">
                  {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
              </PieChart>
            </ResponsiveContainer>
         </div>
         <div className="h-[250px] sm:h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{fontSize: 10}} interval={0} angle={-45} textAnchor="end" height={60} />
                <YAxis tickFormatter={(val) => `₹${val/1000}k`} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8fafc'}} formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => <Cell key={`bar-${index}`} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
         </div>
       </div>

       {/* Detailed Expandable List */}
       <div className="space-y-3">
         <h3 className="text-xl font-bold mb-4">Category Targets</h3>
         {chartData.map(cat => (
           <div key={cat.name} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
             <button onClick={() => setExpanded(expanded === cat.name ? null : cat.name)} className="w-full flex items-center justify-between p-4 focus:outline-none">
               <div className="flex items-center gap-3">
                 <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cat.color }}></div>
                 <span className="font-semibold text-slate-700">{cat.name} <span className="text-slate-400 font-normal ml-1">({cat.percent}%)</span></span>
               </div>
               <div className="flex items-center gap-4">
                 <span className="font-bold text-slate-900 text-lg sm:text-base">₹{cat.value.toLocaleString('en-IN')}</span>
                 {expanded === cat.name ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
               </div>
             </button>
             {expanded === cat.name && (
               <div className="bg-slate-50 px-4 sm:px-12 py-4 text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                 {cat.tip}
               </div>
             )}
           </div>
         ))}
       </div>

       {/* Personalized Insights */}
       {insights.length > 0 && (
         <div className="mt-10">
           <h3 className="text-xl font-bold mb-4 border-b border-slate-200 pb-2">Personalized Insights</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {insights.map((insight, idx) => (
                <div key={idx} className={`p-5 rounded-2xl border ${insight.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
                  <div className="flex items-center gap-2 mb-2"><h4 className="font-bold flex gap-2 items-center text-lg">{getIcon(insight.type)} {insight.title}</h4></div>
                  <p className="text-sm opacity-90 leading-relaxed">{insight.text}</p>
                </div>
              ))}
           </div>
         </div>
       )}

       {/* Detailed Explanation */}
       <div className="mt-10 bg-slate-900 text-slate-300 rounded-2xl p-6 sm:p-8">
         <h3 className="text-xl font-bold text-white mb-4">How to apply this plan</h3>
         <p className="mb-4 leading-relaxed tracking-wide">
           This budget is an actionable framework. Instead of asking "where did my money go?" at the end of the month, you are telling it exactly where to go at the beginning.
         </p>
         <ul className="list-disc pl-5 space-y-2">
           <li><strong className="text-blue-400">Set up Automation:</strong> Have your Savings/EMI portion automatically deducted the day your salary hits your account.</li>
           <li><strong className="text-blue-400">Track Relentlessly:</strong> Use a simple app or spreadsheet to track just your 'Food' and 'Entertainment' spends. These are where budgets usually fail.</li>
           <li><strong className="text-blue-400">Review Monthly:</strong> Adjust these percentages slightly if you find some categories consistently underfunded or overfunded.</li>
         </ul>
       </div>

       {/* FAQ specific to results */}
       <div className="mt-10">
         <div className="flex items-center gap-2 mb-6">
           <HelpCircle className="w-6 h-6 text-blue-600" />
           <h3 className="text-xl font-bold text-slate-800">Calculator FAQ</h3>
         </div>
         <div className="space-y-4">
           {FAQS.map((faq, idx) => (
             <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors">
               <button 
                 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                 className="w-full flex items-center justify-between p-4 focus:outline-none text-left"
               >
                 <span className="font-bold text-slate-700">{faq.q}</span>
                 {openFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
               </button>
               {openFaq === idx && (
                 <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                   {faq.a}
                 </div>
               )}
             </div>
           ))}
         </div>
       </div>

    </div>
  );
};
