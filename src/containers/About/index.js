import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'

const About = () => {

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="About me"
      />

      <View style={styles.content}>
        <Text style={Typography.text}>
          Frontend developer, focused on creating interactive, responsive and
          fast web and mobile applications with high usability. Developed several practical
          projects using HTML5, CSS3, JS,
           SASS (SCSS) and responsive design
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
export default About

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  content: {
    ...Styles.content,
  },
})