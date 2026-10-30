// ============================================================
// events.js
// ------------------------------------------------------------
// This file stores all the event information used across the
// whole application as a single JavaScript array of objects.
//
// WHY IS DATA KEPT IN A SEPARATE FILE?
// In a real event management website, this data would come from
// a database or a server (an API). Since this is a mini project,
// we keep the data in a simple array instead. This still lets us
// practice the exact same React skills (map, props, state) that
// we would use with real data, without needing a backend/database.
//
// Every event is an object with the same set of properties (also
// called "fields"). Keeping every object in the same shape makes
// it easy to display them using one reusable component: EventCard.
// ============================================================

// categoryStyles gives every event category a theme color and an
// emoji icon. We use this instead of downloading real photographs
// from the internet. This keeps the project 100% offline-friendly:
// nothing breaks if there is no internet connection when the
// project is opened on another computer.
export const categoryStyles = {
  Music: { color: "#7C3AED", icon: "🎵" },
  Sports: { color: "#10B981", icon: "🏆" },
  College: { color: "#3B82F6", icon: "🎓" },
  Cultural: { color: "#EC4899", icon: "🎭" },
  Workshop: { color: "#F59E0B", icon: "🛠️" },
  Conference: { color: "#6366F1", icon: "🎤" },
  Seminar: { color: "#14B8A6", icon: "📘" },
  Exhibition: { color: "#EF4444", icon: "🖼️" },
  Social: { color: "#8B5CF6", icon: "🤝" },
};

