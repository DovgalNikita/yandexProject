import React,{FC} from 'react';
import styles from './FooterScreen.module.scss';
const FooterScreen = () => {
    return(
        <div className={styles.footerCaption}>
            Доп. опция «Абонемент на самокаты» на 8 месяцев (240 дней) активируется автоматически с момента старта сезона 2024 г. 
            самокатов Яндекс Go, <br/>далее предусмотрено автопродление доп.опции за 399 руб./мес. Сертификат на доп.опцию «Абонемент на самокаты» на 
            8 месяцев оформляется <br/>на условиях документа yandex.ru/legal/scooters_seasonpass. Доп.опция доступна пользователям с активной подпиской 
            условия подписки: <br/><a href="https://yandex.ru/legal/yandex_plus_conditions" target="_blank" rel="noreferrer">yandex.ru/legal/yandex_plus_conditions</a>, есть ограничения, подробнее: 
            <a href="https://yandex.ru/legal/yandex_plus_opzii_list" target="_blank" rel="noreferrer">yandex.ru/legal/yandex_plus_opzii_list</a>. В случае отсутствия 
            у пользователя <br/>активной подписки на дату активации доп.опции, пользователю предоставляется 7 дней подписки Яндекс Плюс бесплатно, далее автопродление —<br/> 
            299 руб./мес. Электросамокаты Яндекс Go — сервис аренды электросамокатов на условиях: <a href="https://clck.ru/gwDGn" target="_blank" rel="noreferrer">clck.ru/gwDGn</a>. 0+
        </div>
    )
}

export default FooterScreen;