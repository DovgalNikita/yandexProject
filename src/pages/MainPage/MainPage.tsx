import React from 'react';
import styles from './MainPage.module.scss';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';

const MainPage = () => {
    return(
        <main className={styles.main}>
            <WelcomeScreen />
        </main>
    )
}

export default MainPage;