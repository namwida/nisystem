import styles from "./TabMenu2.module.css"

export default function BusinessTabMenu2({ children }) {
  return (
    <nav className={styles.tab_menu}>
      <ul className="inner">{children}</ul>
    </nav>
  );
}
