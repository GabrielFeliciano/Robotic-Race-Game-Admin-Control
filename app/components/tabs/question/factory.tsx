import { TabNode } from "flexlayout-react";
import React from "react";

export interface FactoryMap {
    [key: string]: (arg0: TabNode) => JSX.Element 
}

const factoryMap: FactoryMap = {
    'button': (node) => <button>{node.getName()}</button>
}

export function buildFactory (factoryMap: FactoryMap) {
    return (node: TabNode) => {
        const component = node.getComponent();
        const builder = factoryMap[component];
        if (builder) return builder(node);
    }
}

// function factory (node: TabNode) {
//     const component = node.getComponent();
//     const builder = factoryMap[component];
//     if (builder) return builder(node);
// }

export default buildFactory;