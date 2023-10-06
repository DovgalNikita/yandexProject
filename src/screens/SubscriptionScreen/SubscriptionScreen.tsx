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
                {SubcriptionVisible_title
                    ?<div className={classNames(styles.title,styles.active)}>Купить <br/>абонемент <br/>и вступить <br/>в клуб смогут <br/>те, кто в Плюсе</div>
                    :<div className={styles.title}>Купить <br/>абонемент <br/>и вступить <br/>в клуб смогут <br/>те, кто в Плюсе</div>
                }
                {
                    SubcriptionVisible_caption
                        ?<div className={classNames(styles.caption,styles.active)}>
                            За каждую поездку на самокатах <br/>такие пользователи получают <br/>кешбэк баллами. Баллы можно <br/>тратить на поездки
                            на самокатах <br/>и такси с Яндекс Go, покупки <br/>и заказы в других сервисах Яндекса
                        </div>
                        :
                        <div className={styles.caption}>
                            За каждую поездку на самокатах <br/>такие пользователи получают <br/>кешбэк баллами. Баллы можно <br/>тратить на поездки
                            на самокатах <br/>и такси с Яндекс Go, покупки <br/>и заказы в других сервисах Яндекса
                        </div>
                }
                
            </div>
            {
                SubcriptionVisible_block
                    ?<div className={classNames(styles.imgBlock,styles.active)}>
                        <img src={scooterSubscription} className={styles.scooterSubscription} alt="scooterSubscription" />
                        {
                            SubcriptionVisible_iconPlus
                                ?<img src={plusIcon} className={classNames(styles.plusIcon,styles.active)} alt="plusIcon"/>
                                :<img src={plusIcon} className={styles.plusIcon} alt="plusIcon"/>
                        }
                        <div className={styles.shadow}></div>
                    </div>
                    :<div className={styles.imgBlock}>
                        <img src={scooterSubscription} className={styles.scooterSubscription} alt="scooterSubscription" />
                        <img src={plusIcon} className={styles.plusIcon} alt="plusIcon" />
                        <div className={styles.shadow}></div>
                    </div>
                
            }
            
        </div>
    )
}

export default SubscriptionScreen;