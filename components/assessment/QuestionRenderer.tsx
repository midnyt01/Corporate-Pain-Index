import { Question } from "@/data/question";

import SingleSelectQuestion from "./SingleSelectQuestion";
import ScaleQuestion from "./ScaleQuestion";
import RankingQuestion from "./RankingQuestion";
import TextAreaQuestion from "./TextAreaQuestion";
import LeadCaptureQuestion from "./LeadCaptureQuestion";

interface Props {
  question: Question;
}

export default function QuestionRenderer({
  question,
}: Props) {
  switch (question.type) {
    case "single-select":
      return (
        <SingleSelectQuestion
          questionId={question.id}
          options={
            question.options || []
          }
        />
      );

    case "scale":
      return (
        <ScaleQuestion
          questionId={question.id}
        />
      );

    case "ranking":
      return (
        <RankingQuestion
          questionId={question.id}
        />
      );

    case "textarea":
      return (
        <TextAreaQuestion
          questionId={question.id}
        />
      );

      case "lead-capture":
      return <LeadCaptureQuestion 
      questionId={question.id}/>;

    default:
      return null;
  }
}