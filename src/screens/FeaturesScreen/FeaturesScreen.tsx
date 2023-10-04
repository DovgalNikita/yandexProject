import React, {FC} from 'react';
import styles from './FeaturesScreen.module.scss';
import FeaturesBlock from '../../components/FeaturesBlock/FeaturesBlock';

const FeaturesScreen = () => {
    return(
        <div className={styles.screen}>
            <div className={styles.title}>Вот что даёт участие в клубе</div>
            <FeaturesBlock />
        </div>
    )
}

export default FeaturesScreen;