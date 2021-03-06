import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AnalysisButton = (props) => {
    return (
        <TouchableOpacity 
        
            style={styles.resetStyle}
            onPress={() => props.onResetButton()}
            >
            <MaterialCommunityIcons 
                name='google-analytics'
                size={25}
                color='white'
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    resetStyle: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    }
})
export default AnalysisButton;
