import style from './action-wrapper.module.scss';

interface Props {
    children: React.ReactNode
}

export default function ActionWrapper (props) {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}