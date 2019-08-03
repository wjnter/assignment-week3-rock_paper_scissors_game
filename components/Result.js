import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Result = (props) => {
    return(
        <View>
            <Text>{props.result}</Text>
        </View>
    );
}
export default Result;
