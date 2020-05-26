import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { Colors, Typography } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import ASSETS from '../../assets'
import AppBar from '../../components/AppBar'
import IconButton from '../../components/IconButton'

const Experience = () => {

  const onSettings = () => {
    console.log('Click')
  }

  const rightPartContent = (
    <IconButton
      source={ASSETS.settings}
      imageStyle={{ width: 20, height: 20 }}
      onPress={onSettings}
    />
  )

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="Experience"
        rightPartContent={rightPartContent}
      />
      <View style={styles.content}>
        <View>

          <Text style={styles.title}>
            - March 2020 – May 2020:
          </Text>
          <Text style={styles.text}>
            &quot;MaxyLogic&quot; company, developed mobile App &quot;Aibro&quot; for use bots in messanger. Used React-Native with React Context, React Hooks.
          </Text>

          <Text style={styles.title}>
            - November 2019 – January 2020:
          </Text>
          <Text style={styles.text}>
            &quot;MGS&quot; startup, developed frontend for &quot;ManGo&quot; web App for employers and talents. Used React with Redux.
          </Text>

        </View>
        <Button
          title={'next'}
          onPress={() => NavigationService.navigate('Portfolio')}
        />
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teal,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:20,
    paddingBottom:26,
  },
  title: {
    ...Typography.text,
    fontWeight: '700',
    marginVertical: 5,
    fontSize: 20,
  },
  text: {
    marginBottom: 15,
    ...Typography.text,
  },
})
export default Experience