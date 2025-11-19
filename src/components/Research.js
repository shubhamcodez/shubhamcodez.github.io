import React from 'react';

const Research = () => {
  return (
    <div className="container">
      <section>
        <h1>Research</h1>
        
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
      </section>
    </div>
  );
};

export default Research;

