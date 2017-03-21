import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import NavBar from './src/components/NavBar';
import List from './src/components/List';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    searchTerm: '',
    pokemons: [],
    filteredPokemons: [],
  };

  componentWillMount() {
    let tempArr = [];
    Array(20).fill(0).forEach((e,i) => tempArr.push(i+1));

    tempArr.forEach(e => {
      axios(`https://pokeapi.co/api/v2/pokemon/${e}/`)
        .then(response => response.data)
        .then(data => {
          let tempPokemons = [...this.state.pokemons, data].sort((a,b) => a.id - b.id);

          this.setState({
            pokemons: tempPokemons,
          });
        })
        .catch(error => {
          alert(error);
        });
    })
  };

  onSearch = (text) => {
    this.setState({ searchTerm: text });
  };

  filteredElements = () => this.state.pokemons.filter(element => element.name.indexOf(this.state.searchTerm) >= 0);

  render() {
    let listComponent = this.state.pokemons.length === 20 ? <List elements={this.filteredElements()} /> : <Text>Loading pokemons...</Text>

    return (
      <ScrollView style={styles.container}>
        <NavBar onSearch={this.onSearch} />
        { listComponent }
      </ScrollView>
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