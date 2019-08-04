import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultCount = (props) => {
    return (
        <View style={styles.countStyles}>
            <Text style={styles.textStyles}>{props.result}</Text>
            <Text style={styles.numberStyles}>{props.countResult}</Text>
            <Text style={styles.numberStyles}>{props.rate}%</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    countStyles: {
        justifyContent:'center',
        alignItems: 'center',
    },
    textStyles: {
        fontWeight: 'bold',
        color: '#6840de', 
        fontSize: 17
    },
    numberStyles: {
        fontWeight: '500',
        color: '#e68312',
        fontSize: 14
    }
})
export default ResultCount;
