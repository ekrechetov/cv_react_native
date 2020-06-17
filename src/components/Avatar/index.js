import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import ASSETS from '../../assets/'

const Avatar = () => {
  const screen = Dimensions.get("screen")

  const [ dimensions, setDimensions ] = useState({ screen })

  const onChange = ({ screen }) => {
    setDimensions({ screen })
  }

  useEffect(() => {
    Dimensions.addEventListener("change", onChange)
    return () => {
      Dimensions.removeEventListener("change", onChange)
    }
  }, [ dimensions ])
  return(
    <View>
      <Image
        source={ASSETS.foto}
        style={dimensions.screen.height < 400 ? styles.sizeSmall : styles.size }/>
    </View>
  )
}
export default Avatar

const styles = StyleSheet.create({
  size: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  sizeSmall: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
})