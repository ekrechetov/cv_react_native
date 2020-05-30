import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Typography, Colors } from '../../styles'
import ASSETS from '../../assets'
import IconButton from '../IconButton'
import NavigationService from '../../navigation/NavigationService'


const AppBar = (props) => {

  const onBack = () => {
    NavigationService.goBack()
  }

  const onSettings = () => {
    console.log('Click')
  }

  return (
    <View style={ styles.container }>

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
        onPress={onSettings}
      />
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
  },
})