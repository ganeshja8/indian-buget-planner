import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
          <div>
            <h2 className="text-white text-lg font-bold flex items-center gap-2 mb-4">
              <span className="bg-blue-600 text-white p-1 rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </span>
              IndiaBudgetPlanner
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Your personalized city-wise income and savings planner designed specifically for the urban Indian professional.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-base tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/calculator" className="hover:text-blue-400 transition-colors">IndiaBudgetPlanner Calculator</Link></li>
              <li><Link to="/guides" className="hover:text-blue-400 transition-colors">City Wise Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-base tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; {new Date().getFullYear()} IndiaBudgetPlanner. All rights reserved.</p>
          <div className="text-xs bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-800 text-center md:text-left">
            <strong className="text-slate-400">Disclaimer:</strong> This website is for educational purposes only and not financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
};
