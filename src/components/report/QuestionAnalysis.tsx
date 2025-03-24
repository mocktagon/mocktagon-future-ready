
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuestionItem from './QuestionItem';

// Mock interview questions, answers and feedback
const interviewData = [
  {
    id: 1,
    question: "Tell me about a time when you had to work with a difficult team member.",
    answer: "I once worked with a colleague who frequently missed deadlines. I scheduled a private meeting to understand their challenges and offered to help with time management. We established a new workflow with more frequent check-ins.",
    suggestions: "Good start on addressing the issue directly. Could have elaborated more on the specific outcome of your intervention and any measurable improvements in team productivity. Also consider mentioning how this experience changed your approach to team conflicts."
  },
  {
    id: 2,
    question: "How do you prioritize tasks when you have multiple deadlines?",
    answer: "I use a combination of urgency and importance to prioritize. I create a list of all tasks, estimate time required, and identify dependencies. I usually tackle high-impact tasks first.",
    suggestions: "Your method is sound, but the answer would be stronger with a specific example demonstrating this approach in action. Consider adding details about how you communicate priorities with stakeholders and how you handle sudden changes to deadlines."
  },
  {
    id: 3,
    question: "Describe a project where you had to learn a new technology quickly.",
    answer: "For our client portal redesign, I needed to learn React in two weeks. I used online courses and built small components to practice before implementing the main features.",
    suggestions: "This answer would benefit from more specifics about your learning strategy. Mention which resources you found most helpful, how you measured your progress, and how you balanced learning with delivering on project milestones. Quantify the results of your work."
  },
  {
    id: 4,
    question: "What approach do you take when you need to explain complex technical concepts to non-technical stakeholders?",
    answer: "I try to use analogies and visual aids whenever possible. I focus on the business impact rather than technical details unless specifically asked.",
    suggestions: "This answer needs a concrete example to be effective. Describe a specific situation where you successfully translated technical information for a non-technical audience. What specific techniques did you use? How did you confirm they understood? What was the outcome?"
  },
  {
    id: 5,
    question: "How do you stay updated with industry trends and new technologies?",
    answer: "I follow several tech blogs, participate in online communities, and try to build small projects using new tools when I have free time.",
    suggestions: "Name specific resources you use and explain your learning process in more detail. Mention how you evaluate which new technologies are worth investing time in learning versus which might be passing trends. Include how you've applied this learning in your professional work."
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
