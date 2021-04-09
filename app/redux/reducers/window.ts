// import { clickReducer } from './clickReducer';
// import { OtherReducer } from './otherReducer';

import { Action } from '@redux/types/action';
import { Model } from 'flexlayout-react';

export interface WindowReducerState {
    model: Model
}

export enum WindowReducerActionsTypes {
    saveModel
}

const defaultState: WindowReducerState = {
    model: null
}

export const WindowReducer = (
    state: WindowReducerState, 
    action: Action<WindowReducerActionsTypes>
): WindowReducerState => {
    switch (action.type) {
        case (WindowReducerActionsTypes.saveModel): {
            return {
                ...state,
                model: action.payload
            }
        }

        default: { return { ...state } }
    }
}