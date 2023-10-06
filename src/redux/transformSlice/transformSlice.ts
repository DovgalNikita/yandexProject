import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
    GalleryTransform_block: boolean,
}

const initialState: IInitialState = {
    GalleryTransform_block: false,
}

export const transformSlice = createSlice({
    name:"transform components",
    initialState,
    reducers:{
        setGalleryTransform_block: (state,action:PayloadAction<boolean>) => {
            state.GalleryTransform_block = action.payload;
        }
    }
})

export const {
    setGalleryTransform_block,
} = transformSlice.actions;
export default transformSlice.reducer;