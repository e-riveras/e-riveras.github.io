// Single source for the CV page, the home page summary and the PDF.

export const profile = {
  name: 'Eduardo Rivera Silva',
  shortName: 'Eduardo Rivera',
  headline: 'Data scientist and economist',
  tagline:
    'I build statistical models and data pipelines for questions about markets, labor and public policy. Eight years across an antitrust agency, a central bank and industry, and a Master of Data Science from UBC (2026). Open to data science roles.',
  location: 'Vancouver, BC',
  email: 'ef.riveras@gmail.com',
  github: 'https://github.com/e-riveras',
  linkedin: 'https://www.linkedin.com/in/eriverasilva/',
  interests: [
    'Bayesian modelling',
    'Causal inference',
    'Industrial organization',
    'Labor economics',
    'Policy evaluation',
    'Market design',
  ],
};

export type Entry = {
  title: string;
  org: string;
  place?: string;
  dates: string;
  points?: string[];
};

export const experience: Entry[] = [
  {
    title: 'Graduate Research Assistant',
    org: 'Talhouk Research Lab, UBC Faculty of Medicine',
    place: 'Vancouver, BC',
    dates: '2025 – Aug 2026',
    points: [
      'Built secure, reproducible analysis pipelines in R to study health outcomes across distributed networks.',
      'Implemented federated learning protocols so sensitive health data never left partner sites.',
      'Designed standardized meta-analysis frameworks to validate multi-site data.',
      'Automated workflows for partner institutions with renv and Git.',
    ],
  },
  {
    title: 'Data Analyst',
    org: 'PlayStudios',
    place: 'Vancouver, BC',
    dates: 'Apr 2025 – Aug 2025',
    points: [
      'Designed and analyzed large-scale A/B tests on user behavior and retention.',
      'Applied survival analysis and churn models to measure response to incentives.',
    ],
  },
  {
    title: 'Senior Economic and Financial Analyst',
    org: 'Banco Central de Chile',
    place: 'Santiago, Chile',
    dates: 'Sep 2022 – May 2024',
    points: [
      'Built LSTM models to detect anomalies in banking supervision reports.',
      'Authored recurring financial stability reports for the IMF and BIS.',
      'Led the creation of new high-frequency statistical series for real-time monitoring.',
      'Rebuilt the official UF (Unidad de Fomento) calculation process and its Power BI dashboards.',
    ],
  },
  {
    title: 'Economist',
    org: 'Fiscalía Nacional Económica (antitrust agency)',
    place: 'Santiago, Chile',
    dates: 'Aug 2018 – Aug 2022',
    points: [
      'Studies Division (2018–2020), then Antitrust Division Intelligence Unit (2020–2022).',
      'Screened markets for abuse of market power; developed algorithmic tools to detect bid-rigging.',
      'Used NLP and machine learning to structure administrative data for investigations.',
      'Supported police digital-forensics units (OS9) with data retrieval.',
    ],
  },
  {
    title: 'Risk Specialist',
    org: 'BancoEstado Microempresas',
    place: 'Santiago, Chile',
    dates: 'Oct 2017 – 2018',
    points: [
      'Built credit scoring models with generalized regression neural networks for pre-approval campaigns.',
      'Developed non-linear optimization tools to set interest rate tiers by customer segment.',
    ],
  },
  {
    title: 'Research Assistant',
    org: 'Millennium Institute for Market Imperfections and Public Policy',
    place: 'Santiago, Chile',
    dates: '2015 – 2016',
    points: [
      'Co-authored methodological manuals for the National Training and Employment Service (SENCE), setting micro-econometric standards for program evaluation.',
      'Designed the identification strategy and survey instruments for the evaluation of the "Más Capaz" labor program.',
      'Enriched administrative labor-market data with data mining and geo-referencing.',
    ],
  },
];

