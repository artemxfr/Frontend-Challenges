import styles from './PriceGrid.module.css';

export function PriceGrid() {
    return (
        <div className={styles.mainbox}>
            <div className={styles.join}>
                <h1 className={styles.join_main}>Join our community</h1>
                <p className={styles.greenText}>30-day, hassle-free money back guarantee</p>
                <p className={styles.jointext}>
                    <b>
                    Gain access to our full library of tutorials along with expert code reviews.
                    <br />
                    Perfect for any developers who are serious about honing their skills.
                    </b>
                </p>
            </div>
            <div className={styles.twodivs}>
                <div className={styles.subscription}>
                    <h2>Monthly Subscription</h2>
                    <p><span style={{'fontSize': '25px'}}>$29</span> per month</p>
                    <p>Full access for less than a $1 a day.</p>
                    <button className={styles.signup_button}>Sign up</button>
                </div>
                <div className={styles.whyus}>
                    <h2>Why us</h2>
                    <p>
                        Tutorials by industry experts
                        <br />
                        Peer & expert code review
                        <br />
                        Coding excercises
                        <br />
                        Access to our GitHub repos
                        <br />
                        Community forum
                        <br />
                        Flashcard decks
                        <br />
                        New videos every week
                    </p>
                </div>
            </div>
        </div>
    )
}