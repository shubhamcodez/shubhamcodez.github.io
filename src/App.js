import './App.css';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Quant from './components/Quant';
import Resume from './components/Resume';
import Casual from './components/Casual';
import Team from './components/Team';
import Coding from './components/quant/Coding';
import Resources from './components/quant/Resources';
import Puzzles from './components/quant/Puzzles';
import DarkModeToggle from './components/DarkModeToggle';

function AppContent() {
  const location = useLocation();
  const isQuantPage = location.pathname.startsWith('/quant');

  return (
    <div className="App">
      <DarkModeToggle />
      <div>
        <div className="container">
          <header className="text-center my-4">
            <h1>Shubham Singh</h1>
          </header>

          {!isQuantPage && (
            <nav className="container-fluid">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quant">Quant Resources</Link></li>
                <li><Link to="/resume">Resume</Link></li>
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
                      I am a Quantitative Researcher specializing in statistical modeling, machine learning, and deep learning. I have developed and backtested predictive pricing models and algorithmic trading strategies; built robust trading systems and risk frameworks; and engineered scalable ML pipelines from data ingestion and feature engineering to AI model training and real-time deployment.
                    </p>
                    <p>
                      I hold an M.S. in Computer Engineering from New York University (Sep 2023 – May 2025) and a B.S. in Computer Science from Bharati Vidyapeeth University (Jul 2019 – Jun 2023).
                    </p>
                    <p>
                      Currently working as Quant Researcher at GoQuant, where I direct alpha research initiatives, deploy systematic futures and options strategies, and architect execution engines and quantitative pricing models. I design and implement intelligent smart-order-routing systems that optimize venue selection, minimizing market impact, slippage, and transaction fees.
                    </p>
                    <p>
                      My research interests include quantitative finance, machine learning, statistical modeling, and algorithmic trading. I am also interested in interdisciplinary topics that integrate methodologies in multiple fields such as applied probability, statistics, and optimization, along with their applications in addressing high-stake decision-making problems in modern large-scale systems, such as financial and economic systems. Some of the topics that I have been working on recently:
                    </p>
                    <ul>
                      <li>LLM Fintetuning and alignment,</li>
                      <li>Quantum semantic embedding of LLMs,</li>
                      <li>Market making & Arbitrage strategies,</li>
                      <li>Optimal control</li>
                    </ul>
                    <p>Please find my CV <Link to="/resume">here</Link>.</p>
                    <p>Email: shubham.singh (at) nyu (dot) edu</p>
                  </div>
                </div>
                <div className="profile-image-container">
                  <img src="/me.jpeg" alt="Shubham Singh" className="profile-image" />
                </div>
              </div>

              <div className="publications-box">
                <h3>Working Papers and Preprints</h3>
                <div className="publications-content">
                  <ul>
                    <li className="aqi-paper">
                      <div className="aqi-content">
                        <div className="aqi-image">
                          <img src="/aqi.png" alt="AQI Paper" className="aqi-paper-image" />
                        </div>
                        <div className="aqi-text">
                          <strong>Alignment Quality Index (AQI): Beyond Refusals: AQI as an Intrinsic Alignment Diagnostic via Latent Geometry, Cluster Divergence, and Layer wise Pooled Representations</strong>
                          <span className="keywords">Keywords: AI Alignment, Large Language Models, Machine Learning, Deep Learning, Neural Networks, Model Evaluation, AI Safety, Computational Linguistics</span>
                          A Borah, C Sharma, D Khanna, U Bhatt, G Singh, HM Abdullah, RK Ravi, et al. <em>arXiv preprint arXiv:2506.13901, 2025</em>
                        </div>
                      </div>
                    </li>
                    <li className="syseng-paper">
                      <div className="syseng-content">
                        <div className="syseng-image">
                          <img src="/syseng.png" alt="Systems Engineering Paper" className="syseng-paper-image" />
                        </div>
                        <div className="syseng-text">
                          <strong>Systems Engineering of Large Language Models for Enterprise Applications</strong>
                          <span className="keywords">Keywords: Large Language Models, Enterprise AI, Systems Engineering, Machine Learning, Natural Language Processing, Business Applications, AI Integration</span>
                          S Singh. <em>Preprints, 2025</em>
                        </div>
                      </div>
                    </li>
                    <li className="kanfac-paper">
                      <div className="kanfac-content">
                        <div className="kanfac-image">
                          <img src="/kanfac.png" alt="KAN Factor Models Paper" className="kanfac-paper-image" />
                        </div>
                        <div className="kanfac-text">
                          <strong>KAN based Autoencoders for Factor Models</strong>
                          <span className="keywords">Keywords: Kolmogorov-Arnold Networks, Autoencoders, Factor Models, Quantitative Finance, Machine Learning, Dimensionality Reduction, Financial Modeling</span>
                          T Wang, S Singh. <em>arXiv preprint arXiv:2408.02694, 2024</em> (2 citations)
                        </div>
                      </div>
                    </li>
                    <li className="factorsbtc-paper">
                      <div className="factorsbtc-content">
                        <div className="factorsbtc-image">
                          <img src="/factorsbtc.png" alt="Bitcoin Market Risk Factors Paper" className="factorsbtc-paper-image" />
                        </div>
                        <div className="factorsbtc-text">
                          <strong>An empirical study of market risk factors for Bitcoin</strong>
                          <span className="keywords">Keywords: Bitcoin, Cryptocurrency, Market Risk, Quantitative Finance, Financial Modeling, Risk Management, Digital Assets, Volatility Analysis</span>
                          S Singh. <em>arXiv preprint arXiv:2406.19401, 2024</em>
                        </div>
                      </div>
                    </li>
                    <li className="transformeteth-paper">
                      <div className="transformeteth-content">
                        <div className="transformeteth-image">
                          <img src="/transformereth.png" alt="Transformer Ethereum Price Prediction Paper" className="transformeteth-paper-image" />
                        </div>
                        <div className="transformeteth-text">
                          <strong>Transformer-based approach for ethereum price prediction using crosscurrency correlation and sentiment analysis</strong>
                          <span className="keywords">Keywords: Ethereum, Cryptocurrency, Price Prediction, Transformer Models, Sentiment Analysis, Cross-currency Correlation, Machine Learning, Deep Learning, Financial Forecasting</span>
                          S Singh, M Bhat. <em>arXiv preprint arXiv:2401.08077, 2024</em> (8 citations)
                        </div>
                      </div>
                    </li>
                    <li className="brainvoxgen-paper">
                      <div className="brainvoxgen-content">
                        <div className="brainvoxgen-image">
                          <img src="/brainvoxgen.png" alt="BrainVoxGen Paper" className="brainvoxgen-paper-image" />
                        </div>
                        <div className="brainvoxgen-text">
                          <strong>BrainVoxGen: Deep learning framework for synthesis of Ultrasound to MRI</strong>
                          <span className="keywords">Keywords: Medical Imaging, Ultrasound, MRI, Deep Learning, Image Synthesis, Computer Vision, Healthcare AI, Biomedical Engineering</span>
                          S Singh, M Bewoor, A Ranapurwala, S Rai, S Patil. <em>arXiv preprint arXiv:2310.08608, 2023</em> (3 citations)
                        </div>
                      </div>
                    </li>

                    <li className="geo-paper">
                      <div className="geo-content">
                        <div className="geo-image">
                          <img src="/geo.png" alt="Climate Resilience Agriculture Paper" className="geo-paper-image" />
                        </div>
                        <div className="geo-text">
                          <strong>Identifying Climate-resilient Agricultural Practices in India Through Positive Deviance Analysis of Soil Moisture, Temperature, and Precipitation Anomalies in Telangana</strong>
                          <span className="keywords">Keywords: Climate Resilience, Agriculture, India, Telangana, Soil Moisture, Temperature Analysis, Precipitation, Environmental Science, Data Analysis</span>
                          S Singh. <em>International Journal of Engineering Applied Sciences and Technology 7(10), 2023</em>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          } />
          <Route path="/quant" element={<Quant />} />
          <Route path="/quant/coding" element={<Coding />} />
          <Route path="/quant/resources" element={<Resources />} />
          <Route path="/quant/puzzles" element={<Puzzles />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        <div className="university-logos text-center mt-4">
          <img src="/NYU.png" alt="New York University" className="university-logo" />
          <img src="/bvp.png" alt="Bharati Vidyapeeth University" className="university-logo" />
          <img src="/GoQuant.png" alt="GoQuant" className="university-logo full-width" />
          <img src="/aiisc.png" alt="AIISC" className="university-logo full-width" />
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
