import {pushH, inclast} from './counterSlice'export const dupHistory = () => async (dispatch: any, getState: any) => {    dispatch(pushH(getState().counter.history[0]))}export const inc = () => async (dispatch: any, getState: any) => {    dispatch(inclast())}