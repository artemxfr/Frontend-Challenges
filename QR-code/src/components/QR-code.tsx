import styles from './QR-code.module.css';
import code from '../assets/images/image-qr-code.png';

export function QRCode() {

    return (
        <div className={styles.box}>
            <img src={code} className={styles.code} />
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}