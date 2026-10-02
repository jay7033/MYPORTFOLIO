declare const process: { env: Record<string, string | undefined> }

const MODEL = 'gemini-2.5-flash'

const KNOWLEDGE = `
NAME: Jay Kumar Mishra
LOCATION: Noida, Uttar Pradesh, India
EMAIL: mjay37028@gmail.com
PHONE: +91 62036 09944
GITHUB: https://github.com/jay7033

SUMMARY: Undergraduate B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning, with a strong foundation in Machine Learning, Data Structures and Algorithms. Skilled in developing AI-based applications, performing data preprocessing, and building scalable solutions to solve real-world problems.

EDUCATION:
- B.Tech in CSE (AI & ML), Galgotias University, expected 2028, CGPA 7.5
- Class XII, MJK High School, Bihar Board, 2022-2024, 72%

SKILLS:
- Programming: C, Java, Python
- Web: HTML, CSS, JavaScript, React, Vite, Tailwind CSS
- AI & ML: Machine Learning, Data Preprocessing, Model Training, Predictive Analysis
- Database: MySQL, PostgreSQL, Supabase
- Tools: VS Code, PyCharm, Git, GitHub, MS Excel, MS PowerPoint, MS Word

EXPERIENCE:
Artificial Intelligence Intern at CODTECH IT Solutions Pvt. Ltd. (Feb 2026 - Mar 2026)
- Built machine learning classification models for pattern recognition and decision-making.
- Analyzed datasets with 1,000+ records to find patterns, trends and anomalies.
- Performed data preprocessing and feature optimization, improving AI system accuracy by 10-15%.
- Optimized AI training workflows to reduce overfitting and improve generalization.
- Evaluated AI models using standard validation and performance assessment techniques.

PROJECTS:
1. AgroVision AI - AI-powered crop advisory system. Analyzes agricultural inputs such as soil and crop conditions and gives data-driven crop recommendations to farmers. Tech: Python, Machine Learning, Data Processing.
2. FarmDirect - AI-powered farmer-to-buyer marketplace. Connects farmers directly with buyers with transparent pricing, online orders and delivery tracking. Includes AI demand forecasting and personalized recommendations. Tech: React, Vite, JavaScript, CSS, Tailwind CSS, Supabase, PostgreSQL.

CERTIFICATIONS:
- Java Collections, GUVI in collaboration with HCL (Google for Education Partner)
- DSA using C, GUVI in collaboration with HCL (Google for Education Partner)

ACHIEVEMENTS:
- Completed an NPTEL online certification from IIT/IISc faculty.
- Participated in a hackathon and built a technology solution for a real-world problem with a team.

CODING PROFILES:
- LeetCode: https://leetcode.com/u/Jay7033/
- GeeksforGeeks: https://www.geeksforgeeks.org/profile/mjay398ek
- CodeChef: https://www.codechef.com/users/jay7033

AVAILABILITY: Open to internships and collaborations.
`

const SYSTEM =
  "You are the AI assistant on Jay Kumar Mishra's portfolio website. " +
  'Answer questions about Jay using ONLY the information below. ' +
  'Be friendly, professional and concise (maximum 4 sentences unless the visitor asks for detail). ' +
  "If the answer is not in the information, say you do not have that detail and suggest contacting Jay by email. " +
  'Never invent facts. If the question is unrelated to Jay, politely bring the conversation back to his profile. ' +
  'Reply in the same language the visitor writes in.\n\n' +
  KNOWLEDGE

interface ChatMessage {
  role: string
  text: string
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(request: Request): Promise<Response> {
  const key = process.env.GEMINI_API_KEY
  if (!key) return json({ error: 'Missing API key' }, 500)

  let messages: ChatMessage[] = []
  try {
    const data = await request.json()
    messages = Array.isArray(data.messages) ? data.messages : []
  } catch {
    return json({ error: 'Bad request' }, 400)
  }

  let contents = messages.slice(-8).map((m) => ({
    role: m.role === 'model' ? 'model' : 'user',
    parts: [{ text: String(m.text).slice(0, 500) }],
  }))
  while (contents.length > 0 && contents[0].role !== 'user') contents = contents.slice(1)
  if (contents.length === 0) return json({ error: 'No message' }, 400)

  const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + MODEL + ':generateContent'

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents,
        generationConfig: { maxOutputTokens: 1000, temperature: 0.4 },
      }),
    })
    if (!res.ok) return json({ error: 'AI service error' }, 502)
    const data = await res.json()
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
    if (!reply) return json({ error: 'Empty reply' }, 502)
    return json({ reply }, 200)
  } catch {
    return json({ error: 'Request failed' }, 502)
  }
}