import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import NavBar from './src/components/NavBar';
import List from './src/components/List';
import Pokedex from 'pokedex-promise-v2';

export default class App extends React.Component {
  state = {
    searchTerm: '',
    pokemons: [],
  };

  componentDidMount() {
    const P = new Pokedex();
    P.getPokemonByName([...Array(150).keys()].map(e => e + 1 ), () => {

    })
  };

  onSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    marginTop: StatusBar.currentHeight - 1,
  },
  content: {
    backgroundColor: 'green',
  },
});