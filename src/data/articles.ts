/**
 * Articles Data for IPv6 Council of Zambia
 * Strictly verified links, natural keyword focus, no keyword stuffing, no fabricated data.
 */

export interface Article {
  slug: string;
  title: string;
  category:
    | 'Capacity-Building Workshops'
    | 'Stakeholder & Policy Forums'
    | 'Research & National IPv6 Reports'
    | 'National IPv6 & Internet Conference 2027'
    | 'IPv6 Transition & Operations';
  publishedDate: string;
  readTime: string;
  author: string;
  excerpt: string;
  externalLink: {
    label: string;
    url: string;
  };
  content: string; // HTML markup structured with Lumos typography
}

export const ARTICLES: Article[] = [
  // 1. Capacity-Building Workshops
  {
    slug: 'ipv6-deployment-in-zambia-core-concepts',
    title: 'IPv6 Deployment in Zambia: Core Concepts for Enterprise Network Engineers',
    category: 'Capacity-Building Workshops',
    publishedDate: 'November 2026',
    readTime: '6 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'A practical architectural overview of IPv6 address planning, prefix allocation, and interface configuration for Zambian enterprise networks.',
    externalLink: {
      label: 'IETF RFC 8200 (Internet Protocol, Version 6 Specification)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8200',
    },
    content: `
      <p class="article-lead">
        As Zambian enterprises expand digital services, financial gateways, and cloud operations, IPv4 address exhaustion presents real operational bottlenecks. Transitioning to IPv6 is no longer an abstract future milestone; it is an active requirement for scalable, secure infrastructure.
      </p>

      <h2>1. The Foundation: 128-Bit Addressing Architecture</h2>
      <p>
        The core of IPv6 lies in its vast address space, defined formally by the Internet Engineering Task Force in <a href="https://datatracker.ietf.org/doc/html/rfc8200" target="_blank" rel="noopener noreferrer">IETF RFC 8200</a>. Unlike 32-bit IPv4 addresses that require Carrier-Grade NAT (CGNAT) workarounds, IPv6 provides end-to-end addressability across all network segments.
      </p>
      <p>
        For Zambian enterprises, allocating a standard <code>/48</code> site prefix from your upstream provider provides 65,536 distinct <code>/64</code> subnets. This simplifies internal segmentation across branches, data centres, and customer-facing interfaces without address scarcity constraints.
      </p>

      <h2>2. Addressing Best Practices for Enterprise Networks</h2>
      <ul>
        <li><strong>Hexadecimal Subnetting:</strong> Organize nibble boundaries (4-bit increments) to maintain human-readable addressing across departments, branches, and DMZs.</li>
        <li><strong>Stateless Address Autoconfiguration (SLAAC) vs. DHCPv6:</strong> Evaluate when to leverage SLAAC with RDNSS for campus clients versus stateful DHCPv6 for auditable enterprise endpoints.</li>
        <li><strong>Security Rule Symmetry:</strong> Ensure perimeter firewalls enforce explicit ingress filtering, deny unrecognized routing headers, and inspect ICMPv6 messages rather than blocking ICMPv6 outright.</li>
      </ul>

      <h2>3. Moving Forward with the Council</h2>
      <p>
        The IPv6 Council of Zambia delivers hands-on engineering assistance and structured assessments to help teams navigate prefix design, routing configuration, and security audits. Explore our specialized <a href="/services">readiness and transition services</a>, or <a href="/contact">contact our technical desk</a> to schedule an enterprise consultation.
      </p>
    `,
  },
  {
    slug: 'hands-on-ipv6-training-zambian-isps-banks-mobile-operators',
    title: 'Hands-On IPv6 Training for Zambian ISPs, Banks, and Mobile Operators',
    category: 'Capacity-Building Workshops',
    publishedDate: 'November 2026',
    readTime: '5 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'How specialized hands-on lab training bridges technical skill gaps across Zambian telecommunications carriers, financial institutions, and enterprise teams.',
    externalLink: {
      label: 'AFRINIC IP Academy',
      url: 'https://afrinic.academy/',
    },
    content: `
      <p class="article-lead">
        While technical leadership recognizes the necessity of IPv6, practical migration progress often stalls at the engineering layer due to unfamiliarity with dual-stack debugging and advanced routing protocols.
      </p>

      <h2>Hands-On Labs vs. Theoretical Lectures</h2>
      <p>
        Enterprise network engineers cannot afford trial-and-error in live banking or carrier routing tables. The IPv6 Council of Zambia delivers practical, lab-based workshops modeled on international standards, collaborating closely with resources from the <a href="https://afrinic.academy/" target="_blank" rel="noopener noreferrer">AFRINIC IP Academy</a> to ensure local practitioners build real configuration confidence.
      </p>

      <h2>Target Modules for Zambian Infrastructure</h2>
      <ul>
        <li><strong>Internet Service Providers:</strong> Upstream BGP peering with IPv6 multiprotocol extensions (MP-BGP), customer prefix delegation, and route aggregation.</li>
        <li><strong>Commercial Banks & Fintechs:</strong> Payment gateway dual-stack enablement, TLS terminal configurations, and strict compliance with national cybersecurity frameworks.</li>
        <li><strong>Mobile Network Operators:</strong> Managing dual-stack APNs, DNS64/NAT64 translation clusters, and mobile subscriber address pools.</li>
      </ul>

      <h2>Get Involved</h2>
      <p>
        Detailed curriculum information is outlined under our <a href="/projects#capacity-workshops">IPv6 Capacity-Building Workshops</a> initiative. To learn more about our collaborative mission and alliance structure, review our <a href="/about">institutional background</a>.
      </p>
    `,
  },
  {
    slug: 'dual-stack-tunnelling-translation-ipv6-migration',
    title: 'Dual-Stack, Tunnelling, and Translation in IPv6 Migration Projects',
    category: 'Capacity-Building Workshops',
    publishedDate: 'November 2026',
    readTime: '6 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'Comparing transition mechanisms—dual-stack, overlay tunnelling, and translation techniques—to determine the optimal deployment path for Zambian networks.',
    externalLink: {
      label: 'AFRINIC IPv6 Transition Mechanisms Course',
      url: 'https://blog.afrinic.net/blog/posts/20211019-mastering-ipv6-transition-mechanisms-ecourse',
    },
    content: `
      <p class="article-lead">
        Migrating to IPv6 does not require an abrupt, single-day switch-off of IPv4. Engineering teams employ coexistence mechanisms to transition services incrementally while preserving uninterrupted connectivity.
      </p>

      <h2>1. The Primary Path: Dual-Stack</h2>
      <p>
        Dual-stack remains the gold standard for enterprise and campus networks. In a dual-stack configuration, routers, switches, and server endpoints run IPv4 and IPv6 concurrently on the same physical interfaces. Operating systems choose the optimal protocol via Happy Eyeballs algorithms, ensuring zero user disruption while IPv6 traffic flows natively.
      </p>

      <h2>2. Tunnelling Techniques</h2>
      <p>
        When isolated IPv6 networks need to communicate across legacy IPv4 transport networks, encapsulating IPv6 packets inside IPv4 frames (such as 6in4 or GRE tunnels) bridges disparate sites. However, tunnels introduce MTU fragmentation and configuration overhead, making them temporary transitional tools rather than permanent endpoints.
      </p>

      <h2>3. Translation Architectures (NAT64 / DNS64)</h2>
      <p>
        For mobile carriers and large service providers, IPv6-only access networks paired with NAT64 and DNS64 allow mobile subscribers to access legacy IPv4 content seamlessly without allocating public IPv4 addresses to handsets. Detailed transition methodologies are thoroughly explored in the <a href="https://blog.afrinic.net/blog/posts/20211019-mastering-ipv6-transition-mechanisms-ecourse" target="_blank" rel="noopener noreferrer">AFRINIC IPv6 Transition Mechanisms</a> curriculum.
      </p>

      <h2>Implementation Strategy</h2>
      <p>
        Review our structured <a href="/services">migration advisory services</a> or explore our collaborative <a href="/projects">national deployment projects</a> to tailor an optimal coexistence roadmap for your organization.
      </p>
    `,
  },

  // 2. Stakeholder & Policy Forums
  {
    slug: 'why-multi-stakeholder-alignment-accelerates-ipv6-adoption',
    title: 'Why Multi-Stakeholder Alignment Accelerates IPv6 Adoption in Zambia',
    category: 'Stakeholder & Policy Forums',
    publishedDate: 'November 2026',
    readTime: '5 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'How bringing regulators, financial institutions, telecommunications carriers, and ministries together breaks the chicken-and-egg deployment cycle.',
    externalLink: {
      label: 'Zambia Information and Communications Technology Authority (ZICTA)',
      url: 'https://www.zicta.zm/',
    },
    content: `
      <p class="article-lead">
        Technology adoption rarely succeeds in silos. In telecommunications and internet infrastructure, progress requires synchronised momentum between content providers, internet carriers, and regulatory overseers.
      </p>

      <h2>Breaking the Chicken-and-Egg Impasse</h2>
      <p>
        For years, content providers avoided deploying IPv6 because end-user access networks were predominantly IPv4; simultaneously, access networks hesitated to activate dual-stack because primary web destinations remained reachable over IPv4.
      </p>
      <p>
        The IPv6 Council of Zambia breaks this stalemate by convening the <a href="/projects#policy-forum">Stakeholder and Policy Forum</a>. By coordinating alongside the national communications regulator, the <a href="https://www.zicta.zm/" target="_blank" rel="noopener noreferrer">Zambia Information and Communications Technology Authority (ZICTA)</a>, commercial banks, and mobile network operators, Zambia establishes a shared calendar and unified transition expectations.
      </p>

      <h2>The Economic Value of Collective Action</h2>
      <ul>
        <li><strong>Reduced Interconnection Friction:</strong> Local peering over IPv6 at national Internet Exchange Points (IXPs) keeps local traffic within national borders, lowering international transit costs.</li>
        <li><strong>Enhanced National Resilience:</strong> Eliminating carrier-grade NAT bottlenecks improves visibility for cybersecurity analysts and financial transaction processors.</li>
        <li><strong>Standardized Public Procurement:</strong> Ensuring all new government and state-owned enterprise hardware purchases mandate native IPv6 support.</li>
      </ul>

      <p>
        Learn more about the Council's governance structure, non-profit charter, and institutional partners on our <a href="/about">About Us page</a>.
      </p>
    `,
  },
  {
    slug: 'aligning-public-sector-regulatory-guidelines-ipv6-readiness',
    title: 'Aligning Public Sector and Regulatory Guidelines with IPv6 Readiness',
    category: 'Stakeholder & Policy Forums',
    publishedDate: 'November 2026',
    readTime: '5 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'Examining procurement mandates, policy roadmaps, and regulatory alignment necessary to sustain national digital sovereignty in Zambia.',
    externalLink: {
      label: 'ZICTA Regulatory Guidelines & Frameworks',
      url: 'https://www.zicta.zm/resources/guidelines',
    },
    content: `
      <p class="article-lead">
        Public sector institutions handle substantial citizen data, e-government platforms, and essential digital public services. Ensuring these public endpoints are IPv6-ready is central to national ICT readiness.
      </p>

      <h2>Regulatory Alignment & Procurement Standards</h2>
      <p>
        Regulatory guidance provided by national authorities, such as the published frameworks from <a href="https://www.zicta.zm/resources/guidelines" target="_blank" rel="noopener noreferrer">ZICTA Guidelines</a>, highlights the importance of standardized digital infrastructure. A foundational step is ensuring all government tender specifications mandate dual-stack or IPv6-capable networking gear.
      </p>

      <h2>Key Public Sector Priorities</h2>
      <ul>
        <li><strong>Government Portal Dual-Stacking:</strong> Enabling state portals, revenue services, and education platforms to resolve seamlessly over AAAA DNS records.</li>
        <li><strong>Address Security:</strong> Implementing RPKI (Resource Public Key Infrastructure) route origin authorizations alongside IPv6 address allocations to protect national routing integrity.</li>
        <li><strong>Inter-Agency Collaboration:</strong> Fostering joint training cohorts across ministry ICT units to ensure internal capacity matches private-sector standards.</li>
      </ul>

      <h2>Consultation & Advisory</h2>
      <p>
        The Council assists public bodies with non-partisan advisory and readiness audits. Review our <a href="/services">advisory services</a> or <a href="/contact">reach out to the Secretariat</a> for strategic consultations.
      </p>
    `,
  },

  // 3. Research & National IPv6 Reports
  {
    slug: 'assessing-ipv6-readiness-across-zambian-networks',
    title: 'Assessing IPv6 Readiness Across Zambian Networks and Institutions',
    category: 'Research & National IPv6 Reports',
    publishedDate: 'November 2026',
    readTime: '6 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'A methodological look at evaluating routing tables, Autonomous System Numbers (ASNs), and DNS readiness across Zambia’s internet infrastructure.',
    externalLink: {
      label: 'AFRINIC Internet Number Resources & Allocation Data',
      url: 'https://www.afrinic.net/resources',
    },
    content: `
      <p class="article-lead">
        Effective national policy requires transparent, empirical measurement. Tracking IPv6 adoption involves analyzing global BGP routing tables, DNS resolution telemetry, and address allocation records.
      </p>

      <h2>Methodology: How Readiness is Measured</h2>
      <p>
        Evaluating a country's IPv6 readiness involves cross-referencing multiple data points:
      </p>
      <ul>
        <li><strong>Prefix Allocation vs. Advertisement:</strong> Analyzing address blocks allocated by the regional internet registry, detailed under <a href="https://www.afrinic.net/resources" target="_blank" rel="noopener noreferrer">AFRINIC Internet Number Resources</a>, against prefixes actively announced in the global BGP routing table.</li>
        <li><strong>Autonomous System Visibility:</strong> Determining the percentage of Zambian Autonomous Systems (ASNs) advertising at least one valid IPv6 prefix.</li>
        <li><strong>DNS Resolution:</strong> Verifying whether national domains (.zm) and top institutions maintain authoritative AAAA nameservers and mail exchange records.</li>
      </ul>

      <h2>Organizational Readiness Audits</h2>
      <p>
        For individual banks and telecom operators, the Council performs comprehensive <a href="/services">IPv6 Readiness Assessments</a>, evaluating firewall rules, CPE firmware, and internal routing. Keep updated with our research dispatches on the <a href="/news">News & Bulletins hub</a>.
      </p>
    `,
  },
  {
    slug: 'measuring-ict-sector-growth-connectivity-resilience-zambia',
    title: 'Measuring ICT Sector Growth and Connectivity Resilience in Zambia',
    category: 'Research & National IPv6 Reports',
    publishedDate: 'November 2026',
    readTime: '5 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'Analyzing data connectivity, mobile subscriber expansion, and network resilience benchmarks reported across Zambia’s telecommunications sector.',
    externalLink: {
      label: 'ZICTA Press Releases & Sector Reports',
      url: 'https://zicta.zm/resources/press-releases',
    },
    content: `
      <p class="article-lead">
        Zambia's telecommunications sector continues to experience strong growth in data traffic, active mobile subscriptions, and digital payments across both urban and rural communities.
      </p>

      <h2>Resilience in an Expanding Digital Economy</h2>
      <p>
        As documented in recent industry publications and <a href="https://zicta.zm/resources/press-releases" target="_blank" rel="noopener noreferrer">ZICTA Press Releases & Sector Reports</a>, reliable internet access is fundamental to GDP growth, financial inclusion, and regional trade corridors.
      </p>
      <p>
        With thousands of new connected devices entering local networks each month—ranging from smartphones to agricultural sensors and smart meters—the legacy IPv4 address pool is fundamentally inadequate to sustain this growth without complex and fragile NAT layers.
      </p>

      <h2>The Strategic Role of IPv6</h2>
      <p>
        Deploying IPv6 simplifies network topologies, lowers carrier infrastructure operating costs, and ensures direct peer-to-peer security. Discover our collaborative roadmap on the <a href="/about">About Us page</a> or read our latest updates on the <a href="/news">News page</a>.
      </p>
    `,
  },

  // 4. National IPv6 & Internet Conference 2027
  {
    slug: 'what-to-expect-national-ipv6-internet-conference-2027',
    title: 'What to Expect at the National IPv6 & Internet Conference in June 2027',
    category: 'National IPv6 & Internet Conference 2027',
    publishedDate: 'November 2026',
    readTime: '5 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'A preview of Zambia’s landmark summit planned for June 2027, uniting international specialists, local network engineers, policymakers, and industry sponsors.',
    externalLink: {
      label: 'AFRINIC IP Academy & Training Standards',
      url: 'https://afrinic.academy/',
    },
    content: `
      <p class="article-lead">
        The National IPv6 & Internet Conference is planned as Zambia's flagship internet technology gathering, bringing global standards bodies, regional network operators, and local stakeholders together under one roof.
      </p>

      <div class="c-notice-box" style="background-color: var(--color-brand-gold-soft); border-left: 4px solid var(--color-brand-gold); padding: var(--space-md); border-radius: var(--radius-sm); margin-block: var(--space-md);">
        <strong>Planning Status Note:</strong> The conference is tentatively planned for <strong>June 2027</strong>. Specific calendar dates, host city, convention venue, partner hotel allocations, and logistics remain unconfirmed and subject to final agreements.
      </div>

      <h2>Anticipated Conference Streams</h2>
      <ul>
        <li><strong>Technical Plenary Sessions:</strong> Keynotes delivered by international engineering authorities, examining global IPv6-only transition milestones and cloud architectures.</li>
        <li><strong>Hands-On Breakout Workshops:</strong> Intensive operational labs aligned with engineering standards from the <a href="https://afrinic.academy/" target="_blank" rel="noopener noreferrer">AFRINIC IP Academy</a>.</li>
        <li><strong>Executive & Regulatory Roundtables:</strong> High-level policy sessions addressing national procurement, digital sovereignty, and cross-border interconnectivity.</li>
        <li><strong>Sponsor & Technology Exhibits:</strong> Demonstrations of carrier-grade routing hardware, enterprise security appliances, and smart infrastructure solutions.</li>
      </ul>

      <h2>Registration of Interest</h2>
      <p>
        Learn more about conference milestones under our <a href="/projects#national-conference-2027">Projects Hub</a>, or <a href="/contact">register early interest with our Secretariat</a> to receive priority notifications once venue and schedule contracts are finalized.
      </p>
    `,
  },

  // 5. IPv6 Transition & Operations
  {
    slug: 'using-four-step-assess-train-plan-sustain-model-ipv6',
    title: 'Using the Four-Step Assess, Train, Plan, and Sustain Model for IPv6',
    category: 'IPv6 Transition & Operations',
    publishedDate: 'November 2026',
    readTime: '6 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'A strategic breakdown of the Council’s structured four-phase methodology to transition institutional networks safely and sustainably.',
    externalLink: {
      label: 'IETF RFC 8200 Specification Reference',
      url: 'https://datatracker.ietf.org/doc/html/rfc8200',
    },
    content: `
      <p class="article-lead">
        Transitioning complex organizational networks to IPv6 can feel daunting without a clear governance structure. The IPv6 Council of Zambia advocates a phased four-step model designed to minimize service interruption.
      </p>

      <h2>Step 1: Assess</h2>
      <p>
        Begin with a comprehensive audit of all network layers: edge routers, internal switches, firewalls, load balancers, DNS servers, and third-party SaaS integrations. Determine which hardware supports native IPv6 per <a href="https://datatracker.ietf.org/doc/html/rfc8200" target="_blank" rel="noopener noreferrer">IETF RFC 8200</a> and identify legacy elements requiring firmware updates.
      </p>

      <h2>Step 2: Train</h2>
      <p>
        Equip network engineers, systems administrators, and helpdesk personnel with practical skills. Training must precede configuration: addressing planning, routing protocols, and troubleshooting tools like traceroute6 and ping6.
      </p>

      <h2>Step 3: Plan and Migrate</h2>
      <p>
        Develop a detailed dual-stack transition schedule. Deploy IPv6 on the core network first, then outward to data centres, external public services (web, mail, DNS), and finally internal client VLANs.
      </p>

      <h2>Step 4: Sustain</h2>
      <p>
        Continuous monitoring, security policy reviews, and membership in the IPv6 Council to stay updated on emerging routing standards and national benchmarking.
      </p>

      <h2>Next Steps</h2>
      <p>
        Review our <a href="/services">detailed service offerings</a> or view our <a href="/projects">active programmes</a> to begin your institutional assessment.
      </p>
    `,
  },
  {
    slug: 'routing-standards-long-term-ipv6-operations-engineering-teams',
    title: 'Routing Standards and Long-Term IPv6 Operations for Engineering Teams',
    category: 'IPv6 Transition & Operations',
    publishedDate: 'November 2026',
    readTime: '5 min read',
    author: 'IPv6 Council of Zambia Secretariat',
    excerpt:
      'Operational guidelines for BGP peering, OSPFv3 interior routing, route filtering, and security maintenance in production dual-stack networks.',
    externalLink: {
      label: 'RFC Editor IPv6 Standards Repository',
      url: 'https://www.rfc-editor.org/subjects/ipv6/',
    },
    content: `
      <p class="article-lead">
        Once IPv6 is activated in production, engineering teams must maintain stable routing tables, enforce route hygiene, and implement security controls suited to 128-bit protocols.
      </p>

      <h2>1. Interior and Exterior Routing Standards</h2>
      <p>
        Within an enterprise or autonomous system, <strong>OSPFv3</strong> or <strong>IS-IS</strong> manages interior gateway routing, decoupling routing logic from network layer addresses. At the perimeter, <strong>MP-BGP (Multiprotocol BGP)</strong> advertises IPv6 unicast network layer reachability information (AFI=2, SAFI=1). Authoritative RFC documentation is maintained in the <a href="https://www.rfc-editor.org/subjects/ipv6/" target="_blank" rel="noopener noreferrer">RFC Editor IPv6 Standards</a> repository.
      </p>

      <h2>2. Ingress Filtering & Route Hygiene</h2>
      <ul>
        <li><strong>BCP 38 (Network Ingress Filtering):</strong> Prevent spoofed traffic by validating that packets entering your network originate from legitimate prefix allocations.</li>
        <li><strong>Prefix Limits & Bogon Filtering:</strong> Configure maximum prefix thresholds on BGP peer sessions and drop unallocated or reserved address blocks.</li>
        <li><strong>ICMPv6 Rate Limiting:</strong> Allow essential Path MTU Discovery and Neighbor Discovery messages while rate-limiting ICMPv6 to protect routing processors.</li>
      </ul>

      <h2>Join the Engineering Community</h2>
      <p>
        Connect with peer network engineers and industry experts through the Council. Learn about our community on the <a href="/about">About page</a> or <a href="/contact">inquire about technical working groups</a>.
      </p>
    `,
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return ARTICLES.filter((a) => a.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(ARTICLES.map((a) => a.category)));
}
