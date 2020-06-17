import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'

const Experience = () => {

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
        headLineText="Experience"
      />
      <ScrollView
        contentContainerStyle={[ styles.contentContainer, dimensions.screen.height > 430 && { flex: 1 } ]}
      >
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
          onPress={() => NavigationService.navigate('Education')}
        />
      </ScrollView>
    </SafeAreaView >
  )
}
export default Experience

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  contentContainer: {
    ...Styles.contentContainer,
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