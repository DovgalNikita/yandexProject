import React from 'react';
import styles from './MainPage.module.scss';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import FeaturesScreen from '../../screens/FeaturesScreen/FeaturesScreen';

const MainPage = () => {
    return(
        <main className={styles.main}>
            <WelcomeScreen />
            <FeaturesScreen />
        </main>
    )
}

export default MainPage;