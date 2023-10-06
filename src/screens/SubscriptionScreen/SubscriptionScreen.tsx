import React, {FC} from 'react';
import styles from './SubscriptionScreen.module.scss';
import scooterSubscription from '../../assets/images/scooterSubscription.png';
import plusIcon from '../../assets/images/plusIcon.png';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';

const SubscriptionScreen: FC = () => {

    const SubcriptionVisible_title = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_title);
    const SubcriptionVisible_caption = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_caption);
    const SubcriptionVisible_block = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_block);
    const SubcriptionVisible_iconPlus = useAppSelector(state=>state.visibleSlice.SubcriptionVisible_iconPlus);

    return(
        <div className={styles.screen}>
            <div className={styles.textBlock}>
                <div className={SubcriptionVisible_title?classNames(styles.title,styles.active):styles.title}>Купить <br/>абонемент <br/>и вступить <br/>в клуб смогут <br/>те, кто в Плюсе</div>
                <div className={SubcriptionVisible_caption?classNames(styles.caption,styles.active):styles.caption}>
                    За каждую поездку на самокатах <br/>такие пользователи получают <br/>кешбэк баллами. Баллы можно <br/>тратить на поездки
                    на самокатах <br/>и такси с Яндекс Go, покупки <br/>и заказы в других сервисах Яндекса
                </div>
            </div>

            <div className={SubcriptionVisible_block?classNames(styles.imgBlock,styles.active):styles.imgBlock}>
                <img src={scooterSubscription} className={styles.scooterSubscription} alt="scooterSubscription" />
                <img src={plusIcon} className={SubcriptionVisible_iconPlus?classNames(styles.plusIcon,styles.active):styles.plusIcon} alt="plusIcon"/>
                <div className={styles.shadow}></div>
            </div>
            
        </div>
    )
}

export default SubscriptionScreen;