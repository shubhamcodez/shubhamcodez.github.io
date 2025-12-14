import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title = "Shubham Singh | Quantitative Finance Researcher & Machine Learning Expert",
  description = "Shubham Singh - Exceptional Quantitative Researcher with advanced expertise in statistical modeling, machine learning, and algorithmic trading. Research leader in quantitative finance, LLM finetuning, quantum semantic embeddings, and market making strategies. Founder of Exituity, Interstellar Ventures (early-stage investment firm), and Singh Asset Management (quantitative asset management with exceptional returns).",
  keywords = "quantitative researcher, machine learning expert, algorithmic trading, statistical modeling, quantitative finance, LLM finetuning, quantum semantic embedding, market making, arbitrage strategies, optimal control, NYU graduate, published researcher, Exituity founder, Interstellar Ventures founder, Singh Asset Management founder, early stage investing, startup advisor, venture capital, angel investing, asset management, investment management, hedge fund, quantitative trading, US markets, India markets, high returns, portfolio management, founder advisor",
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
    "alternateName": [
      "Shubham Singh NYU",
      "Shubham Singh DAV Kharghar",
      "Shubham Singh Bharati Vidyapeeth",
      "Shubham Singh Kharghar"
    ],
    "url": baseUrl,
    "image": `${baseUrl}/img_nvidia.png`,
    "jobTitle": "Quantitative Researcher & Founder",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Exituity",
        "url": baseUrl
      },
      {
        "@type": "Organization",
        "name": "Interstellar Ventures",
        "url": baseUrl
      },
      {
        "@type": "Organization",
        "name": "Singh Asset Management",
        "url": baseUrl
      }
    ],
    "founderOf": [
      {
        "@type": "Organization",
        "name": "Exituity"
      },
      {
        "@type": "Organization",
        "name": "Interstellar Ventures"
      },
      {
        "@type": "Organization",
        "name": "Singh Asset Management"
      }
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "New York University",
        "department": "Computer Engineering",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        }
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Bharati Vidyapeeth University",
        "department": "Computer Science",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "School",
        "name": "DAV Kharghar",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kharghar",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
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
      "Financial Engineering",
      "Early Stage Investing",
      "Venture Capital",
      "Asset Management",
      "Portfolio Management",
      "Startup Advisory"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Quantitative Researcher",
      "occupationLocation": {
        "@type": "City",
        "name": "New York"
      }
    }
  };

  // Additional structured data for WebSite and Organization
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shubham Singh NYU - Quantitative Research Portfolio",
    "url": baseUrl,
    "author": {
      "@type": "Person",
      "name": "Shubham Singh",
      "alternateName": "Shubham Singh NYU"
    },
    "publisher": {
      "@type": "Person",
      "name": "Shubham Singh",
      "alternateName": "Shubham Singh NYU"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Exituity",
      "founder": {
        "@type": "Person",
        "name": "Shubham Singh",
        "alternateName": "Shubham Singh NYU"
      },
      "url": baseUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Interstellar Ventures",
      "description": "Interstellar Ventures is an early-stage investment firm that invests $0-5k and advises founders building businesses that go beyond ordinary. Founded by Shubham Singh.",
      "founder": {
        "@type": "Person",
        "name": "Shubham Singh",
        "alternateName": "Shubham Singh NYU"
      },
      "url": baseUrl,
      "foundingDate": "2024",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "1-10"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}#organization/singh-asset-management`,
      "name": "Singh Asset Management",
      "description": "Singh Asset Management is a quantitative asset management firm achieving 78% annual returns in US markets and 28% annual returns in India markets in 2025. Founded by Shubham Singh.",
      "founder": {
        "@type": "Person",
        "name": "Shubham Singh",
        "alternateName": "Shubham Singh NYU"
      },
      "url": baseUrl,
      "foundingDate": "2024"
    }
  ];

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
    const updateLinkTag = (rel, href, attributes = {}) => {
      let element = document.querySelector(`link[rel="${rel}"]${attributes.hreflang ? `[hreflang="${attributes.hreflang}"]` : ''}`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (attributes.hreflang) {
          element.setAttribute('hreflang', attributes.hreflang);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // BreadcrumbList structured data
    const getBreadcrumbData = () => {
      const breadcrumbs = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        }
      ];

      if (location.pathname === '/quant') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Quantitative Finance Resources",
          "item": `${baseUrl}/quant`
        });
      } else if (location.pathname.startsWith('/quant/')) {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Quantitative Finance Resources",
          "item": `${baseUrl}/quant`
        });
        const pageName = location.pathname.split('/').pop();
        const pageNames = {
          'coding': 'Coding Challenges',
          'resources': 'Learning Resources',
          'puzzles': 'Puzzles'
        };
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 3,
          "name": pageNames[pageName] || pageName,
          "item": `${baseUrl}${location.pathname}`
        });
      } else if (location.pathname === '/research') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Research",
          "item": `${baseUrl}/research`
        });
      } else if (location.pathname === '/blog') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${baseUrl}/blog`
        });
      } else if (location.pathname === '/resume') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Resume",
          "item": `${baseUrl}/resume`
        });
      }

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs
      };
    };

    // Helper function to update or create script tag for JSON-LD
    const updateStructuredData = () => {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // Add Person schema (always)
      const personScript = document.createElement('script');
      personScript.setAttribute('type', 'application/ld+json');
      personScript.textContent = JSON.stringify(finalStructuredData);
      document.head.appendChild(personScript);

      // Add BreadcrumbList schema (always)
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.textContent = JSON.stringify(getBreadcrumbData());
      document.head.appendChild(breadcrumbScript);

      // Add WebSite and Organization schema (only on home page)
      if (location.pathname === '/') {
        const websiteScript = document.createElement('script');
        websiteScript.setAttribute('type', 'application/ld+json');
        websiteScript.textContent = JSON.stringify(websiteStructuredData);
        document.head.appendChild(websiteScript);

        // Add Organization schemas for all founded companies
        organizationStructuredData.forEach(org => {
          const orgScript = document.createElement('script');
          orgScript.setAttribute('type', 'application/ld+json');
          orgScript.textContent = JSON.stringify(org);
          document.head.appendChild(orgScript);
        });

        // Add FAQ schema for home page
        const faqData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is Shubham Singh NYU?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Shubham Singh NYU is a Quantitative Researcher and Machine Learning Expert who graduated from New York University with a Master's in Computer Engineering. He is also an alumnus of Bharati Vidyapeeth University and DAV Kharghar."
              }
            },
            {
              "@type": "Question",
              "name": "What does Shubham Singh do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Shubham Singh is currently an AI Quant Tutor at xAI and the founder of Exituity, Interstellar Ventures, and Singh Asset Management. He specializes in quantitative finance, machine learning, algorithmic trading, early-stage investing, and asset management. He has published multiple research papers on AI alignment, LLM finetuning, and quantitative finance."
              }
            },
            {
              "@type": "Question",
              "name": "Where did Shubham Singh study?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Shubham Singh completed his Master's in Computer Engineering at New York University (NYU) and his Bachelor's in Computer Science at Bharati Vidyapeeth University. He also attended DAV Kharghar for high school."
              }
            },
            {
              "@type": "Question",
              "name": "What is Interstellar Ventures?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Interstellar Ventures is an early-stage investment firm founded by Shubham Singh that invests $0-5k and advises founders building businesses that go beyond ordinary. The firm focuses on supporting innovative startups and providing strategic guidance to exceptional entrepreneurs."
              }
            },
            {
              "@type": "Question",
              "name": "What is Singh Asset Management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Singh Asset Management is a quantitative asset management firm founded by Shubham Singh. In 2025, the firm achieved impressive annual returns of 78% in US markets and 28% in India markets, demonstrating strong performance across both markets."
              }
            }
          ]
        };
        const faqScript = document.createElement('script');
        faqScript.setAttribute('type', 'application/ld+json');
        faqScript.textContent = JSON.stringify(faqData);
        document.head.appendChild(faqScript);
      }
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
    updateMetaTag('og:site_name', 'Shubham Singh NYU - Quantitative Research Portfolio', 'property');
    updateMetaTag('og:profile:first_name', 'Shubham', 'property');
    updateMetaTag('og:profile:last_name', 'Singh', 'property');
    updateMetaTag('og:profile:username', 'shubhamsinghnyu', 'property');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, image, type, author, currentUrl, robotsContent, finalStructuredData, location.pathname]);

  // This component doesn't render anything
  return null;
};

export default SEO;
