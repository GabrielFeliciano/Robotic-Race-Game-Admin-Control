import { createStore } from 'redux';
import { WindowReducer, WindowReducerState } from '@redux/reducers/window';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistWindowConfig = {
    key: 'window',
    storage,
};

const persistedReducerWindow = persistReducer<WindowReducerState>(persistWindowConfig, WindowReducer);

export const WindowStore = createStore(
    persistedReducerWindow,
    // window.__REDUX_DEVTOOLS_EXTENSION__();
);
WindowStore.subscribe(() => {
    console.log('Store changed');
    console.log(WindowStore.getState());
})

export const WindowPersistor = persistStore(WindowStore);