import React, { useState, useEffect, useMemo } from 'react';
import JourneyIntoQuantFinance from './blog/JourneyIntoQuantFinance';
import MLInTrading from './blog/MLInTrading';
import FutureOfAlgoTrading from './blog/FutureOfAlgoTrading';
import RiskManagement from './blog/RiskManagement';
import OptionsPricing from './blog/OptionsPricing';
import HighFrequencyTrading from './blog/HighFrequencyTrading';
import PortfolioOptimization from './blog/PortfolioOptimization';
import TimeSeriesAnalysis from './blog/TimeSeriesAnalysis';
import CreditRisk from './blog/CreditRisk';
import RAGApplications from './blog/RAGApplications';
import PeFTMethods from './blog/PeFTMethods';
import MCPDevelopment from './blog/MCPDevelopment';
import FrankensteinReview from './blog/FrankensteinReview';

// Blog posts data imported from individual files
const allBlogPosts = [
  FrankensteinReview,
  CreditRisk,
  TimeSeriesAnalysis,
  PortfolioOptimization,
  HighFrequencyTrading,
  OptionsPricing,
  RAGApplications,
  PeFTMethods,
  MCPDevelopment,
  JourneyIntoQuantFinance,
  MLInTrading,
  FutureOfAlgoTrading,
  RiskManagement
].map(post => ({
  id: post.id,
  title: post.title,
  date: post.date,
  description: post.description
}));

// Sort blogs by date (newest first)
const sampleBlogPosts = [...allBlogPosts].sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

const Casual = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState('');

  // Use useMemo to prevent unnecessary re-renders
  const memoizedBlogPosts = useMemo(() => sampleBlogPosts, []);

  const getBlogContent = (blog) => {
    const blogMap = {
      1: JourneyIntoQuantFinance,
      2: MLInTrading,
      3: FutureOfAlgoTrading,
      4: RiskManagement,
      5: OptionsPricing,
      6: HighFrequencyTrading,
      7: PortfolioOptimization,
      8: TimeSeriesAnalysis,
      9: CreditRisk,
      10: RAGApplications,
      11: PeFTMethods,
      12: MCPDevelopment,
      13: FrankensteinReview
    };
    
    const blogPost = blogMap[blog.id];
    return blogPost ? blogPost.content : `
      <h2>${blog.title}</h2>
      <p><em>Published on ${blog.date}</em></p>
      <p>${blog.description}</p>
    `;
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setBlogContent(getBlogContent(blog));
  };

  useEffect(() => {
    setBlogPosts(memoizedBlogPosts);
    // Automatically select the latest blog post (first in the array) on initial load
    if (memoizedBlogPosts.length > 0 && selectedBlog === null) {
      const latestBlog = memoizedBlogPosts[0];
      handleBlogClick(latestBlog);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="title">Casual Inference</h1>
      </header>

      <section id="about" className="my-4">
        <p>This is my personal blog where I share insights on various topics. Feel free to explore!</p>
      </section>

      <div className="blog-layout">
        <aside className="blog-sidebar">
          <h3>Blog Posts</h3>
          <ul className="blog-post-list">
            {blogPosts.map(blog => (
              <li key={blog.id} className={selectedBlog?.id === blog.id ? 'active' : ''}>
                <button 
                  onClick={() => handleBlogClick(blog)}
                  className="blog-post-link"
                >
                  <span className="blog-post-title">{blog.title}</span>
                  <span className="blog-post-date">{blog.date}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="blog-content">
          {blogContent ? (
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: blogContent }} />
          ) : (
            <div className="blog-placeholder">
              <p>Select a blog post from the sidebar to read it.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Casual; 