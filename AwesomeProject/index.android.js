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

var Test = require('./Test');

export default class AwesomeProject extends Component {
  _keys = ["first", "second", "third", "fourth"];

  constructor(props) {
    super(props);
    this.state= { viewTags: [] };
  }

  render() {
    return (
      <View style={ styles.container } >
        <Test 
            ref="first" 
            traversalAfter={ this.state.viewTags ? this.state.viewTags[2] : null } 
            style={ styles.testView } 
            label={ 'One' }
        />
        <Test ref="second" label={ 'twoo' } tyle={ styles.testView } 
            traversalAfter={ this.state.viewTags ? this.state.viewTags[0] : null } />
        <Test ref="third" label={ 'three' } style={ styles.testView } />
        <Test ref="fourth" label={ 'four' } style={ styles.testView } />
      </View>
    );
  }

  componentDidMount() {
    var tags = this._keys.map(k => findNodeHandle(this.refs[k]));
    this.setState({viewTags: tags});
    // nextFocusUpId={ this.state.viewTags ? this.state.ViewTags[3] : null }
  }

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
