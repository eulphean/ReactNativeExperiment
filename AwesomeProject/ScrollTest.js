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

const _testViewCount = 4;
const _itemHeight = 70;

export default class ScrollTest extends Component {
  _activeCells = [];
  static _nextKey = 1;
  _mounted = false; 
  static _currentTop = 0;

  constructor(props) {
    super(props);
    this.state = {
        activeCells: []
    };

    /*AccessibilityInfo.addEventListener(
      'change',
      this._handleTouchExplorationChange.bind(this)
    );
    // Fetch the current state and see if it's enabled. If yes, 
    // initialize the state properly. 
    AccessibilityInfo.fetch().done((enabled) => {
      if (enabled) {
        this.state.talkbackEnabled = true;
      }
    });*/
  }

  // Choose whatever degree of hierarchy you want. 
  render() {
    return (
        <View style={ styles.container } >
            <View accessible={ true } style={ [styles.newTestView, styles.absoluteView2] } >
                <Text> { 'Hello2' } </Text>
            </View>
            <View accessible={ true } style={ [styles.newTestView, styles.absoluteView3] } >
                 <Text> { 'Hello3' } </Text>
            </View>
            <View accessible={ true } style={ [styles.newTestView, styles.absoluteView1] } >
                <Text> { 'Hello1' } </Text>
            </View>
        </View>
    )
  }
  
  _getActiveCells() {
      let activeCellViews = [];
      for (i = 0; i < this.state.activeCells.length; ++i) {
          activeCellViews.push(
            <View 
                accessible={ true }
                key={ this.state.activeCells[i].key }
                style={ this.state.activeCells[i].cellStyle } 
            >
                <Text>
                    { this.state.activeCells[i].label }
                </Text>
            </View>
          );
      }
      return activeCellViews;
  }

  _onAddBottom() {
      // Add a new cell to the bottom of the list. 
      let newTop = ScrollTest._currentTop + _itemHeight;
      let newStyleSheet = StyleSheet.create({
        newCellStyle: {
            position: 'absolute',
            top: newTop,
            height: 50, 
            width: 80,
            marginBottom: 20,
            backgroundColor: 'green'
        }
      });

      let newCell = {
          key: 'vc_' + ScrollTest._nextKey,
          label: 'View ' + ScrollTest._nextKey,
          cellStyle: newStyleSheet.newCellStyle
      };
      
      let ac = this.state.activeCells; 
      ac.push(newCell);
      
      this.setState({
          activeCells: ac
      });

      ScrollTest._currentTop +=_itemHeight;
      ScrollTest._nextKey += 1; 
  }

  _onAddTop() {
      // Get all active cells. Add a new item to the top of 
       let newStyleSheet = StyleSheet.create({
        newCellStyle: {
            flex: 1,
            height: 50, 
            width: 80,
            marginBottom: 20,
            backgroundColor: 'green'
        }
      });
      let newCell = {
          key: 'vc_' + ScrollTest._nextKey,
          label: 'View ' + ScrollTest._nextKey,
          cellStyle: newStyleSheet.newCellStyle
      }
      
      let ac = this.state.activeCells;
      ac.unshift(newCell);
      
      this.setState( {
          activeCells: ac
      });

      ScrollTest._nextKey += 1;
  }

  _randomizeChildren() {

  }

  componentDidMount() {
    this._mounted = true; 
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  _handleTouchExplorationChange (isEnabled) {
      if (this._mounted) {
        this.setState({
            talkbackEnabled: isEnabled
        });
      }
  }

  _getViewTagForViewIdx(idx) {
    if (this.state.testViewTags) {
      return this.state.testViewTags[idx];
    }
    return undefined;
  }

  _setAccessibilityPayload(payload) {
    this.setState({ accessibilityPayload: payload });
  };
}

module.exports = ScrollTest;

/*
return (
      <View style={ styles.container } >
        <View style={ styles.testViewHierarchy }>
            <ScrollView style={ styles.scrollContainer }>
                <View style={ styles.scrollViewItemContainer }>
                    { this._getActiveCells() }
                </View>
            </ScrollView>
        </View>
        <View style={ styles.testButtons } >
            <TouchableHighlight style={ styles.testButtonEach } onPress={ this._onAddBottom.bind(this) } >
                <Text> { 'Add Bottom' } </Text>
            </TouchableHighlight>
            <TouchableHighlight style={ styles.testButtonEach } onPress={ this._onAddTop.bind(this) } >
                <Text> { 'Add Top' } </Text>
            </TouchableHighlight>
            <TouchableHighlight style={ styles.testButtonEach } onPress={ this._randomizeChildren.bind(this) } >
                <Text> { 'Randomize' } </Text>
            </TouchableHighlight>
        </View>
      </View>
    );
    */