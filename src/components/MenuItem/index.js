import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import { Typography } from '../../styles'

const MenuItem = (props) => {

  const navigateTo = (routeName) => {
    NavigationService.navigate(routeName)
    props.toggleMenu()
  }

  return (
    <TouchableOpacity onPress={() => navigateTo(props.routeName)}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}
export default MenuItem

const styles = StyleSheet.create({
  container: {
    paddingBottom: 26,
  },
  text: {
    ...Typography.text,
    marginVertical: 6,
  },
})