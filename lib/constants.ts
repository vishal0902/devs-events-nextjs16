export interface EventData {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  slug: string;
  description: string;
  type: "conference" | "hackathon" | "meetup" | "workshop";
  tags: string[];
  organizer: string;
  ticketPrice: string;
  attendees: number;
}

export const events: EventData[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    date: "June 13–14, 2026",
    time: "9:00 AM – 6:00 PM CEST",
    location: "Amsterdam, Netherlands",
    slug: "react-summit-2026",
    description:
      "The biggest React conference worldwide. Featuring 50+ speakers, hands-on workshops, and networking with thousands of React developers from around the globe.",
    type: "conference",
    tags: ["React", "Next.js", "JavaScript", "Frontend"],
    organizer: "GitNation",
    ticketPrice: "Free (Remote) / €499 (In-Person)",
    attendees: 2800,
  },
  {
    title: "ETHGlobal Brussels",
    image: "/images/event2.png",
    date: "July 11–13, 2026",
    time: "10:00 AM – 10:00 PM CEST",
    location: "Brussels, Belgium",
    slug: "ethglobal-brussels-2026",
    description:
      "A 36-hour hackathon bringing together the best minds in Web3. Build decentralized applications, compete for $500K+ in prizes, and connect with top blockchain protocols.",
    type: "hackathon",
    tags: ["Web3", "Ethereum", "Solidity", "DeFi"],
    organizer: "ETHGlobal",
    ticketPrice: "Free",
    attendees: 1500,
  },
  {
    title: "Google I/O Extended",
    image: "/images/event3.png",
    date: "May 20, 2026",
    time: "6:00 PM – 9:30 PM IST",
    location: "Bangalore, India",
    slug: "google-io-extended-2026",
    description:
      "A community-organized watch party and workshop series following Google I/O. Explore the latest in Android, Firebase, Flutter, and Google Cloud with local developers.",
    type: "meetup",
    tags: ["Android", "Flutter", "Firebase", "Google Cloud"],
    organizer: "GDG Bangalore",
    ticketPrice: "Free",
    attendees: 400,
  },
  {
    title: "Next.js Conf 2026",
    image: "/images/event4.png",
    date: "October 22, 2026",
    time: "10:00 AM – 5:00 PM PDT",
    location: "San Francisco, CA (Hybrid)",
    slug: "nextjs-conf-2026",
    description:
      "The official Next.js conference by Vercel. Discover the future of the web with deep dives into server components, edge computing, and AI-powered development workflows.",
    type: "conference",
    tags: ["Next.js", "React", "Vercel", "Edge Computing"],
    organizer: "Vercel",
    ticketPrice: "Free (Virtual) / $299 (In-Person)",
    attendees: 3200,
  },
  {
    title: "PyCon US 2026",
    image: "/images/event5.png",
    date: "May 14–22, 2026",
    time: "9:00 AM – 6:00 PM EST",
    location: "Pittsburgh, PA",
    slug: "pycon-us-2026",
    description:
      "The largest annual gathering of the Python community. Five days of tutorials, talks, and sprints covering everything from data science and machine learning to web development.",
    type: "conference",
    tags: ["Python", "Machine Learning", "Data Science", "AI"],
    organizer: "Python Software Foundation",
    ticketPrice: "$100 – $550",
    attendees: 4000,
  },
  {
    title: "Hack the Future",
    image: "/images/event6.png",
    date: "August 2–3, 2026",
    time: "12:00 PM Sat – 12:00 PM Sun EST",
    location: "Online (Global)",
    slug: "hack-the-future-2026",
    description:
      "A 24-hour online hackathon focused on building AI-powered tools for social good. Open to all skill levels with mentorship from industry experts and $50K in prizes.",
    type: "hackathon",
    tags: ["AI", "Open Source", "Social Impact", "LLMs"],
    organizer: "Major League Hacking",
    ticketPrice: "Free",
    attendees: 5000,
  },
];
