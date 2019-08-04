import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

colorEvent = (result) => {
    if (result === 'Victory')
      return styles.victoryResult
    if (result === 'Tie game')
      return styles.drawResult
    if (result === 'Defeat')
      return styles.defeatResult
}

const Result = (props) => {
    return(
        <Text style={{fontSize: 27, fontWeight: '500', color: '#640D14'}}>{props.result}</Text>
    );
}
const styles = StyleSheet.create({

})
export default Result;
