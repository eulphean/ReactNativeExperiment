/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  testView: {
    backgroundColor: 'red',
    height: 20, 
    width: 40
  }
});

export default class TestView extends Component {
  render() {
    return (
        <View
            accessible={ this.props.nextAccessible }
            accessibilityTraversalAfter={ this.props.previous }
            accessibilityTraversalBefore={ this.props.next }
            accessibilityLabel={ this.props.label } 
            accessibilityComponentType={ 'button' }
            style={ styles.testView } 
        />
    );
  }
}

module.exports = TestView;