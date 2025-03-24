
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuestionItem from './QuestionItem';

// Mock interview questions, answers and feedback for Aircraft Engineer Team Lead role
const interviewData = [
  {
    id: 1,
    question: "How would you handle a situation where a project is behind schedule due to technical issues with an aircraft component?",
    answer: "When facing a project delay due to technical issues with an aircraft component, I follow a structured approach. First, I would gather the technical team for a thorough root cause analysis to understand exactly why the component is failing. I'd document the findings meticulously as required by aviation regulations. Next, I would develop multiple solution paths with varying timelines and resource requirements, prioritizing safety above all else. I'd communicate transparently with stakeholders including management, quality assurance, and client representatives about the delay, its causes, and our action plan. During implementation, I'd reallocate resources as needed while ensuring other project areas continue to progress. Throughout this process, I would maintain detailed documentation for regulatory compliance and conduct daily progress reviews. In a previous situation at Aerospace Systems Inc., we faced a critical hydraulic system failure that threatened a three-week delay. By implementing this approach, identifying an alternative supplier, and running parallel testing protocols, we reduced the delay to only four days while maintaining all safety standards.",
    suggestions: "• Emphasize more specific FAA or EASA regulatory considerations when addressing technical failures\n• Include an example of how you've used digital twin technology or simulation to troubleshoot similar issues\n• Mention how you would manage team stress and potential overtime during the recovery period\n• Describe your approach to post-resolution documentation and lessons learned processes\n• Consider addressing how you would prevent similar issues in future projects"
  },
  {
    id: 2,
    question: "Describe a complex technical problem you solved related to aircraft systems and how you approached it.",
    answer: "While leading the wing assembly integration team for the XJ-5000 commercial aircraft project, we encountered persistent intermittent failures in the fly-by-wire control system during environmental testing. The issue manifested only during specific temperature and vibration conditions, making it particularly challenging to isolate. I established a methodical troubleshooting approach beginning with a comprehensive data analysis of all test anomalies, identifying a pattern related to the signal degradation in certain harness routes. Using statistical process control methods, we narrowed the issue to potential electromagnetic interference when specific avionics systems operated simultaneously under thermal stress. I organized cross-functional teams from avionics, electrical, and materials engineering to investigate from multiple perspectives. We developed a custom testing rig that could replicate the exact environmental conditions, which revealed that a supplier had substituted a slightly different shielding material in a batch of connectors that failed to perform within specifications at temperature extremes. We implemented a solution that involved redesigning the connector shielding and rerouting critical signal paths. The solution not only resolved the immediate issue but improved overall system reliability by 22% in extreme operational conditions. Throughout this process, I maintained clear communication with certification authorities to ensure our solutions met all regulatory requirements.",
    suggestions: "• Quantify the financial impact of your solution (cost savings, avoided delays)\n• Include more details about how you delegated tasks among your team members\n• Elaborate on the specific engineering analyses you personally performed versus delegated\n• Discuss any trade-offs or compromises you had to make in your solution\n• Connect your problem-solving methodology to how you would approach future challenges in this role"
  },
  {
    id: 3,
    question: "How do you ensure your team maintains strict adherence to aviation safety and regulatory standards?",
    answer: "Ensuring strict adherence to aviation safety and regulatory standards is the foundation of everything we do in aircraft engineering. I've developed a multi-layered approach throughout my career. First, I establish a team culture where safety is the absolute priority by beginning every meeting with a safety moment and recognizing team members who identify potential issues. I implement a comprehensive training program where all team members are regularly updated on FAA, EASA, and company-specific regulations, with mandatory certification tracking to ensure compliance. I've developed standardized workflows with embedded compliance checkpoints at critical stages, using digital tools that flag any deviations from regulatory requirements. Regular audits and safety stand-downs are scheduled, not just when issues arise. I encourage near-miss reporting without fear of reprisal, maintaining a database of lessons learned that becomes required reading for the team. When leading the landing gear integration team at my previous company, I implemented these approaches and we achieved 28 consecutive months without a single regulatory non-compliance finding during external audits. Additionally, I maintain direct relationships with regulatory authorities, inviting them for informal reviews before official inspections to ensure transparent communication and alignment.",
    suggestions: "• Provide a specific example of how you handled a non-compliance issue when it was discovered\n• Discuss how you balance meeting regulatory requirements with project timelines and budget constraints\n• Include more detail about specific risk assessment methodologies you employ\n• Mention how you stay current with evolving international aviation regulations\n• Describe your approach to training new team members on regulatory requirements"
  },
  {
    id: 4,
    question: "Tell me about a time when you had to lead a team through a significant change in aircraft design or manufacturing processes.",
    answer: "When our company secured a contract for a new generation of fuel-efficient regional jets, I led the transition from traditional aluminum structural components to advanced composite materials in the empennage assembly. This represented a fundamental shift in design principles, manufacturing processes, and quality assurance protocols. Recognizing the technical and cultural challenges, I began by conducting a skills assessment of our 35-person team, identifying critical knowledge gaps. I developed a phased implementation plan with clear milestones and dedicated 15% of our budget to specialized training in composite manufacturing techniques. To address resistance, I identified key influencers within the team and involved them in the decision-making process, creating a core group of early adopters who helped bring others onboard. I established a parallel development track where we simultaneously maintained production on existing models while developing and testing new processes. Throughout the 14-month transition, we held weekly knowledge-sharing sessions where team members could openly discuss challenges and solutions. We partnered with material suppliers and academic institutions to develop custom training modules for our specific applications. This approach resulted in successfully transitioning 100% of the team to the new technologies, achieving certification of our composite structures on the first submission, and ultimately reducing component weight by 23% while improving structural integrity.",
    suggestions: "• Elaborate on how you measured the success of this change beyond technical metrics\n• Discuss any resistance you encountered from your team and specific strategies to overcome it\n• Include how you managed the relationship with quality assurance and regulatory authorities during this transition\n• Mention any unexpected challenges that arose and how you adjusted your approach\n• Provide more details about how this experience shaped your leadership philosophy"
  },
  {
    id: 5,
    question: "How do you prioritize and balance multiple critical aircraft engineering projects with competing deadlines?",
    answer: "Prioritizing and balancing multiple critical aircraft engineering projects requires a systematic approach that I've refined over my 12 years in the industry. I begin with a comprehensive risk assessment of all projects, evaluating factors including safety implications, contractual deadlines, resource requirements, and dependencies between projects. I use a modified version of the Eisenhower Matrix that incorporates aviation-specific risk factors to categorize tasks as critical, high-priority, necessary, and deferrable. For resource allocation, I maintain a centralized capability matrix that maps team members' skills against project requirements, allowing for optimal staffing decisions. I implement Agile project management methodologies adapted for aerospace engineering, with two-week sprints and daily stand-ups to maintain visibility and quickly identify bottlenecks. When leading multiple simultaneous avionics upgrade programs at Regional Aircraft Services, I developed a custom dashboard that provided real-time visibility into all projects, highlighting critical path items and potential resource conflicts. This allowed us to shift specialized engineering resources proactively before issues impacted timelines. I also believe in transparent communication with all stakeholders about realistic timelines and potential conflicts, negotiating adjustments when necessary rather than compromising quality or safety. This approach has allowed me to successfully deliver multiple concurrent certification projects with 94% on-time completion over the past three years.",
    suggestions: "• Discuss how you handle unexpected emergent issues that disrupt your carefully planned schedules\n• Provide an example of when you had to make a difficult decision to delay one project in favor of another\n• Include more details about specific project management tools or software you utilize\n• Elaborate on how you communicate priorities and changes to team members across different technical specialties\n• Mention how you manage customer expectations when resource constraints affect multiple projects"
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
