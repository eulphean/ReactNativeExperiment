/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  findNodeHandle
} from 'react-native';

var payload_reset = {
  nextAccessibileSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'button', 'button', 'button', 'button' ],
  nextLabelSet: [ 'Hi', 'Who', 'Are', 'You' ],
  nextTagSet: [0, 1, 2, 3],
  previousTagSet: [3, 2, 1, 0]
}

var payload_2 = {
  nextAccessibileSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'button', 'button', 'button', 'button' ],
  nextLabelSet: [ 'Hi', 'Who', 'Are', 'You' ],
  nextTagSet: [0, 1, 2, 3],
  previousTagSet: [3, 2, 1, 0]
}

var payload_3 = {
  nextAccessibileSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'button', 'button', 'button', 'button' ],
  nextLabelSet: [ 'Hi', 'Who', 'Are', 'You' ],
  nextTagSet: [0, 1, 2, 3],
  previousTagSet: [3, 2, 1, 0]
}

var payload_4 = {
  nextAccessibileSet: [ true, true, true, true ],
  nextComponentTypeSet: [ 'button', 'button', 'button', 'button' ],
  nextLabelSet: [ 'Hi', 'Who', 'Are', 'You' ],
  nextTagSet: [0, 1, 2, 3],
  previousTagSet: [3, 2, 1, 0]
}

export default class TestCases extends Component {
  _accessibilityPayload = {};

  render() {
    return (
      <View style={ styles.container } >
        <TouchableHighlight onPress={ this.setAccessibilityPayload(0) } >
          <Text>
              { 'Reset Views' }
          </Text>
        </TouchableHighlight>
    <TouchableHighlight onPress={ this.setNextAccessibilityPayload(1) } >
          <Text style={ styles.buttonText } >
              { 'Scenario 1' }
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.setNextAccessibilityPayload(2) } >
          <Text style={ styles.buttonText } >
              { 'Scenario 2' }
          </Text>
        </TouchableHighlight>
      </View>
    );
  };

  _setAccessibilityPayload = (idx) => {
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

module.exports = TestCases;