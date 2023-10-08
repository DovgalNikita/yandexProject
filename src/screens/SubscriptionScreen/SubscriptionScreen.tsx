import React, {FC, useRef, useEffect} from 'react';
import styles from './SubscriptionScreen.module.scss';
import scooterSubscription from '../../assets/images/scooterSubscription.png';
import plusIcon from '../../assets/images/plusIcon.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';
import { setSubcriptionVisibleValue_block, setSubcriptionVisibleValue_caption, setSubcriptionVisibleValue_iconPlus, setSubcriptionVisibleValue_title } from '../../redux/visibleSlice/visibleSliceValues';


const SubscriptionScreen: FC = () => {


    const dispatch = useAppDispatch();

    const title= useRef() as React.MutableRefObject<HTMLDivElement>;
    const caption= useRef() as React.MutableRefObject<HTMLDivElement>;
    const imgBlock= useRef() as React.MutableRefObject<HTMLDivElement>;
    
    useEffect(()=>{
        dispatch(setSubcriptionVisibleValue_title(title.current.offsetTop - window.innerHeight/1.25));
        dispatch(setSubcriptionVisibleValue_caption(caption.current.offsetTop - window.innerHeight/1.5));
        dispatch(setSubcriptionVisibleValue_block(imgBlock.current.offsetTop - window.innerHeight/1.25));
        dispatch(setSubcriptionVisibleValue_iconPlus(imgBlock.current.offsetTop - window.innerHeight/1.5));
    },[]);

    const SubcriptionVisible_title = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_title);
    const SubcriptionVisible_caption = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_caption);
    const SubcriptionVisible_block = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_block);
    const SubcriptionVisible_iconPlus = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_iconPlus);

    return(
        <div className={styles.screen}>
            <div className={styles.textBlock}>
                <div ref={title} className={SubcriptionVisible_title?classNames(styles.title,styles.active):styles.title}>Купить <br/>абонемент <br/>и вступить <br/>в клуб смогут <br/>те, кто в Плюсе</div>
                
                <div ref={caption} className={SubcriptionVisible_caption?classNames(styles.caption,styles.active):styles.caption}>
                    За каждую поездку на самокатах <br/>такие пользователи получают <br/>кешбэк баллами. Баллы можно <br/>тратить на поездки
                    на самокатах <br/>и такси с Яндекс Go, покупки <br/>и заказы в других сервисах Яндекса
                </div>
            </div>

            <div ref={imgBlock} className={SubcriptionVisible_block?classNames(styles.imgBlock,styles.active):styles.imgBlock}>
                <img src={scooterSubscription} className={styles.scooterSubscription} alt="scooterSubscription" />
                <img src={plusIcon} className={SubcriptionVisible_iconPlus?classNames(styles.plusIcon,styles.active):styles.plusIcon} alt="plusIcon"/>
                <div className={styles.shadow}></div>
            </div>
            
        </div>
    )
}

export default SubscriptionScreen;