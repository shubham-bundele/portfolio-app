export const roles = [
  'Playwright Automation Engineer',
  'SDET · Quality Engineering',
  'Accessibility Specialist (WCAG 2.2)',
  'Performance Tester · K6',
  'Agentic AI QA · Playwright MCP',
  'Vibe Coder · LLM Wrangler',
]

export const stats = [
  { value: 85, suffix: '%', label: 'Automation Coverage' },
  { value: 95, suffix: '%+', label: 'Script Stability' },
  { value: 60, suffix: '%', label: 'Regression Effort ↓' },
  { value: 40, suffix: '%', label: 'Faster Authoring (AI)' },
  { value: 500, suffix: '+', label: 'E2E Scenarios' },
]

export const skills = [
  {
    icon: '⚙️',
    title: 'Test Automation',
    items: ['Playwright', 'JavaScript', 'Cucumber BDD', 'Gherkin', 'Selenium WebDriver', 'POM', 'Data-Driven', 'Framework Dev'],
  },
  {
    icon: '♿',
    title: 'Accessibility (WCAG 2.1 / 2.2 AA)',
    items: ['@axe-core/playwright', 'WAVE', 'NVDA Screen Reader', 'Level Access', 'Accessibility Insights', 'Keyboard Nav', 'Contrast Validation'],
  },
  {
    icon: '🚀',
    title: 'Performance & CI/CD',
    items: ['K6 (Grafana)', 'JMeter', 'Load / Stress Testing', 'Azure Pipelines', 'Parallel Execution', 'Headless CI Flags', 'GitHub'],
  },
  {
    icon: '🔍',
    title: 'QA & API Testing',
    items: ['E2E / Regression / Smoke', 'UAT', 'Postman', 'REST Validation', 'API Interception', 'RTM', 'Exploratory Testing', 'Jira'],
  },
]

export const aiItems = [
  {
    icon: '🤖',
    title: 'Agentic Testing (Playwright MCP)',
    desc: 'Model Context Protocol-driven live browser validation — agents navigate, assert & audit real UIs autonomously.',
    tag: 'vibe coding',
  },
  {
    icon: '⌨️',
    title: 'Claude Code Workflows',
    desc: 'Framework scaffolding, bulk test generation, and refactoring via terminal-native AI pair programming.',
    tag: 'LLM engineering',
  },
  {
    icon: '🧠',
    title: 'LLM Prompt Engineering',
    desc: 'Structured prompts for Gherkin generation, negative-test ideation, and defect root-cause analysis.',
    tag: 'prompt craft',
  },
  {
    icon: '✨',
    title: 'GitHub Copilot & GenAI',
    desc: 'AI-accelerated POM classes, fixtures, and custom reporters. Cognixia GenAI Level 101 certified.',
    tag: 'generative AI',
  },
]

export const experience = [
  {
    role: 'Playwright Automation Engineer (Senior Software Engineer)',
    org: 'Nitor Infotech (Ascendion) · Client: WellSky Corp · Healthcare',
    date: 'May 2025 – Present',
    points: [
      'Engineering 500+ E2E scenario Playwright + Cucumber BDD framework — 60 feature files, 65+ POM classes, 6,900+ line BasePage with 140+ reusable methods → 85% coverage',
      'Parallel execution (2–4 workers) on Azure Pipelines with worker-namespaced cache isolation; tag-based suite strategy (@critical, @SmokeTest, @flaky)',
      '37 @axe-core/playwright accessibility scenarios scanning 30+ pages for WCAG 2.1/2.2 AA; manual audits via WAVE, NVDA, Level Access',
      'Custom report generators (HTML/PDF, accessibility, MCP validation) with per-step screenshot evidence, video recording & history diff tracking',
      'K6 load & stress testing on healthcare APIs; AI-assisted authoring via Claude Code + Playwright MCP → ~40% faster; 98%+ in-sprint defect resolution',
    ],
  },
  {
    role: 'QA Automation Engineer (Engineer Quality)',
    org: 'AGL Hakuhodo · Suzuki Global CMS, Website, LQS Portal & Inspection App',
    date: 'Oct 2022 – May 2025',
    points: [
      'Playwright (JavaScript) suites across 4 Suzuki products — 200+ E2E/regression cases, ~60% manual effort reduction',
      'Cross-browser testing (Chrome, Firefox, Safari, Edge, mobile) across 10+ global markets; REST API validation via Postman',
      'RTM, Test Summary & Defect Reports in Agile sprint deliveries',
    ],
  },
  {
    role: 'Quality Analyst',
    org: 'Smart Software Services · Banking · Project: K2 Ventures',
    date: 'Apr 2021 – Sep 2022',
    points: [
      'Functional, Regression, Exploratory & Ad-Hoc testing for financial transaction & onboarding workflows',
      'Selenium WebDriver (Java) automation with POM; end-to-end defect lifecycle management for release sign-off',
    ],
  },
]

