import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { Colors } from '../../styles'

const IconButton = (props) => {
  const {
    contentContainerStyle = {},
    source,
    imageStyle = {},
    onPress,
    disabled,
    notDisabledStyle,
  } = props
  return (
    <View style={[
      styles.container,
      { height: styles.image.height + (PADDING * 2) },
      imageStyle.height && { height: imageStyle.height + (PADDING * 2) },
      contentContainerStyle,
      disabled && !notDisabledStyle && { borderColor: Colors.gray_979797 },
    ]}>
      <TouchableOpacity style={[ styles.transparent ]} onPress={onPress}>
        <Image
          source={source}
          style={[
            styles.image,
            imageStyle,
            disabled && !notDisabledStyle && { tintColor: Colors.gray_979797 },
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

const IMAGE_SIZE = 18
const PADDING = 3

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderWidth: 1,
    padding: 6,
    borderColor: Colors.fafaf9,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: PADDING,
    borderRadius: 4,
    paddingHorizontal: 3,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'contain',
    paddingHorizontal: 3,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  lightIcon: {
    tintColor: Colors.white,
  },
})

export default IconButton