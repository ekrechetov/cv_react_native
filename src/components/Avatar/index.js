import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import ASSETS from '../../assets/'

const Avatar = () => {
  return(
    <View>
      <Image source={ASSETS.foto} style={styles.avatar}/>
    </View>
  )
}
export default Avatar

const styles = StyleSheet.create({
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
})