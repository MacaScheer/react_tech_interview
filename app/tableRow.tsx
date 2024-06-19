import styles from "./page.module.css";
import { Fruit } from './lib/types';
import { FunctionComponent } from 'react';

type RowProps = {
    row: Fruit
};

export const TableRow: FunctionComponent<RowProps> = ({ row }) => {
    return <div className={styles.fruitRow}>
        <div>{row.name}</div>
        <div>{row.primaryColor}</div>
        <div>{row.averageWeightInGrams}</div>
    </div>;
}