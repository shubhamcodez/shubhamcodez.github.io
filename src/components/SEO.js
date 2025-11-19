import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title = "Shubham Singh | Quantitative Finance Researcher & Machine Learning Expert",
  description = "Shubham Singh - Exceptional Quantitative Researcher with advanced expertise in statistical modeling, machine learning, and algorithmic trading. Research leader in quantitative finance, LLM finetuning, quantum semantic embeddings, and market making strategies.",
  keywords = "quantitative researcher, machine learning expert, algorithmic trading, statistical modeling, quantitative finance, LLM finetuning, quantum semantic embedding, market making, arbitrage strategies, optimal control, NYU graduate, published researcher, Exituity founder",
  image = "https://shubhamcodez.github.io/img_nvidia.png",
  type = "website",
  author = "Shubham Singh",
  canonicalUrl = null,
  noindex = false,
  nofollow = false,
  structuredData = null
}) => {
  const location = useLocation();
  const baseUrl = "https://shubhamcodez.github.io";
  // Handle hash routes for GitHub Pages
  const path = location.pathname === '/' ? '' : location.pathname;
  const hash = location.hash || '';
  const currentUrl = canonicalUrl || `${baseUrl}${path}${hash}`;
  
  // Default structured data for Person schema
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shubham Singh",
    "url": baseUrl,
    "image": `${baseUrl}/img_nvidia.png`,
    "jobTitle": "Quantitative Researcher & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Exituity"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "New York University",
        "department": "Computer Engineering"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Bharati Vidyapeeth University",
        "department": "Computer Science"
      }
    ],
    "email": "shubham.singh@nyu.edu",
    "sameAs": [
      "https://www.linkedin.com/in/shubhamsinghnyu",
      "https://github.com/shubhamcodez",
      "https://www.kaggle.com/shubhamcodez",
      "https://www.youtube.com/ShubhamSinghYoutube"
    ],
    "knowsAbout": [
      "Quantitative Finance",
      "Machine Learning",
      "Deep Learning",
      "Statistical Modeling",
      "Algorithmic Trading",
      "Risk Management",
      "Financial Engineering"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Helper function to update or create script tag for JSON-LD
    const updateStructuredData = () => {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(finalStructuredData);
    };

    // Primary Meta Tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', robotsContent);
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('geo.region', 'US-NY');
    updateMetaTag('geo.placename', 'New York');
    updateMetaTag('geo.position', '40.7128;-74.0060');
    updateMetaTag('ICBM', '40.7128, -74.0060');

    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // Open Graph / Facebook
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', title, 'property');
    updateMetaTag('og:site_name', 'Shubham Singh - Quantitative Research Portfolio', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', currentUrl);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', title);
    updateMetaTag('twitter:site', '@shubhamsingh');
    updateMetaTag('twitter:creator', '@shubhamsingh');

    // Structured Data
    updateStructuredData();

    // Cleanup function (optional, but good practice)
    return () => {
      // Meta tags will persist, which is fine for SEO
      // We don't need to clean them up as they'll be replaced on next render
    };
  }, [title, description, keywords, image, type, author, currentUrl, robotsContent, finalStructuredData]);

  // This component doesn't render anything
  return null;
};

export default SEO;
