import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    localInfo: localStorage.getItem('localInfo') ? JSON.parse(localStorage.getItem('localInfo')) : null
}

const localSlice = createSlice({
    name: 'local',
    initialState,
    reducers:{
        setEnglish:(state,action)=>{
            state.localInfo = action;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        setNepali:(state,action)=>{
            state.localInfo = action;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
    },
});

export const {setEnglish,setNepali} = localSlice.actions;

export default localSlice.reducer;