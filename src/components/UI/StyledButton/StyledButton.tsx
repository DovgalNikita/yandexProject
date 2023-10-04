import React, {FC} from 'react';
import styles from './StyledButton.module.scss';

const StyledButton: FC<IStyledButton> = ({children,margin}) => {
    return(
        <button className={styles.button} style={{margin:margin}}>{children}</button>
    )
}

export default StyledButton;