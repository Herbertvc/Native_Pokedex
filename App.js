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
  };

  componentWillMount() {
    let tempArr = [];
    Array(20).fill(0).forEach((e,i) => tempArr.push(i+1));

    tempArr.forEach(e => {
      axios(`https://pokeapi.co/api/v2/pokemon/${e}/`)
        .then(response => response.data)
        .then(data => {
          this.setState({
            pokemons: [...this.state.pokemons,data],
          })
        })
        .catch(error => {
          alert(error);
        });
    })
  };

  onSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    let listComponent = this.state.pokemons.length === 20 ? <List elements={this.state.pokemons} /> : <Text>Loading pokemons...</Text>

    return (
      <ScrollView style={styles.container}>
        <NavBar />
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