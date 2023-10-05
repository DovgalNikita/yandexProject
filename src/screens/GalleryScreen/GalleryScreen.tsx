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
            {GalleryVisible_title ? <div className={classnames(styles.title,styles.active)}>Эксклюзивный доступ к событиям Самокатов</div> : <div className={styles.title}>Эксклюзивный доступ к событиям Самокатов</div>}
            {GalleryVisible_caption
                ?<p className={classNames(styles.caption,styles.active)}>
                    С абонементом — у вас доступ <br />к специальным мероприятиям, <br />скидки и классный мерч. 
                    В 2023 году <br /> мы танцевали на Даче Плюс <br /> с Антохой MC, катались на самокатах <br />с 
                    Сергеем Мезенцевым и слушали хор <br />Attaque de Panique
                </p>
                :<p className={styles.caption}>
                    С абонементом — у вас доступ <br />к специальным мероприятиям, <br />скидки и классный мерч. 
                    В 2023 году <br /> мы танцевали на Даче Плюс <br /> с Антохой MC, катались на самокатах <br />с 
                    Сергеем Мезенцевым и слушали хор <br />Attaque de Panique
                </p>
            }
            <GalleryBlock />
        </div>
    )
}

export default GalleryScreen;