import './App.css';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
          description: "Shubham Singh - Exceptional Quantitative Researcher with advanced expertise in statistical modeling, machine learning, and algorithmic trading. Research leader in quantitative finance, LLM finetuning, quantum semantic embeddings, and market making strategies. Founder of Exituity.",
          keywords: "quantitative researcher, machine learning expert, algorithmic trading, statistical modeling, quantitative finance, LLM finetuning, quantum semantic embedding, market making, arbitrage strategies, optimal control, NYU graduate, published researcher, Exituity founder",
          image: `${baseUrl}/img_nvidia.png`,
          type: "profile"
        };
      case '/quant':
        return {
          title: "Quantitative Finance Resources | Shubham Singh",
          description: "Comprehensive quantitative finance resources including coding challenges, puzzles, and educational materials for aspiring quantitative researchers and traders.",
          keywords: "quantitative finance resources, quant coding challenges, trading puzzles, quantitative finance education, algorithmic trading resources",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/coding':
        return {
          title: "Quantitative Finance Coding Challenges | Shubham Singh",
          description: "Practice coding challenges and problems for quantitative finance interviews and algorithmic trading positions.",
          keywords: "quant coding challenges, quantitative finance coding, algorithmic trading coding, quant interview preparation, finance programming",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/resources':
        return {
          title: "Quantitative Finance Learning Resources | Shubham Singh",
          description: "Curated list of books, papers, courses, and resources for learning quantitative finance, machine learning, and algorithmic trading.",
          keywords: "quantitative finance books, quant learning resources, finance courses, trading education, quantitative finance papers",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/puzzles':
        return {
          title: "Quantitative Finance Puzzles | Shubham Singh",
          description: "Brain teasers and puzzles for quantitative finance interviews and trading positions. Test your problem-solving skills.",
          keywords: "quant puzzles, finance brain teasers, quantitative interview puzzles, trading puzzles, quant problem solving",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/resume':
        return {
          title: "Resume | Shubham Singh - Quantitative Researcher",
          description: "Professional resume and CV of Shubham Singh - Quantitative Researcher specializing in machine learning, algorithmic trading, and statistical modeling.",
          keywords: "Shubham Singh resume, quantitative researcher CV, quant researcher resume, machine learning engineer resume",
          image: `${baseUrl}/img_nvidia.png`,
          type: "profile"
        };
      case '/research':
        return {
          title: "Research | Shubham Singh - Quantitative Finance & Machine Learning",
          description: "Research publications, working papers, and preprints by Shubham Singh on quantitative finance, machine learning, LLM alignment, and algorithmic trading.",
          keywords: "quantitative finance research, machine learning research, LLM alignment, algorithmic trading research, research papers, arXiv preprints",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/casual':
        return {
          title: "Casual Inference | Shubham Singh",
          description: "Casual Inference - Personal blog and articles by Shubham Singh on quantitative finance, machine learning, and technology.",
          keywords: "Casual Inference, quantitative finance blog, machine learning blog, Shubham Singh blog, quant research blog",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/team':
        return {
          title: "Team | Shubham Singh",
          description: "Meet the team and collaborators working with Shubham Singh on quantitative research and machine learning projects.",
          keywords: "research team, collaborators, quantitative research team",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      default:
        return {
          title: "Shubham Singh | Quantitative Finance Researcher & Machine Learning Expert",
          description: "Shubham Singh - Exceptional Quantitative Researcher with advanced expertise in statistical modeling, machine learning, and algorithmic trading.",
          keywords: "quantitative researcher, machine learning expert, algorithmic trading",
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
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/casual">Blog</Link></li>
              </ul>
            </nav>
          )}
        </div>
        
        <Routes>
          <Route path="/" element={
            <div>
              <div className="intro-section">
                <div className="intro-content">
                  <div className="justified-text">
                    <p>
                      I am an engineer specializing in machine learning, AI, engineering, and quantitative research. My work encompasses building AI solutions, developing trading strategies, and constructing end-to-end systems—from predictive pricing models and algorithmic trading strategies to robust trading systems, risk frameworks, and scalable ML pipelines that transform data ingestion and feature engineering into real-time AI model deployment.
                    </p>
                    <p><strong>Education:</strong></p>
                    <ul>
                      <li>M.S. in Computer Engineering, New York University (Sep 2023 – Aug 2025)</li>
                      <li>B.S. in Computer Science, Bharati Vidyapeeth University (Jul 2019 – Jun 2023)</li>
                    </ul>
                    <p><strong>Experience:</strong></p>
                    <ul>
                      <li><strong>xAI</strong> — AI Quant Tutor (Current): Contributing to AI training and improvement initiatives</li>
                      <li><strong>Exituity</strong> — Founder (Current): Building an AI-powered business navigator with forecasting, valuation, and real-time insights</li>
                      <li><strong>GoQuant</strong> — Quant Researcher (Sep 2024 – Sep 2025): Directed alpha research and deployed systematic trading strategies</li>
                      <li><strong>Artificial Intelligence Institute of South Carolina (AIISC)</strong> — AI Researcher (Sep 2024 – May 2025): Co-authored Alignment Quality Index paper and fine-tuned LLM models for alignment research</li>
                      <li><strong>New York University</strong> — AI Product Management Mentor (May 2024 – May 2025): Mentored students and orchestrated cross-institution collaborations</li>
                      <li><strong>QuantFarming</strong> — Machine Learning Intern (May 2024 - July 2024): Engineered backtesting and optimization frameworks for trading strategies</li>
                      <li><strong>Symbiosis Institute of Medical Imaging</strong> — AI Research Intern (October 2022 - Mar 2023): Developed deep learning pipeline for medical image synthesis</li>
                      <li><strong>United Nations Development Programme</strong> — Data Science Intern (July 2022 - January 2023): Deployed ML models for geospatial analysis and NLP pipelines for policy insights</li>
                      <li><strong>Dexterity Global Group</strong> — Management Intern (May 2022 - June 2022)</li>
                      <li><strong>Algorithmic Biologics</strong> — Full Stack Intern (Sep 2021 - Dec 2021)</li>
                      <li><strong>DSC BVUCEOP</strong> — Member (Oct 2019 - June 2023)</li>
                      <li><strong>Entrepreneurship Development Cell</strong> — Member (July 2019 - June 2020)</li>
                    </ul>
                    <p>Email: shubham.singh (at) nyu (dot) edu</p>
                  </div>
                </div>
                <div className="profile-image-container">
                  <img src="/img_nvidia.png" alt="Shubham Singh" className="profile-image" />
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

              <div className="events-box mt-4">
                <h3>Events & Competitions</h3>
                <div className="events-content">
                  <div className="events-grid">
                    <div className="event-item">
                      <img src="/cornell competition.jpg" alt="Cornell Competition" className="event-image" />
                      <div className="event-overlay">
                        <div className="event-description">Placed top 5 in all games played at the Cornell Competition, including market making, estimatathon, trading, and prediction markets.</div>
                      </div>
                    </div>
                    <div className="event-item">
                      <img src="/cubist hackathon.jpg" alt="Cubist Hackathon 2024" className="event-image" />
                      <div className="event-overlay">
                        <div className="event-description">Built an application for tourists visiting NYC that uses graph algorithms to optimize for costs and time by leveraging subway timing, optimal paths, and time of day at the Cubist Hackathon 2024.</div>
                      </div>
                    </div>
                    <div className="event-item">
                      <img src="/ghc24.jpg" alt="GHC 2024" className="event-image" />
                      <div className="event-overlay">
                        <div className="event-description">Represented NYU Tandon at GHC 2024, helping advance GHC's mission of empowering women in technology. Engaged with students and encouraged them to join NYU as their representative.</div>
                      </div>
                    </div>
                    <div className="event-item">
                      <img src="/qualcomm lmstudio hackathon.jpg" alt="Qualcomm LM Studio Hackathon" className="event-image" />
                      <div className="event-overlay">
                        <div className="event-description">Built AutoDoc, a tool designed to automatically create documentation and tests for code, and provide an interface to interact and find code snippets across the entire database at the Qualcomm LM Studio Hackathon.</div>
                      </div>
                    </div>
                    <div className="event-item">
                      <img src="/aicaf24.jpg" alt="AICAF 2024" className="event-image" />
                      <div className="event-overlay">
                        <div className="event-description">Moderated the panel on Reinforcement Learning in Finance at AICAF'24. Volunteered for other parts of the conference.</div>
                      </div>
                    </div>
                    <div className="event-item">
                      <img src="/cdao 2024.jpg" alt="CDAO 2024" className="event-image" />
                      <div className="event-overlay">
                        <div className="event-description">Attended CDAO 2024, engaging with data and analytics leaders to discuss AI strategies and quantitative research applications.</div>
                      </div>
                    </div>
                    <div className="event-item">
                      <img src="/battle of quant 2024.jpg" alt="Battle of Quants 2024" className="event-image" />
                      <div className="event-overlay">
                        <div className="event-description">Participated in Battle of Quants 2024, engaging in discussions with top quant researchers and industry professionals, and debating key topics in quantitative finance.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <img src="/NYU.png" alt="New York University" className="university-logo" />
          <img src="/bvp.png" alt="Bharati Vidyapeeth University" className="university-logo" />
          <img src="/XAI.avif" alt="xAI" className="university-logo" />
          <img src="/exituity_logo.png" alt="Exituity" className="university-logo full-width" />
          <img src="/aiisc.png" alt="AIISC" className="university-logo full-width" />
          <img src="/undp logo.svg" alt="United Nations Development Programme" className="university-logo" />
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
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
