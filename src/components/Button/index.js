import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Typography } from '../../styles'

const Button = ({ title, onPress, buttonStyle = styles.container, textStyle = styles.title }) => {

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} shadowColor="black">
      <Text style={textStyle}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}
export default Button

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 340,
    padding: 12,
    marginVertical: 26,
    backgroundColor: Colors.mediumturquoise,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    borderRadius: 5,
    //shadow:
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    ...Typography.btnText,
  },
})