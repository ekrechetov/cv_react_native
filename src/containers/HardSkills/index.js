import React from 'react'
import { SafeAreaView, StyleSheet, Image, View, Text } from 'react-native'
import { Colors, Typography } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import ASSETS from '../../assets'
import AppBar from '../../components/AppBar'
import IconButton from '../../components/IconButton'

const HardSkills = () => {

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
        headLineText="Technical skills"
        rightPartContent={rightPartContent}
      />
      <View style={styles.content}>
        <View>
          <Text style={Typography.text}>
            - HTML5, CSS3, SASS (SCSS)
          </Text>
          <Text style={Typography.text}>
            - Responsive web design
          </Text>
          <Text style={Typography.text}>
            - JavaScript (ES5, ES6)
          </Text>
          <Text style={Typography.text}>
            - React (with Hooks)
          </Text>
          <Text style={Typography.text}>
            - Redux, React Context
          </Text>
          <Text style={Typography.text}>
            - React-native
          </Text>
          <Text style={Typography.text}>
            - NPM, basic Node.js, Express
          </Text>
          <Text style={Typography.text}>
            - Experience with REST API, MySql, MongoDB
          </Text>
          <Text style={Typography.text}>
            - XMLHttpRequest, AJAX
          </Text>
          <Text style={Typography.text}>
            - Gulp build system
          </Text>
          <Text style={Typography.text}>
            - Git version-control system
          </Text>
          <Text style={Typography.text}>
            - Experience with SCRUM methodology, working with Trello
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
})
export default HardSkills