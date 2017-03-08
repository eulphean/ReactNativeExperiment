/**
 * ImportantForAccessibility.js
 * Author: Amay Kataria
 * Description: Test Structure for React-Native Accessibility APIs. 
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
  TextInput, 
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
  },
  buttonStyle: {
      flex: 1, 
      marginTop: 50,
      backgroundColor: 'green'
  }
});

const testCount = 15;
const viewConfig = {
    0: { 
        importantForAccessibilityGroup: 'yes', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                               // not accessibilityElementsHidden
        groupLabel: 'Group label.',

        importantForAccessibility1: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel1: 'First test.' ,

        importantForAccessibility2: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    1: { 
        importantForAccessibilityGroup: 'no-hide-descendants', // Focusable, importantForAccessibility, isAccessibilityElement,
                                                // accessibilityElementsHidden
        groupLabel: 'Group label.',
        
        importantForAccessibility1: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel1: 'First test.',
        
        importantForAccessibility2: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    2: {
        importantForAccessibilityGroup: undefined, // Focusable, importantForAccessibility, isAccessibilityElement,
                                                // accessibilityElementsHidden
        groupLabel: 'Group label.',
        
        importantForAccessibility1: 'yes', // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel1: 'First test.',
        
        importantForAccessibility2: 'yes', // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel2: 'Second test.'
    }
};

export default class ImportantForAccessibilityTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        viewConfig: viewConfig[0]
    };
  }

  // Choose whatever degree of hierarchy you want. 
  render() {
    let testStructure = this._getTestStructure();
    return (
        <View style={ styles.container }>
            { testStructure }
            <View 
                style={ styles.buttonStyle }
                onPress={ this._onPress.bind(this, 1) }
            >
                <Text style={ styles.textStyle1 } >
                    { 'Update accessibility props - 1' }
                </Text>
            </View>
            <View 
                style={ styles.buttonStyle }
                onPress={ this._onPress.bind(this, 2) }
            >
                <Text style={ styles.textStyle1 } >
                    { 'Update accessibility props - 2' }
                </Text>
            </View>
        </View>
    )
  }

  _onPress(idx) {
    this.setState ({
        payload: viewConfig[idx]
    });
  }

  _getTestStructure() {
    return (
        <View
            importantForAccessibility={ this.state.payload.importantForAccessibilityGroup }
            accessibilityLabel={ this.state.payload.groupLabel }
            style={ [styles.newTestView] }
        >
            <View 
                importantForAccessibility={ this.state.payload.importantForAccessibility1 }
                accessibilityLabel={ this.state.payload.childLabel1 } 
            >
                <Text style={ styles.textStyle1 }> { 'Test View ' + i }</Text>
            </View>
            <View
                importantForAccessibility={ this.state.payload.importantForAccessibility2 }
                accessibilityLabel={ this.state.payload.childLabel2 } 
            >
                <Text style={ styles.textStyle2 }> { 'Test View ' + i }</Text>
            </View>
        </View>
    );
  }
}

module.exports = ImportantForAccessibilityTest;