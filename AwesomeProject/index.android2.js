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

export default class AwesomeProject extends Component {
  render() {
    const firstView = findNodeHandle(this.refs['firstView']);
    const thirdView = findNodeHandle(this.refs['thirdView']);

    return (
      <View style={ styles.container } >
        <View style={ styles.verticalContainer } >
          <ComponentA />
        </View>
      </View>
    );
  }
}

class ComponentA extends Component {
  render() {
    <View style={ styles.container } >
      <View style={ styles.testViewHorizontal } />
    </View>
  };
}

export class ComponentB extends Component {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  verticalContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  testView: {
    marginTop: 20,
    backgroundColor: 'orange',
    height: 50,
    width: 100
  },
  testViewHorizontal: {
    marginRight: 20,
    backgroundColor: 'red',
    height: 50, 
    width: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
