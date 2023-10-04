import React from 'react';
import styles from './MainPage.module.scss';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import FeaturesScreen from '../../screens/FeaturesScreen/FeaturesScreen';
import GalleryScreen from '../../screens/GalleryScreen/GalleryScreen';

const MainPage = () => {
    return(
        <main className={styles.main}>
            <WelcomeScreen />
            <FeaturesScreen />
            <GalleryScreen />
        </main>
    )
}

export default MainPage;