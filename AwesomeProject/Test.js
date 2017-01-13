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
  findNodeHandle
} from 'react-native';

export default class Test extends Component {
  render() {
    return (
        <View 
            accessible={ true } 
            accessibilityTraversalAfter={ this.props.traverseBefore }
            accessibilityComponentType={ 'view' }
        >
            <View
                accessible={ true }
                accessibilityLabel={ this.props.label } 
                accessibilityComponentType={ 'button' }
                style={ styles.testView } 
            />
        </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  verticalContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  testView: {
    marginTop: 20,
    backgroundColor: 'black',
    height: 50,
    width: 100
  },
  testViewHorizontal: {
    marginRight: 50,
    backgroundColor: 'red',
    height: 50, 
    width: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Test;