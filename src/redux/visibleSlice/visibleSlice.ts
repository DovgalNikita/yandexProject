import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
    FeaturesVisible_title: boolean
    FeaturesVisible_block: boolean,
    GalleryVisible_block: boolean,
}

const initialState: IInitialState = {
    FeaturesVisible_title: false,
    FeaturesVisible_block: false,
    GalleryVisible_block: false,
}

export const visibleSlice = createSlice({
    name:"visible components",
    initialState,
    reducers:{
        setFeaturesVisibleTitle: (state,action:PayloadAction<boolean>) => {
            state.FeaturesVisible_title = action.payload;
        },
        setFeaturesVisibleBlock: (state,action:PayloadAction<boolean>) => {
            state.FeaturesVisible_block = action.payload;
        },
        GalleryVisible_block: (state,action:PayloadAction<boolean>) => {
            state.GalleryVisible_block = action.payload;
        }
    }
})

export const {setFeaturesVisibleTitle,setFeaturesVisibleBlock,GalleryVisible_block} = visibleSlice.actions;
export default visibleSlice.reducer;