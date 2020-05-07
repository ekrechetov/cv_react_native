import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { BoxShadow, BorderShadow } from 'expo-react-native-shadow'
import {Colors, Typography} from '../../styles'

const Button = ({ title, onPress, buttonStyle = styles.container, textStyle = styles.title }) => {
  
  const shadowStyle = {
    width: styles.container.width,
    height: styles.container.height,
    color: "#000",
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 }
  }
  
  return (
    // <BoxShadow setting={shadowStyle}>
      <TouchableOpacity style={buttonStyle} onPress={onPress} shadowColor="red">
        <Text style={textStyle}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    // </BoxShadow>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    width: 250,
    padding: 12,
    backgroundColor: Colors.mediumturquoise,
    alignItems: 'center',
    justifyContent: 'center',
    // minHeight: 40,
    height: 40,
    borderRadius: 5,
  },
  title: {
    ...Typography.btnText
  },
})

export default Button