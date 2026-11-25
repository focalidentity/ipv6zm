/**
 * Centralized Site Constants for IPv6 Council of Zambia
 * Single source of truth: strictly confirmed baseline facts, no placeholders.
 */

export const SITE = {
  name: 'IPv6 Council of Zambia',
  tagline: 'IPv6 Training & Adoption',
  description:
    "Zambia's non-profit IPv6 association uniting network engineers, policymakers, business leaders, government, banks, and mobile operators to support IPv6 adoption in Zambia.",
  url: 'https://ipv6zm.org',
  locale: 'en-ZM',
} as const;

export const CONTACT = {
  phone: '+260966239401',
  phoneDisplay: '+260 966 239401',
  phoneTel: 'tel:+260966239401',
  email: 'info@ipv6zm.org',
  emailMailto: 'mailto:info@ipv6zm.org',
} as const;

export const CONFERENCE = {
  title: 'National IPv6 & Internet Conference 2027',
  targetMonthYear: 'June 2027',
  statusNotice: 'Planned for June 2027 (Date, venue, and logistics to be confirmed)',
  announcementText: 'The National IPv6 Conference comes to Zambia in June 2027.',
  announcementCtaText: 'Register your interest →',
  announcementCtaHref: '/register?event=national-conference-2027',
} as const;

export const NAV_LINKS = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'Projects', href: '/projects' },
  { text: 'About', href: '/about' },
  { text: 'News', href: '/news' },
  { text: 'Contact', href: '/contact' },
] as const;

export const CORE_PROGRAMMES = [
  {
    id: 'policy-forum',
    title: 'Stakeholder and Policy Forum',
    category: 'Policy',
    description:
      'High-level dialogue connecting network operators, commercial banks, regulators, and government ministries to align policy and national IPv6 deployment standards.',
    image: '/images/cytonn-photography-GJao3ZTX9gU-unsplash-scaled.jpg',
    imageAlt: 'Professionals seated around a meeting table during a discussion',
    href: '/projects#policy-forum',
  },
  {
    id: 'national-conference-2027',
    title: 'National IPv6 & Internet Conference 2027',
    category: 'Conference',
    description:
      'The premier national gathering uniting global experts, local engineers, and enterprise leaders to accelerate IPv6 rollout across Zambia. Tentatively set for June 2027.',
    image: '/images/emediong-umoh-prhHGOOeJws-unsplash-scaled.jpg',
    imageAlt: 'Auditorium hall with conference seating and stage lighting',
    href: '/projects#national-conference-2027',
  },
  {
    id: 'capacity-workshops',
    title: 'IPv6 Capacity-Building Workshops',
    category: 'Training',
    description:
      'Intensive, hands-on lab training covering IPv6 addressing, dual-stack migration, routing architectures (BGP/OSPFv3), and security hardening led with international partners.',
    image: '/images/ubreakifix-north-las-vegas-_AIT3BLFIag-unsplash-scaled.jpg',
    imageAlt: 'Technicians working with hardware equipment at a lab workbench',
    href: '/projects#capacity-workshops',
  },
] as const;

export const SERVICES = [
  {
    id: 'training',
    number: '01',
    title: 'IPv6 Training & Workshops',
    summary:
      'Hands-on IPv6 courses for engineers, IT managers and students, taught with international partners.',
    detail:
      'Practical engineering modules focusing on dual-stack environments, IPv6 subnetting, security policies, and carrier-grade transitions.',
  },
  {
    id: 'assessments',
    number: '02',
    title: 'IPv6 Readiness Assessments',
    summary:
      'We check your network, apps and security, then give you a clear plan to move to IPv6.',
    detail:
      'Comprehensive audit of network routers, firewalls, DNS, cloud infrastructure, and legacy application dependencies.',
  },
  {
    id: 'advisory',
    number: '03',
    title: 'Policy & Standards Advisory',
    summary:
      'Short, clear briefings that help regulators and leaders adopt IPv6 with confidence.',
    detail:
      'Actionable guidance on public procurement mandates, national address allocation guidelines, and sector-specific transition timelines.',
  },
  {
    id: 'research',
    number: '04',
    title: 'Research & National IPv6 Reports',
    summary:
      'Independent facts on IPv6 use, cybersecurity and internet access in Zambia.',
    detail:
      'Data-driven national progress metrics, BGP route visibility tracking, and carrier adoption benchmarking across Zambia.',
  },
  {
    id: 'events',
    number: '05',
    title: 'Events, Conferences & Networking',
    summary:
      'National events and member meetings that connect operators, banks, government and suppliers.',
    detail:
      'Industry summits, technical symposiums, and working group meetups fostering cross-sector coordination.',
  },
] as const;

export const TRANSITION_STEPS = [
  {
    step: '01',
    title: 'Assess',
    description:
      'We look at your network, equipment and apps to see what already works with IPv6.',
  },
  {
    step: '02',
    title: 'Train',
    description:
      'Your team learns IPv6 addressing, routing and security in hands-on workshops.',
  },
  {
    step: '03',
    title: 'Plan and migrate',
    description:
      'We build a step-by-step plan, test it and move your services with little disruption.',
  },
  {
    step: '04',
    title: 'Sustain',
    description:
      'Join the Council to keep your skills fresh and share lessons with other members.',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'What is IPv6 and why does Zambia need it?',
    answer:
      'IPv6 is the newest version of the system that gives every device an address on the internet. The old system, IPv4, is running out of addresses. IPv6 has far more, so more people, phones and businesses can come online. IPv6 Zambia is about making sure our country is ready.',
  },
  {
    question: 'Who can join the IPv6 Council of Zambia?',
    answer:
      'Professionals, companies, government bodies and students who care about the internet can all join. You can see the membership options on our Services page.',
  },
  {
    question: 'When is the national IPv6 conference?',
    answer:
      'We plan to hold it in June 2027. The exact date and place will be announced soon. Subscribe to our newsletter to hear first.',
  },
  {
    question: 'Is the IPv6 Council of Zambia a non-profit?',
    answer:
      'Yes. We are a non-profit association. Our work is paid for by grants, sponsors, memberships, workshops and events.',
  },
  {
    question: 'Do you offer IPv6 training for companies?',
    answer:
      'Yes. We run IPv6 training in Zambia for individuals and for company teams. We can teach at your office or online. Contact us with your group size and goals.',
  },
] as const;
