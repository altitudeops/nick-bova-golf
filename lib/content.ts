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

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];
