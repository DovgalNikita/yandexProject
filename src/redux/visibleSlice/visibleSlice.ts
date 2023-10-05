import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
    FeaturesVisible_title: boolean
    FeaturesVisible_block: boolean,
    GalleryVisible_block: boolean,
    GalleryVisible_title: boolean,
    GalleryVisible_caption: boolean
}

const initialState: IInitialState = {
    FeaturesVisible_title: false,
    FeaturesVisible_block: false,
    GalleryVisible_title: false,
    GalleryVisible_block: false,
    GalleryVisible_caption: false
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
        GalleryVisible_title: (state,action:PayloadAction<boolean>) => {
            state.GalleryVisible_title = action.payload;
        },
        GalleryVisible_block: (state,action:PayloadAction<boolean>) => {
            state.GalleryVisible_block = action.payload;
        },
        GalleryVisible_caption: (state,action:PayloadAction<boolean>) => {
            state.GalleryVisible_caption = action.payload;
        }
    }
})

export const {
    setFeaturesVisibleTitle,
    setFeaturesVisibleBlock,
    GalleryVisible_title,
    GalleryVisible_block,
    GalleryVisible_caption
} = visibleSlice.actions;
export default visibleSlice.reducer;