import { ChevronRight } from 'lucide-react';
import { FormData } from '../types';

interface Props {
  data: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNext: () => void;
}

export const StepOne = ({ data, onChange, onNext }: Props) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center md:text-left mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Financial Details</h2>
        <p className="text-slate-500 mt-1">Let's start with your monthly cash flow.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Take-Home Income (₹)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
            <input 
              type="number" 
              name="income" 
              value={data.income || ''} 
              onChange={onChange} 
              className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
              placeholder="e.g. 80000" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
            <select 
              name="city" 
              value={data.city} 
              onChange={onChange} 
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white"
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Chennai">Chennai</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Neighborhood (Optional)</label>
            <input 
              type="text" 
              name="neighborhood" 
              value={data.neighborhood} 
              onChange={onChange} 
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
              placeholder="e.g. Indiranagar, Bandra" 
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Total Monthly EMI (₹)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
            <input 
              type="number" 
              name="emi" 
              value={data.emi || ''} 
              onChange={onChange} 
              className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
              placeholder="e.g. 15000 (0 if none)" 
            />
          </div>
          <p className="text-xs text-slate-500 mt-1.5 ml-1">Include any active loans (car, home, personal, education).</p>
        </div>
      </div>

      <div className="pt-6 flex justify-end">
        <button 
          onClick={onNext} 
          disabled={!data.income || !data.city} 
          className="px-6 py-3 w-full sm:w-auto bg-blue-600 disabled:opacity-50 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
        >
          Next Step <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
