import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        viedio:[],
        category:"All"
    },
    reducers:{
        togglemenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        setHomeviedio:(state,action)=>{
            state.viedio= action.payload;
        },
        setCategory:(state,action)=>{
            state.category= action.payload
        }
    },
})
export const {togglemenu,setCategory,setHomeviedio} = appSlice.actions;
export default appSlice.reducer;