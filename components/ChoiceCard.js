import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CHOICES from '../Choices'

const ChoiceCard = props => {
    const {choiceCardTitle, choiceDescription, choiceImage} = styles;
    return(
        <View>
            <Text style={choiceCardTitle}>{props.userName}</Text>
            <Image
                source={props.choices.src}
                style={choiceImage}
            />
            <Text style={choiceDescription}>{props.choices.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    choiceDescription: {
      fontSize: 25,
      color: '#250902',
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    choiceCardTitle: {
      fontSize: 30,
      color: '#250902'
    },
    choiceImage: {
      width: 150,
      height: 150,
      padding: 10,
    }
  })

export default ChoiceCard;
