import styles from './GalleryBlock.module.scss';
import React, {FC} from 'react';
import galleryImgMusician from '../../assets/images/galleryImgMusician.png';
import galleryImgParty from '../../assets/images/galleryImgParty.png';
import galleryImgBag from '../../assets/images/galleryImgBag.png';
import galleryImgFunnyPeople from '../../assets/images/galleryImgFunnyPeople.png';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';
import palkiIcon from '../../assets/images/palkiIcon.png';
import geoIcon from '../../assets/images/geoIcon.png';
import coffeIcon from '../../assets/images/coffeIcon.png';


const GalleryBlock : FC = () => {

    const GalleryVisible_block = useAppSelector(state=>state.visibleSlice.GalleryVisible_block);

    const GalleryVisible_palkiIcon =useAppSelector(state=>state.visibleSlice.GalleryVisible_palkiIcon);
    const GalleryVisible_geoIcon =useAppSelector(state=>state.visibleSlice.GalleryVisible_geoIcon);
    const GalleryVisible_coffeIcon =useAppSelector(state=>state.visibleSlice.GalleryVisible_coffeIcon);

    return(
        GalleryVisible_block
        ?
        <div className={classNames(styles.block,styles.active)}>
            <div className={styles.column}>
                <img src={galleryImgMusician} alt="" className={styles.img}/>
                <img src={galleryImgBag} alt="" className={styles.img}/>
                {GalleryVisible_geoIcon ? <img src={geoIcon} alt="" className={classNames(styles.geoIcon,styles.active)}/> : <img src={geoIcon} alt="" className={styles.geoIcon}/>}
            </div>
            <div className={styles.column}>
                <img src={galleryImgParty} alt="" className={styles.img}/>
                <img src={galleryImgFunnyPeople} alt="" className={styles.img}/>
                {GalleryVisible_palkiIcon ? <img src={palkiIcon} alt="" className={classNames(styles.palkiIcon,styles.active)}/> : <img src={palkiIcon} alt="" className={styles.palkiIcon}/>}
                {GalleryVisible_coffeIcon ? <img src={coffeIcon} alt="" className={classNames(styles.coffeIcon,styles.active)}/> : <img src={coffeIcon} alt="" className={styles.coffeIcon}/>}
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