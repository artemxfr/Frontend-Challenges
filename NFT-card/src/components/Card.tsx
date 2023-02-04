import styles from './Card.module.css';

import nft from '../assets/images/image-equilibrium.jpg';
import ether from '../assets/images/icon-ethereum.svg';
import view from '../assets/images/icon-view.svg';
import clock from '../assets/images/icon-clock.svg';
import avatar from '../assets/images/image-avatar.png';

export function NFTCard() {

    return (
        <div className={styles.card}>
            <div className={styles.nft}>
                <img className={styles.nftImage} src={nft} />
                <a href='#' className={styles.overlay}>
                    <div className={styles.overlay_text}>
                            <img src={view} />
                    </div>
                </a>
            </div>
            <a href='#' className={styles.title}>Equilibrium #3429</a>
            <p className={styles.description}>Our Equilibrium collection promotes balance and calm.</p>
            <div className={styles.pnt}>
                <div className={styles.price}>
                    <img className={styles.icon} src={ether} />
                    <p><b>0.041 ETH</b></p>
                </div>
                <div className={styles.time}>
                    <img className={styles.icon} src={clock} />
                    <p>3 days left</p>
                </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.creator}>
                <img className={styles.avatar} src={avatar} />
                <p>Creation of <a className={styles.name} href='#'>Jules Wyvern</a></p>
            </div>
        </div>
    )
}