import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'

const SoftSkills = () => {

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="Soft Skills"
      />
      <View style={styles.content}>
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
            English (pre intermediate), Ukrainian, Russian
          </Text>
        </View>
        <Button
          title={'next'}
          onPress={() => NavigationService.navigate('Contacts')}
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
  title: {
    ...Typography.text,
    fontWeight: '700',
    fontSize: 20,
    width: '100%',
    marginTop: 10,
  },
  text: {
    ...Typography.text,
  },
})
export default SoftSkills