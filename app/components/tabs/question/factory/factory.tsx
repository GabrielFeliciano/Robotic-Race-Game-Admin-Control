import { TabNode } from "flexlayout-react";
import React from "react";

import style from './factory.module.scss';

import CreateQuestion from "../sidebar-control/actions/create-question";

export interface FactoryMap {
    [key: string]: (arg0: TabNode) => JSX.Element 
}

export function buildFactory (factoryMap: FactoryMap) {
    return (node: TabNode) => {
        const component = node.getComponent();
        const builder = factoryMap[component];
        if (builder) return builder(node);
    }
}

export default buildFactory;