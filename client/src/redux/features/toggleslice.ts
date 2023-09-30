import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditState {
	isEdited: boolean;
}

const editState: EditState = {
	isEdited: false,
};

export const edit = createSlice({
	name: "edit",
	initialState: editState,  // This is where you provide the initial state
	reducers: {
		toggleEdit: (state) => {
			state.isEdited = !state.isEdited;
		}
	},
});

export const { toggleEdit } = edit.actions;
export default edit.reducer;