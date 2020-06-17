import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, ScrollView, Dimensions } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'

const About = () => {
  const screen = Dimensions.get("screen")

  const [ dimensions, setDimensions ] = useState({ screen })

  const onChange = ({ screen }) => {
    setDimensions({ screen })
  }

  useEffect(() => {
    Dimensions.addEventListener("change", onChange)
    return () => {
      Dimensions.removeEventListener("change", onChange)
    }
  }, [ dimensions ])

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="About me"
      />

      <ScrollView
        contentContainerStyle={[ styles.contentContainer, dimensions.screen.height > 400 && { flex: 1 } ]}
      >
        <Text style={Typography.text}>
          Frontend developer, focused on creating interactive, responsive and
          fast web and mobile applications with high usability. Developed several practical
          projects using HTML5, CSS3, Java Script, SASS (SCSS) and responsive design
          approach, including a project online e-shop using Node.js, Express,
          MongoDB, React (with Redux). Passionate about improving native JS and
          React skills, putting ideas into digital form and get real results.
        </Text>

        <Button
          title={'next'}
          onPress={() => NavigationService.navigate('HardSkills')}
        />
      </ScrollView>
    </SafeAreaView >
  )
}
export default About

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  contentContainer: {
    ...Styles.contentContainer,
  },
})