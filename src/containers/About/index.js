import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors, Typography } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import ASSETS from '../../assets'
import AppBar from '../../components/AppBar'
import IconButton from '../../components/IconButton'

const About = () => {

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
        headLineText="About me"
        rightPartContent={rightPartContent}
      />

      <View style={styles.content}>
        <Text style={Typography.text}>
          Frontend developer, focused on creating interactive, responsive and
          fast web applications with high usability. Developed several practical
          projects using HTML5, CSS3, JS, BEM, SASS (SCSS) and responsive design
          approach, including a project online e-shop using Node.js, Express,
          MongoDB, React (with Redux). Passionate about improving native JS and
          React skills, putting ideas into digital form and get real results.
        </Text>

        <Button
          title={'next'}
          onPress={() => NavigationService.navigate('HardSkills')}
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
export default About