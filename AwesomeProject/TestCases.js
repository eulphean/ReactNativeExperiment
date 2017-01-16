/**
 * TestCases.js
 * Author: Amay Kataria
 * Description: A component, which wraps multiple buttons that are tied to 
 * test payloads for a11y properties.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var payload_reset = {
  nextAccessibleSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'none', 'none', 'none', 'none' ],
  nextLabelSet: [ 'Hello', 'What', 'is', 'that' ],
  nextViewTagSet: [0, 1, 2, 3],
  previousViewTagSet: [3, 2, 1, 0]
}

var payload_1 = {
  nextAccessibleSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'button', 'button', 'button', 'button' ],
  nextLabelSet: [ 'Hello', 'What', 'is', 'that' ],
  nextViewTagSet: [],
  previousViewTagSet: [3, 2, 0, 1]
}

var payload_2 = {
  nextAccessibleSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'button', 'button', 'button', 'button' ],
  nextLabelSet: [ 'Hello', 'What', 'is', 'that' ],
  nextViewTagSet: [0, 1, 2, 3],
  previousViewTagSet: [3, 2, 1, 0]
}

var payload_3 = {
  nextAccessibleSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'button', 'button', 'button', 'button' ],
  nextLabelSet: [ 'Hello', 'What', 'is', 'that' ],
  nextViewTagSet: [0, 1, 2, 3],
  previousViewTagSet: [3, 2, 1, 0]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'  
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black'
  },
  button: {
    marginLeft: 10,
    width: 70,
    height: 40,
    backgroundColor: 'orange'
  }
});

const _testsCount = 4; // 0 = Reset + 3 more. 
const _keyPrefix = 'tKey-';

export default class TestCases extends Component {
  render() {
    return (
      <View style={ styles.container } >
        { this._getTestScenarioButtons() }
      </View>
    );
  };

  _getTestScenarioButtons() {
    let testButtons = [];
    
    for(i = 0; i < _testsCount; ++i) {
      let buttonLabel = i === 0 ? 'Reset views' : 'Scenario ' + i;
      testButtons.push((
        <TouchableHighlight 
          key={ _keyPrefix + i }
          style={ styles.button } 
          onPress={ this._setAccessibilityPayload.bind(this, i) } 
        >
          <Text>
              { buttonLabel }
          </Text>
        </TouchableHighlight>
      ));
    }

    return testButtons; 
  }

   _setAccessibilityPayload(idx) {
    if (this.props.setAccessibilityPayload) {
      // Map each button to each scenario payloads
      switch (idx) {
        default: 
        case 0:
          this.props.setAccessibilityPayload(payload_reset);
          break;
        case 1:
          this.props.setAccessibilityPayload(payload_1);
          break;
        case 2:
          this.props.setAccessibilityPayload(payload_2);
          break;
        case 3:
          this.props.setAccessibilityPayload(payload_3);
          break;
      }
    }
  };
}

module.exports = TestCases;