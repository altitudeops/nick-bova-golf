// Single source of truth for Nick Bova Golf copy + facts.
// Facts mirrored verbatim from nickbovagolf.com (career, awards, pricing, reviews).

export const SITE = {
  name: 'Nick Bova Golf',
  title: 'Nick Bova Golf | PGA Director of Instruction — Hamilton Farm, NJ',
  description:
    'Nick Bova is a Class A PGA Professional, NJ PGA Section Champion and Golf Digest Best-in-State coach. Private, junior and online golf instruction at Hamilton Farm Golf Club, Gladstone, New Jersey.',
  url: 'https://nickbovagolf.com',
  phone: '772.342.5708',
  phoneHref: 'tel:+17723425708',
  email: 'nickbova414@gmail.com',
  emailHref: 'mailto:nickbova414@gmail.com',
  onlineEmail: 'ncb414@me.com',
  bookingUrl: 'https://www.thrivsports.com/Nick-Bova/bookNow/',
  videoUrl: 'https://www.youtube.com/watch?v=etDHNPOZLGU',
  videoId: 'etDHNPOZLGU',
  instagram: 'https://www.instagram.com/nickbovagolf/',
  facebook: 'https://www.facebook.com/nickbovagolf',
  address: {
    venue: 'Hamilton Farm Golf Club',
    street: '1040 Pottersville Rd.',
    city: 'Gladstone',
    state: 'NJ',
    zip: '07934',
  },
};

export const HERO = {
  eyebrow: 'PGA Director of Instruction · Hamilton Farm Golf Club',
  title: 'Taking your golf game to the next level.',
  sub: 'Class A PGA Professional, New Jersey PGA Section Champion and a Golf Digest Best-in-State coach — building better swings and sharper minds one player at a time.',
};

// Headline credentials — the "rockstar" résumé, used for animated stat counters.
export const STATS = [
  { value: 2022, label: 'NJ PGA Section Champion', suffix: '', detail: '73-70-68 at Manasquan River GC' },
  { value: 3, label: 'Time All-American', suffix: '×', detail: 'DIII Methodist University' },
  { value: 7, label: 'PGA Professional Championships', suffix: '×', detail: '2010, 2018–2023' },
  { value: 127, label: 'Lowest 36-hole total', suffix: '', detail: '62-65 (−13) — believed a Met PGA record' },
];

export const CREDENTIALS = [
  'Class A Member, PGA of America',
  'Golf Digest — Best in State (New Jersey)',
  'Golf Digest — Best Young Coaches',
  '2020 New Jersey PGA Teacher / Coach of the Year',
  'Member, Proponent Group',
  'Top 50 U.S. Kids Instructor — Honorable Mention (2014–15)',
];

export const ABOUT = {
  intro:
    'Nick brings a unique combination of teaching and playing skills to Hamilton Farm Golf Club.',
  bio: [
    'A native of Central Illinois, Nick has lived in the Metropolitan area since 2010. From 2010 to 2015 he served as First Assistant at Friar’s Head on Long Island, then became Teaching Professional at Siwanoy Country Club in Bronxville, NY in 2015. He has been Director of Instruction at Hamilton Farm since 2019.',
    'Nick is a Class A member of the PGA and a member of the Proponent Group. He holds a Bachelor’s Degree in Business Administration with a concentration in Professional Golf Management from Methodist University.',
    'He lives in Hillsborough, NJ with his girlfriend, Erin, and their kids, along with two golden retrievers, Coco and Rex.',
  ],
  course:
    'Nick is Director of Instruction at Hamilton Farm Golf Club’s Hickory Course — the only USGA-rated par-3 course in the United States.',
  playing: [
    { year: '2022', text: 'Won the New Jersey PGA Section Championship at Manasquan River GC, shooting 73-70-68.' },
    { year: '2019', text: 'Won the New Jersey PGA Clambake and the Fall Finale.' },
    { year: '2013', text: 'Won the Metropolitan Assistant’s Championship at Bethpage Red, shooting 62-65 (−13) — believed to be the lowest 36-hole total in any Metropolitan PGA Section event.' },
    { year: '2010–23', text: 'Qualified for seven PGA Professional Championships (2010, 2018–2023).' },
    { year: 'College', text: '3× All-American at DIII Methodist University in Fayetteville, NC.' },
  ],
};

