import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {ActionType} from "../redux/appNoteReducer";

export const useAppDispatch : () => ThunkDispatch<AppStateType, any, ActionType> = useDispatch