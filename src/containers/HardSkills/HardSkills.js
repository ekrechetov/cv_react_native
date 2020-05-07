import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors, Typography } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'

 const HardSkills = () => {

  return (
    <SafeAreaView  style={styles.container}>

      <Text style={{...Typography.headTitle}}>My hard skills</Text>

      <Button title={'next'}
              onPress={() => NavigationService.goBack()}
      />

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teal,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop:26,
    paddingBottom:26,
  },
})
export default HardSkills;