// This array is the "single source of truth" for every event shown
// on the website. Both the Home page and the Events page read from
// this same array, so the event list only has to be maintained here.
const events = [
  {
    id: 1,
    name: "Rhythm Nights: Live Band Showcase",
    category: "Music",
    date: "2026-09-20",
    time: "6:00 PM",
    venue: "Open Air Amphitheatre",
    image: "/images/rhythm.jpg",
    description:
      "An evening of live performances by student bands from different colleges, covering rock, pop and fusion genres.",
  },
  {
    id: 2,
    name: "Golden Memories Anniversary",
    category: "Social",
    date: "19 December 2026",
    time: "6:00 PM - 10:00 PM",
    venue: "The Heritage Lounge, Mumbai",
    image: "/images/golden.jpg",
    description:
      "A special anniversary celebration filled with memorable moments, delicious food, music, photo sessions, and a beautiful evening spent with family and close friends."
  },
  {
    id: 3,
    name: "Inter-College Basketball Championship",
    category: "Sports",
    date: "2026-09-25",
    time: "9:00 AM",
    venue: "Main Sports Complex",
    image: "/images/basketball.jpg",
    description:
      "Basketball teams from ten colleges compete in a knockout tournament to win the annual championship trophy.",
  },
  {
    id: 4,
    name: "Freshers' Welcome Day",
    category: "College",
    date: "2026-10-02",
    time: "10:00 AM",
    venue: "College Auditorium",
    image: "/images/freshers.jpg",
    description:
      "A welcoming ceremony for first-year students with introductions, games, and performances by senior students.",
  },
  {
    id: 5,
    name: "Heritage Dance & Drama Evening",
    category: "Cultural",
    date: "2026-10-05",
    time: "5:30 PM",
    venue: "Cultural Hall",
    image: "/images/heritage.jpg",
    description:
      "Students showcase classical and folk dance forms along with a short drama based on regional folklore.",
  },
  {
    id: 6,
    name: "React JS for Beginners – Hands-on Workshop",
    category: "Workshop",
    date: "2026-10-10",
    time: "11:00 AM",
    venue: "Computer Lab 2",
    image: "/images/react.jpg",
    description:
      "A practical workshop covering the basics of components, props and state for students learning front-end development.",
  },
  {
    id: 7,
    name: "Elegant Wedding Ceremony",
    category: "Social",
    date: "21 November 2026",
    time: "6:30 PM - 11:00 PM",
    venue: "Crystal Garden Convention Centre, Mumbai",
    image: "/images/elegant.jpg",
    description:
      "An elegant wedding celebration featuring beautiful arrangements, traditional rituals, live entertainment, a grand dinner, and special moments shared with loved ones."
  },
  {
    id: 8,
    name: "National Conference on Renewable Energy",
    category: "Conference",
    date: "2026-10-15",
    time: "9:30 AM",
    venue: "Seminar Hall A",
    image: "/images/national.jpg",
    description:
      "Researchers and industry experts present papers on solar, wind and other renewable energy technologies.",
  },
  {
    id: 9,
    name: "Career Guidance Seminar",
    category: "Seminar",
    date: "2026-10-18",
    time: "2:00 PM",
    venue: "Seminar Hall B",
    image: "/images/career.jpg",
    description:
      "Alumni and career counsellors share guidance on higher studies, government exams and placement preparation.",
  },
  {
    id: 10,
    name: "Student Art & Craft Exhibition",
    category: "Exhibition",
    date: "2026-10-22",
    time: "10:00 AM",
    venue: "Exhibition Gallery",
    image: "/images/art.jpg",
    description:
      "A display of paintings, sculptures and craft projects created by students across all departments.",
  },
  {
    id: 11,
    name: "Magical Birthday Bash",
    category: "Social",
    date: "25 October 2026",
    time: "5:00 PM - 9:00 PM",
    venue: "Royal Banquet Hall, Mumbai",
    image: "/images/magical.jpg",
    description:
      "A lively birthday party featuring beautiful decorations, entertaining games, a special cake-cutting ceremony, music, and memorable moments with loved ones."
  },
  {
    id: 12,
    name: "Alumni Meet & Networking Evening",
    category: "Social",
    date: "2026-11-08",
    time: "6:30 PM",
    venue: "College Lawn",
    image: "/images/alumni.jpg",
    description:
      "An informal gathering where current students can interact with alumni and build professional connections.",
  },
  {
    id: 13,
    name: "Battle of Bands",
    category: "Music",
    date: "2026-11-14",
    time: "5:00 PM",
    venue: "Open Air Amphitheatre",
    image: "/images/battle.jpg",
    description:
      "College bands compete against each other in front of a live audience and a panel of judges.",
  },
  {
    id: 14,
    name: "Annual Sports Day",
    category: "Sports",
    date: "2026-11-20",
    time: "8:00 AM",
    venue: "Main Sports Complex",
    image: "/images/sports.jpg",
    description:
      "Track and field events, relay races and tug-of-war competitions between different departments.",
  },

   {
    id: 15,
    name: "Dreamy Birthday Celebration",
    category: "Social",
    date: "12 October 2026",
    time: "6:00 PM - 10:00 PM",
    venue: "The Grand Celebration Hall, Mumbai",
    image: "/images/birthday.jpg",
    description:
      "Join us for a joyful birthday celebration filled with music, games, delicious food, cake cutting, and fun activities for family and friends."
  },
  {
    id: 16,
    name: "Royal Wedding Celebration",
    category: "Social",
    date: "8 November 2026",
    time: "7:00 PM - 11:30 PM",
    venue: "Grand Palace Banquet, Mumbai",
    image: "/images/wedding.jpg",
    description:
      "Celebrate a beautiful wedding evening with traditional ceremonies, elegant decorations, live music, delicious cuisine, and a memorable gathering of family and friends."
  },
  {
    id: 17,
    name: "Forever Together Anniversary",
    category: "Social",
    date: "5 December 2026",
    time: "7:00 PM - 10:30 PM",
    venue: "Sunset View Banquet Hall, Mumbai",
    image: "/images/anniversary.jpg",
    description:
      "Celebrate another beautiful year of togetherness with an evening of music, dinner, memorable photographs, heartfelt moments, and celebrations with family and friends."
  },
  {
  id: 18,
  name: "Live Music Night",
  category: "Music",
  date: "10 October 2026",
  time: "7:00 PM - 10:30 PM",
  venue: "City Arena, Mumbai",
  image: "/images/live.jpg",
  description:
    "Enjoy an exciting evening of live performances, energetic music, talented artists, and a lively atmosphere with friends and family."
},
{
  id: 19,
  name: "Melody Music Festival",
  category: "Music",
  date: "24 October 2026",
  time: "6:00 PM - 11:00 PM",
  venue: "Riverside Open Grounds, Mumbai",
  image: "/images/music.jpg",
  description:
    "A vibrant music festival featuring live performances, multiple music genres, entertaining shows, and an unforgettable evening of music and fun."
},
{
  id: 20,
  name: "Annual College Fest",
  category: "College",
  date: "15 October 2026",
  time: "10:00 AM - 6:00 PM",
  venue: "College Auditorium, Mumbai",
  image: "/images/college.jpg",
  description:
    "A fun-filled college fest featuring cultural performances, competitions, music, dance, games, and exciting activities for students."
},
{
  id: 21,
  name: "Tech Innovation Day",
  category: "College",
  date: "28 October 2026",
  time: "9:30 AM - 4:00 PM",
  venue: "College Seminar Hall, Mumbai",
  image: "/images/tech.jpg",
  description:
    "An engaging college event where students showcase innovative projects, participate in technical activities, attend presentations, and share new ideas."
},
{
  id: 22,
  name: "Web Development Workshop",
  category: "Workshop",
  date: "5 November 2026",
  time: "10:00 AM - 3:00 PM",
  venue: "Innovation Lab, Mumbai",
  image: "/images/web.jpg",
  description:
    "A hands-on workshop where participants learn the basics of web development, create simple web pages, and explore modern web technologies."
},
{
  id: 23,
  name: "Photography Skills Workshop",
  category: "Workshop",
  date: "18 November 2026",
  time: "11:00 AM - 4:00 PM",
  venue: "Creative Arts Centre, Mumbai",
  image: "/images/photo.jpg",
  description:
    "An interactive workshop covering photography basics, camera techniques, composition, lighting, and practical tips for taking better photographs."
},
{
  id: 24,
  name: "Future of Artificial Intelligence Seminar",
  category: "Seminar",
  date: "12 December 2026",
  time: "10:00 AM - 1:00 PM",
  venue: "Grand Conference Hall, Mumbai",
  image: "/images/ai.jpg",
  description:
    "An informative seminar exploring the future of artificial intelligence, its real-world applications, emerging technologies, and opportunities for students and professionals."
},
{
  id: 25,
  name: "Modern Art Exhibition",
  category: "Exhibition",
  date: "8 December 2026",
  time: "10:00 AM - 6:00 PM",
  venue: "City Art Gallery, Mumbai",
  image: "/images/modern art.jpg",
  description:
    "Explore a fascinating collection of modern artworks created by talented artists, featuring paintings, sculptures, creative installations, and unique artistic expressions."
},
{
  id: 26,
  name: "Science & Innovation Exhibition",
  category: "Exhibition",
  date: "20 December 2026",
  time: "9:30 AM - 5:00 PM",
  venue: "Exhibition Centre, Mumbai",
  image: "/images/science.jpg",
  description:
    "Discover innovative projects, scientific models, new technologies, and creative ideas presented by students, researchers, and young innovators."
}
];

export default events;
