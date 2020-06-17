import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import { Typography } from '../../styles'

const MenuItem = (props) => {

  const navigateTo = (routeName) => {
    NavigationService.navigate(routeName)
    props.toggleMenu()
  }

  return (
    <TouchableOpacity onPress={() => navigateTo(props.routeName)}>
      <Text style={[ styles.text, { marginVertical: Dimensions.get("screen").height < 400 ? 2 : 6 } ]}>
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
  },
})