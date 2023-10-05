import React, {FC} from 'react';
import styles from './SubscriptionScreen.module.scss';
import scooterSubscription from '../../assets/images/scooterSubscription.png';
import plusIcon from '../../assets/images/plusIcon.png';

const SubscriptionScreen: FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.textBlock}>
                <div className={styles.title}>Купить <br/>абонемент <br/>и вступить <br/>в клуб смогут <br/>те, кто в Плюсе</div>
                <div className={styles.caption}>
                    За каждую поездку на самокатах <br/>такие пользователи получают <br/>кешбэк баллами. Баллы можно <br/>тратить на поездки
                    на самокатах <br/>и такси с Яндекс Go, покупки <br/>и заказы в других сервисах Яндекса
                </div>
            </div>
            <div className={styles.imgBlock}>
                <img src={scooterSubscription} className={styles.scooterSubscription} alt="scooterSubscription" />
                <img src={plusIcon} className={styles.plusIcon} alt="plusIcon" />
                <div className={styles.shadow}></div>
            </div>
        </div>
    )
}

export default SubscriptionScreen;