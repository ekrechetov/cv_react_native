import React, { useState } from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import { Typography, Colors } from '../../styles'
import ASSETS from '../../assets'
import IconButton from '../IconButton'
import NavigationService from '../../navigation/NavigationService'
import DropdownMenu from '../DropdownMenu'

const AppBar = (props) => {

  const [ isMenuOpen, setMenuVisibility ] = useState(false)

  const onBack = () => {
    NavigationService.goBack()
  }

  const toggleMenu = () => {
    setMenuVisibility(!isMenuOpen)
  }

  return (
    <View style={[ styles.container, Platform.OS === 'ios' ? { zIndex: 10 } : null ]}>

      <IconButton
        source={ASSETS.back}
        imageStyle={{ width: 18, height: 18 }}
        onPress={onBack}
      />

      <Text style={{ ...Typography.subTitle, color: Colors.floralwhite }}>
        {props.headLineText}
      </Text>

      <IconButton
        source={ASSETS.menu}
        imageStyle={{ width: 24, height: 24 }}
        onPress={toggleMenu}
      />

      <DropdownMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 15,
    paddingHorizontal: 20,
    // zIndex: 20,
    // Platform.OS === 'ios' ? { zIndex: 20 } : null,
  },
})