import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'

const IconButton = (props) => {

  const { source, imageStyle, onPress } = props

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image
          source={source}
          style={imageStyle}
        />
      </View>
    </TouchableOpacity>
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