import React, { FC } from "react";
import styles from "./WelcomeScreen.module.scss";
import Logo from "../../assets/SVG/LogoSVG";
import StyledButton from "../../components/UI/StyledButton/StyledButton";
import img from '../../assets/images/welcomeScreenImg.png';
import circleText from '../../assets/images/WelcomeScreenCircleText.png';

const WelcomeScreen: FC = () => {
    return(
        <div className={styles.screen}>
            <div className={styles.contentBlock}>
                <Logo width={"176px"} height={"50.13px"}/>
                <p className={styles.title}>Вступайте в клуб <br />Самокатов</p>
                <p className={styles.caption}>Купите абонемент, чтобы стать частью клуба в новом сезоне-2024. <br /> 8 месяцев за <span className={styles.price}><span className={styles.curPrice}>499₽</span><span className={styles.prevPrice}>3190₽</span></span></p>
                <a href="https://go.yandex/ru_ru/lp/rides/scooter" target="_blank" rel="noreferrer"><StyledButton margin="44px 0 0">Стать частью клуба</StyledButton></a>
            </div>
            <div className={styles.illustrationBlock}>
                <img src={img} alt="" className={styles.img}/>
                <img src={circleText} alt="" className={styles.circleText}/>
            </div>
        </div>
    )
}

export default WelcomeScreen;