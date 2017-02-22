/**
 * ScrollTest.js
 * Author: Amay Kataria
 * Description: Test views for accessibility hidden properties. 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
  AccessibilityInfo,
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native';

import TestView from './TestView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 40,
    height: 200
  },
  newTestView: {
      marginTop: 50,
      height: 40,
      backgroundColor: 'blue',
      alignItems: 'center'  
  },
  testViewHierarchy: {
    flex: 1, 
    flexDirection: 'column'
  },
  textStyle1: {
      marginTop: 10
  },
  textStyle2: {
      color: 'white',
      marginTop: 10
  }
});

const testCount = 3;
const viewConfig = {
    0: { accessible: true, importantForAccessibility: 'yes' },
    1: { accessible: true, importantForAccessibility: 'no' },
    2: { accessible: true, importantForAccessibility: 'no-hide-descendants' }
};

export default class HiddenTest extends Component {
  constructor(props) {
    super(props);
  }

  // Choose whatever degree of hierarchy you want. 
  render() {
    let testStructure = this._populateTestViews();
    return (
        <View style={ styles.container } >
            { testStructure }
        </View>
    )
  }

  _populateTestViews() {
    let testStructure = [];
    for (let i = 0; i < testCount; i++) {
        testStructure.push(
            <View
                accessible={ viewConfig[i].accessible }
                importantForAccessibility={ viewConfig[i].importantForAccessibility }
                key={ 'key: ' + i }
                style={ [styles.newTestView] }
            >
                <Text style={ styles.textStyle1 }> { 'Test label - ' + i } </Text>
                <Text style={ styles.textStyle2 }> { 'Test label - ' + i } </Text>
            </View>
        )
    }
    return testStructure;
  }
}

module.exports = HiddenTest;