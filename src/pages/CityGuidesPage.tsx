import { useState, useMemo, useRef, useEffect } from 'react';
import { Search, MapPin, Building2, Wallet, PiggyBank, Lightbulb, ChevronRight, Calculator, CheckCircle2 } from 'lucide-react';
import { CITIES, CityInfo } from '../data/cities';
import { Link } from 'react-router-dom';

export const CityGuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  
  // Use a ref to catch clicks outside the dropdown to close it
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return CITIES.filter(city => 
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      city.state.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedCity && guideRef.current) {
      setTimeout(() => {
        guideRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedCity]);

  const handleSelectCity = (city: CityInfo) => {
    setSelectedCity(city);
    setSearchQuery(city.name);
    setShowDropdown(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredCities.length > 0) {
      handleSelectCity(filteredCities[0]);
    }
  };

  return (
    <main className="animate-in fade-in duration-500 pb-20 pt-10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">City Wise Budget Guide 2026</h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Type your city name to get personalized budget insights and cost of living breakdown.
          </p>
        </div>

        {/* Searchable Input Area with Autocomplete */}
        <div className="mb-16 relative z-30" ref={searchContainerRef}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Enter your city (e.g., Jaipur, Mumbai)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
                if (selectedCity && e.target.value.toLowerCase() !== selectedCity.name.toLowerCase()) {
                  setSelectedCity(null);
                }
              }}
              onFocus={() => {
                if (searchQuery.trim().length > 0) setShowDropdown(true);
              }}
              onKeyDown={handleKeyDown}
              className={`block w-full pl-12 pr-4 py-4 md:py-5 border-2 border-slate-200 leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-lg shadow-sm ${showDropdown && filteredCities.length > 0 ? 'rounded-t-2xl' : 'rounded-2xl'}`}
            />
            
            {/* Dropdown Suggestions */}
            {showDropdown && filteredCities.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border-2 border-t-0 border-slate-200 rounded-b-2xl shadow-xl overflow-hidden max-h-60 overflow-y-auto">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleSelectCity(city)}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none flex flex-col transition-colors border-b last:border-b-0 border-slate-100"
                  >
                    <span className="font-bold text-slate-800">{city.name}</span>
                    <span className="text-sm text-slate-500">{city.state}</span>
                  </button>
                ))}
              </div>
            )}
            
            {/* No Results Message */}
            {showDropdown && searchQuery.trim().length > 0 && filteredCities.length === 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border-2 border-t-0 border-slate-200 rounded-b-2xl shadow-xl p-4 text-center text-slate-500">
                <p>No guides found for "{searchQuery}". Try a major city.</p>
              </div>
            )}
          </div>
        </div>

        {/* Selected City Guide Section */}
        {selectedCity && (
          <div ref={guideRef} className="animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden text-slate-800">
              
              <div className="p-8 md:p-12 border-b border-slate-100 relative">
                 <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent pointer-events-none"></div>
                 <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2 relative z-10">
                    <MapPin className="w-5 h-5" /> 
                    <span className="uppercase tracking-wider">{selectedCity.state} • Tier {selectedCity.tier} City</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-slate-900 relative z-10">Cost of Living in {selectedCity.name} 2026</h2>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 bg-slate-50/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-slate-600 font-semibold mb-2"><Building2 className="w-5 h-5 text-blue-600" /> Average 1BHK Rent</div>
                    <div className="text-2xl font-bold text-slate-900">{selectedCity.stats.rent1Bhk}</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-slate-600 font-semibold mb-2"><Building2 className="w-5 h-5 text-blue-600" /> Average 2BHK Rent</div>
                    <div className="text-2xl font-bold text-slate-900">{selectedCity.stats.rent2Bhk}</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-slate-600 font-semibold mb-2"><Wallet className="w-5 h-5 text-green-600" /> Family of 4 Budget</div>
                    <div className="text-2xl font-bold text-slate-900">{selectedCity.stats.familyBudget}</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-slate-600 font-semibold mb-2"><PiggyBank className="w-5 h-5 text-indigo-600" /> Savings Target</div>
                    <div className="text-2xl font-bold text-slate-900">{selectedCity.stats.savingsTarget}</div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Lightbulb className="w-6 h-6 text-amber-500" /> 5 Practical Saving Tips for {selectedCity.name}
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg mb-1">Optimize Housing Costs</h4>
                          <p className="text-slate-600 leading-relaxed">
                            {selectedCity.tier === 1 
                              ? `In ${selectedCity.name}, housing is usually the largest expense. Consider moving to emerging outskirts with public transit connectivity rather than paying premium city-center rents.` 
                              : `Rent is relatively affordable in ${selectedCity.name}. Keep your total housing cost strict to 20-25% of your income to maximize your savings capability.`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg mb-1">Local Commuting</h4>
                          <p className="text-slate-600 leading-relaxed">
                            Fuel prices impact heavily. Rely on public transportation or carpool networks where possible rather than taking a daily cab. Two-wheelers provide the best cost-to-convenience ratio here.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg mb-1">Leverage Local Markets</h4>
                          <p className="text-slate-600 leading-relaxed">
                            Instead of relying completely on food delivery apps, purchasing fresh produce from local markets in {selectedCity.name} can reduce your grocery bills by up to 30%.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg mb-1">Utility Management</h4>
                          <p className="text-slate-600 leading-relaxed">
                            Be mindful of high electricity costs, especially during peak seasons. Using energy-efficient appliances and turning off unused electronics can make a noticeable dent in monthly expenses.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg mb-1">Automate Your Savings</h4>
                          <p className="text-slate-600 leading-relaxed">
                            Set up auto-debits directly into mutual funds or fixed deposits on your salary day. This specific discipline works better than trying to save what's left at the end of the month in {selectedCity.name}.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center text-white border border-slate-800 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400 relative z-10 border border-blue-500/30">
                      <Calculator className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">Personalize Your {selectedCity.name} Budget</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10 leading-relaxed text-lg">Plug your exact salary into our IndiaBudgetPlanner calculator to see how your personal budget should look in this city.</p>
                    <Link to="/calculator" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-blue-700 transition relative z-10 text-lg shadow-lg shadow-blue-900/20 hover:-translate-y-1">
                      Use IndiaBudgetPlanner Calculator <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        )}
        
      </div>
    </main>
  );
};
