import React from 'react'
import { StyleSheet, TouchableHighlight, View, Image } from 'react-native'
import { Colors } from '../../styles'

const IconButton = (props) => {

  const { source, imageStyle, onPress } = props

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={Colors.mediumturquoise}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image
          source={source}
          style={imageStyle}
        />
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    padding: 2,
    borderRadius: 17,
  },
})

export default IconButton