export interface Answer {
    answer: string,
    isRight: boolean
}

export interface Question {
    question: string,
    category: string,
    answers: Answer[]
}