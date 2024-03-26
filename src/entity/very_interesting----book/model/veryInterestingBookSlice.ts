import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {VeryInterestingBookModel} from "./types";

const initialState: VeryInterestingBookModel = {
    error: null,
    isLoading: false,
}

const veryInterestingBookSlice = createSlice({
    name: 'veryInterestingBook',
    initialState,
    reducers: {

    },
})

export const {actions: veryInterestingBookActions} = veryInterestingBookSlice
export const {reducer: veryInterestingBookReducer} = veryInterestingBookSlice