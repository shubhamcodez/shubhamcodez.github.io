import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from './SEO';

const papers = {
  'alignment-quality-index': {
    id: 'alignment-quality-index',
    title: 'Alignment Quality Index (AQI): Beyond Refusals: AQI as an Intrinsic Alignment Diagnostic via Latent Geometry, Cluster Divergence, and Layer wise Pooled Representations',
    authors: 'Abhilekh Borah, Chhavi Sharma, Danush Khanna, Utkarsh Bhatt, Gurpreet Singh, Hasnat Md Abdullah, Raghav Kaushik Ravi, Vinija Jain, Jyoti Patel, Shubham Singh, Vasu Sharma, Arpita Vats, Rahul Raja, Aman Chadha, Amitava Das',
    institution: 'AI Institute, University of South Carolina, USA',
    year: '2025',
    venue: 'EMNLP 2025',
    image: '/research/aqi.png',
    keywords: 'AI Alignment, Large Language Models, Machine Learning, Deep Learning, Neural Networks, Model Evaluation, AI Safety, Computational Linguistics',
    abstract: 'Alignment is no longer a luxury; it is a necessity. As large language models (LLMs) enter high-stakes domains like education, healthcare, governance, and law, their behavior must reliably reflect human-aligned values and safety constraints. Yet current evaluations rely heavily on behavioral proxies such as refusal rates, G-Eval scores, and toxicity classifiers, all of which have critical blind spots. Aligned models are often vulnerable to jailbreaking, stochasticity of generation and alignment faking. To address this issue, we introduce the Alignment Quality Index (AQI). This novel geometric and prompt-invariant metric empirically assesses LLM alignment by analyzing the separation of safe and unsafe activations in latent space. By combining measures such as the Davies-Bouldin score (DBS), Dunn index (DI), Xie-Beni index (XBI), and Calinski-Harabasz index (CHI) across various formulations, AQI captures clustering quality to detect hidden misalignments and jailbreak risks, even when outputs appear compliant. AQI also serves as an early warning signal for alignment faking, offering a robust, decoding-invariant tool for behavior-agnostic safety auditing. Additionally, we propose the LITMUS dataset to facilitate robust evaluation under these challenging conditions. Empirical tests on LITMUS across different models trained under DPO, GRPO, and RLHF conditions demonstrate AQI\'s correlation with external judges and ability to reveal vulnerabilities missed by refusal metrics. We make our implementation publicly available to foster future research in this area.',
    arxivId: '2506.13901',
    website: 'https://aqi-web.netlify.app/',
    citations: null
  },
  'systems-engineering-llm': {
    id: 'systems-engineering-llm',
    title: 'Systems Engineering of Large Language Models for Enterprise Applications',
    authors: 'Shubham Singh',
    institution: 'New York University',
    year: '2025',
    venue: 'Preprints.org (Not Peer-Reviewed)',
    postedDate: '9 January 2025',
    doi: '10.20944/preprints202501.0715.v1',
    image: '/research/syseng.png',
    keywords: 'large language models; fine tuning; system engineering',
    abstract: 'This report provides a comprehensive systems engineering analysis of Large Language Model (LLM) adoption in enterprise environments, emphasizing the need for a structured implementation approach to ensure success. It examines key aspects of LLM deployment, including customization techniques such as Parameter-Efficient Fine-Tuning (PEFT), Low-Rank Adaptation (LoRA), and Retrieval-Augmented Generation (RAG), while addressing challenges related to computational resource management, model safety, and ethical considerations. The study outlines a framework covering the entire LLM lifecycle, from initial needs assessment to deployment and maintenance, with a focus on data management strategies, infrastructure requirements, and integration methods. Additionally, it offers a comparative analysis of fine-tuning existing models versus developing in-house solutions, providing practical guidance for overcoming implementation challenges. The findings underscore the importance of balancing technical capabilities with operational constraints and ensuring robust security, compliance, and ethical standards.',
    arxivId: null,
    citations: null
  },
  'kan-autoencoders': {
    id: 'kan-autoencoders',
    title: 'KAN based Autoencoders for Factor Models',
    authors: 'Tianqi Wang, Shubham Singh',
    institution: 'New York University',
    authorDetails: {
      'Tianqi Wang': {
        affiliation: 'Courant Institute of Mathematical Science, New York University, New York, NY, US',
        email: 'tw2250@nyu.edu'
      },
      'Shubham Singh': {
        affiliation: 'ECE Department, NYU Tandon School of Engineering, New York University, New York, NY, US'
      }
    },
    year: '2024',
    venue: 'ACM International Conference for AI in Finance (ICAIF \'24)',
    conference: 'International Conference for AI in Finance \'24, June, 2024, New York, NY USA',
    image: '/research/kanfac.png',
    keywords: 'Deep learning, Autoencoder, Kolmogorov-Arnold Networks (KANs), Asset pricing models, Non-linear factor models, Predictive modeling, Quantitative finance',
    abstract: 'Inspired by recent advances in Kolmogorov-Arnold Networks (KANs), we introduce a novel approach to latent factor conditional asset pricing models. While previous machine learning applications in asset pricing have predominantly used Multilayer Perceptrons with ReLU activation functions to model latent factor exposures, our method introduces a KAN-based autoencoder which surpasses MLP models in both accuracy and interpretability. Our model offers enhanced flexibility in approximating exposures as nonlinear functions of asset characteristics, while simultaneously providing users with an intuitive framework for interpreting latent factors. Empirical backtesting demonstrates our model\'s superior ability to explain cross-sectional risk exposures. Moreover, long-short portfolios constructed using our model\'s predictions achieve higher Sharpe ratios, highlighting its practical value in investment management.',
    arxivId: '2408.02694',
    arxivUrl: 'https://arxiv.org/pdf/2408.02694',
    citations: 2
  },
  'bitcoin-risk-factors': {
    id: 'bitcoin-risk-factors',
    title: 'An empirical study of market risk factors for Bitcoin',
    authors: 'Shubham Singh',
    institution: 'New York University',
    year: '2024',
    venue: 'arXiv preprint arXiv:2406.19401',
    image: '/research/factorsbtc.png',
    keywords: 'cryptocurrency, market risk, quantitative research, financial modeling, Bitcoin, Fama-French model, factor analysis',
    abstract: 'The study examines whether fama-french equity factors can effectively explain the idiosyncratic risk and return characteristics of Bitcoin. By incorporating Fama-french factors, the explanatory power of these factors on Bitcoin\'s excess returns over various moving average periods is tested through applications of several statistical methods. The analysis aims to determine if equity market factors are significant in explaining and modeling systemic risk in Bitcoin.',
    arxivId: '2406.19401',
    arxivUrl: 'https://arxiv.org/pdf/2406.19401',
    citations: null
  },
  'transformer-ethereum': {
    id: 'transformer-ethereum',
    title: 'Transformer-based approach for ethereum price prediction using crosscurrency correlation and sentiment analysis',
    authors: 'S Singh, M Bhat',
    year: '2024',
    venue: 'arXiv preprint arXiv:2401.08077',
    image: '/research/transformereth.png',
    keywords: 'Ethereum, Cryptocurrency, Price Prediction, Transformer Models, Sentiment Analysis, Cross-currency Correlation, Machine Learning, Deep Learning, Financial Forecasting',
    abstract: 'This paper presents a transformer-based model for Ethereum price prediction that incorporates cross-currency correlations and sentiment analysis, achieving improved forecasting accuracy.',
    arxivId: '2401.08077',
    citations: 8
  },
  'brainvoxgen': {
    id: 'brainvoxgen',
    title: 'BrainVoxGen: Deep learning framework for synthesis of Ultrasound to MRI',
    authors: 'S Singh, M Bewoor, A Ranapurwala, S Rai, S Patil',
    year: '2023',
    venue: 'arXiv preprint arXiv:2310.08608',
    image: '/research/brainvoxgen.png',
    keywords: 'Medical Imaging, Ultrasound, MRI, Deep Learning, Image Synthesis, Computer Vision, Healthcare AI, Biomedical Engineering',
    abstract: 'BrainVoxGen introduces a deep learning framework for synthesizing MRI images from ultrasound data, with applications in medical imaging and diagnostic workflows.',
    arxivId: '2310.08608',
    citations: 3
  },
  'climate-resilient-agriculture': {
    id: 'climate-resilient-agriculture',
    title: 'Identifying Climate-resilient Agricultural Practices in India Through Positive Deviance Analysis of Soil Moisture, Temperature, and Precipitation Anomalies in Telangana',
    authors: 'S Singh',
    year: '2023',
    venue: 'International Journal of Engineering Applied Sciences and Technology 7(10)',
    image: '/research/geo.png',
    keywords: 'Climate Resilience, Agriculture, India, Telangana, Soil Moisture, Temperature Analysis, Precipitation, Environmental Science, Data Analysis',
    abstract: 'This study uses positive deviance analysis to identify climate-resilient agricultural practices in Telangana, India, by analyzing soil moisture, temperature, and precipitation anomalies.',
    arxivId: null,
    citations: null
  }
};

