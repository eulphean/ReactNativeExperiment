/**
 * TestStructure.js
 * Author: Amay Kataria
 * Description: DOM hierarchy for a view. 
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40
  },
  testViewHierarchy: {
    flex: 1, 
    flexDirection: 'column'
  },
  testButtons: {
    flex: 1
  }
});

const _testViewCount = 4;
const _refPrefix = 'vRef-';
const _keyPrefix = 'vKey-'

export default class TestStructure extends Component {
  _viewRefs = [];
  constructor(props) {
    super(props);
    // Initial state
    this.state={ 
      accessibilityPayload: {
        nextAccessibleSet: [ true, true, true, true ],
        nextComponentTypeSet: [ 'none', 'none', 'none', 'none' ],
        nextLabelSet: [ 'Hello', 'What', 'is', 'that' ],
        nextViewTagSet: [0, 1, 2, 3],
        previousViewTagSet: [3, 2, 1, 0]
      },
      testViewTags: []
    };
  }

  // Choose whatever degree of hierarchy you want. 
  render() {
    let nextAccessibleSet = this.state.accessibilityPayload ? this.state.accessibilityPayload.nextAccessibleSet : [];
    let nextComponentTypeSet = this.state.accessibilityPayload ? this.state.accessibilityPayload.nextComponentTypeSet : [];
    let nextLabelSet = this.state.accessibilityPayload ? this.state.accessibilityPayload.nextLabelSet : [];

    let nextViewTagSet = this.state.accessibilityPayload ? this.state.accessibilityPayload.nextViewTagSet : [];
    let previousViewTagSet = this.state.accessibilityPayload ? this.state.accessibilityPayload.previousViewTagSet : [];

    return (
      <View style={ styles.container } >
        <View style={ styles.testViewHierarchy } >
          { this._getTestViewCollection(nextAccessibleSet, nextComponentTypeSet, nextLabelSet, nextViewTagSet, previousViewTagSet) }
        </View>
        <View style={ styles.testButtons }>
          <TestCases setAccessibilityPayload={ (payload) => this._setAccessibilityPayload(payload) }/>
        </View>
      </View>
    );
  }

  componentDidMount() {
    // Collect the view tags and save it in a state. We will need these tags
    // to properly set next and previous tags for views. 
    var tags = this._viewRefs.map(k => findNodeHandle(this.refs[k]));
    this.setState({ testViewTags: tags });
  }

  _getTestViewCollection (nextAccessibleSet, nextComponentTypeSet, nextLabelSet, nextViewTagSet, previousViewTagSet) {
    let testViews = []; 
    this._viewRefs = [];
    for (i = 0; i < _testViewCount; i++) {
      let currentRef = _refPrefix + i;
      this._viewRefs.push(currentRef);
      
      testViews.push((
       <TestView
          key={ _keyPrefix + i }
          ref={ currentRef }
          nextAcessible={ nextAccessibleSet ? nextAccessibleSet[i] : undefined }
          nextAccessibilityComponentType={ nextComponentTypeSet ? nextComponentTypeSet[i] : undefined }
          nextAccessibilityLabel={ nextLabelSet ? nextLabelSet[i] : undefined }
          nextTag={ nextViewTagSet ? this._getViewTagForViewIdx(nextViewTagSet[i]) : undefined  }
          previousTag={ previousViewTagSet ? this._getViewTagForViewIdx(previousViewTagSet[i]) : undefined }
        />
      ));
    }
    return testViews;
  };

  _getViewTagForViewIdx(idx){
    if (this.state.testViewTags) {
      return this.state.testViewTags[idx];
    }
    return undefined;
  }

  _setAccessibilityPayload(payload) {
    this.setState({ accessibilityPayload: payload });
  };
}

module.exports = TestStructure;