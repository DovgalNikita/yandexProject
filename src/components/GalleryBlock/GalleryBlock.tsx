import styles from './GalleryBlock.module.scss';
import React, {FC, useRef, useEffect} from 'react';
import galleryImgMusician from '../../assets/images/galleryImgMusician.png';
import galleryImgParty from '../../assets/images/galleryImgParty.png';
import galleryImgBag from '../../assets/images/galleryImgBag.png';
import galleryImgFunnyPeople from '../../assets/images/galleryImgFunnyPeople.png';
import { useAppDispatch, useAppSelector} from '../../redux/hooks';
import classNames from 'classnames';
import palkiIcon from '../../assets/images/palkiIcon.png';
import geoIcon from '../../assets/images/geoIcon.png';
import coffeIcon from '../../assets/images/coffeIcon.png';
import { 
    setGalleryVisibleValue_block, 
    setGalleryVisibleValue_palkiIcon,
    setGalleryVisibleValue_geoIcon,
    setGalleryVisibleValue_coffeIcon

} from '../../redux/visibleSlice/visibleSliceValues';


const GalleryBlock : FC = () => {


    const dispatch = useAppDispatch();

    const block= useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        dispatch(setGalleryVisibleValue_block(block.current.offsetTop-window.innerHeight/1.25));
        dispatch(setGalleryVisibleValue_palkiIcon(block.current.offsetTop-window.innerHeight/1.3));
        dispatch(setGalleryVisibleValue_geoIcon(block.current.offsetTop-window.innerHeight/1.75));
        dispatch(setGalleryVisibleValue_coffeIcon(block.current.offsetTop-window.innerHeight/6));
    },[]);

    const GalleryVisible_block = useAppSelector(state=>state.visibleSlice.GalleryVisible_block);
    const GalleryVisible_palkiIcon =useAppSelector(state=>state.visibleSlice.GalleryVisible_palkiIcon);
    const GalleryVisible_geoIcon =useAppSelector(state=>state.visibleSlice.GalleryVisible_geoIcon);
    const GalleryVisible_coffeIcon =useAppSelector(state=>state.visibleSlice.GalleryVisible_coffeIcon);

    return(
        <div className={GalleryVisible_block? classNames(styles.block,styles.active):styles.block} ref={block}>
            <div className={styles.column}>
                <img src={galleryImgMusician} alt="" className={styles.img}/>
                <img src={galleryImgBag} alt="" className={styles.img}/>
                <img src={geoIcon} alt="" className={GalleryVisible_geoIcon?classNames(styles.geoIcon,styles.active):styles.geoIcon} /> : <img src={geoIcon} alt="" className={styles.geoIcon} />
            </div>
            <div className={styles.column}>
                <img src={galleryImgParty} alt="" className={styles.img}/>
                <img src={galleryImgFunnyPeople} alt="" className={styles.img}/>
                <img src={palkiIcon} alt="" className={GalleryVisible_palkiIcon?classNames(styles.palkiIcon,styles.active):styles.palkiIcon} />
                <img src={coffeIcon} alt="" className={GalleryVisible_coffeIcon?classNames(styles.coffeIcon,styles.active):styles.coffeIcon} />
            </div>
        </div>
    )
}

export default GalleryBlock;