export const PROGRAMS = [
  {
    slug: 'private-adult',
    name: 'Private Lesson — Adult',
    price: '$240',
    unit: 'per 45 minutes',
    blurb:
      'One-on-one instruction built around your swing, your goals and your season. Video, data and a clear plan you can take to the range.',
    features: ['Full swing & short game', 'Video analysis', 'Personalized practice plan'],
    featured: false,
  },
  {
    slug: 'private-junior',
    name: 'Private Lesson — Junior',
    price: '$180',
    unit: 'per 45 minutes · ages 4–17',
    blurb:
      'Development-first coaching for ages 4–17. U.S. Kids certified, Positive Coaching Alliance approach — fundamentals, confidence and a love for the game.',
    features: ['U.S. Kids certified', 'Age-appropriate fundamentals', 'Confidence & character'],
    featured: false,
  },
  {
    slug: 'online',
    name: 'Online Lesson',
    price: '$150',
    unit: 'per 45 minutes',
    blurb:
      'Send your swing videos and receive a detailed, frame-by-frame breakdown with drills — from anywhere. Videos sent to ncb414@me.com.',
    features: ['Frame-by-frame video review', 'Drills & checkpoints', 'Train from anywhere'],
    featured: false,
  },
  {
    slug: 'half-day',
    name: 'Half-Day Intensive — Adult',
    price: '$850',
    unit: '9am – 1pm',
    blurb:
      'A focused half-day deep dive: range work, on-course application and a session plan that resets your game.',
    features: ['TrackMan launch monitor', 'Video analysis', 'On-course gamification', 'Lunch included'],
    featured: true,
  },
  {
    slug: 'full-day',
    name: 'Full-Day Intensive — Adult',
    price: '$1,600',
    unit: '9am – 6pm',
    blurb:
      'The complete immersion. A full day with Nick across the range, short game and the course — the fastest way to rebuild and trust your game.',
    features: ['TrackMan launch monitor', 'Video analysis', 'On-course gamification', 'Lunch included'],
    featured: true,
  },
];

export const REVIEWS = [
  {
    name: 'Michael Wrotniak',
    text: 'Nick is an excellent golf coach and teacher. He has an exceptional eye for recognizing imperfections in my golf swing as well as an ability to succinctly communicate corrections.',
  },
  {
    name: 'Tacey Carroll',
    text: 'He has helped me improve not only my swing but also my mental strength. He has an ability to hone in on what must be done to improve your swing and through the use of video, drills and patience, make the changes happen.',
  },
  {
    name: 'Jim Meehan',
    text: 'Having worked with Nick for over two years, I can say he is a very dedicated instructor willing to tailor the lesson toward your objectives.',
  },
  {
    name: 'Marc Burstein',
    text: 'If Nick Bova tells you to take off your shoes and stand on one leg for your next shot, just do it. He’s that good and you won’t be disappointed.',
  },
  {
    name: 'Colin Hickey',
    text: 'Nick Bova has been a great teacher for me. He has transformed me into a real golfer. When I started I wasn’t very good and Nick fixed that.',
  },
];

export const PARTNERS = [
  { name: 'U.S. Kids Golf Certified', src: '/brand/cert-us-kids.jpg' },
  { name: 'Positive Coaching Alliance', src: '/brand/cert-pca.jpg' },
  { name: 'Titleist Performance Institute', src: '/brand/cert-tpi.jpg' },
  { name: 'Hudl Technique', src: '/brand/cert-hudl.png' },
];

export const CAMPUS = {
  eyebrow: 'National Network',
  href: '/campus-academy',
  externalHref: 'https://www.campusgolfacademy.com/locations/nick-bova',
  // Nick's primary accent is gold — used for all partner messaging
  accent: '#C8A24B',
  body: [
    'Nick Bova Golf is a designated CAMPUS Academy, part of a national network of elite programs committed to developing competitive junior golfers and guiding families through the modern college recruiting landscape.',
    'CAMPUS Academies are selected for their proven player development, competitive results, and ability to help golfers identify realistic pathways to the next level.',
  ],
};

