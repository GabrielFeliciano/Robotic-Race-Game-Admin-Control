import style from './sidebar-question.module.scss'

interface SidebarQuestionProps {
    orientation?: 'right' | 'left'
}

const defaultProps: SidebarQuestionProps = {
    orientation: 'left'
}

export default function SidebarQuestion (props: SidebarQuestionProps) {
    const options = {...defaultProps, ...props}

    const classNameSidebar = [
        style.sidebar,
        style[options.orientation]
    ].join(' ');

    return (
        <div className={classNameSidebar}>
            <button>Criar Pergunta</button>
            <button>Modificar Pergunta</button>
            <button>Habilitar Modificações</button>
            <button>Desabilitar Pergunta</button>
            <button>Deletar Pergunta</button>
        </div>
    )
}