import React from 'react';
import { 
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default class ListItem extends React.Component {
  render() {
    const {
      item,
    } = this.props;
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.itemNumber}>
          <Text>{item.id}</Text>
        </View>
        <View style={styles.itemImgWrapper}>
          <Image
            style={styles.itemImg}
            source={{uri: item.sprites.front_default}}
          />
        </View>
        <View style={styles.itemName}>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  itemNumber: {
    flex: 1/10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  itemImgWrapper: {
    flex: 2/10,
    paddingRight: 20,
  },
  itemImg: {
    width: 50,
    height: 50,
  },
  itemName: {
    flex: 1,
    justifyContent: 'center',
  },
})