export const education: Entry[] = [
  {
    title: 'Master of Data Science',
    org: 'University of British Columbia',
    place: 'Vancouver, BC',
    dates: '2025 – Jun 2026',
    points: [
      'Machine learning, causal inference, Bayesian statistics, high-dimensional data, convex optimization, experimental design.',
      'Elected International Student Representative.',
    ],
  },
  {
    title: 'M.Sc. Applied Economics, cum laude',
    org: 'Universidad de Chile',
    place: 'Santiago, Chile',
    dates: '2015 – 2017',
    points: [
      'Thesis: "Wage inequality in a model with skill heterogeneity". A structural search model with Markov chains, estimated on the CASEN national survey. Advisor: Elton Dusha.',
      'Funded by the Anillo Soc 1402 scholarship.',
    ],
  },
  {
    title: 'B.Sc. Industrial Engineering, summa cum laude',
    org: 'Universidad de Chile',
    place: 'Santiago, Chile',
    dates: '2009 – 2014',
  },
];

export const reports: Entry[] = [
  {
    title: 'Market Study on Public Procurement (EM05)',
    org: 'Fiscalía Nacional Económica',
    dates: '2020',
    points: [
      'Co-author. Empirical analysis of the ~US$12B/year Chilean state purchasing system: a stratified sample of 400 tenders and a structural analysis of bidder participation and direct contracts.',
      'Grounded the 2021 reform of Law N° 19.886 on public procurement.',
    ],
  },
  {
    title: 'Market Study on Pharmaceuticals (EM03)',
    org: 'Fiscalía Nacional Económica',
    dates: '2020',
    points: [
      'Co-author. Vertical analysis of the pharmaceutical value chain, from laboratories to retail.',
      'Proposed mandatory INN prescribing, which informed the "Ley de Fármacos II" bill.',
    ],
  },
  {
    title: 'Market Study on Textbooks (EM04)',
    org: 'Fiscalía Nacional Económica',
    dates: '2019',
    points: [
      'Co-author. Diagnosed principal-agent problems in school textbook choice and inefficiencies in state auctions.',
      'Led to unbundling content development from printing in state auctions.',
    ],
  },
];

export const teaching: Entry[] = [
  {
    title: 'Lecturer, Undergraduate Macroeconomics',
    org: 'Universidad de Chile',
    dates: '2025',
  },
  {
    title: 'Teaching Assistant',
    org: 'Universidad de Chile',
    dates: '2013 – 2017',
    points: [
      'Macroeconomics (4 semesters), Economics 101 (2 semesters), Impact Evaluation, Behavioural Economics.',
    ],
  },
];

export const service: Entry[] = [
  {
    title: 'International Student Representative',
    org: 'Master of Data Science, UBC',
    dates: '2025 – Jan 2026',
  },
  {
    title: 'Graduate Student Representative, admissions committee',
    org: 'Department of Industrial Engineering, Universidad de Chile',
    dates: '2015',
  },
  {
    title: 'Vice President',
    org: 'Industrial Engineering Student Union (CEIN), Universidad de Chile',
    dates: '2014',
  },
];

export const skills: { label: string; items: string }[] = [
  {
    label: 'Languages',
    items: 'Python (pandas, NumPy, scikit-learn, PyTorch, PyMC), R (tidyverse, data.table), SQL, Stata, SAS, Bash',
  },
  {
    label: 'Statistics',
    items: 'Bayesian methods, causal inference, A/B testing, time series, panel data, survey design, structural estimation',
  },
  {
    label: 'Machine learning',
    items: 'Deep learning (PyTorch, TensorFlow/Keras), NLP (Transformers, spaCy), gradient boosting, LLM fine-tuning (LoRA, MLX)',
  },
  {
    label: 'Tooling',
    items: 'Git, Docker, GitHub Actions, BigQuery, Tableau, Power BI, LaTeX, Quarto',
  },
];

export const languages = ['Spanish (native)', 'English (C1, IELTS)'];
