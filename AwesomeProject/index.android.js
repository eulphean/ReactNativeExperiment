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
            traverseBefore={ this.state.viewTags ? this.state.viewTags[3] : null }
            label={ 'First' }
        />
        <Test 
            ref="second"
            traverseBefore={ this.state.viewTags ? this.state.viewTags[0] : null }  
            label={ 'Second' } 
          />
        <Test 
            ref="third" 
            traverseBefore={ this.state.viewTags ? this.state.viewTags[1] : null }
            label={ 'Third' } 
        />
        <Test 
            traverseBefore={ this.state.viewTags ? this.state.viewTags[2] : null }
            ref="fourth" 
            label={ 'Fourth' } 
        />
      </View>
    );
  }

  componentDidMount() {
    var tags = this._keys.map(k => findNodeHandle(this.refs[k]));
    this.setState({viewTags: tags});
  }

  componentDidUpdate() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  updateButton: {
    marginTop: 50,
    backgroundColor: 'orange'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
