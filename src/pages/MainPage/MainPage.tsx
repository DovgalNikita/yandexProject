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
import { useAppDispatch } from '../../redux/hooks';

const MainPage = () => {

    const dispatch = useAppDispatch();


    document.addEventListener('scroll', ()=>{
        window.pageYOffset > 200 ? dispatch(setFeaturesVisibleTitle(true)) : dispatch(setFeaturesVisibleTitle(false));
        window.pageYOffset > 300 ? dispatch(setFeaturesVisibleBlock(true)) : dispatch(setFeaturesVisibleBlock(false));

        window.pageYOffset > 700 ? dispatch(GalleryVisible_title(true)) : dispatch(GalleryVisible_title(false));
        window.pageYOffset > 800 ? dispatch(GalleryVisible_caption(true)) : dispatch(GalleryVisible_caption(false));
        window.pageYOffset > 1000 ? dispatch(GalleryVisible_block(true)) : dispatch(GalleryVisible_block(false));
        window.pageYOffset > 1000 ? dispatch(GalleryVisible_block(true)) : dispatch(GalleryVisible_block(false));
        window.pageYOffset > 1000 ? dispatch(GalleryVisible_block(true)) : dispatch(GalleryVisible_block(false));
        window.pageYOffset > 1000 ? dispatch(GalleryVisible_block(true)) : dispatch(GalleryVisible_block(false));
        window.pageYOffset > 1100 ? dispatch(setGalleryVisible_palkiIcon(true)) : dispatch(setGalleryVisible_palkiIcon(false));
        window.pageYOffset > 1200 ? dispatch(setGalleryVisible_geoIcon(true)) : dispatch(setGalleryVisible_geoIcon(false));
        window.pageYOffset > 1700 ? dispatch(setGalleryVisible_coffeIcon(true)) : dispatch(setGalleryVisible_coffeIcon(false));


        window.pageYOffset > 2300 ? dispatch(setSubcriptionVisible_title(true)) : dispatch(setSubcriptionVisible_title(false));
        window.pageYOffset > 2300 ? dispatch(setSubcriptionVisible_block(true)) : dispatch(setSubcriptionVisible_block(false));
        window.pageYOffset > 2450 ? dispatch(setSubcriptionVisible_caption(true)) : dispatch(setSubcriptionVisible_caption(false));
        window.pageYOffset > 2500 ? dispatch(setSubcriptionVisible_iconPlus(true)) : dispatch(setSubcriptionVisible_iconPlus(false));

        window.pageYOffset > 2850 ? dispatch(setLastScreenVisible_block(true)) : dispatch(setLastScreenVisible_block(false));
        window.pageYOffset > 2850 ? dispatch(setLastScreenVisible_title(true)) : dispatch(setLastScreenVisible_title(false));
        window.pageYOffset > 3100 ? dispatch(setLastScreenVisible_caption(true)) : dispatch(setLastScreenVisible_caption(false));
        window.pageYOffset > 3200 ? dispatch(setLastScreenVisible_button(true)) : dispatch(setLastScreenVisible_button(false));

        window.pageYOffset > 1500 ? dispatch(setGalleryTransform_block(true)) : dispatch(setGalleryTransform_block(false));
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