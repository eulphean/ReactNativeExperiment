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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 40
  },
  newTestView: {
      flex: 1,
      marginTop: 20,
      backgroundColor: 'blue'
  },
  testViewHierarchy: {
    flex: 1, 
    flexDirection: 'column'
  },
  textStyle1: {
      color: 'white',
      marginTop: 10
  },
  textStyle2: {
      color: 'white',
      marginTop: 10
  }
});

const testCount = 10;
const viewConfig = {
    0: { 
        accessible: true, 
        importantForAccessibility: 'yes', 
        importantForAccessibilityDescendant: undefined, 
        descendantLabel: 'First case. ' },
    1: { 
        accessible: true, 
        importantForAccessibility: 'no', 
        importantForAccessibilityDescendant: 'yes', 
        descendantLabel: undefined },
    2: { 
        accessible: true, 
        importantForAccessibility: 'no-hide-descendants', 
        importantForAccessibilityDescendant: 'yes',
        descendantLabel: 'I should not be read out by the screen reader.' },
    3: { 
        accessible: true, 
        importantForAccessibility: 'yes', 
        importantForAccessibilityDescendant: 'no-hide-descendants',
        descendantLabel: 'I should not be read out by the sreen reader.' },
    4: { 
        accessible: true, 
        importantForAccessibility: 'yes', 
        importantForAccessibilityDescendant: undefined,
        descendantLabel: 'I should be read out a loud.' },
    5: { 
        accessible: true, 
        importantForAccessibility: undefined, 
        importantForAccessibilityDescendant: 'yes',
        descendantLabel: 'I should be read out a loud.' },
    6: { 
        accessible: true, 
        importantForAccessibility: undefined, 
        importantForAccessibilityDescendant: 'yes',
        descendantLabel: 'I should be read out a loud.' },
    7: { 
        accessible: true, 
        importantForAccessibility: 'yes', 
        importantForAccessibilityDescendant: 'yes',
        descendantLabel: 'I should get focus.' },
     8: { 
        accessible: true, 
        importantForAccessibility: 'auto', 
        importantForAccessibilityDescendant: 'auto',
        descendantLabel: 'Should I get focus?' },
     9: { 
        accessible: true, 
        importantForAccessibility: undefined, 
        importantForAccessibilityDescendant: undefined,
        descendantLabel: 'Should I get focus?' }
};

export default class HiddenTest extends Component {
  constructor(props) {
    super(props);
  }

  // Choose whatever degree of hierarchy you want. 
  render() {
    let testStructure = this._populateTestViews();
    return (
        <ScrollView>
            <View style={ styles.container }>
                { testStructure }
            </View>
        </ScrollView>
    )
  }

  _populateTestViews() {
    let testStructure = [];
    for (let i = 0; i < testCount; i++) {
        testStructure.push(
            <View
                importantForAccessibility={ viewConfig[i].importantForAccessibility }
                key={ 'key: ' + i }
                style={ [styles.newTestView] }
            >
                <View 
                    importantForAccessibility={ viewConfig[i].importantForAccessibilityDescendant }
                    accessibilityLabel={ viewConfig[i].descendantLabel } 
                >
                    <Text style={ styles.textStyle1 }> { '1: Test label - ' + i } </Text>
                </View>
                <Text style={ styles.textStyle2 }> { '2: Test label - ' + i } </Text>
            </View>
        )
    }
    return testStructure;
  }
}

module.exports = HiddenTest;