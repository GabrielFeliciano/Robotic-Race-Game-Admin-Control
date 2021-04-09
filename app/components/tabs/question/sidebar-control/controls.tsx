import { ButtonHTMLAttributes, Children, DetailedHTMLProps } from "react";
import FlexLayout from "flexlayout-react";
import { Control, Controls } from "./sidebar-control";

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ControlToMap {
    name: string,
    node: { [key: string ]: any },
    props?: ButtonPropsType
}

const controlsToMap: ControlToMap[] = [
    {
        name: 'Criar Pergunta',
        node: {
            type: "tab", 
            component: "CreateQuestion", 
            name: "Criar Pergunta",
        }
    }, {
        name: 'Modificar Pergunta',
        node: {
            type: "tab", 
            component: "grid", 
            name: "Modificar Pergunta"
        }
    }, {
        name: 'Habilitar Modificações',
        node: {
            type: "tab", 
            component: "grid", 
            name: "Habilitar Modificações"
        }
    }, {
        name: 'Desabilitar Pergunta',
        node: {
            type: "tab", 
            component: "grid", 
            name: "Desabilitar Pergunta"
        }
    }, {
        name: 'Deletar Pergunta',
        node: {
            type: "tab", 
            component: "grid", 
            name: "Deletar Pergunta"
        }
    }
]



export function buildControl (model) {
    function buildInterfaceForControl (node) {
        return () => {
            console.log('clicked')
            try {
                console.log('onclick')
                console.log(model)
                model.doAction(
                    FlexLayout.Actions.addNode(
                        {
                            ...node,
                            id: node.name
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

    const mapControl = (control: ControlToMap): Control => ({
        children: control.name,
        onClick: buildInterfaceForControl(control.node),
        key: control.node.name,
        ...(control.props || {})
    });

    return controlsToMap.map(mapControl);
}