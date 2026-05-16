import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { StepOne } from '../components/StepOne';
import { StepTwo } from '../components/StepTwo';
import { Results } from '../components/Results';
import { HomeContent } from '../components/HomeContent';
import { FormData } from '../types';

export const CalculatorPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    income: 0,
    city: '',
    neighborhood: '',
    emi: 0,
    household: '',
    eatingOut: '',
    entertainment: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'income' || name === 'emi' ? Number(value) : value
    }));
  };

  const handleFieldUpdate = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="animate-in fade-in duration-500">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Form/Results Container */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 ring-1 ring-slate-900/5">
              {/* Progress Indicator */}
              {step < 3 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-slate-400 mb-3 px-1 uppercase">
                    <span className={step >= 1 ? 'text-blue-600' : ''}>1. Financials</span>
                    <span className={step >= 2 ? 'text-blue-600' : ''}>2. Lifestyle</span>
                    <span className={step >= 3 ? 'text-blue-600' : ''}>3. Results</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-500 ease-out" 
                      style={{ width: step === 1 ? '33.3%' : step === 2 ? '66.6%' : '100%' }}
                    ></div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <StepOne 
                  data={formData} 
                  onChange={handleInputChange} 
                  onNext={() => setStep(2)} 
                />
              )}
              {step === 2 && (
                <StepTwo 
                  data={formData} 
                  onUpdate={handleFieldUpdate} 
                  onNext={() => setStep(3)} 
                  onBack={() => setStep(1)}
                />
              )}
              {step === 3 && (
                <Results 
                  data={formData} 
                  onReset={() => setStep(1)} 
                />
              )}
            </div>
          </div>

          {/* Sidebar Container */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      
      <HomeContent />
    </div>
  );
};
