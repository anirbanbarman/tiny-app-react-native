
import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import ResultList from '../components/ResultsList';
import SearchBarScreen from '../components/SearchBar';
import useResults from '../hooks/useResults';


export default function SearchScreen({navigation}) {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter((result) => result.price == price)

    }
    return (
        <>
            <SearchBarScreen
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
           
            <ScrollView>
            <ResultList results={filterResultsByPrice("$")} title="Cost Effective" />
            <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
            <ResultList results={filterResultsByPrice("$$$")} title="Big splender" />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

});

