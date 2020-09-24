import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
