import { ChevronLeft, ChevronRight, User, Users, UsersRound, Utensils, Coffee, Pizza, Tv, Ticket, Sparkles } from 'lucide-react';
import { FormData } from '../types';

interface Props {
  data: FormData;
  onUpdate: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const ChoiceCard = ({ title, desc, icon, selected, onClick }: any) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center sm:items-start text-center sm:text-left border-2 rounded-xl p-4 sm:p-5 transition-all duration-200 ${
      selected 
        ? 'border-blue-600 bg-blue-50 shadow-sm' 
        : 'border-slate-200 hover:border-blue-300 bg-white hover:bg-slate-50'
    }`}
  >
    <div className={`p-3 rounded-full mb-3 ${selected ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
      {icon}
    </div>
    <div className="font-semibold text-slate-800">{title}</div>
    <div className="text-xs sm:text-sm text-slate-500 mt-1">{desc}</div>
  </button>
);

export const StepTwo = ({ data, onUpdate, onNext, onBack }: Props) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center md:text-left mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Your Lifestyle</h2>
        <p className="text-slate-500 mt-1">This helps us personalize your expenditure limits.</p>
      </div>

      <section>
        <h3 className="text-base font-semibold text-slate-800 mb-3">Household Type</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
           <ChoiceCard
             title="Bachelor" desc="1 Person" icon={<User className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.household === 'bachelor'}
             onClick={() => onUpdate('household', 'bachelor')}
           />
           <ChoiceCard
             title="Couple" desc="2 Humans" icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.household === 'couple'}
             onClick={() => onUpdate('household', 'couple')}
           />
           <ChoiceCard
             title="Family" desc="3+ People" icon={<UsersRound className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.household === 'family'}
             onClick={() => onUpdate('household', 'family')}
           />
        </div>
      </section>

      <section>
        <h3 className="text-base font-semibold text-slate-800 mb-3">Eating Out Frequency</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
           <ChoiceCard
             title="Rarely" desc="1-2 times/month" icon={<Utensils className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.eatingOut === 'rarely'}
             onClick={() => onUpdate('eatingOut', 'rarely')}
           />
           <ChoiceCard
             title="Moderate" desc="Most weekends" icon={<Coffee className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.eatingOut === 'moderate'}
             onClick={() => onUpdate('eatingOut', 'moderate')}
           />
           <ChoiceCard
             title="Frequently" desc="Almost everyday" icon={<Pizza className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.eatingOut === 'frequently'}
             onClick={() => onUpdate('eatingOut', 'frequently')}
           />
        </div>
      </section>

      <section>
        <h3 className="text-base font-semibold text-slate-800 mb-3">Entertainment Spending</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
           <ChoiceCard
             title="Minimal" desc="Basic subs" icon={<Tv className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.entertainment === 'minimal'}
             onClick={() => onUpdate('entertainment', 'minimal')}
           />
           <ChoiceCard
             title="Moderate" desc="Movies, Pubs" icon={<Ticket className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.entertainment === 'moderate'}
             onClick={() => onUpdate('entertainment', 'moderate')}
           />
           <ChoiceCard
             title="Luxury" desc="Clubs, Concerts" icon={<Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />}
             selected={data.entertainment === 'luxury'}
             onClick={() => onUpdate('entertainment', 'luxury')}
           />
        </div>
      </section>

      <div className="pt-6 flex flex-col-reverse sm:flex-row justify-between gap-3">
        <button 
          onClick={onBack} 
          className="px-6 py-3 w-full sm:w-auto bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors font-semibold flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" /> Back
        </button>
        <button 
          onClick={onNext} 
          className="px-6 py-3 w-full sm:w-auto bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
        >
          See Results <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
