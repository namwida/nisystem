import styles from "./SectionTitle.module.css"

export default function SectionTitle({title}) {
    return (
        <h2 className={`${styles.page_title} inner`}>{title}</h2>
    )
}