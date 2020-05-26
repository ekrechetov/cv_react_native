import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../styles'

const HrLine = () => {
  return(

    <View style={styles.hairline } />

  )
}

export default HrLine

const styles = StyleSheet.create({
  hairline: {
    backgroundColor: Colors.cadetblue,
    opacity: 0.7,
    height: 2,
  },
})