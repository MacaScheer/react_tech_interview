'use client';

import styles from "./page.module.css";
import { FunctionComponent, useEffect, useState } from 'react';
import { Fruit } from './lib/types';
import { TableRow } from './tableRow';
import { filterFruits} from './lib/fruitTypesTypeahead';

export const FruitTable: FunctionComponent = () => {
    const [fruitName, setFruitName] = useState<string>('');
    const [fruitColor, setFruitColor] = useState<string>('');
    const [fruitWeight, setFruitWeight] = useState<number | null>(null);
    const [filteredFruits, setFilteredFruits] = useState<Array<Fruit | null>>([]);
    const typeaheadFruits = filterFruits(fruitName, fruitColor, fruitWeight);
    useEffect(() => setFilteredFruits(typeaheadFruits), [fruitName, fruitColor, fruitWeight, typeaheadFruits])

    return (
        <div className={styles.fruitTable}>
            <div className={styles.fruitInputs}>
            <input placeholder="Fruit Name" type="text" id="name" onChange={e => setFruitName(e.target.value)}
                value={fruitName}
                />
            <input placeholder="Fruit Color" type="text" id="color" onChange={e => setFruitColor(e.target.value)}
                value={fruitColor != null ? fruitColor : ''}
                />
            <input placeholder="Fruit Weight" type="text" id="weight" onChange={e => setFruitWeight(Number(e.target.value))}
                value={fruitWeight != null ? fruitWeight : ''}
            />
            </div>
            {filteredFruits.map(fruit => {
                if (fruit != null) {
                    return <TableRow key={fruit.name}  row={fruit} />
                }
            })}
        </div>
    );
}