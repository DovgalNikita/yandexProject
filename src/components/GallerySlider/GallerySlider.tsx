import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './GallerySlider.module.scss';
import ArrowSVG from '../../assets/SVG/ArrowSVG';
import { LinkImages } from './LinksImages';

const GallerySlider: FC = () => {

    const [vieWindowPosition, setVieWindowPosition] = useState<number>(0);

    const buttonEventNext = (e:React.MouseEvent<HTMLDivElement>) => {vieWindowPosition>-1032?setVieWindowPosition(vieWindowPosition-344):null};
    const buttonEventPrevious = (e:React.MouseEvent<HTMLDivElement>) => {vieWindowPosition<0?setVieWindowPosition(vieWindowPosition+344):null};

    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.vieWindow} style={{left:vieWindowPosition}}>
                    {
                        LinkImages.map(item=><img key={`${item.comp}`} src={item.comp} alt='img'/>)
                    }
                </div>
            </div>
            <div className={styles.sliderButtons}>
                {vieWindowPosition==0?<div className={styles.button} onClick={buttonEventPrevious}><ArrowSVG color='rgba(255, 222, 64, 0.5)'/></div>:<div className={styles.button} onClick={buttonEventPrevious}><ArrowSVG/></div>}
                {vieWindowPosition==-1032?<div className={styles.button} onClick={buttonEventNext}><ArrowSVG color='rgba(255, 222, 64, 0.5)'/></div>:<div className={styles.button} onClick={buttonEventNext}><ArrowSVG/></div>}
            </div>
        </div>
    )
}

export default GallerySlider;