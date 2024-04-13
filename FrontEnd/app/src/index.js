import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { Provider } from "react-redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

import { reducers } from "./redux";
import AppContainer from "./components/App";

const persistConfig = {
    key: "root",
    storage
};

// Persist data to local storage when refreshing page
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
