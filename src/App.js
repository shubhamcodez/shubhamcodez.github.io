import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Quant from './components/Quant';
import Resume from './components/Resume';
import Casual from './components/Casual';
import Team from './components/Team';
import Research from './components/Research';
import Coding from './components/quant/Coding';
import Resources from './components/quant/Resources';
import Puzzles from './components/quant/Puzzles';
import DarkModeToggle from './components/DarkModeToggle';
import SEO from './components/SEO';

function AppContent() {
  const location = useLocation();
  const isQuantPage = location.pathname.startsWith('/quant');

  // SEO configuration based on current route
  const getSEOConfig = () => {
    const baseUrl = "https://shubhamcodez.github.io";
    const path = location.pathname;

    switch (path) {
      case '/':
        return {
          title: "Shubham Singh | Quantitative Finance Researcher & Machine Learning Expert",
          description: "Shubham Singh - NYU graduate and Quantitative Researcher. Shubham Singh from DAV Kharghar and Bharati Vidyapeeth University. Expert in machine learning, algorithmic trading, and quantitative finance. Research leader in quantitative finance, LLM finetuning, quantum semantic embeddings, and market making strategies. Founder of Exituity.",
          keywords: "Shubham Singh, Shubham Singh NYU, Shubham Singh DAV Kharghar, Shubham Singh Bharati Vidyapeeth, Shubham Singh Kharghar, quantitative researcher, machine learning expert, algorithmic trading, statistical modeling, quantitative finance, LLM finetuning, quantum semantic embedding, market making, arbitrage strategies, optimal control, NYU graduate, Bharati Vidyapeeth graduate, published researcher, Exituity founder",
          image: `${baseUrl}/img_nvidia.png`,
          type: "profile"
        };
      case '/quant':
        return {
          title: "Quantitative Finance Resources | Shubham Singh",
          description: "Comprehensive quantitative finance resources by Shubham Singh including coding challenges, puzzles, and educational materials for aspiring quantitative researchers and traders.",
          keywords: "Shubham Singh, Shubham Singh NYU, quantitative finance resources, quant coding challenges, trading puzzles, quantitative finance education, algorithmic trading resources",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/coding':
        return {
          title: "Quantitative Finance Coding Challenges | Shubham Singh",
          description: "Practice coding challenges and problems by Shubham Singh for quantitative finance interviews and algorithmic trading positions.",
          keywords: "Shubham Singh, Shubham Singh NYU, quant coding challenges, quantitative finance coding, algorithmic trading coding, quant interview preparation, finance programming",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/resources':
        return {
          title: "Quantitative Finance Learning Resources | Shubham Singh",
          description: "Curated list by Shubham Singh NYU of books, papers, courses, and resources for learning quantitative finance, machine learning, and algorithmic trading.",
          keywords: "Shubham Singh, Shubham Singh NYU, quantitative finance books, quant learning resources, finance courses, trading education, quantitative finance papers",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/puzzles':
        return {
          title: "Quantitative Finance Puzzles | Shubham Singh",
          description: "Brain teasers and puzzles by Shubham Singh for quantitative finance interviews and trading positions. Test your problem-solving skills.",
          keywords: "Shubham Singh, Shubham Singh NYU, quant puzzles, finance brain teasers, quantitative interview puzzles, trading puzzles, quant problem solving",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/resume':
        return {
          title: "Resume | Shubham Singh - Quantitative Researcher",
          description: "Professional resume and CV of Shubham Singh NYU - Quantitative Researcher specializing in machine learning, algorithmic trading, and statistical modeling.",
          keywords: "Shubham Singh, Shubham Singh NYU, Shubham Singh resume, quantitative researcher CV, quant researcher resume, machine learning engineer resume",
          image: `${baseUrl}/img_nvidia.png`,
          type: "profile"
        };
      case '/research':
        return {
          title: "Research | Shubham Singh - Quantitative Finance & Machine Learning",
          description: "Research publications, working papers, and preprints by Shubham Singh NYU on quantitative finance, machine learning, LLM alignment, and algorithmic trading.",
          keywords: "Shubham Singh, Shubham Singh NYU, quantitative finance research, machine learning research, LLM alignment, algorithmic trading research, research papers, arXiv preprints",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/casual':
        return {
          title: "Casual Inference | Shubham Singh",
          description: "Casual Inference - Personal blog and articles by Shubham Singh on quantitative finance, machine learning, and technology.",
          keywords: "Shubham Singh, Shubham Singh, Casual Inference, quantitative finance blog, machine learning blog, quant research blog",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/team':
        return {
          title: "Team | Shubham Singh NYU",
          description: "Meet the team and collaborators working with Shubham Singh NYU on quantitative research and machine learning projects.",
          keywords: "Shubham Singh, Shubham Singh NYU, research team, collaborators, quantitative research team",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      default:
        return {
          title: "Shubham Singh | Shubham Singh NYU | Quantitative Finance Researcher & Machine Learning Expert",
          description: "Shubham Singh NYU - Exceptional Quantitative Researcher with advanced expertise in statistical modeling, machine learning, and algorithmic trading.",
          keywords: "Shubham Singh, Shubham Singh NYU, Shubham Singh DAV Kharghar, Shubham Singh Bharati Vidyapeeth, Shubham Singh Kharghar, quantitative researcher, machine learning expert, algorithmic trading",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
    }
  };

  const seoConfig = getSEOConfig();

  return (
    <div className="App">
      <SEO {...seoConfig} />
      <DarkModeToggle />
      <div>
        <div className="container">
          {location.pathname !== '/casual' && location.pathname !== '/research' && (
            <header className="text-center my-4">
              <h1>Shubham Singh</h1>
            </header>
          )}

          {!isQuantPage && (
            <nav className="container-fluid">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/casual">Blog</Link></li>
              </ul>
            </nav>
          )}
        </div>
        
        <Routes>
          <Route path="/" element={
            <div className="home-page-content">
              <div className="intro-section">
                <article className="intro-content">
                  <div className="justified-text">
                    <p>
                      I am Shubham Singh, an engineer specializing in machine learning, AI, engineering, and quantitative research. As a NYU graduate and former student at DAV Kharghar and Bharati Vidyapeeth University, my work encompasses building AI solutions, developing trading strategies, and constructing end-to-end systems—from predictive pricing models and algorithmic trading strategies to robust trading systems, risk frameworks, and scalable ML pipelines that transform data ingestion and feature engineering into real-time AI model deployment.
                    </p>
                    <p><strong>Education:</strong> I hold a Master's in Computer Engineering from New York University (NYU) and a Bachelor's in Computer Science from Bharati Vidyapeeth University. I completed my high school education at DAV Kharghar in Kharghar, Navi Mumbai.</p>
                    <p><strong>Experience:</strong> I'm currently an AI Quant Tutor at xAI, working on AI training and improvement initiatives. I'm also the founder of Exituity, where I'm building an AI-powered business navigator with forecasting, valuation, and real-time insights. I've worked as a Quant Researcher at Blockhouse and GoQuant, directing alpha research and deploying systematic trading strategies. As an AI Researcher at the Artificial Intelligence Institute of South Carolina, I co-authored the Alignment Quality Index paper and fine-tuned LLM models for alignment research. At NYU, I've mentored students as an AI Product Management Mentor and facilitated cross-institution collaborations. Earlier, I interned at QuantFarming building backtesting and optimization frameworks for trading strategies, at Symbiosis Institute of Medical Imaging developing deep learning pipelines for medical image synthesis, and at the United Nations Development Programme deploying ML models for geospatial analysis and NLP pipelines. I've also worked with Dexterity Global Group and Algorithmic Biologics, and was involved with DSC BVUCEOP and the Entrepreneurship Development Cell during my undergraduate years.</p>
                    <p>Email: shubham.singh (at) nyu (dot) edu</p>
                  </div>
                </article>
                <div className="profile-image-container">
                      <img src="/img_nvidia.png" alt="Shubham Singh NYU - Quantitative Researcher and Machine Learning Expert" className="profile-image" />
                </div>
              </div>

              <div className="events-box mt-4">
                <h3>Research Interests</h3>
                <div className="justified-text">
                  <p>
                    My research interests span quantitative finance, machine learning, statistical modeling, and algorithmic trading. I am particularly interested in interdisciplinary approaches that integrate methodologies from applied probability, statistics, and optimization to address high-stakes decision-making problems in modern large-scale systems, particularly in financial and economic domains. Current research topics include:
                  </p>
                  <ul>
                    <li>LLM finetuning and alignment</li>
                    <li>Quantum semantic embedding of LLMs</li>
                    <li>Market making & arbitrage strategies</li>
                    <li>Optimal control</li>
                  </ul>
                </div>
              </div>

              <Research hideTitle={true} />
            </div>
          } />
          <Route path="/quant" element={<Quant />} />
          <Route path="/quant/coding" element={<Coding />} />
          <Route path="/quant/resources" element={<Resources />} />
          <Route path="/quant/puzzles" element={<Puzzles />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        <div className="university-logos text-center mt-4">
          <img src="/companies/NYU.png" alt="Shubham Singh NYU - New York University" title="Shubham Singh NYU - New York University" className="university-logo" />
          <img src="/companies/bvp.png" alt="Shubham Singh Bharati Vidyapeeth University" title="Shubham Singh Bharati Vidyapeeth University" className="university-logo" />
          <img src="/companies/XAI.avif" alt="Shubham Singh xAI - Shubham Singh works at xAI" title="Shubham Singh xAI - AI Quant Tutor at xAI" className="university-logo" />
          <img src="/companies/exituity_logo.png" alt="Shubham Singh Exituity - Founder" title="Shubham Singh Exituity - Founder of Exituity" className="university-logo full-width" />
          <img src="/companies/aiisc.png" alt="Shubham Singh AIISC - Artificial Intelligence Institute of South Carolina" title="Shubham Singh AIISC - AI Researcher" className="university-logo full-width" />
          <img src="/companies/undp logo.svg" alt="Shubham Singh United Nations Development Programme" title="Shubham Singh UNDP - Data Science Intern" className="university-logo" />
        </div>
        
        <footer className="text-center mt-4">
          <p>&copy; 2025 Shubham Singh. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shubhamsinghnyu" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.kaggle.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-kaggle"></i>
            </a>
            <a href="https://www.youtube.com/ShubhamSinghYoutube" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  // Handle GitHub Pages routing - fix redirect loops
  useEffect(() => {
    const pathname = window.location.pathname;
    const search = window.location.search;
    const hash = window.location.hash;
    
    // If URL is already clean (no /?/ redirect format), do nothing
    if (!search.includes('/?/') && !search.includes('~and~')) {
      return;
    }
    
    // Use sessionStorage to prevent multiple redirects in the same session
    const redirectKey = 'github-pages-redirect-processed';
    const redirectTimestamp = sessionStorage.getItem(redirectKey);
    const now = Date.now();
    
    // If we processed a redirect recently (within last 2 seconds), skip to prevent loops
    if (redirectTimestamp && (now - parseInt(redirectTimestamp)) < 2000) {
      return;
    }
    
    // Mark current time
    sessionStorage.setItem(redirectKey, now.toString());
    
    // Detect malformed URLs with excessive ~and~ sequences (infinite loop indicator)
    if (search.includes('~and~') && (search.match(/~and~/g) || []).length > 5) {
      // Clean up malformed URL immediately
      const cleanPath = pathname.includes('casual') ? '/casual' : (pathname || '/');
      window.location.replace(cleanPath + hash);
      return;
    }
    
    // Handle GitHub Pages redirect format: /?/path
    if (search.includes('/?/')) {
      try {
        const queryPart = search.split('/?/')[1];
        if (queryPart) {
          // Extract path before any query parameters
          let path = queryPart.split('&')[0];
          
          // Remove any ~and~ sequences (these shouldn't be in the path)
          path = path.replace(/~and~/g, '');
          
          // Ensure path starts with /
          if (path && !path.startsWith('/')) {
            path = '/' + path;
          }
          
          // Validate path - must be clean and reasonable length
          if (path && path !== '/' && path.length < 100 && !path.includes('~and~')) {
            // Build clean URL
            const basePath = pathname === '/' ? '' : pathname.split('/').slice(0, 2).join('/');
            const newUrl = basePath + path + hash;
            
            // Use replace to navigate (prevents back button issues)
            window.location.replace(newUrl);
          } else {
            // Invalid path - clean up URL
            window.location.replace(pathname + hash);
          }
        }
      } catch (error) {
        console.error('Error handling GitHub Pages redirect:', error);
        // Clean up on error
        window.location.replace(pathname + hash);
      }
    }
  }, []); // Run only once on mount

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
