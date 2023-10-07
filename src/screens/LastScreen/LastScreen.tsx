import StyledButton from '../../components/UI/StyledButton/StyledButton';
import styles from './LastScreen.module.scss';
import React, {FC, useRef,useEffect} from 'react';
import scooterLastScreen from '../../assets/images/scooterLastScreen.png';
import LastScreenCircleText from '../../assets/images/LastScreenCircleText.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';
import { setLastScreenVisibleValue_block, setLastScreenVisibleValue_button, setLastScreenVisibleValue_caption, setLastScreenVisibleValue_title } from '../../redux/visibleSlice/visibleSliceValues';

const LastScreen: FC = () => {

    const dispatch = useAppDispatch();
    
    const block = useRef() as React.MutableRefObject<HTMLDivElement>;
    
    useEffect(()=>{
        dispatch(setLastScreenVisibleValue_block(block.current.offsetTop - window.innerHeight/1.25));
        dispatch(setLastScreenVisibleValue_title(block.current.offsetTop - window.innerHeight/1.25));
        dispatch(setLastScreenVisibleValue_caption(block.current.offsetTop - window.innerHeight/1.6));
        dispatch(setLastScreenVisibleValue_button(block.current.offsetTop - window.innerHeight/2));
    },[]);

    const LastScreenVisible_block = useAppSelector(state=>state.visibleSlice.LastScreenVisible_block);
    const LastScreenVisible_title = useAppSelector(state=>state.visibleSlice.LastScreenVisible_title);
    const LastScreenVisible_caption = useAppSelector(state=>state.visibleSlice.LastScreenVisible_caption);
    const LastScreenVisible_button = useAppSelector(state=>state.visibleSlice.LastScreenVisible_button);

    return(
        <div className={styles.screen} >

            <div className={LastScreenVisible_block?classNames(styles.imgBlock,styles.active):styles.imgBlock} ref={block}>
                <img src={LastScreenCircleText} alt="scooter" className={styles.LastScreenCircleText}/>
                <img src={scooterLastScreen} alt="scooter" className={styles.scooterLastScreen}/>
                <div className={styles.shadow} ></div>
            </div>
            
            <div className={styles.textBlock} >
                <div className={LastScreenVisible_title?classNames(styles.title,styles.active):styles.title} >80% наших <br/>пользователей <br/>уже в клубе <br/>и экономят <br/>на поездках</div>
                <div className={LastScreenVisible_caption?classNames(styles.caption,styles.active):styles.caption} >Присоединяйтесь — опция начнёт <br/>действовать в начале сезона–2024. <br/>Об открытии сезона предупредим <br/>заранее, чтобы вы были готовы</div>
                <a href="https://go.yandex/ru_ru/lp/rides/scooter" rel="noreferrer" target='_blank' className={LastScreenVisible_button?classNames(styles.button,styles.active):styles.button}><StyledButton margin='48px 0 0'>Хочу абонемент</StyledButton></a>
            </div>
        </div>
    )
}

export default LastScreen;