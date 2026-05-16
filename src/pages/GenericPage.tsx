export const GenericPage = ({ title }: { title: string }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-500">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-500 text-lg">This page is currently under construction. Check back later!</p>
      </div>
    </div>
  );
};
