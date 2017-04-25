/**
 * FocusTest.js
 * Author: Amay Kataria
 * Description: Test structure to test programmatically moving focus in React-Native. 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
  TouchableHighlight,
  UIManager
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 40
  },
  testButton: {
      flex: 1,
      marginTop: 20,
      backgroundColor: 'blue'
  },
  textStyle: {
      color: 'text',
      marginTop: 10
  },
});

export default class HiddenTest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={ styles.container }> 
            <TouchableHighlight 
                ref={ 'click' }
                style={ styles.testButton }
                onPress={ this._onClick }
            >
                <Text style={ styles.textStyle }> 
                    { 'Click me' }
                </Text>
            </TouchableHighlight>
            <TouchableHighlight 
                ref={ 'press' }
                style={ styles.testButton }
                onPress={ this._onPress }
            >
                <Text style={ styles.textStyle }>
                    { 'Press me' }
                </Text>
            </TouchableHighlight>
        </View>
    )
  }

  _onClick = () => {
    var pressButton = this.refs['press'];
    UIManager.sendAccessibilityEvent(findNodeHandle(pressButton), 8);
  };

  _onPress = () => {
    var clickButton = this.refs['click'];
    UIManager.sendAccessibilityEvent(findNodeHandle(clickButton), 8);
  };
}

module.exports = FocusTest;