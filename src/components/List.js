import React from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';

export default class List extends React.Component {
  renderElements = (elements) => {
    return elements.map((e, i) => <ListItem item={e} key={`item-${i}`} />)
  }

  render() {
    const {
      elements,
    } = this.props;

    return (
      <View>
        {this.renderElements(elements)}
      </View>
    );
  }
}
