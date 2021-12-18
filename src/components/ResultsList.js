
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ResultsDetails from './ResultsDetails';


export default function ResultList({ title, results }) {
    const navigation = useNavigation();
    if(!results.length) return null
    return (


        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.title} >{results.length}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultShow", { id: item.id })}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>

                    )

                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }

});

