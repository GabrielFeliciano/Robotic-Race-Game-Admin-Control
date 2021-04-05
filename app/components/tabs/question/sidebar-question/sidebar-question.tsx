import classNames from 'classnames';
import { getNodeAtPath, getPathToCorner, MosaicContext } from 'react-mosaic-component';
import style from './sidebar-question.module.scss'

interface SidebarQuestionProps {
    orientation?: 'right' | 'left'
}

const defaultProps: SidebarQuestionProps = {
    orientation: undefined
}

export default function SidebarQuestion (props: SidebarQuestionProps) {
    const options = {...defaultProps, ...props}

    const classNameSidebar = classNames(
        style.sidebar,
        style[options.orientation]
    );

    console.log(MosaicContext)

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