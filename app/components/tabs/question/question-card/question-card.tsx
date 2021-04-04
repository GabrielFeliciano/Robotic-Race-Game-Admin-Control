import { Question } from "@constant/question/question.d";
import { ChangeEvent } from "react";
import style from './question-card.module.scss';

interface Props {
    data: Question
}

export default function QuestionCard (props: Props) {
    const question = props.data;

    return (
        <fieldset disabled className={style['question-card']}>
            <label htmlFor="">
                {`Pergunta ${question.id}`}
            </label>

            <input type="text" defaultValue={question.question} className={style.question} />

            <ul>{
                question.answers.map((answer, key) => {
                    const inputName = `answer-${question.id * key}`;

                    return (
                        <div className={style.answers} key={key}>
                            <input 
                            type="checkbox" 
                            defaultChecked={answer.isRight} 
                            name={inputName}
                            />
                            <input 
                            className={style.answer} 
                            type="text" 
                            defaultValue={answer.answer} 
                            />
                        </div>
                    )
                })    
            }</ul>
        </fieldset>
    )
}