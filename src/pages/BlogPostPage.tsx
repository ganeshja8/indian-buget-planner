import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon, Share2 } from 'lucide-react';
import { blogPosts } from '../data/posts';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <main className="animate-in fade-in duration-500 pb-20 pt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
        
        {/* Article Header */}
        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-slate-500 font-medium pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-800">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                 <User className="w-4 h-4 text-slate-500" />
              </div>
              <span>{post.author}</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-md">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-auto sm:h-[400px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-blue-600 prose-p:leading-relaxed prose-img:rounded-xl">
          <post.content />
        </div>

        {/* Footer & Share */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-500 font-medium mb-1 text-center sm:text-left">Enjoyed this article?</p>
              <p className="text-slate-800 font-semibold text-lg text-center sm:text-left">Share it with your friends</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleShare} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                <LinkIcon className="w-5 h-5" />
              </button>
              <button onClick={handleShare} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-blue-50 transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </button>
              <button onClick={handleShare} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-blue-50 transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </button>
              <button onClick={handleShare} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-blue-50 transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
};
