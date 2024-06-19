import styled from 'styled-components';
import { Fruit } from './lib/types';
import { FunctionComponent } from 'react';

type RowProps = {
    row: Fruit
};

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
`;
export const TableRow: FunctionComponent<RowProps> = ({ row }) => {

    return <StyledRow>
        <div>{row.name}</div>
        <div>{row.primaryColor}</div>
        <div>{row.averageWeightInGrams}</div>
    </StyledRow>;
}