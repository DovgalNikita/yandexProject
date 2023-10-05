import React, {FC, useState} from 'react';
import styles from './FeaturesScreen.module.scss';
import FeaturesBlock from '../../components/FeaturesBlock/FeaturesBlock';
import classNames from 'classnames';
import { useAppSelector } from '../../redux/hooks';

const FeaturesScreen = () => {

    const FeaturesVisible_title = useAppSelector(state=>state.visibleSlice.FeaturesVisible_title);


    return(
        <div className={styles.screen}>
            {FeaturesVisible_title ? <div className={classNames(styles.title,styles.active)}>Вот что даёт участие в клубе</div> : <div className={styles.title}>Вот что даёт участие в клубе</div>}
            <FeaturesBlock />
        </div>
    )
}

export default FeaturesScreen;