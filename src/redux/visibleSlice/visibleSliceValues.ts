import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
    FeaturesVisibleValue_title: number
    FeaturesVisibleValue_block: number,

    GalleryVisibleValue_block: number,
    GalleryVisibleValue_title: number,
    GalleryVisibleValue_caption: number,
    GalleryVisibleValue_palkiIcon: number,
    GalleryVisibleValue_geoIcon: number,
    GalleryVisibleValue_coffeIcon: number,

    SubcriptionVisibleValue_title: number,
    SubcriptionVisibleValue_caption: number,
    SubcriptionVisibleValue_block: number,
    SubcriptionVisibleValue_iconPlus: number,


    LastScreenVisibleValue_block: number,
    LastScreenVisibleValue_title: number,
    LastScreenVisibleValue_caption: number,
    LastScreenVisibleValue_button: number,
}

const initialState: IInitialState = {
    FeaturesVisibleValue_title: 0,
    FeaturesVisibleValue_block: 0,

    GalleryVisibleValue_title: 0,
    GalleryVisibleValue_block: 0,
    GalleryVisibleValue_caption: 0,
    GalleryVisibleValue_palkiIcon: 0,
    GalleryVisibleValue_geoIcon: 0,
    GalleryVisibleValue_coffeIcon: 0,

    SubcriptionVisibleValue_title: 0,
    SubcriptionVisibleValue_caption: 0,
    SubcriptionVisibleValue_block: 0,
    SubcriptionVisibleValue_iconPlus: 0,

    LastScreenVisibleValue_block: 0,
    LastScreenVisibleValue_title: 0,
    LastScreenVisibleValue_caption: 0,
    LastScreenVisibleValue_button: 0,
}

export const visibleSliceValues = createSlice({
    name:"visible components",
    initialState,
    reducers:{
        setFeaturesVisibleValue_title: (state,action:PayloadAction<number>) => {
            state.FeaturesVisibleValue_title = action.payload;
        },
        setFeaturesVisibleValue_block: (state,action:PayloadAction<number>) => {
            state.FeaturesVisibleValue_block = action.payload;
        },

        
        setGalleryVisibleValue_title: (state,action:PayloadAction<number>) => {
            state.GalleryVisibleValue_title = action.payload;
        },
        setGalleryVisibleValue_block: (state,action:PayloadAction<number>) => {
            state.GalleryVisibleValue_block = action.payload;
        },
        setGalleryVisibleValue_caption: (state,action:PayloadAction<number>) => {
            state.GalleryVisibleValue_caption = action.payload;
        },
        setGalleryVisibleValue_palkiIcon: (state,action:PayloadAction<number>) => {
            state.GalleryVisibleValue_palkiIcon = action.payload;
        },
        setGalleryVisibleValue_geoIcon: (state,action:PayloadAction<number>) => {
            state.GalleryVisibleValue_geoIcon = action.payload;
        },
        setGalleryVisibleValue_coffeIcon: (state,action:PayloadAction<number>) => {
            state.GalleryVisibleValue_coffeIcon = action.payload;
        },


        setSubcriptionVisibleValue_title: (state,action:PayloadAction<number>) => {
            state.SubcriptionVisibleValue_title = action.payload;
        },
        setSubcriptionVisibleValue_caption: (state,action:PayloadAction<number>) => {
            state.SubcriptionVisibleValue_caption = action.payload;
        },
        setSubcriptionVisibleValue_block: (state,action:PayloadAction<number>) => {
            state.SubcriptionVisibleValue_block = action.payload;
        },
        setSubcriptionVisibleValue_iconPlus: (state,action:PayloadAction<number>) => {
            state.SubcriptionVisibleValue_iconPlus = action.payload;
        },

        setLastScreenVisibleValue_block: (state,action:PayloadAction<number>) => {
            state.LastScreenVisibleValue_block = action.payload;
        },
        setLastScreenVisibleValue_title: (state,action:PayloadAction<number>) => {
            state.LastScreenVisibleValue_title = action.payload;
        },
        setLastScreenVisibleValue_caption: (state,action:PayloadAction<number>) => {
            state.LastScreenVisibleValue_caption = action.payload;
        },
        setLastScreenVisibleValue_button: (state,action:PayloadAction<number>) => {
            state.LastScreenVisibleValue_button = action.payload;
        }
    }
})

export const {
    setFeaturesVisibleValue_title,
    setFeaturesVisibleValue_block,

    setGalleryVisibleValue_title,
    setGalleryVisibleValue_block,
    setGalleryVisibleValue_caption,
    setGalleryVisibleValue_palkiIcon,
    setGalleryVisibleValue_geoIcon,
    setGalleryVisibleValue_coffeIcon,

    setSubcriptionVisibleValue_title,
    setSubcriptionVisibleValue_caption,
    setSubcriptionVisibleValue_block,
    setSubcriptionVisibleValue_iconPlus,

    setLastScreenVisibleValue_block,
    setLastScreenVisibleValue_title,
    setLastScreenVisibleValue_caption,
    setLastScreenVisibleValue_button,

} = visibleSliceValues.actions;
export default visibleSliceValues.reducer;