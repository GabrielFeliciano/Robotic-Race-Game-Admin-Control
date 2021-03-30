import { Container, Nav } from 'react-bootstrap';
import style from './question-frame.module.scss';

export default function QuestionFrame () {
    return (
        <div className={style.painel}>
            <div className={style.sidebar}>
                <button href="/home">Criar Pergunta</button>
                <button eventKey="link-1">Modificar Pergunta</button>
                <button eventKey="link-2">Deletar Pergunta</button>
            </div>
            <ul>

            </ul>
        </div>
    )
}