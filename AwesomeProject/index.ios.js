/**
 * index.android.js
 * Author: Amay Kataria
 * Description: Root component for hosting the test structure. 
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import HiddenTest from './HiddenTest';
import ImportantForAccessibilityTest from './ImportantForAccessibilityTest';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class AwesomeProject extends Component {
  render() {
    // Test Structure
    return (
      <View style={ styles.container } >
        <HiddenTest />
      </View>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
