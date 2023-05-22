import styles from "./Service.module.css"

export default function BusinessService({children}) {
    return (
        <section className={styles.business_service}>
            <div className="inner">
                <ul>{children}</ul>
            </div>
        </section>
    )
}