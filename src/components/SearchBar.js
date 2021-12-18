
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBarScreen({ term, onTermChange, onTermSubmit }) {
    return (

        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} color="black" style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                value={term}
                style={styles.inputStyle}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15

    }

});

