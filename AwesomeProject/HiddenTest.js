/**
 * ScrollTest.js
 * Author: Amay Kataria
 * Description: DOM hierarychy for a scroll view
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
  ScrollView
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
      position: 'absolute',
      height: 40,
      width: 80,
      backgroundColor: 'blue'
  },
  absoluteView1: {
      top: 10
  },
  absoluteView2: {
      top: 60
  },
  absoluteView3: {
      top: 110
  },
  scrollContainer: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column'
  },
  testViewHierarchy: {
    flex: 1, 
    flexDirection: 'column'
  },
  testButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  testButtonEach: {
      flex: 1,
      height: 50,
      width: 80,
      marginRight: 20,
      backgroundColor: 'blue'
  },
  itemStyle: {
      flex: 1,
      height: 50, 
      width: 80,
      marginBottom: 20,
      backgroundColor: 'green'
  },
  scrollViewItemContainer: {
      flex: 1,
      flexDirection: 'column',
      height: 400
  }
});

export default class HiddenTest extends Component {
  constructor(props) {
    super(props);
  }

  // Choose whatever degree of hierarchy you want. 
  render() {
    return (
        <View style={ styles.container } >
            <View 
                accessible={ true } 
                importantForAccessibility={ 'yes' }
                style={ [styles.newTestView, styles.absoluteView2] } 
            >
                <Text> { 'Important - Yes' } </Text>
            </View>
            <View 
                accessible={ true } 
                importantForAccessibility={ 'no' }
                style={ [styles.newTestView, styles.absoluteView3] } 
            >
                 <Text> { 'Important - No' } </Text>
            </View>
            <View 
                accessible={ true } 
                importantForAccessibility={ 'no-hide-descendants' }
                style={ [styles.newTestView, styles.absoluteView1] } 
            >
                <Text> { 'Important - No - Hide' } </Text>
            </View>
            <View 
                accessible={ true } 
                style={ [styles.newTestView, styles.absoluteView1] } 
            >
                <Text> { 'Important - Auto' } </Text>
            </View>
        </View>
    )
  }
}

module.exports = ScrollTest;