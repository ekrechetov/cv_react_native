import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'

const SoftSkills = () => {

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
        headLineText="Soft Skills"
      />
      <ScrollView
        contentContainerStyle={[ styles.contentContainer, dimensions.screen.height > 430 && { flex: 1 } ]}
      >
        <View>
          <Text style={Typography.text}>
            - Communicative, problem solver (closely collaborated with the team to maintain workflow,  solve actual tasks)
          </Text>
          <Text style={Typography.text}>
            - Very persistent and driven
          </Text>
          <Text style={Typography.text}>
            - Always strive to complete the task and achieve the result
          </Text>
          <Text style={Typography.text}>
            - The desire constantly to improve professionally
          </Text>
          <Text style={Typography.text}>
            - Active position in working and social life
          </Text>
          <Text style={Typography.text}>
            - Engagement  in company life
          </Text>
          <Text style={styles.title}>
            LANGUAGES:
          </Text>
          <Text style={styles.text}>
           - English (pre-Intermediate)
          </Text>
          <Text style={styles.text}>
            - Ukrainian
          </Text>
          <Text style={styles.text}>
            - Russian
          </Text>
        </View>
        <Button
          title={'next'}
          onPress={() => NavigationService.navigate('Contacts')}
        />
      </ScrollView>
    </SafeAreaView >
  )
}

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
    marginTop: 10,
    fontSize: 20,
  },
  text: {
    ...Typography.text,
  },
})
export default SoftSkills