import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Typography } from '../../styles/'

const SliderItem = ({ item }) => {

  return item && (
    <View style={styles.itemContainer} key={item.key}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.title,
  },
})