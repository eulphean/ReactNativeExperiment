/**
 * HiddenTest.js
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

const testCount = 15;
const viewConfig = {
    0: { // Android discrepancy. undefined gives importantForAccessibility=1, so FirstTest and SecondTest
         // get read. iOS reads the text content. 
        accessible: true, 
        importantForAccessibilityGroup: 'yes', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        groupLabel: undefined,
        importantForAccessibility1: 'yes', // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: 'no-hide-descendants', // Not focusable, importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    1: { 
        importantForAccessibilityGroup: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
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
        importantForAccessibilityGroup: 'yes',// Focusable, importantForAccessibility, isAccessibilityElement,
                                            // accessibilityElementsHidden
        groupLabel: 'Group label.',
        importantForAccessibility1: 'no-hide-descendants', // Hide the group. Everything not.
        childLabel1: 'First test.' ,
        importantForAccessibility2: 'no-hide-descendants', // Hide the group. Everything not. 
        childLabel2: 'Second test.'
    },
    3: { // iOS discrepancy. We always collect the label (this is the same as Default case). So it reads First Test. 
         // Android reads it as Test View 3. Android reads the text view label. 
        importantForAccessibilityGroup: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        groupLabel: undefined,
        importantForAccessibility1: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                          // not accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: 'no-hide-descendants', // Hide the group. Everything not. 
        childLabel2: 'Second test.'
    },
    4: { 
        importantForAccessibilityGroup: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        groupLabel: undefined,
        importantForAccessibility1: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel1: undefined,
        importantForAccessibility2: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        childLabel2: undefined
    },
    5: { // Android - Discrepancy. Text view labels are read out. iOS ignores the descendants.  Very weird. 
        importantForAccessibilityGroup: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        groupLabel: undefined,

        importantForAccessibility1: 'no-hide-descendants', // Hide the group.
        childLabel1: 'First test.' ,

        importantForAccessibility2: 'no-hide-descendants', // Hide the group.
        childLabel2: 'Second test.'
    },
    6: { 
        importantForAccessibilityGroup: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        groupLabel: 'Group label.',
        importantForAccessibility1: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                          // not accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: 'no', // Not focusable, importantForAccessibility, not isAccessibilityElement
                                          // not accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    7: { 
        importantForAccessibilityGroup: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                              // not accessibilityElementsHidden
        groupLabel: 'Group label.',
        importantForAccessibility1: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    8: { 
        importantForAccessibilityGroup: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                         // not accessibilityElementsHidden
        groupLabel: 'Group label.',
        importantForAccessibility1: 'no', // Not focusable, not importantForAccessibility, not isAccessibilityElement
                                          // not accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    9: {  
        importantForAccessibilityGroup: 'yes',  // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        groupLabel: 'Group label.',
        importantForAccessibility1: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: 'yes', // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    10: { // Android discrepancy: It reads the label FirstTest because default sets importantForAccessibility as true. iOS reads 
         // text view labels. 
        importantForAccessibilityGroup: 'no',  // Not Focusable, not importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        groupLabel: undefined,
        importantForAccessibility1: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: undefined, // Not Focusable, importantForAccessibility, not isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    11: {  
        importantForAccessibilityGroup: 'yes',  // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        groupLabel: undefined,
        importantForAccessibility1: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        childLabel1: 'First test.' ,
        importantForAccessibility2: undefined, // Not Focusable, importantForAccessibility, not isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel2: 'Second test.'
    },
    12: {  
        importantForAccessibilityGroup: 'yes',  // Focusable, importantForAccessibility, isAccessibilityElement,
                                           // accessibilityElementsHidden
        groupLabel: undefined,
        importantForAccessibility1: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        childLabel1: undefined,
        importantForAccessibility2: undefined, // Not Focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        childLabel2: undefined
    },
    13: { // Android discrepancy: Since the parent is importantForAccessibility, it just reads that label. iOS reads the text view
          // content individually. 
        importantForAccessibilityGroup: undefined,  // Not Focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        groupLabel: 'Group Label',
        importantForAccessibility1: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        childLabel1: undefined,
        importantForAccessibility2: undefined, // Not Focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        childLabel2: undefined
    },
    14: {  
        importantForAccessibilityGroup: 'no-hide-descendants',  // Not Focusable, not importantForAccessibility, not isAccessibilityElement,
                                           // accessibilityElementsHidden is true.
        groupLabel: 'Group Label',
        importantForAccessibility1: undefined, // Not focusable, importantForAccessibility, not isAccessibilityElement,
                                           // not accessibilityElementsHidden
        childLabel1: undefined,
        importantForAccessibility2: undefined, // Not Focusable, importantForAccessibility, not isAccessibilityElement,
                                           // accessibilityElementsHidden
        childLabel2: undefined
    }
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
                importantForAccessibility={ viewConfig[i].importantForAccessibilityGroup }
                accessibilityLabel={ viewConfig[i].groupLabel }
                key={ 'key: ' + i }
                style={ [styles.newTestView] }
            >
                <View
                    importantForAccessibility={ viewConfig[i].importantForAccessibility1 }
                    accessibilityLabel={ viewConfig[i].childLabel1 } 
                >
                    <Text style={ styles.textStyle1 }> { 'Test View ' + i }</Text>
                </View>
                <View
                    importantForAccessibility={ viewConfig[i].importantForAccessibility2 }
                    accessibilityLabel={ viewConfig[i].childLabel2 } 
                >
                    <Text style={ styles.textStyle2 }> { 'Test View ' + i }</Text>
                </View>
            </View>
        )
    }
    return testStructure;
  }
}

module.exports = HiddenTest;