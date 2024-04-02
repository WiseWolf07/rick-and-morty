import styles from "./page.module.css";
import Card from "./components/Card/Card";
import "./style.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Rick and Morty App Sanchez</h1>
      <Card />
    </main>
  );
}
