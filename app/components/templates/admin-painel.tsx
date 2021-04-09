import ControlPainel from "@module/control-painel/main";
import { WindowPersistor, WindowStore } from "@redux/store/window";
import React from "react";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function AdminPainel () {
    return (
        <Provider store={WindowStore}>
            <PersistGate loading={null} persistor={WindowPersistor}>
                <ControlPainel></ControlPainel>
            </PersistGate>
        </Provider>
    )
}