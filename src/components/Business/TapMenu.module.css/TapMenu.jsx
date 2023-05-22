import styles from "./TapMenu.module.css";

export default function BusinessTabMenu({ children }) {
  return (
    <nav className={styles.tab_menu}>
      <ul className="inner">{children}</ul>
    </nav>
  );
}
