import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class NavBar extends React.Component {
  render() {
    return (
      <View>
        <TextInput style={styles.navBar} placeholder="Insert the name or number of a Pokemon" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    fontSize: 14,
    backgroundColor: 'red',
  },
});