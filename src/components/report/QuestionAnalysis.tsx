
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuestionItem from './QuestionItem';

// Mock interview questions, answers and feedback for Ivy League college admissions
const interviewData = [
  {
    id: 1,
    question: "Why do you want to attend our university specifically?",
    answer: "I've been drawn to your university for several reasons that align with my academic and personal goals. First, your renowned Environmental Science program with its focus on climate policy directly connects with my passion for environmental advocacy. During my campus visit last spring, I was impressed by Professor Johnson's research on urban sustainability, which perfectly complements my work establishing a city-wide recycling initiative in my hometown. Additionally, your university's strong emphasis on interdisciplinary education appeals to me as someone who believes environmental solutions require knowledge across multiple domains including policy, science, and economics. The collaborative atmosphere I witnessed when sitting in on a seminar discussion showed me that students here are both intellectually curious and supportive of each other. Finally, your university's commitment to sustainability in its own operations demonstrates that the values I hold are embedded in the institution itself.",
    suggestions: "• Consider adding specific examples of how your existing environmental work connects to research opportunities\n• Mention how smaller class sizes would benefit your learning style\n• Address how the university's location would enhance your educational experience\n• Discuss relevant student organizations you'd like to join\n• Balance personal and academic reasons more evenly"
  },
  {
    id: 2,
    question: "Tell me about a challenge you've faced and how you overcame it.",
    answer: "During my junior year, I faced a significant challenge when I was elected president of our school's debate club only to discover it had lost both its faculty advisor and funding due to budget cuts. With 30 members counting on me and several important tournaments approaching, I had to act quickly. My first step was to create a comprehensive proposal outlining the club's achievements, educational benefits, and a detailed budget. I scheduled meetings with the principal and three potential faculty sponsors, ultimately securing an English teacher who was a former collegiate debater. For funding, I organized a community fundraiser that involved hosting a public debate on a local issue, which attracted coverage from our local newspaper. I also reached out to alumni who had been in the club, creating a small donor network. Through these efforts, we not only restored our budget but increased it by 15%, allowing us to attend the state tournament where our team placed second. This experience taught me about advocacy, strategic planning, and the importance of building community support systems.",
    suggestions: "• Highlight more clearly the leadership skills you demonstrated\n• Quantify the impact of your solutions (number of students affected, specific budget figures)\n• Explain what specific personal qualities helped you succeed\n• Mention how this experience changed your approach to problem-solving\n• Discuss how this relates to your future goals and college plans"
  },
  {
    id: 3,
    question: "How do you plan to contribute to our campus community?",
    answer: "I envision contributing to the campus community in multiple ways that extend both my personal passions and benefit the broader university environment. First, as someone deeply involved in Model UN throughout high school, I plan to join and eventually help lead the university's internationally recognized Model UN team. My experience organizing our regional conference, which hosted 300 students from 25 schools, has prepared me to help strengthen the program's outreach and mentorship components. Beyond that, I'm excited to establish connections between campus and my interest in educational equity. I've spent three years tutoring underserved students in mathematics, and I hope to work with the university's community engagement office to expand existing tutoring programs into more local schools, particularly focusing on STEM education for young women and minorities. Musically, as a classically trained cellist, I look forward to auditioning for the university orchestra and chamber groups, while also exploring the opportunity to perform in nursing homes and hospitals through the Arts for Community program I read about in your student newspaper. Finally, I'm passionate about environmental sustainability and would be eager to participate in the campus farm initiative and help implement new waste reduction strategies in dining halls.",
    suggestions: "• Be more selective with your examples - focus on 2-3 areas of deep contribution rather than many\n• Explain how your contributions would evolve over four years\n• Research and name specific existing campus organizations rather than general areas\n• Connect your proposed contributions to the university's stated values or strategic plan\n• Consider addressing how you'll balance these activities with academic demands"
  },
  {
    id: 4,
    question: "What book has influenced you most and why?",
    answer: "The book that has most profoundly influenced me is 'Factfulness' by Hans Rosling. I discovered it during a particularly challenging time when the constant stream of negative news was affecting my perspective on whether positive change is possible. Rosling's methodical breakdown of how humans systematically misunderstand the world due to inherent biases completely transformed my approach to information and problem-solving. The book presents compelling data showing that despite our perception, many aspects of global health, education, and poverty have actually improved significantly over time. This wasn't just academically interesting to me—it fundamentally changed how I approach challenges. For example, when I began working on a clean water access initiative in my community, I applied Rosling's framework of breaking down problems into measurable, addressable components rather than seeing them as overwhelming wholes. I learned to question my initial assumptions and seek data before forming conclusions. Perhaps most importantly, the book instilled in me a form of rational optimism—the understanding that while serious problems exist, human ingenuity and cooperation have solved similar challenges before. This perspective has made me both more analytical and more hopeful as I consider how I might contribute to addressing complex social and environmental issues.",
    suggestions: "• Connect the book's themes more explicitly to your academic interests\n• Provide a specific example of how your thinking changed before vs. after reading\n• Consider discussing a perspective in the book you disagreed with\n• Highlight how this book distinguishes you from other applicants\n• Explain how this influence might shape your college experience"
  },
  {
    id: 5,
    question: "Where do you see yourself in 10 years?",
    answer: "In ten years, I envision myself having completed both my undergraduate studies in International Relations and a law degree with a focus on environmental policy. Building on the research I hope to conduct during my undergraduate years, I aim to be working at the intersection of international climate agreements and their practical implementation. Ideally, I would be serving as legal counsel for an organization like the UN Environment Programme or a similar NGO that works across borders on climate solutions. I'm particularly interested in helping developing nations create regulatory frameworks that balance environmental protection with economic development needs—something I became passionate about during my high school research project on sustainable development in Southeast Asia. Beyond my professional goals, I hope to maintain my commitment to community education by developing and perhaps teaching courses that help non-specialists understand complex environmental policy. I also see myself continuing my current volunteer work with habitat restoration, but on a larger scale, perhaps leading citizen science initiatives that both collect valuable environmental data and engage communities in conservation. While I recognize that career paths often evolve in unexpected ways, these aspirations reflect my current passions and the impact I hope to have.",
    suggestions: "• Be more specific about which skills you'll develop during college to reach these goals\n• Consider addressing potential obstacles and how you might overcome them\n• Acknowledge that your plans may evolve while maintaining core values\n• Connect your 10-year vision more explicitly to what the university offers\n• Balance professional ambitions with personal development goals"
  },
];

const QuestionAnalysis = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Question Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {interviewData.map((item) => (
            <QuestionItem 
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              suggestions={item.suggestions}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionAnalysis;
