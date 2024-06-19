'use client';

import styled from 'styled-components';
import { FunctionComponent, useEffect, useState } from 'react';
import { Fruits } from './lib/fruits';
import { Fruit } from './lib/types';
import { TableRow } from './tableRow';
import { filterFruits} from './lib/fruitTypesTypeahead';


export const FruitTable: FunctionComponent = () => {
    const [fruitName, setFruitName] = useState<string | null>(null);
    const [fruitColor, setFruitColor] = useState<string | null>(null);
    const [fruitWeight, setFruitWeight] = useState<number | null>(null);
    const [filteredFruits, setFilteredFruits] = useState<Array<Fruit | null>>([]);
    const typeaheadFruits = filterFruits(fruitName, fruitColor, fruitWeight);
    
    useEffect(() => setFilteredFruits(typeaheadFruits), [fruitName, fruitColor, fruitWeight, typeaheadFruits])

    const tableContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
    `

    return (
    <div>
     <label>Fruit name:</label>
      <input type="text" id="name" name="name" onChange={e => setFruitName(e.target.value)}/>
       <label >Fruit color:</label>
        <input type="text" id="color" name="color" onChange={e => setFruitColor(e.target.value)} />
         <label >Fruit weight in grams:</label>
          <input type="text" id="weight" name="weight" onChange={e => setFruitWeight(Number(e.target.value))}/>
          {filteredFruits.map(fruit => {
                if (fruit != null) {
                    return <TableRow key={fruit.name}  row={fruit} />
                }
            })
          }
    </div>
    );
}