import styles from "./PageHeader.module.css";

export default function PageHeader({
  gnbname,
  title,
  destription,
  destription_add,
}) {
  return (
    <section className={`${styles.page_header}`}>
      <div className={gnbname}>
        <div className="inner">
          <h1>{title}</h1>
          <p>{destription}</p>
          <p>{destription_add}</p>
        </div>
      </div>
    </section>
  );
}
