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
  NodeHandle,
  AccessibilityInfo
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      isScreenReaderEnabled: false
    };
    AccessibilityInfo.addEventListener(
      'change',
      this._handleTouchExplorationChange.bind(this)
    );
    AccessibilityInfo.fetch().done((enabled) => {
      if (this.state.isScreenReaderEnabled === enabled) {
        // nothing changed. 
        return;
      }
      this.state.isScreenReaderEnabled = enabled;
    });
  }

  _handleTouchExplorationChange (isEnabled) {
    this.setState({
        talkbackEnabled: isEnabled
    });
  }

  render() {
    const welcomeStyle = this.state.isScreenReaderEnabled ? styles.welcomeAccessible :
      styles.welcome;
    return (
      <View style={styles.container}>
        <Text style={ welcomeStyle }>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcomeAccessible: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
