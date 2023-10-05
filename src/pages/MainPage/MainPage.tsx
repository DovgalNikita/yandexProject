import React from 'react';
import styles from './MainPage.module.scss';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import FeaturesScreen from '../../screens/FeaturesScreen/FeaturesScreen';
import GalleryScreen from '../../screens/GalleryScreen/GalleryScreen';
import SubscriptionScreen from '../../screens/SubscriptionScreen/SubscriptionScreen';
import {setFeaturesVisibleTitle,setFeaturesVisibleBlock,GalleryVisible_title,GalleryVisible_block,GalleryVisible_caption} from '../../redux/visibleSlice/visibleSlice';
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
        window.pageYOffset > 1500 ? dispatch(setGalleryTransform_block(true)) : dispatch(setGalleryTransform_block(false));
    })

    return(
        <main className={styles.main}>
            <WelcomeScreen />
            <FeaturesScreen />
            <GalleryScreen />
            <SubscriptionScreen />
        </main>
    )
}

export default MainPage;