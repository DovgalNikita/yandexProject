import React, {FC, useState} from 'react';
import styles from './FeaturesScreen.module.scss';
import FeaturesBlock from '../../components/FeaturesBlock/FeaturesBlock';
import classNames from 'classnames';
import { useAppSelector } from '../../redux/hooks';

const FeaturesScreen = () => {

    const FeaturesVisible_title = useAppSelector(state=>state.visibleSlice.FeaturesVisible_title);


    return(
        <div className={styles.screen}>
            <div className={FeaturesVisible_title?classNames(styles.title,styles.active):styles.title}>Вот что даёт участие в клубе</div>
            <FeaturesBlock />
        </div>
    )
}

export default FeaturesScreen;