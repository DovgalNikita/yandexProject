import styles from './GalleryBlock.module.scss';
import React, {FC} from 'react';
import galleryImgMusician from '../../assets/images/galleryImgMusician.png';
import galleryImgParty from '../../assets/images/galleryImgParty.png';
import galleryImgBag from '../../assets/images/galleryImgBag.png';
import galleryImgFunnyPeople from '../../assets/images/galleryImgFunnyPeople.png';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames'

const GalleryBlock : FC = () => {

    const GalleryVisible_block = useAppSelector(state=>state.visibleSlice.GalleryVisible_block);

    return(
        GalleryVisible_block
        ?
        <div className={classNames(styles.block,styles.active)}>
            <div className={styles.column}>
                <img src={galleryImgMusician} alt="" className={styles.img}/>
                <img src={galleryImgBag} alt="" className={styles.img}/>
            </div>
            <div className={styles.column}>
                <img src={galleryImgParty} alt="" className={styles.img}/>
                <img src={galleryImgFunnyPeople} alt="" className={styles.img}/>
            </div>
        </div>
        :
        <div className={styles.block}>
            <div className={styles.column}>
                <img src={galleryImgMusician} alt="" className={styles.img}/>
                <img src={galleryImgBag} alt="" className={styles.img}/>
            </div>
            <div className={styles.column}>
                <img src={galleryImgParty} alt="" className={styles.img}/>
                <img src={galleryImgFunnyPeople} alt="" className={styles.img}/>
            </div>
        </div>
    )
}

export default GalleryBlock;