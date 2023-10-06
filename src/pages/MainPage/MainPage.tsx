import React from 'react';
import styles from './MainPage.module.scss';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import FeaturesScreen from '../../screens/FeaturesScreen/FeaturesScreen';
import GalleryScreen from '../../screens/GalleryScreen/GalleryScreen';
import SubscriptionScreen from '../../screens/SubscriptionScreen/SubscriptionScreen';
import LastScreen from '../../screens/LastScreen/LastScreen';
import FooterScreen from '../../screens/FooterScreen/FooterScreen';
import {
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
} from '../../redux/visibleSlice/visibleSlice';
import { setGalleryTransform_block } from '../../redux/transformSlice/transformSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const MainPage = () => {

    const dispatch = useAppDispatch();

    const FeaturesVisibleValue_title = useAppSelector(state=>state.visibleSliceValues.FeaturesVisibleValue_title);
    const FeaturesVisibleValue_block = useAppSelector(state=>state.visibleSliceValues.FeaturesVisibleValue_block);
    const GalleryVisibleValue_block = useAppSelector(state=>state.visibleSliceValues.GalleryVisibleValue_block);
    const GalleryVisibleValue_title = useAppSelector(state=>state.visibleSliceValues.GalleryVisibleValue_title);
    const GalleryVisibleValue_caption = useAppSelector(state=>state.visibleSliceValues.GalleryVisibleValue_caption);
    const GalleryVisibleValue_palkiIcon = useAppSelector(state=>state.visibleSliceValues.GalleryVisibleValue_palkiIcon);
    const GalleryVisibleValue_geoIcon = useAppSelector(state=>state.visibleSliceValues.GalleryVisibleValue_geoIcon);
    const GalleryVisibleValue_coffeIcon = useAppSelector(state=>state.visibleSliceValues.GalleryVisibleValue_coffeIcon);
    const SubcriptionVisibleValue_title = useAppSelector(state=>state.visibleSliceValues.SubcriptionVisibleValue_title);
    const SubcriptionVisibleValue_caption = useAppSelector(state=>state.visibleSliceValues.SubcriptionVisibleValue_caption);
    const SubcriptionVisibleValue_block = useAppSelector(state=>state.visibleSliceValues.SubcriptionVisibleValue_block);
    const SubcriptionVisibleValue_iconPlus = useAppSelector(state=>state.visibleSliceValues.SubcriptionVisibleValue_iconPlus);
    const LastScreenVisibleValue_block = useAppSelector(state=>state.visibleSliceValues.LastScreenVisibleValue_block);
    const LastScreenVisibleValue_title = useAppSelector(state=>state.visibleSliceValues.LastScreenVisibleValue_title);
    const LastScreenVisibleValue_caption = useAppSelector(state=>state.visibleSliceValues.LastScreenVisibleValue_caption);
    const LastScreenVisibleValue_button = useAppSelector(state=>state.visibleSliceValues.LastScreenVisibleValue_button);

    document.addEventListener('scroll', ()=>{
        window.pageYOffset > FeaturesVisibleValue_title ? dispatch(setFeaturesVisibleTitle(true)) : dispatch(setFeaturesVisibleTitle(false));
        window.pageYOffset > FeaturesVisibleValue_block ? dispatch(setFeaturesVisibleBlock(true)) : dispatch(setFeaturesVisibleBlock(false));

        window.pageYOffset > GalleryVisibleValue_title ? dispatch(GalleryVisible_title(true)) : dispatch(GalleryVisible_title(false));
        window.pageYOffset > GalleryVisibleValue_caption ? dispatch(GalleryVisible_caption(true)) : dispatch(GalleryVisible_caption(false));
        window.pageYOffset > GalleryVisibleValue_block ? dispatch(GalleryVisible_block(true)) : dispatch(GalleryVisible_block(false));
        window.pageYOffset > GalleryVisibleValue_palkiIcon ? dispatch(setGalleryVisible_palkiIcon(true)) : dispatch(setGalleryVisible_palkiIcon(false));
        window.pageYOffset > GalleryVisibleValue_geoIcon ? dispatch(setGalleryVisible_geoIcon(true)) : dispatch(setGalleryVisible_geoIcon(false));
        window.pageYOffset > GalleryVisibleValue_coffeIcon ? dispatch(setGalleryVisible_coffeIcon(true)) : dispatch(setGalleryVisible_coffeIcon(false));


        window.pageYOffset > SubcriptionVisibleValue_title ? dispatch(setSubcriptionVisible_title(true)) : dispatch(setSubcriptionVisible_title(false));
        window.pageYOffset > SubcriptionVisibleValue_block ? dispatch(setSubcriptionVisible_block(true)) : dispatch(setSubcriptionVisible_block(false));
        window.pageYOffset > SubcriptionVisibleValue_caption ? dispatch(setSubcriptionVisible_caption(true)) : dispatch(setSubcriptionVisible_caption(false));
        window.pageYOffset > SubcriptionVisibleValue_iconPlus ? dispatch(setSubcriptionVisible_iconPlus(true)) : dispatch(setSubcriptionVisible_iconPlus(false));

        window.pageYOffset > LastScreenVisibleValue_block ? dispatch(setLastScreenVisible_block(true)) : dispatch(setLastScreenVisible_block(false));
        window.pageYOffset > LastScreenVisibleValue_title ? dispatch(setLastScreenVisible_title(true)) : dispatch(setLastScreenVisible_title(false));
        window.pageYOffset > LastScreenVisibleValue_caption ? dispatch(setLastScreenVisible_caption(true)) : dispatch(setLastScreenVisible_caption(false));
        window.pageYOffset > LastScreenVisibleValue_button ? dispatch(setLastScreenVisible_button(true)) : dispatch(setLastScreenVisible_button(false));

        // window.pageYOffset > 1500 ? dispatch(setGalleryTransform_block(true)) : dispatch(setGalleryTransform_block(false));
    });

    return(
        <main className={styles.main}>
            <WelcomeScreen />
            <FeaturesScreen />
            <GalleryScreen />
            <SubscriptionScreen />
            <LastScreen />
            <FooterScreen />
        </main>
    )
}

export default MainPage;