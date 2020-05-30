import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'

const Education = () => {

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="Education"
      />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            - DAN.IT Education, Kyiv
          </Text>
          <Text style={styles.text}>
            Front-end developer course, September 2018 – August 2019
          </Text>

          <Text style={styles.title}>
            - Training Centre of the Exact Sciences, Kyiv
          </Text>
          <Text style={styles.text}>
            English course, February 2015 – April 2015
          </Text>

          <Text style={styles.title}>
            - MTI, Kyiv
          </Text>
          <Text style={styles.text}>
            Training &quot;Basics of staff motivation&quot;, January 2015
          </Text>

          <Text style={styles.title}>
            - National Aviation University, Kyiv
          </Text>
          <Text style={styles.text}>
            Mechanical Engineer
          </Text>
        </View>
        <Button
          title={'next'}
          onPress={() => NavigationService.navigate('SoftSkills')}
        />
      </View>
    </SafeAreaView >
  )
}
export default Education

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
    marginVertical: 5,
    fontSize: 20,
    width: '100%',
  },
  text: {
    marginBottom: 15,
    ...Typography.text,
    width: '100%',
  },
})