import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultCount = (props) => {
    return (
        <View style={styles.countStyles}>
            <Text>{props.result}</Text>
            <Text>{props.countResult}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    countStyles: {
        justifyContent:'center',
        alignItems: 'center',
    }
})
export default ResultCount;
