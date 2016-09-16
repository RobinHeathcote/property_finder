'use strict'

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text } from 'react-native';


var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
    }
});

class PropertyFinderApp extends Component{
  render() {
    return <Text style={styles.text}>Hello World (Again)</Text>;
  }
}

AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
