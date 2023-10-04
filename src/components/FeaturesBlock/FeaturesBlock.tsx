import React, {FC} from 'react';
import styles from './FeaturesBlock.module.scss';
import FeaturesItemShort from '../FeaturesItemShort/FeaturesItemShort';
import FeaturesItemLong from '../FeaturesItemLong/FeaturesItemLong';
import rubleImg from '../../assets/images/rubleImg.png';
import scooterImg from '../../assets/images/scooterImg.png';
import timerImg from '../../assets/images/timerImg.png';
import batteryImg from '../../assets/images/batteryImg.png';

const FeaturesBlock: FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.row}>
                <FeaturesItemShort img={rubleImg}>0 ₽ за старт в каждой поездке</FeaturesItemShort>
                <FeaturesItemLong img={scooterImg}>Катаетесь с друзьями? Бронируйте до трёх самокатов <br/>с аккаунта с абонементом —<br/> так у всех будет бесплатный старт</FeaturesItemLong>
            </div>
            <div className={styles.row}>
                <FeaturesItemShort img={timerImg}>Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть</FeaturesItemShort>
                <FeaturesItemLong img={batteryImg}>Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой — это бесплатно</FeaturesItemLong>
            </div>
        </div>
    )
}

export default FeaturesBlock;