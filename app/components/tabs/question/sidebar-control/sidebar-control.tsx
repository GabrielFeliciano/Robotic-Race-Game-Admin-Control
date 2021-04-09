import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, useContext } from 'react';
import { FlexLayoutContext } from '../question-window';
import FlexLayout from "flexlayout-react";
import style from './sidebar-control.module.scss'

export type Control = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type Controls = Control[];

interface SidebarQuestionProps {
    orientation?: 'right' | 'left',
    controls: Controls
}

const defaultProps: SidebarQuestionProps = {
    orientation: undefined,
    controls: []
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
            {
                options.controls.map(control => <button {...control} />)
            }
        </div>
    )
}