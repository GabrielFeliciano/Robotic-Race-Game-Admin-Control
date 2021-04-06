import classNames from 'classnames';
import { useContext } from 'react';
import { FlexLayoutContext } from '../question-window';
import FlexLayout from "flexlayout-react";
import style from './sidebar-question.module.scss'


interface SidebarQuestionProps {
    orientation?: 'right' | 'left'
}

const defaultProps: SidebarQuestionProps = {
    orientation: undefined
}

export default function SidebarQuestion (props: SidebarQuestionProps) {
    const options = {...defaultProps, ...props}

    const model = useContext(FlexLayoutContext)

    const classNameSidebar = classNames(
        style.sidebar,
        style[options.orientation]
    );

    return (
        <div className={classNameSidebar}>
            <button
            onClick={
                (event) => {
                    console.log('clicked')
                    try {
                        model.doAction(
                            FlexLayout.Actions.addNode(
                                {
                                    type: "tab", 
                                    component: "grid", 
                                    name: "Criar Pergunta",
                                    id: "Criar Pergunta"
                                    // floating: true
                                },
                                "border_bottom", 
                                FlexLayout.DockLocation.BOTTOM, 
                                -1
                            )
                        )
                    } catch (exception) {
                        console.log('janela já está aberta')
                    }
                }
            }
            >Criar Pergunta</button>
            <button>Modificar Pergunta</button>
            <button>Habilitar Modificações</button>
            <button>Desabilitar Pergunta</button>
            <button>Deletar Pergunta</button>
        </div>
    )
}