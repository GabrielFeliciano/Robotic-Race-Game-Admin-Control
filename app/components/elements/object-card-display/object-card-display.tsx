import classNames from "classnames";
import { ComponentType, JSXElementConstructor } from "react";
import style from './object-card-display.module.scss';

interface CardProps {
    data: object
};

interface Props {
    card: ComponentType<CardProps>,
    mountCardsFrom: object[],
    extraData?: any,
    adicionalClassname?: string
};

export default function ObjectCardDisplay (props: Props) {
    return (
        <div className={style['object-card-display__container']} >
            <ul className={classNames(
                style['object-card-display'],
                props.adicionalClassname
            )
            } >{
                
                props.mountCardsFrom.map(
                    (aData, key) => <props.card data={aData} key={key} />
                )
    
            }</ul>
        </div>
    )
}