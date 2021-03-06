'use strict'

import React, { Component } from 'react';
import { NavigatorIOS, AppRegistry, StyleSheet, Text } from 'react-native';

import SearchPage from './SearchPage'


var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
      }}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
