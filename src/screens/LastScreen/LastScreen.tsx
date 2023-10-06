import StyledButton from '../../components/UI/StyledButton/StyledButton';
import styles from './LastScreen.module.scss';
import React, {FC} from 'react';
import scooterLastScreen from '../../assets/images/scooterLastScreen.png';
import LastScreenCircleText from '../../assets/images/LastScreenCircleText.png';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';

const LastScreen: FC = () => {

    const LastScreenVisible_block = useAppSelector(state=>state.visibleSlice.LastScreenVisible_block);
    const LastScreenVisible_title = useAppSelector(state=>state.visibleSlice.LastScreenVisible_title);
    const LastScreenVisible_caption = useAppSelector(state=>state.visibleSlice.LastScreenVisible_caption);
    const LastScreenVisible_button = useAppSelector(state=>state.visibleSlice.LastScreenVisible_button);

    return(
        <div className={styles.screen}>
            {
                LastScreenVisible_block
                    ?<div className={classNames(styles.imgBlock,styles.active)}>
                        <img src={LastScreenCircleText} alt="scooter" className={styles.LastScreenCircleText}/>
                        <img src={scooterLastScreen} alt="scooter" className={styles.scooterLastScreen}/>
                        <div className={styles.shadow}></div>
                    </div>
                    :<div className={styles.imgBlock}>
                        <img src={LastScreenCircleText} alt="scooter" className={styles.LastScreenCircleText}/>
                        <img src={scooterLastScreen} alt="scooter" className={styles.scooterLastScreen}/>
                        <div className={styles.shadow}></div>
                    </div>
            }
            
            <div className={styles.textBlock}>
                {
                    LastScreenVisible_title
                        ?<div className={classNames(styles.title,styles.active)}>80% наших <br/>пользователей <br/>уже в клубе <br/>и экономят <br/>на поездках</div>
                        :<div className={styles.title}>80% наших <br/>пользователей <br/>уже в клубе <br/>и экономят <br/>на поездках</div>
                }
                {
                    LastScreenVisible_caption
                        ?<div className={classNames(styles.caption,styles.active)}>Присоединяйтесь — опция начнёт <br/>действовать в начале сезона–2024. <br/>Об открытии сезона предупредим <br/>заранее, чтобы вы были готовы</div>
                        :<div className={styles.caption}>Присоединяйтесь — опция начнёт <br/>действовать в начале сезона–2024. <br/>Об открытии сезона предупредим <br/>заранее, чтобы вы были готовы</div>
                }
                {
                    LastScreenVisible_button
                        ?<a href="https://go.yandex/ru_ru/lp/rides/scooter" rel="noreferrer" target='_blank' className={classNames(styles.button,styles.active)}><StyledButton margin='48px 0 0'>Хочу абонемент</StyledButton></a>
                        :<a href="https://go.yandex/ru_ru/lp/rides/scooter" rel="noreferrer" target='_blank' className={styles.button}><StyledButton margin='48px 0 0'>Хочу абонемент</StyledButton></a>
                }
            </div>
        </div>
    )
}

export default LastScreen;