export const apps = [
  {
    id: 'app1',
    tab: 'QA Data Studio',
    icon: '📊',
    url: 'qa-data-studio.vercel.app',
    href: 'https://qa-data-studio.vercel.app/',
    accent: '#22d3ee',
  },
  {
    id: 'app2',
    tab: 'Career Canvas',
    icon: '📄',
    url: 'career-canvas-eta.vercel.app',
    href: 'https://career-canvas-eta.vercel.app/',
    accent: '#a78bfa',
  },
]

export const certifications = [
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Sep 2026',
    credentialId: 'cifa77o5iia9',
    skills: ['Claude Code', 'Claude Skills', 'Agentic Coding', 'AI Workflows'],
    badge: 'AI',
    accent: '#ff6b35',
    image: '/certs/claude-code-101.webp',
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'Aug 2026',
    credentialId: 't2xurfzozhhr',
    skills: ['Claude Skills', 'Anthropic Claude', 'Prompt Engineering'],
    badge: 'AI',
    accent: '#ff6b35',
    image: '/certs/claude-101.webp',
  },
  {
    id: 'iso-42001',
    title: 'ISO/IEC 42001-2023 Artificial Intelligence Management System',
    issuer: 'Nitor Infotech, an Ascendion Company',
    date: 'Sep 2026',
    skills: ['AI for Management', 'Generative AI for Management'],
    badge: 'N',
    accent: '#22d3ee',
    image: '/certs/iso-42001-aims.webp',
  },
  {
    id: 'infosec-awareness',
    title: 'Information Security Awareness Training',
    issuer: 'Ascendion',
    date: 'Sep 2026',
    skills: ['Information Security'],
    badge: 'A',
    accent: '#34d399',
    image: '/certs/information-security-awareness.webp',
  },
  {
    id: 'istqb-ctfl',
    title: 'ISTQB® CTFL — Foundation Level',
    issuer: 'ISTQB',
    date: 'Certified',
    skills: ['Testing Foundations', 'SDLC', 'Test Design'],
    badge: 'Q',
    accent: '#a78bfa',
    image: '/certs/istqb-ctfl.webp',
  },
  {
    id: 'genai-101',
    title: 'Generative AI Level 101',
    issuer: 'Cognixia',
    date: 'Certified',
    skills: ['GenAI', 'LLMs', 'Prompt Craft'],
    badge: 'G',
    accent: '#f472b6',
    image: '/certs/generative-ai-101.webp',
  },
]

export const terminalLines = [
  { html: '<span style="color:#22d3ee">$</span> npx playwright test --project=chromium' },
  { html: '<span style="color:#34d399">✓</span> 500+ E2E scenarios loaded <span style="color:#5b6b8f">(Cucumber BDD · 60 features)</span>' },
  { html: '<span style="color:#34d399">✓</span> Parallel workers: <span style="color:#22d3ee">4</span> · Azure Pipelines CI/CD' },
  { html: '<span style="color:#34d399">✓</span> axe-core scan: 30+ pages · <span style="color:#34d399">WCAG 2.2 AA</span>' },
  { html: '<span style="color:#a78bfa">🤖</span> MCP agent validating live browser…' },
  { html: '<span style="color:#34d399">✓</span> Coverage: <span style="color:#22d3ee">85%</span> · Stability: <span style="color:#22d3ee">95%+</span>' },
  { html: '<span style="color:#34d399">✓</span> K6 load test: thresholds passed' },
  { html: '<span style="color:#22d3ee">$</span> status: <span style="color:#34d399">ALL GREEN — shipping quality</span> <span style="color:#a78bfa">▊</span>' },
]
