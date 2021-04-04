import React, { Dispatch, useState } from 'react';
import Topbar from './topbar/topbar-window';
import style from './window.module.scss';

// interface State {
//     x: number,
//     y: number,
//     draggable: boolean
// }

// const defaultState: State = {
//     x: 0,
//     y: 0,
//     draggable: false
// }

// export default function WindowPopup () {
//     const [state, setState] = useState(defaultState);

//     function onMouseMove (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//         if (!state.draggable) return
//         setState({ ...state, x: event.clientX, y: event.clientY });
//         console.log('mouse')
//     }

//     function onMouseDown (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//         setState({ ...state, draggable: true });
//         console.log('down')
//     }

//     function onMouseUp (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//         setState({ ...state, draggable: false });
//         console.log('up')
//     }

//     return (
//         <div 
//         className={style.window}
//         onMouseMove={onMouseMove.bind(this)}
//         onMouseDown={onMouseDown.bind(this)}
//         onMouseUp={onMouseUp}
//         style={{
//             top: state.x, left: state.y
//         }}
//         >
//             <Topbar />
//             <h1>hello world</h1>
//         </div>
//     )
// }


export default class WindowPopup extends React.Component {
    draggable: boolean = false;
    x: number; 
    y: number;

    constructor (props) {
        super(props);
    }

    onMouseMove (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        console.log('move')
        if (!this.draggable) return;
        this.x = event.clientX;
        this.y = event.clientY;
    }

    onMouseDown (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.draggable = true;
        console.log('down')
    }

    onMouseUp (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.draggable = false;
        console.log('up')
    }

    render () {
        return (
            <div 
            className={style.window}
            onMouseMove={this.onMouseMove.bind(this)}
            onMouseDown={this.onMouseDown.bind(this)}
            onMouseUp={this.onMouseUp.bind(this)}
            style={{
                top: this.x, left: this.y
            }}
            >
                <Topbar />
                <h1>hello world</h1>
            </div>
        )   
    }
}