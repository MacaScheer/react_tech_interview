import styles from "./page.module.css";
import { FruitTable } from './fruitTable';

export default function Home() { 
  return (
    <main className={styles.main}>
     <FruitTable />
    </main>
  );
}