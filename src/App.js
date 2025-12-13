import './App.css';
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
import CompaniesDropdown from './components/CompaniesDropdown';
import PaperDetail from './components/PaperDetail';

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
          description: "Shubham Singh - NYU graduate and Quantitative Researcher. Shubham Singh from DAV Kharghar and Bharati Vidyapeeth University. Expert in machine learning, algorithmic trading, and quantitative finance. Research leader in quantitative finance, LLM finetuning, quantum semantic embeddings, and market making strategies. Founder of Exituity (AI-powered business navigator), Interstellar Ventures (early-stage investment firm investing $0-5k and advising founders), and Singh Asset Management ($50k AUM with 78% returns in US markets and 28% in India markets in 2025).",
          keywords: "Shubham Singh, Shubham Singh NYU, Shubham Singh DAV Kharghar, Shubham Singh Bharati Vidyapeeth, Shubham Singh Kharghar, quantitative researcher, machine learning expert, algorithmic trading, statistical modeling, quantitative finance, LLM finetuning, quantum semantic embedding, market making, arbitrage strategies, optimal control, NYU graduate, Bharati Vidyapeeth graduate, published researcher, Exituity founder, Interstellar Ventures, Interstellar Ventures founder, Singh Asset Management, Singh Asset Management founder, early stage investing, startup advisor, venture capital, angel investing, asset management firm, investment management, hedge fund, quantitative trading, US markets trading, India markets trading, high returns investment, portfolio management, founder advisor, 78% returns, 50k AUM, startup investment advisor",
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
      case '/blog':
        return {
          title: "Blog | Shubham Singh",
          description: "Blog - Personal blog and articles by Shubham Singh on quantitative finance, machine learning, and technology.",
          keywords: "Shubham Singh, Shubham Singh NYU, blog, quantitative finance blog, machine learning blog, quant research blog",
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
        // Check if it's a research paper page
        if (path.startsWith('/research/')) {
          return {
            title: "Research Paper | Shubham Singh NYU",
            description: "Research publication by Shubham Singh NYU on quantitative finance, machine learning, and AI.",
            keywords: "Shubham Singh, Shubham Singh NYU, research paper, quantitative finance, machine learning",
            image: `${baseUrl}/img_nvidia.png`,
            type: "article"
          };
        }
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
          {location.pathname !== '/blog' && location.pathname !== '/research' && (
            <header className="text-center my-4">
              <h1>Shubham Singh</h1>
            </header>
          )}

          {!isQuantPage && (
            <nav className="container-fluid">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <CompaniesDropdown />
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
                    <p><strong>Experience:</strong> I'm currently an AI Quant Tutor at xAI, working on AI training and improvement initiatives. I'm also the founder of Exituity, where I'm building an AI-powered business navigator with forecasting, valuation, and real-time insights. I'm the founder of Interstellar Ventures, which invests $0-5k and advises founders building businesses that go beyond ordinary. I'm also the founder of Singh Asset Management, with an AUM of $50k USD and annual returns of 78% in US markets and 28% in India markets in 2025. I've worked as a Quant Researcher at Blockhouse and GoQuant, directing alpha research and deploying systematic trading strategies. As an AI Researcher at the Artificial Intelligence Institute of South Carolina, I co-authored the Alignment Quality Index paper and fine-tuned LLM models for alignment research. At NYU, I've mentored students as an AI Product Management Mentor and facilitated cross-institution collaborations. Earlier, I interned at QuantFarming building backtesting and optimization frameworks for trading strategies, at Symbiosis Institute of Medical Imaging developing deep learning pipelines for medical image synthesis, and at the United Nations Development Programme deploying ML models for geospatial analysis and NLP pipelines. I've also worked with Dexterity Global Group and Algorithmic Biologics, and was involved with DSC BVUCEOP and the Entrepreneurship Development Cell during my undergraduate years.</p>
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
          <Route path="/research/:paperId" element={<PaperDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Casual />} />
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
            <a href="https://x.com/peakshubham" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://scholar.google.com/citations?user=YTCnYh4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fas fa-graduation-cap"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
