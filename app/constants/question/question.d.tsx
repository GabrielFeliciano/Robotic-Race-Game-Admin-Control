export interface Answer {
    answer: string,
    isRight: boolean
}

export interface Question {
    id: number,
    question: string,
    category: string,
    answers: Answer[]
}

export interface QuestionsPayload {
    meta: {
        question: {
            questionQuantity: number,
            lastQuestion: Question
            required: {
                categories: string[]
            }
        },
        answers: {
            required: {
                min: number,
                max: number
            }
        }
    }
    questions: Question[]
}