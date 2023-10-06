import React, {FC, useState} from 'react';
import styles from './GalleryScreen.module.scss';
import GalleryBlock from '../../components/GalleryBlock/GalleryBlock';
import classnames from 'classnames';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';


const GalleryScreen = () => {

    const GalleryVisible_title = useAppSelector(state=>state.visibleSlice.GalleryVisible_title);
    const GalleryVisible_caption = useAppSelector(state=>state.visibleSlice.GalleryVisible_caption);

    return(
        <div className={styles.screen}>
            <div className={GalleryVisible_title?classnames(styles.title,styles.active):styles.title}>Эксклюзивный доступ к событиям Самокатов</div>
            <p className={GalleryVisible_caption?classNames(styles.caption,styles.active):styles.caption}>
                С абонементом — у вас доступ <br />к специальным мероприятиям, <br />скидки и классный мерч. 
                В 2023 году <br /> мы танцевали на Даче Плюс <br /> с Антохой MC, катались на самокатах <br />с 
                Сергеем Мезенцевым и слушали хор <br />Attaque de Panique
            </p>
            <GalleryBlock />
        </div>
    )
}

export default GalleryScreen;