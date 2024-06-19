import styles from "./page.module.css";
import { FruitTable } from './fruitTable';

export default function Home() { 
  return (
    <main className={styles.main}>
     <FruitTable />
    </main>
  );
}


/*

import { useState } from 'react';
export default function FruitTable() {

  const [name, setName] = useState<string>('');
  const [filteredFruits, setFilteredFruits] = useState<Array<any>>([]);
  console.log('FILTERED FRUITS: ', filteredFruits);
  const fruits = [{ "name": "apple", "primaryColor": "red", "averageWeightInGrams": 182 }, { "name": "banana", "primaryColor": "yellow", "averageWeightInGrams": 118 }, { "name": "orange", "primaryColor": "orange", "averageWeightInGrams": 184 }, { "name": "grape", "primaryColor": "purple", "averageWeightInGrams": 5 }, { "name": "watermelon", "primaryColor": "green", "averageWeightInGrams": 5000 }];

  const filterFruits = () => {
    const fruitList = fruits.filter(fruit => fruit.name === name);
    setFilteredFruits(fruitList);
  }

  return (
    <div>
      <input onChange={(event) => setName(event?.target.value)} />

      <button onClick={filterFruits}>Submit</button>
      <ol>
          TEST
          {filteredFruits.map(fruit => {
      return <li key={fruit.name}><
          })}
      </ol>
    </div>
  );
}





import { useState } from 'react';
export default function FruitTable() {

  const [name, setName] = useState<string>('');
  const [filteredFruits, setFilteredFruits] = useState<Array<any>>([]);
  console.log('FILTERED FRUITS: ', filteredFruits);
  const fruits = [{ "name": "apple", "primaryColor": "red", "averageWeightInGrams": 182 }, { "name": "banana", "primaryColor": "yellow", "averageWeightInGrams": 118 }, { "name": "orange", "primaryColor": "orange", "averageWeightInGrams": 184 }, { "name": "grape", "primaryColor": "purple", "averageWeightInGrams": 5 }, { "name": "watermelon", "primaryColor": "green", "averageWeightInGrams": 5000 }];

  const filterFruits = () => {
    const fruitList = fruits.filter(fruit => fruit.name === name);
    setFilteredFruits(fruitList);
  }

  return (
    <div>
      <input onChange={(event) => setName(event?.target.value)} />

      <button onClick={filterFruits}>Submit</button>
      <ol>
          TEST
          {filteredFruits.map(fruit => {
      return <li key={fruit.name}><
          })}
      </ol>
    </div>
  );
}
  */