import React, {FC, useRef, useEffect} from 'react';
import styles from './FeaturesScreen.module.scss';
import FeaturesBlock from '../../components/FeaturesBlock/FeaturesBlock';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFeaturesVisibleValue_title } from '../../redux/visibleSlice/visibleSliceValues';

const FeaturesScreen = () => {


    const dispatch = useAppDispatch();
    const FeaturesVisible_title = useAppSelector(state=>state.visibleSlice.FeaturesVisible_title);

    const title= useRef() as React.MutableRefObject<HTMLInputElement>;
    useEffect(()=>{
        dispatch(setFeaturesVisibleValue_title(title.current.offsetTop - window.innerHeight/1.25));
    },[]);

    return(
        <div className={styles.screen}>
            <div className={FeaturesVisible_title?classNames(styles.title,styles.active):styles.title} ref={title}>Вот что даёт участие в клубе</div>
            <FeaturesBlock />
        </div>
    )
}

export default FeaturesScreen;