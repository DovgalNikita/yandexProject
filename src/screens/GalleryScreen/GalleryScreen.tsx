import React, {FC, useState} from 'react';
import styles from './GalleryScreen.module.scss';
import GalleryBlock from '../../components/GalleryBlock/GalleryBlock';
import classnames from 'classnames';


const GalleryScreen = () => {



    return(
        <div className={styles.screen}>
            <div className={classnames(styles.title,styles.active)}>Эксклюзивный доступ к событиям Самокатов</div>
            <p className={styles.caption}>
                С абонементом — у вас доступ <br />к специальным мероприятиям, <br />скидки и классный мерч. 
                В 2023 году <br /> мы танцевали на Даче Плюс <br /> с Антохой MC, катались на самокатах <br />с 
                Сергеем Мезенцевым и слушали хор <br />Attaque de Panique
            </p>
            <GalleryBlock />
        </div>
    )
}

export default GalleryScreen;