export const CAMPUS_PAGE = {
  heroEyebrow: 'CAMPUS Academy · National Network',
  heroTitle: 'Where the Northeast’s next collegiate golfers are built.',
  heroSub:
    'Elite junior development under Nick Bova — structured coaching, tournament preparation, and the CAMPUS recruiting platform, at Hamilton Farm Golf Club in New Jersey.',
  stats: [
    { value: 'Class A', label: 'PGA Director of Instruction' },
    { value: '4', label: 'Stages of development' },
    { value: 'Best in State', label: 'Golf Digest — New Jersey' },
    { value: '100%', label: 'Personalized plans' },
  ],
  thesisTitle: 'Not recreational instruction.',
  thesisBody:
    'The standard isn’t showing up — it’s improving on a schedule, training with intent, and arriving at every tournament with a plan that holds up under pressure. CAMPUS Academy players are coached like the competitive athletes they’re becoming.',
  stages: [
    { n: '01', t: 'Evaluate', d: 'A true baseline — TrackMan numbers, video, scoring data and an honest assessment of where the game stands and where it can go.' },
    { n: '02', t: 'Develop', d: 'A structured, multi-year plan: ball-striking, short game, scoring and the habits that hold up. Built to repeat between sessions.' },
    { n: '03', t: 'Compete', d: 'The right tournament schedule, on-course training and pressure reps — turning range gains into scores that matter.' },
    { n: '04', t: 'Recruit', d: 'A real recruiting profile on the CAMPUS platform, college-coach visibility, and honest guidance toward programs that actually fit.' },
  ],
  receives: [
    'Structured, multi-year coaching plans',
    'TrackMan launch data & video analysis',
    'Tournament preparation & scheduling',
    'On-course training and gamification',
    'Mental-game development',
    'Recruiting guidance & timeline',
    'CAMPUS platform profile access',
    'College-coach visibility',
  ],
  collegesTitle: 'The Northeast college landscape.',
  collegesSub:
    'CAMPUS prepares players for the programs that define golf in the Northeast — Ivy League academics, Division I powerhouses and the schools families in our region know. These are the pathways we build toward.',
  colleges: [
    { name: 'Princeton', src: '/brand/colleges/princeton.png' },
    { name: 'Yale', src: '/brand/colleges/yale.png' },
    { name: 'Harvard', src: '/brand/colleges/harvard.png' },
    { name: 'Penn', src: '/brand/colleges/penn.png' },
    { name: 'Cornell', src: '/brand/colleges/cornell.png' },
    { name: 'Columbia', src: '/brand/colleges/columbia.png' },
    { name: 'Penn State', src: '/brand/colleges/penn-state.png' },
    { name: 'Rutgers', src: '/brand/colleges/rutgers.png' },
    { name: 'Syracuse', src: '/brand/colleges/syracuse.png' },
    { name: 'Villanova', src: '/brand/colleges/villanova.png' },
    { name: 'Boston College', src: '/brand/colleges/boston-college.png' },
    { name: 'UConn', src: '/brand/colleges/uconn.png' },
    { name: 'Georgetown', src: '/brand/colleges/georgetown.png' },
    { name: 'Seton Hall', src: '/brand/colleges/seton-hall.png' },
    { name: 'Navy', src: '/brand/colleges/navy.png' },
    { name: 'Monmouth', src: '/brand/colleges/monmouth.png' },
  ],
  recruitTitle: 'Tournament scores aren’t enough anymore.',
  recruitBody: [
    'College golf recruiting has never been more competitive — or more confusing. Timelines, scoring differentials, academics and roster math all matter, and the right move at fifteen looks very different from the right move at seventeen.',
    'As a CAMPUS Academy, Nick helps players build a complete recruiting profile — verified scores, swing video and development history — and puts it in front of the college coaches who matter.',
  ],
  faqs: [
    { q: 'Who is the CAMPUS Academy program for?', a: 'Committed junior golfers who want to compete and have college aspirations — from developing players building a foundation to established competitors targeting specific programs.' },
    { q: 'How is this different from a private lesson?', a: 'A private lesson fixes today’s swing. CAMPUS is a structured, multi-year development and recruiting pathway — coaching, competition planning, data and college visibility working together toward a clear goal.' },
    { q: 'What does the evaluation involve?', a: 'A full baseline session: TrackMan, video, short-game and scoring assessment, plus a conversation about goals and timeline. From there Nick builds the plan.' },
    { q: 'What’s the time commitment?', a: 'It scales to the player and the season — regular coaching, a competitive schedule and focused practice. The plan is built around your calendar and your goals.' },
    { q: 'Do you help directly with college recruiting?', a: 'Yes. Through the CAMPUS platform, players get a verified recruiting profile and exposure to college coaches, plus honest guidance on which programs are realistic and right.' },
  ],
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/campus-academy', label: 'Juniors' },
  { href: '/reviews', label: 'Reviews' },
];

export const FOOTER_NAV = [
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/campus-academy', label: 'Juniors' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

// Marquee credential logos for the About honors section
export const CRED_LOGOS = [
  { name: 'PGA of America', src: '/brand/creds/pga.png', honor: 'Class A Member' },
  { name: 'Golf Digest', src: '/brand/creds/golf-digest.png', honor: 'Best in State · Best Young Coaches' },
  { name: 'U.S. Kids Golf', src: '/brand/creds/us-kids.jpg', honor: 'Top 50 Instructor' },
  { name: 'Methodist University', src: '/brand/creds/methodist.png', honor: '3× All-American' },
];
