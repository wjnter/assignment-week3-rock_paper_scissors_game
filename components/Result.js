import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Result = (props) => {
    return(
        <View>
            <Text>{props.result}</Text>
        </View>
    );
}
const styles = StyleSheet.create({

})
export default Result;
