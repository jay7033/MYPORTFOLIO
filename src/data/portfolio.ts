  import type {
  Profile, Project, SkillGroup, Experience, Education, Certificate, CodingProfile,
} from '../types'

export const profile: Profile = {
  name: 'Jay Kumar Mishra',
  title: 'AI Engineer | Software Developer',
  tagline: 'B.Tech CSE (AI & ML) student | Building Technology That Solve Real-World Problem.',
  about: 'I am a passionate B.tech Computer Science Engineer Student with specialization in Artificial Intelligence and Machine Learning.driven by curiosity and a strong desire to create meaningful digital experiences.I enjoy turning ideas into practical solutions exploring emerging technologies and continuosly improving my problem-solving skills.I belive in learning by building staying curious,and approaching every challenge with creativity and dedication. Currently, i am focused on growing as a Software Developer and AI/ML Engineer, while preparing myself to contribute to innovative and impactfull products.',
  email: 'mjay37028@gmail.com',
  phone: '+91 62036 09944',
  location: 'Noida, Uttar Pradesh, India',
   linkedin: 'https://www.linkedin.com/in/jaykumarmishra/',
  github: 'https://github.com/jay7033',
  stats: [
    { label: 'Projects', value: '2' },
    { label: 'Internship', value: '1' },
    { label: 'Certificates', value: '2' },
  ],
}

export const skills: SkillGroup[] = [
  { category: 'Programming', items: ['C', 'Java', 'Python'] },
  { category: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Spring Boot', 'TypeScript', 'Tailwind CSS', 'RestAPI', 'FastAPI', ] },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Data Preprocessing', 'Model Training', 'Predictive Analysis','Scikit-Learn', 'Numpy', 'Pandas',],
  },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB',] },
  {
    category: 'Tools & Platforms',
    items: ['VS Code', 'PyCharm', 'Git', 'GitHub', 'MS Excel', 'MS PowerPoint', 'MS Word','Figma','Vercel', 'Google Colab', 'Jupyter Notebook',],
  },
]

export const projects: Project[] = [
  {
    title: 'AgroVision AI - Crop Advisory System',
    description: 'An AI-powered crop advisory system that analyzes agricultural inputs and provides data-driven recommendations, helping farmers make informed crop decisions from soil and crop conditions.',
    tech: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'MongoDB', 'Scikit-Learn', 'Numpy', 'Pandas'],
    
  },
    {
    title: 'FarmDirect - AI-Powered Farmer-to-Buyer Marketplace',
    description: 'A digital marketplace that connects farmers directly with buyers, with transparent produce pricing, online orders and delivery tracking. Uses AI-driven demand forecasting and personalized recommendations to help farmers make data-informed decisions and reduce dependency on intermediaries.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
  },
   
]

export const experiences: Experience[] = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'CODTECH IT Solutions Pvt. Ltd.',
    duration: 'Feb 2026 - Mar 2026',
    points: [
      'Pattern recognition aur decision-making ke liye machine learning classification models banaye.',
      '1,000+ records ke datasets analyze karke patterns, trends aur anomalies identify kiye.',
      'Data preprocessing aur feature optimization se AI system ki accuracy 10-15% badhayi.',
      'AI training workflows optimize kiye taaki overfitting kam ho aur model generalization behtar ho.',
      'Standard validation techniques se AI models ko evaluate kiya.',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'B.Tech in CSE (AI & Machine Learning)',
    institute: 'Galgotias University',
    duration: 'Expected 2028',
    score: 'CGPA: 7.5',
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institute: 'MJK High School, Bihar Board',
    duration: '2022 - 2024',
    score: 'Percentage: 72%',
  },
]

export const certificates: Certificate[] = [
  {
    title: 'Java Collections',
    issuer: 'GUVI x HCL (Google for Education Partner)',
    date: 'ID: 467O1562CZ54MH99DU',
  },
  {
    title: 'DSA using C',
    issuer: 'GUVI x HCL (Google for Education Partner)',
    date: 'ID: N61V2C2J7OL7M72462',
  },
  {
    title: 'Mastering MySQL',
    issuer: 'GUVI x HCL (Google for Education Partner)',
    date: 'ID: 5MrBJ5y54n3h4k6712',
  },
]

export const achievements: string[] = [
  'Successfully completed an NPTEL Online Certification course delivered by faculty from IITs/IISc..',
  'Participated in a hackathon and collaborated with a team to develop an innovative technology-driven solution addressing a real-world problem..',
]
export const codingProfiles: CodingProfile[] = [
  { name: 'LeetCode', handle: 'Jay7033', url: 'https://leetcode.com/u/Jay7033/' },
  { name: 'GeeksforGeeks', handle: 'mjay398ek', url: 'https://www.geeksforgeeks.org/profile/mjay398ek' },
  { name: 'CodeChef', handle: 'jay7033', url: 'https://www.codechef.com/users/jay7033' },
  {name: 'Codolio', handle: 'jay9944', url: 'https://codolio.com/profile/Jay9944'},
  {name: 'Codeforces', handle: 'Jay7033', url: 'https://codeforces.com/profile/Jay7033'},
]