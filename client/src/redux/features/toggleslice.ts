import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface EditState {
	isEnglish: boolean;
}

const editState: EditState = {
	isEnglish: true,
};

export const editSlice = createSlice({
	name: "edit",
	initialState: editState,  // This is where you provide the initial state
	reducers: {
		toggleEdit: (state, actions) => {
			state.isEnglish = !state.isEnglish;
		}
	},
});

// Action creators are generated for each case reducer function
export const { toggleEdit } = editSlice.actions;

export const editReducer = editSlice.reducer;