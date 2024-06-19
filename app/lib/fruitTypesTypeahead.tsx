import type { Fruit } from './types';
import { Fruits } from './fruits';
import { Trie } from './FruitTrie';

const FruitNameTrie = new Trie();
const FruitColorTrie = new Trie();
Fruits.forEach(fruit => {
    FruitNameTrie.insertRecursive(fruit.name, FruitNameTrie.root);
    FruitColorTrie.insertRecursive(fruit.primaryColor, FruitColorTrie.root);
});

export const typeaheadFruitNames = (prefix: string): Array<string> => {
    return FruitNameTrie.wordsWithPrefix(prefix, FruitNameTrie.root);
}
export const typeaheadFruitColors = (prefix: string): Array<string> => {
    return FruitColorTrie.wordsWithPrefix(prefix, FruitColorTrie.root);
}

export const filterFruits = (name: string, color: string, weight: number | null): Array<Fruit | null> => {
    let filteredBy = Fruits;
    let typeaheadNames = typeaheadFruitNames(name);
    let typeaheadColors = typeaheadFruitColors(color)
    filteredBy = filteredBy.filter(fruit => {
            if (typeaheadNames.indexOf(fruit.name) !== -1 &&
                typeaheadColors.indexOf(fruit.primaryColor) !== -1
            ) {
                return fruit;
            }
    });
    if (weight != null && weight !== 0) {
        filteredBy = filteredBy.filter(fruit => fruit.averageWeightInGrams === weight);
    }
    return filteredBy;
}