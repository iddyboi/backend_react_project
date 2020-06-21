import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import logger from "redux-logger";

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
