import React from 'react';
import styles from './MainPage.module.scss';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import FeaturesScreen from '../../screens/FeaturesScreen/FeaturesScreen';
import GalleryScreen from '../../screens/GalleryScreen/GalleryScreen';
import {setFeaturesVisibleTitle,setFeaturesVisibleBlock,GalleryVisible_block} from '../../redux/visibleSlice/visibleSlice';
import { useAppDispatch } from '../../redux/hooks';

const MainPage = () => {

    const dispatch = useAppDispatch();

    document.addEventListener('scroll', ()=>{
        window.pageYOffset > 200 ? dispatch(setFeaturesVisibleTitle(true)) : dispatch(setFeaturesVisibleTitle(false));
        window.pageYOffset > 300 ? dispatch(setFeaturesVisibleBlock(true)) : dispatch(setFeaturesVisibleBlock(false));
        window.pageYOffset > 1000 ? dispatch(GalleryVisible_block(true)) : dispatch(GalleryVisible_block(false));
    })

    return(
        <main className={styles.main}>
            <WelcomeScreen />
            <FeaturesScreen />
            <GalleryScreen />
        </main>
    )
}

export default MainPage;