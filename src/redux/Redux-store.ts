import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {appNoteReducer} from "./AppNoteReducer";
import thunk from "redux-thunk";

export let rootReducer = combineReducers({
    dataNotes: appNoteReducer
})

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>