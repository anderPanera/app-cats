import Imagen from "./imagen";

import styles from './gato.module.css'

export default function Gato() {
    return(
        <div className={styles.center}>
            <Imagen></Imagen>
        </div>
    )
}