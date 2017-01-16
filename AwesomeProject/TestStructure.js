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

import TestCases from './TestCases';

export default class TestStructure extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state={ 
      accessibilityPayload: {}
    };
  }

  // Choose whatever degree of hierarchy you want. 
  render() {
    let nextAccessibleSet = this.state.accessibilityPayload && this.state.accessibilityPayload.nextAccessibileSet;
    let nextComponentTypeSet = this.props.accessibilityPayload && this.props.accessibilityPayload.nextComponentTypeSet;
    let nextLabelSet = this.state.accessibilityPayload && this.props.accessibilityPayload.nextLabelSet;
    let nextViewTagSet = this.state.accessibilityPayload && this.props.accessibilityPayload.nextViewTagSet;
    let previousViewTagSet = this.state.accessibilityPayload && this.props.accessibilityPayload.previousViewTagSet;

    <View style={ styles.container } >
      <View style={ styles.viewHierarchyArea } >
        <TestView 
            ref="zero" 
            nextAcessible={ nextAccessibileSet[0] }
            nextAccessibilityComponentType={ nextComponentTypeSet[0] }
            nextAccessibilityLabel={ nextLabelSet[0] }
            nextTag={ nextViewTagSet[0] }
            previousTag={ previousViewTagSet[0] }
        />
        <TestView
            ref="one" 
            nextAcessible={ nextAccessibileSet[1] }
            nextAccessibilityComponentType={ nextComponentTypeSet[1] }
            nextAccessibilityLabel={ nextLabelSet[1] }
            nextTag={ nextViewTagSet[1] }
            previousTag={ previousTagSet[1] }
        />
        <TestView
            ref="two" 
            nextAcessible={ nextAccessibileSet[2] }
            nextAccessibilityComponentType={ nextComponentTypeSet[2] }
            nextAccessibilityLabel={ nextLabelSet[2] }
            nextTag={ nextViewTagSet[2] }
            previousTag={ previousTagSet[2] }
        />
        <TestView
            ref="three" 
            nextAcessible={ nextAccessibileSet[3] }
            nextAccessibilityComponentType={ nextComponentTypeSet[3] }
            nextAccessibilityLabel={ nextLabelSet[3] }
            nextTag={ nextViewTagSet[3] }
            previousTag={ previousTagSet[3] }
        />
        <TestView
            ref="four" 
            nextAcessible={ nextAccessibileSet[4] }
            nextAccessibilityComponentType={ nextComponentTypeSet[4] }
            nextAccessibilityLabel={ nextLabelSet[4] }
            nextTag={ nextViewTagSet[4] }
            previousTag={ previousTags[4] }
        />
      </View>
      <TestCase setAccessibilityPayload={ this._setAccessibilityPayload } />
    </View>
  }

  componentDidMount() {
    var tags = this._keys.map(k => findNodeHandle(this.refs[k]));
    this.setState({accessibility});
  }

  _setAccessibilityPayload(payload) {
    this.setState({ accessibilityPayload: payload});
  }

}

/// probably rename to setPreviousFocusableViewId
//  setNextFocusableViewId
//  in order
class TestView extends Component {
  render() {
    return (
      <View
          accessible={ this.props.nextAccessible }
          accessibilityTraversalAfter={ this.props.previous }
          accessibilityTraversalBefore={ this.props.next }
          accessibilityLabel={ this.props.label } 
          accessibilityComponentType={ 'button' }
          style={ styles.testView } 
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
  viewHierarchyArea: {
    flex: 1, 
    flexDirection: 'column'
  },
  testButtons: {
    flex: 1,
    flexDirection: 'row'
  }
});

module.exports = TestStructure;