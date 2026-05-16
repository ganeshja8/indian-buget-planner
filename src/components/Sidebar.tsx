import { Info } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold mb-2">About IndiaBudgetPlanner</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          IndiaBudgetPlanner uses standard financial planning rules as a foundation, adapted specifically for urban Indian living costs, rents, and EMI obligations.
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
            <span className="text-slate-400">Needs (Rent, Groceries, Utils)</span>
            <span className="font-semibold text-blue-400">53%</span>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
            <span className="text-slate-400">Wants (Food, Ent.)</span>
            <span className="font-semibold text-blue-400">22%</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Savings & EMI</span>
            <span className="font-semibold text-blue-400">25%</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm leading-relaxed">
        <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
           <Info className="w-5 h-5 text-blue-600" />
           General Advice
        </h3>
        <p className="text-sm text-slate-600 mb-3">
          For most Tier-1 cities like Mumbai or Bangalore, keeping rent at exactly 30% might mean longer commutes. Maintain a balance between your rent and transit time.
        </p>
        <p className="text-sm text-slate-600">
          Always aim to build a 6-month emergency fund from your Savings allocation before attempting risk investments.
        </p>
      </div>
    </div>
  );
};
