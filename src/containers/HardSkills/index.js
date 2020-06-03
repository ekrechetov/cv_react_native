import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'

const HardSkills = () => {

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="Technical skills"
      />
      <View style={styles.content}>
        <View>
          <Text style={Typography.text}>
            - Mobile application development
          </Text>
          <Text style={Typography.text}>
            - Web development
          </Text>
          <Text style={Typography.text}>
            - HTML5, CSS3, SASS (SCSS)
          </Text>
          <Text style={Typography.text}>
            - JavaScript (ES5, ES6)
          </Text>
          <Text style={Typography.text}>
            - React, React Hooks
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
            - REST API, experience with MySql, MongoDB
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
    ...Styles.container,
  },
  content: {
    ...Styles.content,
  },
})
export default HardSkills