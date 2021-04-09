import { WindowReducerActionsTypes } from "@redux/reducers/window";
import { Model } from "flexlayout-react";

export function saveWindowModel (model: Model) {
    return {
        type: WindowReducerActionsTypes.saveModel,
        payload: model
    }
}