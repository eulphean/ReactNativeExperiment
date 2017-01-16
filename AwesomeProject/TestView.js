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
  }
});

export default class TestView extends Component {
  render() {
    return (
        <View
            accessible={ this.props.nextAccessible }
            accessibilityLabel={ this.props.nextAccessibilityLabel } 
            accessibilityComponentType={ this.props.nextAccessibilityComponentType }
            accessibilityTraversalAfter={ this.props.previousTag }
            accessibilityTraversalBefore={ this.props.nextTag }
            style={ styles.testView } 
        />
    );
  }
}

module.exports = TestView;