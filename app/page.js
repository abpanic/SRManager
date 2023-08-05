import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Welcome to Case Management</h1>
            <p>Select a section to proceed:</p>

            <div className={styles.grid}>
                <a href="/email-template" className={styles.card}>
                    <h2>Email Template</h2>
                    <p>Select a template and copy to clipboard.</p>
                </a>

                <a href="/tsg" className={styles.card}>
                    <h2>TSG</h2>
                    <p>View troubleshooting steps.</p>
                </a>

                <a href="/sop" className={styles.card}>
                    <h2>SOP</h2>
                    <p>Section under construction.</p>
                </a>
            </div>
        </main>
    )
}
