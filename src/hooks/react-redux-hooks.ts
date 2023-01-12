import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {AppStateType} from "../redux/Redux-store";
import {ActionType} from "../redux/AppNoteReducer";

export const useAppDispatch : () => ThunkDispatch<AppStateType, any, ActionType> = useDispatch