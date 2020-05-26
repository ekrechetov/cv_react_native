import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Typography, Colors } from '../../styles'
import ASSET from '../../assets'
import IconButton from '../IconButton'
import NavigationService from '../../navigation/NavigationService'

const onBack = () => {
  NavigationService.goBack()
}

const AppBar = (props) => {
  return (
    <View style={ styles.content }>

      <View>
        <IconButton
          source={ASSET.back}
          imageStyle={{ width: 18, height: 18 }}
          onPress={onBack}
        />
      </View>

      <Text style={{ ...Typography.subTitle, color: Colors.floralwhite }}>
        {props.headLineText}
      </Text>

      {props.rightPartContent &&
      <View style={styles.rightPart}>{props.rightPartContent}</View>}
    </View>

  )
}

export default AppBar

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 18,
  },
})