import { ComponentType, JSXElementConstructor } from "react";
import style from './object-card-display.module.scss';

interface CardProps {
    data: object
};

interface Props {
    card: ComponentType<CardProps>,
    mountCardsFrom: object[],
    extraData?: any
};

export default function ObjectCardDisplay (props: Props) {
    return (
        <div className={style['object-card-display__container']} >
            <ul className={style['object-card-display']} >{
                
                props.mountCardsFrom.map(
                    (aData, key) => <props.card data={aData} key={key} />
                )
    
            }</ul>
        </div>
    )
}