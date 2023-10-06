import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
    FeaturesVisible_title: boolean
    FeaturesVisible_block: boolean,

    GalleryVisible_block: boolean,
    GalleryVisible_title: boolean,
    GalleryVisible_caption: boolean,
    GalleryVisible_palkiIcon: boolean,
    GalleryVisible_geoIcon: boolean,
    GalleryVisible_coffeIcon: boolean,

    SubcriptionVisible_title: boolean,
    SubcriptionVisible_caption: boolean,
    SubcriptionVisible_block: boolean,
    SubcriptionVisible_iconPlus: boolean,


    LastScreenVisible_block: boolean,
    LastScreenVisible_title: boolean,
    LastScreenVisible_caption: boolean,
    LastScreenVisible_button: boolean,
}

const initialState: IInitialState = {
    FeaturesVisible_title: false,
    FeaturesVisible_block: false,

    GalleryVisible_title: false,
    GalleryVisible_block: false,
    GalleryVisible_caption: false,
    GalleryVisible_palkiIcon: false,
    GalleryVisible_geoIcon: false,
    GalleryVisible_coffeIcon: false,

    SubcriptionVisible_title: false,
    SubcriptionVisible_caption: false,
    SubcriptionVisible_block: false,
    SubcriptionVisible_iconPlus: false,

    LastScreenVisible_block: false,
    LastScreenVisible_title: false,
    LastScreenVisible_caption: false,
    LastScreenVisible_button: false,
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
        },
        setGalleryVisible_palkiIcon: (state,action:PayloadAction<boolean>) => {
            state.GalleryVisible_palkiIcon = action.payload;
        },
        setGalleryVisible_geoIcon: (state,action:PayloadAction<boolean>) => {
            state.GalleryVisible_geoIcon = action.payload;
        },
        setGalleryVisible_coffeIcon: (state,action:PayloadAction<boolean>) => {
            state.GalleryVisible_coffeIcon = action.payload;
        },


        setSubcriptionVisible_title: (state,action:PayloadAction<boolean>) => {
            state.SubcriptionVisible_title = action.payload;
        },
        setSubcriptionVisible_caption: (state,action:PayloadAction<boolean>) => {
            state.SubcriptionVisible_caption = action.payload;
        },
        setSubcriptionVisible_block: (state,action:PayloadAction<boolean>) => {
            state.SubcriptionVisible_block = action.payload;
        },
        setSubcriptionVisible_iconPlus: (state,action:PayloadAction<boolean>) => {
            state.SubcriptionVisible_iconPlus = action.payload;
        },

        setLastScreenVisible_block: (state,action:PayloadAction<boolean>) => {
            state.LastScreenVisible_block = action.payload;
        },
        setLastScreenVisible_title: (state,action:PayloadAction<boolean>) => {
            state.LastScreenVisible_title = action.payload;
        },
        setLastScreenVisible_caption: (state,action:PayloadAction<boolean>) => {
            state.LastScreenVisible_caption = action.payload;
        },
        setLastScreenVisible_button: (state,action:PayloadAction<boolean>) => {
            state.LastScreenVisible_button = action.payload;
        }
    }
})

export const {
    setFeaturesVisibleTitle,
    setFeaturesVisibleBlock,

    GalleryVisible_title,
    GalleryVisible_block,
    GalleryVisible_caption,
    setGalleryVisible_palkiIcon,
    setGalleryVisible_geoIcon,
    setGalleryVisible_coffeIcon,

    setSubcriptionVisible_title,
    setSubcriptionVisible_caption,
    setSubcriptionVisible_block,
    setSubcriptionVisible_iconPlus,

    setLastScreenVisible_block,
    setLastScreenVisible_title,
    setLastScreenVisible_caption,
    setLastScreenVisible_button,

} = visibleSlice.actions;
export default visibleSlice.reducer;