const PaperDetail = () => {
  const { paperId } = useParams();
  const paper = papers[paperId];

  if (!paper) {
    return (
      <div className="container">
        <h1>Paper Not Found</h1>
        <p>The requested research paper could not be found.</p>
        <Link to="/research">Back to Research</Link>
      </div>
    );
  }

  const baseUrl = "https://shubhamcodez.github.io";
  const paperUrl = `${baseUrl}/research/${paper.id}`;
  const paperImage = `${baseUrl}${paper.image}`;

  // Generate SEO metadata
  const seoTitle = `${paper.title} | Shubham Singh NYU`;
  const seoDescription = paper.abstract.length > 160 
    ? paper.abstract.substring(0, 157) + '...' 
    : paper.abstract;
  const seoKeywords = `${paper.keywords}, Shubham Singh, Shubham Singh NYU, ${paper.venue}, research paper`;

  // Generate ScholarlyArticle structured data
  const scholarlyArticleData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": paper.title,
    "name": paper.title,
    "author": paper.authors.split(',').map(author => ({
      "@type": "Person",
      "name": author.trim()
    })),
    "datePublished": paper.year,
    "publisher": {
      "@type": "Organization",
      "name": paper.venue.includes('arXiv') ? "arXiv" : paper.venue.split(' ')[0],
      "url": paper.arxivId ? `https://arxiv.org/abs/${paper.arxivId}` : baseUrl
    },
    "description": paper.abstract,
    "abstract": paper.abstract,
    "keywords": paper.keywords,
    "image": paperImage,
    "url": paperUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": paperUrl
    }
  };

  if (paper.arxivId) {
    scholarlyArticleData["identifier"] = `arXiv:${paper.arxivId}`;
    const arxivUrl = paper.arxivUrl || `https://arxiv.org/abs/${paper.arxivId}`;
    scholarlyArticleData["sameAs"] = arxivUrl;
  }

  if (paper.doi) {
    if (!scholarlyArticleData["identifier"]) {
      scholarlyArticleData["identifier"] = [];
    }
    if (Array.isArray(scholarlyArticleData["identifier"])) {
      scholarlyArticleData["identifier"].push({
        "@type": "PropertyValue",
        "propertyID": "DOI",
        "value": paper.doi
      });
    } else {
      scholarlyArticleData["identifier"] = [
        scholarlyArticleData["identifier"],
        {
          "@type": "PropertyValue",
          "propertyID": "DOI",
          "value": paper.doi
        }
      ];
    }
    if (!scholarlyArticleData["sameAs"]) {
      scholarlyArticleData["sameAs"] = [];
    }
    if (Array.isArray(scholarlyArticleData["sameAs"])) {
      scholarlyArticleData["sameAs"].push(`https://doi.org/${paper.doi}`);
    } else {
      scholarlyArticleData["sameAs"] = [scholarlyArticleData["sameAs"], `https://doi.org/${paper.doi}`];
    }
  }

  if (paper.website) {
    if (!scholarlyArticleData["sameAs"]) {
      scholarlyArticleData["sameAs"] = [];
    }
    if (Array.isArray(scholarlyArticleData["sameAs"])) {
      scholarlyArticleData["sameAs"].push(paper.website);
    } else {
      scholarlyArticleData["sameAs"] = [scholarlyArticleData["sameAs"], paper.website];
    }
  }

  if (paper.institution) {
    scholarlyArticleData["publisher"]["address"] = {
      "@type": "PostalAddress",
      "addressCountry": paper.institution.includes('USA') ? "US" : "IN"
    };
  }

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={paperImage}
        type="article"
        canonicalUrl={paperUrl}
        structuredData={scholarlyArticleData}
      />
      <div style={{ width: '100%', padding: '0' }}>
        <div style={{ padding: '0 1.5rem' }}>
          <Link to="/research" style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--primary)' }}>
            ← Back to Research
          </Link>
        </div>
        
        <article className="paper-detail">
        <div className="paper-header">
          <div className="paper-image-container">
            <img src={paper.image} alt={paper.title} className="paper-detail-image" />
          </div>
          <div className="paper-header-content">
            <h1>{paper.title}</h1>
            <div className="paper-meta">
              <p><strong>Authors:</strong> {paper.authors}</p>
              {paper.authorDetails && (
                <div style={{ marginTop: '0.5rem' }}>
                  {Object.entries(paper.authorDetails).map(([name, details]) => (
                    <p key={name} style={{ fontSize: '0.9rem', margin: '0.25rem 0', paddingLeft: '1rem' }}>
                      <strong>{name}:</strong> {details.affiliation}
                      {details.email && ` (${details.email})`}
                    </p>
                  ))}
                </div>
              )}
              {paper.institution && !paper.authorDetails && <p><strong>Institution:</strong> {paper.institution}</p>}
              {paper.postedDate && <p><strong>Posted Date:</strong> {paper.postedDate}</p>}
              <p><strong>Year:</strong> {paper.year}</p>
              <p><strong>Venue:</strong> {paper.venue}</p>
              {paper.doi && (
                <p>
                  <strong>DOI:</strong>{' '}
                  <a 
                    href={`https://doi.org/${paper.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    {paper.doi}
                  </a>
                </p>
              )}
              {paper.citations && <p><strong>Citations:</strong> {paper.citations}</p>}
              {paper.arxivId && (
                <p>
                  <strong>arXiv:</strong>{' '}
                  <a 
                    href={paper.arxivUrl || `https://arxiv.org/abs/${paper.arxivId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    arXiv:{paper.arxivId}
                  </a>
                </p>
              )}
              {paper.conference && <p><strong>Conference:</strong> {paper.conference}</p>}
              {paper.website && (
                <p>
                  <strong>Website:</strong>{' '}
                  <a 
                    href={paper.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    Visit Project Website
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="paper-content">
          <section className="paper-section">
            <h2>Abstract</h2>
            <p>{paper.abstract}</p>
          </section>

          {(paper.id === 'alignment-quality-index' || paper.id === 'systems-engineering-llm') && paper.id === 'alignment-quality-index' && (
            <>
              <section className="paper-section">
                <h2>Problem Statement</h2>
                <p>This paper argues that common <strong>behavior-based alignment metrics</strong> (refusal rate, toxicity classifiers, LLM judges / G-Eval) can miss "hidden" misalignment because models may <strong>look compliant in outputs</strong> while still encoding unsafe tendencies internally. This manifests in several ways:</p>
                <ul>
                  <li><strong>Jailbreak vulnerability:</strong> Models can be tricked into producing unsafe outputs despite appearing aligned</li>
                  <li><strong>Stochastic decoding instability:</strong> Alignment can vary significantly with different decoding parameters</li>
                  <li><strong>Alignment faking:</strong> Models may produce safe-looking outputs while maintaining unsafe internal representations</li>
                </ul>
                <p>To address this, the paper proposes an <strong>intrinsic, decoding-invariant</strong> diagnostic that looks directly at <strong>latent representations</strong> rather than surface-level outputs.</p>
              </section>

              <section className="paper-section">
                <h2>Core Idea: Alignment Quality Index (AQI)</h2>
                <p><strong>AQI measures how cleanly the model separates "safe" vs "unsafe" prompts in latent activation space.</strong></p>
                
                <h3>Methodology</h3>
                <ol>
                  <li>Collect hidden activations for a set of safe prompts (X<sub>S</sub>) and unsafe prompts (X<sub>U</sub>)</li>
                  <li>Build a pooled embedding from multiple layers (often using post-MLP / post-GELU activations), rather than relying on the last layer which may be "over-smoothed" or compressed</li>
                  <li>Compute clustering-quality indices over the pooled embeddings</li>
                </ol>

                <h3>Clustering Metrics</h3>
                <p><strong>Xie–Beni Index (XBI):</strong> Favors <strong>compact clusters</strong> that are <strong>well separated</strong> (lower is better).</p>
                <p><strong>Calinski–Harabasz Index (CHI):</strong> Favors strong <strong>between-cluster dispersion</strong> relative to within-cluster dispersion (higher is better).</p>

                <h3>Composite AQI Score</h3>
                <p>The final score combines both metrics:</p>
                <div className="formula">
                  AQI = λ · (1/XBI) + (1-λ) · CHI
                </div>
                <p>where λ trades off "local compactness" vs "global separation" (default λ = 0.5). <strong>Higher AQI = better latent separation = stronger alignment signal.</strong></p>
              </section>

              <section className="paper-section">
                <h2>Layerwise Pooling</h2>
                <p>Instead of picking one layer, the method learns attention weights α(l) over layers to form:</p>
                <div className="formula">
                  h̃(x,y) = Σ<sub>l=1</sub><sup>L</sup> α(l)h<sup>(l)</sup>(x,y)
                </div>
                <p>with a separation/contrastive-style loss that pushes safe and unsafe pooled embeddings apart. The method suggests using <strong>Sparsemax / entmax</strong> so the weighting focuses on a few informative layers (often mid-to-deep layers), avoiding the over-smoothing issues of final-layer representations.</p>
              </section>

              <section className="paper-section">
                <h2>LITMUS Dataset</h2>
                <p>The paper introduces <strong>LITMUS</strong>, a diagnostic dataset with <strong>10,000 one-line prompts</strong>:</p>
                <ul>
                  <li><strong>5,000 safe prompts:</strong> Sourced from MMLU-style benign prompts</li>
                  <li><strong>5,000 unsafe prompts:</strong> Curated from safety/alignment corpora; categories include violence, hate, illegal activity, explicit content, etc.</li>
                </ul>
                <p><strong>Purpose:</strong> Test whether alignment survives <strong>jailbreaks, fine-tuning drift, and decoding randomness</strong>.</p>
              </section>

              <section className="paper-section">
                <h2>Key Contributions</h2>
                <ul>
                  <li><strong>Alignment Quality Index (AQI):</strong> A novel geometric and prompt-invariant metric that empirically assesses LLM alignment by analyzing the separation of safe and unsafe activations in latent space.</li>
                  <li><strong>Decoding-Invariant Evaluation:</strong> AQI operates entirely on internal model activations, making it robust to paraphrasing, decoding strategies, and adversarial misalignment.</li>
                  <li><strong>Layer-Aware Semantics:</strong> AQI aggregates activations across informative layers to form semantically aligned embeddings, capturing alignment signals that emerge in intermediate MLP activations.</li>
                  <li><strong>Geometric Fidelity:</strong> Uses principled, unsupervised cluster quality indices to measure intra-class compactness and inter-class separation.</li>
                  <li><strong>LITMUS Dataset:</strong> A comprehensive dataset to facilitate robust evaluation under challenging conditions.</li>
                  <li><strong>Early Warning System:</strong> AQI serves as an early warning signal for alignment faking, offering behavior-agnostic safety auditing capabilities.</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Applications</h2>
                <ul>
                  <li><strong>Jailbreak Detection:</strong> AQI can detect hidden misalignments and jailbreak risks even when outputs appear compliant, revealing vulnerabilities missed by refusal metrics.</li>
                  <li><strong>Alignment Faking Detection:</strong> Serves as an early warning signal for models that appear aligned on the surface but have misaligned internal representations.</li>
                  <li><strong>Stochasticity Analysis:</strong> Evaluates alignment stability under stochastic generation, identifying models susceptible to alignment drift.</li>
                  <li><strong>Fine-tuning Monitoring:</strong> Tracks alignment quality during model fine-tuning, helping preserve safety-critical parameters.</li>
                  <li><strong>Model Comparison:</strong> Enables comparison of alignment quality across different training methods (DPO, GRPO, RLHF) and model architectures.</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Empirical Results</h2>
                <p>Empirical tests on the LITMUS dataset across different models trained under DPO, GRPO, and RLHF conditions demonstrate:</p>
                
                <h3>Correlation with External Evaluators</h3>
                <p>AQI correlates reasonably with external evaluators (G-Eval / judge scores) <strong>in normal settings</strong>.</p>

                <h3>Surfacing Hidden Misalignment</h3>
                <p>More importantly, AQI is designed to surface cases where surface metrics are fooled:</p>
                <ol>
                  <li><strong>Jailbreak variants:</strong> Can improve judge scores while AQI stays low → suggests "latent entanglement" remains even when outputs appear safe.</li>
                  <li><strong>Safety-agnostic fine-tuning:</strong> Benign task data (like ShareGPT/OpenOrca) can keep outputs looking fine while AQI drops → early warning for alignment drift / forgetting.</li>
                  <li><strong>Decoding temperature changes:</strong> Can swing judge scores significantly, while AQI stays relatively stable → supports "decoding-invariant" claim.</li>
                </ol>

                <h3>Additional Findings</h3>
                <ul>
                  <li>Ability to reveal vulnerabilities missed by refusal metrics</li>
                  <li>Robustness to adversarial prompting and paraphrasing</li>
                  <li>Effectiveness in detecting alignment faking and jailbreak attempts</li>
                  <li>Performance across various model sizes, from small models (TinyLLaMA) to large models (LLaMA 65B)</li>
                  <li>Smaller models exhibit substantial AQI collapse under adversarial prompting, while larger models maintain stronger separation</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Key Insights</h2>
                <ul>
                  <li>Alignment signals emerge gradually across layers, with deeper layers showing clearer separation between safe and unsafe activations</li>
                  <li>Smaller models exhibit substantial AQI collapse under adversarial prompting, while larger models maintain stronger separation</li>
                  <li>LoRA fine-tuning can distort alignment geometry, requiring careful regularization of alignment-critical parameters</li>
                  <li>Mixture-of-Experts models show expert-specific alignment variance, with some experts preserving separation better than others</li>
                  <li>AQI provides causal attribution capabilities, enabling localization of alignment degradation during fine-tuning</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Limitations</h2>
                <p>The authors are explicit about several key limitations:</p>
                <ul>
                  <li><strong>Clusterability assumption:</strong> Assumes "safe vs unsafe" forms <strong>clusterable geometry</strong> in latent space, which may not always hold</li>
                  <li><strong>Binary classification:</strong> Uses <strong>binary labels</strong>, which may miss nuanced/graded harms</li>
                  <li><strong>Outlier sensitivity:</strong> Sensitive to <strong>outliers</strong> and batch composition</li>
                  <li><strong>Cross-model calibration:</strong> <strong>Cross-model calibration</strong> is hard (AQI=0.7 in one model may not mean the same in another)</li>
                  <li><strong>Computational overhead:</strong> <strong>Activation/memory overhead</strong> can be heavy for large models</li>
                  <li><strong>Causal localization:</strong> Doesn't automatically provide <strong>causal localization</strong> (where the misalignment comes from), only flags it</li>
                  <li><strong>Evasion risks:</strong> Might be evaded by <strong>stealth / distribution-shift</strong> attacks</li>
                </ul>
              </section>
            </>
          )}

          {paper.id === 'systems-engineering-llm' && (
            <>
              <section className="paper-section">
                <h2>Key Topics Covered</h2>
                <ul>
                  <li><strong>Systems Engineering Framework:</strong> Comprehensive methodology for LLM adoption in enterprise environments, covering the entire lifecycle from needs assessment to deployment and maintenance</li>
                  <li><strong>Customization Techniques:</strong> Detailed analysis of Parameter-Efficient Fine-Tuning (PEFT), Low-Rank Adaptation (LoRA), Adapter Layers, Prompt Tuning, and Retrieval-Augmented Generation (RAG)</li>
                  <li><strong>Optimization Methods:</strong> Bayesian Optimization and Direct Preference Optimization (DPO) for model refinement</li>
                  <li><strong>Reinforcement Learning:</strong> Traditional RL and Reinforcement Learning from Human Feedback (RLHF) approaches</li>
                  <li><strong>In-House Development:</strong> Framework for developing custom LLMs from scratch, including architecture planning, technical requirements, and deployment considerations</li>
                  <li><strong>Post-Adoption Management:</strong> Deployment strategies, scaling, monitoring, maintenance protocols, and security measures</li>
                  <li><strong>Implementation Challenges:</strong> Data and computational resource management, model safety, performance optimization, bias mitigation, and cost optimization</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Main Contributions</h2>
                <ol>
                  <li><strong>System Design Frameworks:</strong> Detailed architectural guidelines, scalable infrastructure patterns, and integration strategies with existing enterprise systems</li>
                  <li><strong>Customization and Deployment Strategies:</strong> Comparative analysis of fine-tuning techniques (PEFT, LoRA, Adapters) with implementation methodologies for various enterprise use cases</li>
                  <li><strong>Implementation Challenge Mitigation:</strong> Guidelines for addressing data privacy, security, ethical considerations, and cost management with risk-aware approaches</li>
                  <li><strong>Implementation Toolset:</strong> Technical specifications for infrastructure setup, performance monitoring tools, quality assurance frameworks, and security audit checklists</li>
                </ol>
              </section>

              <section className="paper-section">
                <h2>Key Techniques Discussed</h2>
                <h3>Parameter-Efficient Fine-Tuning (PEFT)</h3>
                <ul>
                  <li>Low-Rank Adaptation (LoRA): Reduces trainable parameters from billions to millions</li>
                  <li>Adapter Layers: Small trainable modules between frozen layers</li>
                  <li>Prompt Tuning: Hard and soft prompt optimization</li>
                  <li>Prefix Tuning: Trainable prefix tokens</li>
                </ul>

                <h3>Advanced Optimization</h3>
                <ul>
                  <li>Bayesian Optimization: Hyperparameter tuning and prompt optimization</li>
                  <li>Direct Preference Optimization (DPO): Simplified alignment without reward modeling</li>
                  <li>Reinforcement Learning: RLHF and policy optimization methods</li>
                </ul>

                <h3>Knowledge Integration</h3>
                <ul>
                  <li>Retrieval-Augmented Generation (RAG): Combining external knowledge with LLM generation</li>
                  <li>Vector embeddings and semantic search</li>
                  <li>Reranking and relevance scoring</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Systems Engineering Lifecycle</h2>
                <p>The paper presents a comprehensive systems engineering approach covering:</p>
                <ol>
                  <li><strong>Concept Development Stage:</strong> Needs analysis, concept exploration, and system definition</li>
                  <li><strong>Development Stage:</strong> Customization vs. in-house development, fine-tuning techniques, and optimization methods</li>
                  <li><strong>Post-Adoption Stage:</strong> Deployment and scaling strategies, ongoing maintenance, monitoring, and security measures</li>
                </ol>
              </section>

              <section className="paper-section">
                <h2>Challenges Addressed</h2>
                <ul>
                  <li><strong>Data and Computational Resource Management:</strong> Handling massive datasets and computational requirements</li>
                  <li><strong>Model Safety and Robustness:</strong> Testing frameworks, content filtering, and ethical guidelines</li>
                  <li><strong>Performance Optimization:</strong> Balancing model performance with computational resources</li>
                  <li><strong>Bias Mitigation and Fairness:</strong> Evaluation frameworks and ongoing monitoring</li>
                  <li><strong>Generalization vs. Specialization:</strong> Balancing domain adaptation with broader knowledge</li>
                  <li><strong>IT Infrastructure Integration:</strong> Seamless integration with existing systems</li>
                  <li><strong>Cost Optimization:</strong> Financial planning and resource allocation</li>
                  <li><strong>Ongoing Maintenance:</strong> Continuous updates and adaptation strategies</li>
                </ul>
              </section>
            </>
          )}

          {paper.id === 'kan-autoencoders' && (
            <>
              <section className="paper-section">
                <h2>Key Contributions</h2>
                <ul>
                  <li><strong>Novel Architecture:</strong> Introduces KAN-based autoencoder for latent factor conditional asset pricing models, replacing traditional MLPs with ReLU activations</li>
                  <li><strong>Enhanced Accuracy:</strong> Demonstrates superior predictive performance compared to Fama-French and conditional autoencoder models</li>
                  <li><strong>Improved Interpretability:</strong> Provides intuitive framework for interpreting latent factors through spline function visualization</li>
                  <li><strong>Nonlinear Modeling:</strong> Offers enhanced flexibility in approximating exposures as nonlinear functions of asset characteristics</li>
                  <li><strong>Practical Value:</strong> Long-short portfolios constructed using model predictions achieve higher Sharpe ratios (0.86-0.96 vs 0.84-0.91)</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Methodology</h2>
                <p>The paper introduces a KAN-based autoencoder that models factor exposures as:</p>
                <div className="formula">
                  r<sub>t</sub> = β(Z<sub>t-1</sub>) f<sub>t</sub> + ε<sub>t</sub>
                </div>
                <p>where factor exposures β are modeled using Kolmogorov-Arnold Networks instead of traditional MLPs.</p>

                <h3>KAN Architecture</h3>
                <p>KANs embed learnable activation functions (parameterized spline functions) directly on edges connecting nodes, replacing typical weight matrices in MLPs. The KAN network is defined as:</p>
                <div className="formula">
                  β(z<sub>i,t-1</sub>) = Γ<sub>out</sub> (Φ<sub>L-1</sub> ◦ ... ◦ Φ<sub>1</sub> ◦ Φ<sub>0</sub>) Γ<sub>in</sub> z<sub>i,t-1</sub>
                </div>
                <p>where Γ<sub>in</sub> and Γ<sub>out</sub> are linear embedding layers, and Φ<sub>i</sub> are KAN layers with trainable spline functions.</p>

                <h3>Factor Network</h3>
                <p>The factor returns are specified using a standard autoencoder:</p>
                <div className="formula">
                  f<sub>t</sub> = W<sub>0</sub>r<sub>t</sub>
                </div>
                <p>with dimension reduction through characteristic-based portfolios to handle large numbers of assets efficiently.</p>
              </section>

              <section className="paper-section">
                <h2>Experimental Results</h2>
                <h3>R² Scores</h3>
                <p>The KAN-CA model achieves improved R² scores:</p>
                <ul>
                  <li><strong>1-factor:</strong> 11.02% (vs CA: 11.06%, FF: &lt;0%)</li>
                  <li><strong>3-factor:</strong> 11.26% (vs CA: 11.39%, FF: &lt;0%)</li>
                  <li><strong>6-factor:</strong> 11.32% (vs CA: 11.29%, FF: &lt;0%)</li>
                </ul>

                <h3>Predictive R² Scores</h3>
                <p>Superior out-of-sample predictive performance:</p>
                <ul>
                  <li><strong>1-factor:</strong> 0.203% (vs CA: 0.202%)</li>
                  <li><strong>3-factor:</strong> 0.203% (vs CA: 0.168%)</li>
                  <li><strong>6-factor:</strong> 0.214% (vs CA: 0.188%)</li>
                </ul>
                <p>Notably, while CA model shows performance decline with more factors, KAN-CA demonstrates improved performance, particularly in the 6-factor model.</p>

                <h3>Sharpe Ratios</h3>
                <p>Improved risk-adjusted returns for long-short portfolios:</p>
                <ul>
                  <li><strong>1-factor:</strong> 0.86 (vs CA: 0.84)</li>
                  <li><strong>3-factor:</strong> 0.86 (vs CA: 0.87)</li>
                  <li><strong>6-factor:</strong> 0.96 (vs CA: 0.91)</li>
                </ul>
                <p>The notable increase in Sharpe ratio for the 6-factor model (0.96 vs 0.91) emphasizes the model's ability to effectively utilize multiple factors for improved risk-adjusted performance.</p>
              </section>

              <section className="paper-section">
                <h2>Key Advantages of KAN over MLP</h2>
                <ul>
                  <li><strong>Learnable Activation Functions:</strong> KANs use parameterized spline functions on edges instead of fixed activation functions, enabling adaptive nonlinear transformations</li>
                  <li><strong>Function Approximation:</strong> Better at approximating smooth functions (sine, cosine) compared to ReLU's piecewise linearity</li>
                  <li><strong>Parameter Efficiency:</strong> Represents complex functions using fewer parameters compared to traditional MLPs</li>
                  <li><strong>Interpretability:</strong> Spline functions in each KAN layer can be visualized to understand how covariates interact with betas to each latent factor</li>
                  <li><strong>Stability:</strong> Exhibits improved learning stability and generalization capabilities compared to MLP models</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Dataset and Experimental Setup</h2>
                <ul>
                  <li><strong>Data Source:</strong> Monthly individual stock returns from CRSP for NYSE, AMEX, and NASDAQ</li>
                  <li><strong>Sample Period:</strong> March 1957 to December 2016 (60 years)</li>
                  <li><strong>Total Stocks:</strong> Nearly 30,000 stocks, with average exceeding 6,200 stocks per month</li>
                  <li><strong>Training Period:</strong> First 30 years (1957-1987)</li>
                  <li><strong>Validation Period:</strong> Next 12 years (1987-1999)</li>
                  <li><strong>Test Period:</strong> Remaining years (2000-2016)</li>
                  <li><strong>Training Method:</strong> Recursive refitting with hyperparameter tuning using validation period</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Limitations and Future Research</h2>
                <p>The study acknowledges several limitations:</p>
                <ul>
                  <li>KAN architecture is still relatively novel compared to MLPs, with less explored training behavior and regularization techniques</li>
                  <li>Optimal KAN architecture for approximating beta functions may not yet be discovered</li>
                  <li>Interpretability advantages through spline function visualization are mentioned but not fully explored in this work</li>
                </ul>
                <p><strong>Future Research Directions:</strong></p>
                <ul>
                  <li>Extending the model to other asset classes</li>
                  <li>Incorporating additional covariates</li>
                  <li>Further exploration of KAN architecture optimization</li>
                  <li>Application to risk management and portfolio optimization</li>
                </ul>
              </section>
            </>
          )}

          {paper.id === 'bitcoin-risk-factors' && (
            <>
              <section className="paper-section">
                <h2>Research Questions</h2>
                <p>This study addresses three primary research questions:</p>
                <ol>
                  <li>Does the Fama-French three-factor model effectively explain Bitcoin's returns?</li>
                  <li>How do the market risk, size, and value factors influence Bitcoin's returns?</li>
                  <li>Do these influences vary significantly across different moving average periods?</li>
                </ol>
              </section>

              <section className="paper-section">
                <h2>Methodology</h2>
                <p>The Fama-French three-factor model is specified as:</p>
                <div className="formula">
                  R<sub>Bitcoin</sub> - R<sub>f</sub> = α + β(R<sub>m</sub> - R<sub>f</sub>) + σSMB + hHML + kMOM
                </div>
                <p>Where:</p>
                <ul>
                  <li><strong>R<sub>Bitcoin</sub>:</strong> Total returns from Bitcoin</li>
                  <li><strong>R<sub>f</sub>:</strong> Risk-free rate of return</li>
                  <li><strong>R<sub>m</sub>:</strong> Broader market returns</li>
                  <li><strong>SMB:</strong> Size factor (Small Minus Big)</li>
                  <li><strong>HML:</strong> Value factor (High Minus Low)</li>
                  <li><strong>MOM:</strong> Momentum factor</li>
                </ul>

                <h3>Factors Explained</h3>
                <ul>
                  <li><strong>Market Risk Premium (R<sub>m</sub> - R<sub>f</sub>):</strong> Measures the excess return of the market over the risk-free rate. β (market beta) represents Bitcoin's sensitivity to overall market returns.</li>
                  <li><strong>SMB (Small Minus Big):</strong> Size premium capturing return differential between small-cap and large-cap stocks. σ measures Bitcoin's sensitivity to the size factor.</li>
                  <li><strong>HML (High Minus Low):</strong> Value premium capturing return differential between value and growth stocks. h measures Bitcoin's sensitivity to the value factor.</li>
                  <li><strong>MOM (Momentum Factor):</strong> Captures the tendency of past winners to continue performing well. k measures Bitcoin's sensitivity to momentum.</li>
                </ul>

                <h3>Data and Analysis</h3>
                <ul>
                  <li><strong>Data Period:</strong> Weekly Bitcoin return data from September 2014 to March 2024</li>
                  <li><strong>Moving Averages:</strong> Analysis conducted over weekly, 10-week, 20-week, and 52-week moving average periods</li>
                  <li><strong>Statistical Method:</strong> Ordinary Least Squares (OLS) regression to estimate coefficients and their statistical significance</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Key Findings</h2>
                <h3>Model Fit Improvement</h3>
                <p>The R-squared values show significant improvement with longer moving averages:</p>
                <ul>
                  <li><strong>Weekly data:</strong> R² = 0.005 (not significant, p = 0.682)</li>
                  <li><strong>10-week MA:</strong> R² = 0.131 (highly significant, p &lt; 0.0001)</li>
                  <li><strong>20-week MA:</strong> R² = 0.184 (highly significant, p &lt; 0.0001)</li>
                  <li><strong>52-week MA:</strong> R² = 0.352 (highly significant, p &lt; 0.0001)</li>
                </ul>
                <p>The 52-week moving average demonstrates the highest explanatory power, indicating that traditional equity market factors are more effective in explaining Bitcoin's returns over longer periods.</p>

                <h3>Factor Significance</h3>
                <ul>
                  <li><strong>Market Risk Factor:</strong> Not significant in weekly data (p = 0.340) but becomes highly significant with moving averages (p &lt; 0.0001), with coefficients increasing from 0.0019 to 0.0357</li>
                  <li><strong>Size Factor (SMB):</strong> Not significant in weekly data (p = 0.547) but highly significant across all moving averages (p &lt; 0.0001), with coefficients increasing from 0.0021 to 0.0567</li>
                  <li><strong>Value Factor (HML):</strong> Not significant in weekly (p = 0.597) and 10-week (p = 0.360) models, approaches significance in 20-week (p = 0.065), and highly significant in 52-week model (p &lt; 0.0001), with coefficient of 0.0367</li>
                  <li><strong>Momentum Factor:</strong> Not significant in weekly (p = 0.579) and 52-week (p = 0.213) models, but shows moderate significance in 10-week (p = 0.022) and 20-week (p = 0.025) moving averages</li>
                </ul>

                <h3>Intercept Analysis</h3>
                <p>The intercept is statistically significant across all models with negative coefficients (-0.0133 to -0.0154), suggesting a consistent negative excess return not explained by the included factors.</p>
              </section>

              <section className="paper-section">
                <h2>Discussion</h2>
                <h3>Market Risk Factor</h3>
                <p>The market risk factor consistently shows significant positive coefficients across all moving averages, indicating a positive relationship with Bitcoin's returns. This suggests that Bitcoin's performance is influenced by overall market movements, with the relationship strengthening over longer periods.</p>

                <h3>Size Factor</h3>
                <p>The size factor is significant across all moving averages, particularly in the 52-week model. This highlights the relevance of size effects in Bitcoin's performance, potentially reflecting the impact of liquidity and market capitalization on Bitcoin returns. Bitcoin behaves more like small-cap stocks over longer time horizons.</p>

                <h3>Value Factor</h3>
                <p>The value factor shows significance only in the 52-week moving average, suggesting that value effects are more pronounced over longer horizons. This indicates that Bitcoin behaves more like value stocks in the long run, aligning with assets that yield higher returns over extended periods.</p>

                <h3>Model Limitations</h3>
                <p>Diagnostic statistics indicate some issues with non-normality and autocorrelation, particularly in longer-term models. The Durbin-Watson statistics suggest potential autocorrelation issues, especially in models with moving averages.</p>
              </section>

              <section className="paper-section">
                <h2>Implications</h2>
                <ul>
                  <li><strong>Risk Management:</strong> Understanding that Bitcoin is influenced by traditional equity market factors helps in better risk management and portfolio construction</li>
                  <li><strong>Diversification:</strong> The findings suggest Bitcoin may not provide complete diversification from traditional markets, especially over longer periods</li>
                  <li><strong>Regulatory Considerations:</strong> The correlation with equity market factors has implications for regulatory approaches to cryptocurrency</li>
                  <li><strong>Investment Strategy:</strong> Investors can use these insights to better understand Bitcoin's risk-return profile and make more informed investment decisions</li>
                </ul>
              </section>

              <section className="paper-section">
                <h2>Future Research Directions</h2>
                <p>The study acknowledges limitations and suggests future research should consider:</p>
                <ul>
                  <li>Additional factors beyond traditional Fama-French factors</li>
                  <li>Sentiment-driven factors, such as social media trends and investor sentiment indices</li>
                  <li>Macroeconomic variables and geopolitical events</li>
                  <li>Bitcoin's unique characteristics that may not be captured by equity-based models</li>
                </ul>
                <p>The paper notes that sentiment-driven influences, known to play a significant role in cryptocurrency markets, are not accounted for in this analysis.</p>
              </section>
            </>
          )}

          <section className="paper-section">
            <h2>Keywords</h2>
            <p className="keywords">{paper.keywords}</p>
          </section>
        </div>
      </article>
    </div>
    </>
  );
};

export default PaperDetail;

