import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class NavBar extends React.Component {
  render() {
    const {
      onSearch,
    } = this.props;

    return (
      <View>
        <TextInput
          onChangeText={onSearch}
          style={styles.navBar}
          placeholder="Insert the name or number of a Pokemon"
        />
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