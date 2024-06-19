'use client';

import styles from "./page.module.css";
import { FunctionComponent, useEffect, useState } from 'react';
import { Fruit } from './lib/types';
import { Fruits } from './lib/fruits';
import { TableRow } from './tableRow';
import { filterFruits} from './lib/fruitTypesTypeahead';

export const FruitTable: FunctionComponent = () => {
    const [fruitName, setFruitName] = useState<string>('');
    const [fruitColor, setFruitColor] = useState<string>('');
    const [fruitWeight, setFruitWeight] = useState<string>('');
    const [filteredFruits, setFilteredFruits] = useState<Array<Fruit | null>>(Fruits);
    useEffect(() => {
        setFilteredFruits(filterFruits(fruitName, fruitColor, Number(fruitWeight)));
    }, [setFilteredFruits, fruitName, fruitColor, fruitWeight]);

    return (
        <div className={styles.fruitTable}>
            <div className={styles.fruitInputs}>
                <input placeholder="Fruit Name" type="text" onChange={e => setFruitName(e.target.value)}
                    value={fruitName}/>
                <input placeholder="Fruit Color" type="text" onChange={e => setFruitColor(e.target.value)}
                    value={fruitColor}/>
                <input placeholder="Fruit Weight" type="number" onChange={e => setFruitWeight(e.target.value)}
                    value={fruitWeight} />
            </div>
            {filteredFruits.map(fruit => {
                if (fruit != null) {
                    return <TableRow key={fruit.name}  row={fruit} />
                }
            })}
        </div>
    );
}