import { Question } from "@constant/question/question.d";

interface Props {
    question: Question
}

export default function QuestionCard (props: Props) {
    const { question } = props;

    return (
        {question}
    )
}