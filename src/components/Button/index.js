import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Typography } from '../../styles'

const Button = ({ title, onPress, buttonStyle = styles.container, textStyle = styles.title }) => {

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} shadowColor="red">
      <Text style={textStyle}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 12,
    backgroundColor: Colors.mediumturquoise,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    borderRadius: 5,
  },
  title: {
    ...Typography.btnText,
  },
})

export default Button