export const GITHUB_URL = 'https://github.com/thealphacubicle/OpenContext' as const
export const GITHUB_DOCS = `${GITHUB_URL}/blob/main/docs` as const
export const BOSTON_ARTICLE_URL =
  'https://data.boston.gov/showcase/opencontext-democratizing-the-city-of-boston-s-open-data-currently-in-beta' as const

export const site = {
  name: 'OpenContext',
  title: "OpenContext — Let AI assistants talk to your city's data",
  description:
    'OpenContext connects government open data to AI assistants so cities can answer questions in plain language — in minutes, not months.',
  url: 'https://opencontext.dev',
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
] as const

/* ─── Home (marketing) ─── */

export const hero = {
  eyebrow: 'Open source · Civic AI',
  headlineBefore: "Ask your city's data",
  headlineEmphasis: 'in plain English',
  body: 'OpenContext bridges open data portals and AI assistants. Residents and staff get answers from live catalogs — without spreadsheets, tickets, or custom integrations.',
  primaryCta: 'See how it works',
  secondaryCta: 'View on GitHub',
  partnership: 'Built in partnership with the City of Boston',
} as const

export const valueProps = {
  eyebrow: 'The value',
  headline: 'From trapped catalogs to answers people can use.',
  items: [
    {
      title: 'Data you already have',
      desc: 'Point at CKAN, Socrata, or ArcGIS. Your portal stays the source of truth.',
    },
    {
      title: 'Minutes, not months',
      desc: 'Fork, configure, deploy. A working AI connection in one sitting — not a custom build.',
    },
    {
      title: 'Answers in plain language',
      desc: 'Staff and residents ask questions. Assistants query live open data and respond clearly.',
    },
  ],
} as const

export const proof = {
  eyebrow: 'Partner',
  headline: 'Built in partnership with the City of Boston.',
  body: 'OpenContext was developed with the City of Boston Department of Innovation and Technology to make open data easier to query with AI — and is featured on Boston’s open data showcase.',
  quote:
    'OpenContext has transformed how our teams interact with city data. Getting answers that used to take days now takes seconds.',
  attribution: 'City of Boston',
  articleLabel: 'Read the Boston showcase',
  articleUrl: BOSTON_ARTICLE_URL,
  stats: [
    { value: '100+', label: 'datasets made AI-accessible' },
    { value: '~4×', label: 'faster path to production' },
    { value: '< 15 min', label: 'typical setup time' },
  ],
} as const

export const stack = {
  eyebrow: 'Fits your stack',
  headline: 'Works with the portals cities already run.',
  hint: 'Expand a category to see what’s live and what’s coming next.',
  platforms: [
    {
      name: 'CKAN',
      status: 'Live' as const,
      kind: 'data' as const,
      description:
        'Connects to CKAN APIs so assistants can discover datasets, resources, and metadata from your catalog.',
    },
    {
      name: 'Socrata',
      status: 'Live' as const,
      kind: 'data' as const,
      description:
        'Translates SODA API responses into natural-language answers over your Socrata portal.',
    },
    {
      name: 'ArcGIS',
      status: 'Live' as const,
      kind: 'data' as const,
      description:
        'Exposes ArcGIS REST layers and feature services for location-based questions.',
    },
    {
      name: 'AWS',
      status: 'Live' as const,
      kind: 'cloud' as const,
      description:
        'Deploys on Lambda and API Gateway — serverless, scalable, and ready in minutes.',
    },
    {
      name: 'GCP',
      status: 'Soon' as const,
      kind: 'cloud' as const,
      description: undefined,
    },
    {
      name: 'Azure',
      status: 'Soon' as const,
      kind: 'cloud' as const,
      description: undefined,
    },
  ],
} as const

export const closing = {
  quote: 'Deploy in minutes. Query in plain English.',
  primaryCta: 'Get started',
  secondaryCta: 'Star on GitHub',
} as const

/* ─── How it works ─── */

export const guideHero = {
  eyebrow: 'How it works',
  headline: 'Connect your portal in about 15 minutes.',
  body: 'Fork the project, answer a few questions about your data, deploy, then paste the URL into Claude. Plain steps below — deeper docs live on GitHub.',
  primaryCta: 'Fork on GitHub',
  secondaryCta: 'Jump to steps',
  needLabel: "You'll need",
  requirements: ['Python 3.11+', 'AWS credentials', 'Terraform ≥ 1.0', 'Portal URL'],
} as const

export const mentalModel = {
  eyebrow: 'The idea',
  headline: 'One portal. One deployment.',
  body: 'Each OpenContext instance talks to a single open data catalog. Need more catalogs? Run more instances — simple, isolated, easy to operate.',
  rule: 'Recommended: one OpenContext → one data portal',
} as const

