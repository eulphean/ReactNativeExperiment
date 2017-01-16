/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
  TouchableHighlight
} from 'react-native';

import TestStructure from './TestStructure';

export default class AwesomeProject extends Component {
  render() {
    // Test Structure
    return (
      <View style={ styles.container } >
        <TestStructure />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  updateButton: {
    marginTop: 50,
    backgroundColor: 'orange'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
