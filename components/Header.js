import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render() { 
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Shopping List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
    height: 60,
    padding: 15,
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header ;
