import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../data/posts';

export const BlogListPage = () => {
  return (
    <main className="animate-in fade-in duration-500 pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">IndiaBudgetPlanner Blog</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Insights, guides, and practical tips on personal finance, city-wise cost of living, and building wealth in India.
          </p>
        </div>

        {/* Featured Post (First Post) */}
        {blogPosts.length > 0 && (
          <div className="mb-16 group">
            <Link to={`/blog/${blogPosts[0].slug}`} className="block">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto relative overflow-hidden">
                    <img 
                      src={blogPosts[0].imageUrl} 
                      alt={blogPosts[0].title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-blue-600 font-semibold mb-4">
                      <span className="bg-blue-50 px-3 py-1 rounded-full">Featured</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {blogPosts[0].date}</span>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 line-clamp-3">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                           <User className="w-5 h-5 text-slate-500" />
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-slate-900">{blogPosts[0].author}</p>
                          <p className="text-slate-500">{blogPosts[0].readTime}</p>
                        </div>
                      </div>
                      <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="font-semibold text-slate-800 text-sm">{post.author}</span>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