export const pipeline = {
  eyebrow: 'The path',
  headline: 'Three pieces. One flow.',
  footnote: 'Read-only: OpenContext queries public data. It does not write or delete catalog records.',
  nodes: [
    {
      title: 'Your portal',
      subtitle: 'CKAN · Socrata · ArcGIS',
      desc: 'The catalog your city already publishes.',
    },
    {
      title: 'OpenContext',
      subtitle: 'Runs on AWS',
      desc: 'Turns AI questions into portal queries and returns results.',
    },
    {
      title: 'Claude',
      subtitle: 'Or any MCP client',
      desc: 'Answers in plain language from live open data.',
    },
  ],
} as const

export const guide = {
  eyebrow: 'Setup',
  headline: 'Seven simple steps',
  body: 'Open a step for the command. Want the full walkthrough? Use the GitHub docs linked at the bottom.',
  successTitle: "You're connected",
  successBody:
    'Ask things like “How many potholes were reported last month?” and get answers from live open data.',
} as const

export const guideSteps = [
  {
    number: 1,
    label: 'Fork the repo',
    short: 'Get your own copy on GitHub.',
    long: 'Fork so you control the project. No code required for this step.',
    type: 'link' as const,
    linkLabel: 'Fork on GitHub →',
    code: undefined,
    doc: undefined,
  },
  {
    number: 2,
    label: 'Install locally',
    short: 'Clone and install the CLI.',
    long: 'Clone your fork and install dependencies. Usually about two minutes.',
    type: 'terminal' as const,
    code: `$ git clone https://github.com/thealphacubicle/OpenContext.git\n$ cd OpenContext\n$ pip install -e ".[cli]"`,
    linkLabel: undefined,
    doc: { label: 'Quickstart', file: 'QUICKSTART.md' },
  },
  {
    number: 3,
    label: 'Sign in to your cloud',
    short: 'Connect AWS so OpenContext can deploy.',
    long: 'Links credentials on your machine. Secrets stay local.',
    type: 'terminal' as const,
    code: '$ opencontext authenticate',
    linkLabel: undefined,
    doc: { label: 'Deployment guide', file: 'DEPLOYMENT.md' },
  },
  {
    number: 4,
    label: 'Describe your portal',
    short: 'Type, URL, and region — a short wizard.',
    long: 'Tell OpenContext whether you use CKAN, Socrata, or ArcGIS, plus your base URL.',
    type: 'terminal' as const,
    code: '$ opencontext configure',
    linkLabel: undefined,
    doc: undefined,
  },
  {
    number: 5,
    label: 'Deploy',
    short: 'Validate, then go live on staging.',
    long: 'Validate first, then deploy. Promote to production when staging looks good.',
    type: 'terminal' as const,
    code: `$ opencontext validate --env staging\n$ opencontext deploy --env staging`,
    linkLabel: undefined,
    doc: { label: 'Deployment guide', file: 'DEPLOYMENT.md' },
  },
  {
    number: 6,
    label: 'Check health',
    short: 'Confirm the server is up.',
    long: 'Status for availability; logs when you need detail.',
    type: 'terminal' as const,
    code: `$ opencontext status --env staging\n$ opencontext logs --env staging --follow`,
    linkLabel: undefined,
    doc: undefined,
  },
  {
    number: 7,
    label: 'Connect Claude',
    short: 'Paste your server URL into Integrations.',
    long: 'Settings → Integrations → Add Integration. Paste the URL from deploy.',
    type: 'note' as const,
    note: 'Paste your deployment URL into Claude. Then ask a real question against your open data.',
    code: undefined,
    linkLabel: undefined,
    doc: undefined,
  },
] as const

export const furtherReading = {
  eyebrow: 'Go deeper',
  headline: 'Full documentation on GitHub.',
  body: 'Architecture, plugins, and protocol details live in the repo — this page stays focused on getting you live.',
  links: [
    { title: 'Quickstart', description: 'Zero to a working deployment.', file: 'QUICKSTART.md' },
    { title: 'Architecture', description: 'How OpenContext sits between AI and civic data.', file: 'ARCHITECTURE.md' },
    { title: 'Built-in plugins', description: 'CKAN, Socrata, ArcGIS reference.', file: 'BUILT_IN_PLUGINS.md' },
    { title: 'Custom plugins', description: 'Add a source that isn’t bundled.', file: 'CUSTOM_PLUGINS.md' },
    { title: 'Deployment', description: 'Cloud setup and your MCP URL.', file: 'DEPLOYMENT.md' },
    { title: 'FAQ', description: 'Common questions.', file: 'FAQ.md' },
  ],
} as const

export const footer = {
  blurb:
    'Open source MCP for government open data. Connect your portal so people can query real city data in plain language.',
  credit:
    'Built in partnership with the City of Boston Department of Innovation and Technology by Srihari Raman.',
  bostonLabel: 'Boston open data showcase',
  bostonUrl: BOSTON_ARTICLE_URL,
  links: [
    { label: 'GitHub', path: '' },
    { label: 'Issues', path: '/issues' },
    { label: 'License', path: '/blob/main/LICENSE' },
    { label: 'Docs', path: '/tree/main/docs' },
  ],
} as const
