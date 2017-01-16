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
import TestView from './TestView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  testViewHierarchy: {
    flex: 1, 
    flexDirection: 'column'
  },
  testButtons: {
    flex: 1,
    flexDirection: 'row'
  }
});

const _testViewCount = 4;
const _refPrefix = 'vRef-';

export default class TestStructure extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state={ 
      accessibilityPayload: {},
      testViewTags: []
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
      <View style={ styles.testViewHierarchy } >
        this._getTestViewCollection()
      </View>
      <View style={ styles.testButtons }>
        <TestCase setAccessibilityPayload={ this._setAccessibilityPayload } />
      </View>
    </View>
  }

  componentDidMount() {
    // Collect the view tags and save it in a state. We will need these tags
    // to properly set next and previous tags for views. 
    var tags = _viewRefs.map(k => findNodeHandle(this.refs[k]));
    this.setState({ testViewTags: tags });
  }

  _getTestViewCollection () {
    let testViews = []; 
    for (i = 0; i < testViewCount; i++) {
      testViews.push((
       <TestView
          ref={ _refPrefix + i }
          nextAcessible={ nextAccessibileSet[i] }
          nextAccessibilityComponentType={ nextComponentTypeSet[i] }
          nextAccessibilityLabel={ nextLabelSet[i] }
          nextTag={ this.nextViewTagSet && this._getViewTagForViewIdx(nextViewTagSet[i]) }
          previousTag={ this.previousTagSet && this._getViewTagForViewIdx(previousViewTagSet[i]) }
        />
      ));
    }
  }

  _getViewTagForViewIdx = (idx) => {
    if (this.state.testViewTags) {
      return this.state.testViewTags[idx];
    }
    return undefined;
  }

  _setAccessibilityPayload = (payload) =>  {
    this.setState({ accessibilityPayload: payload });
  };
}

module.exports = TestStructure;