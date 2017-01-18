/**
 * TestView.js
 * Author: Amay Kataria
 * Description: Simple wrapper for a test view
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  testView: {
    marginTop: 20,
    backgroundColor: 'red',
    height: 40, 
    width: 80
  },
  testViewAccessible: {
    marginTop: 20,
    backgroundColor: 'green',
    height: 40, 
    width: 80
  }
});

export default class TestView extends Component {
  render() {
    const testViewStyle = this.props.talkbackEnabled ? 
        styles.testViewAccessible : 
        styles.testView;
        
    return (
        <View
            accessible={ this.props.nextAccessible }
            accessibilityLabel={ this.props.nextAccessibilityLabel } 
            accessibilityComponentType={ this.props.nextAccessibilityComponentType }
            nextFocusableView={ this.props.nextTag }
            previousFocusableView={ this.props.previousTag }
            style={ testViewStyle } 
        />
    );
  }
}

module.exports = TestView;