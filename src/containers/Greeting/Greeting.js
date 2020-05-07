import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors, Typography } from '../../styles'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'

 const Greeting = ({navigation}) => {

  return (
    <SafeAreaView  style={styles.container}>

      <Text style={{...Typography.headTitle}}>React-native</Text>

      <Avatar />

      <View style={{alignItems: 'center'}}>
        <Text style={{...Typography.title, marginBottom: 15, color: 'black'}}>
          Yevhenii Krechetov
        </Text>
        <Text style={Typography.subTitle}>
          React & React-Native developer
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{...Typography.title, marginBottom: 15,}}>
          C V
        </Text>
        <Text style={{...Typography.subTitle, color: 'white'}}>
          like react-native app
        </Text>
      </View>

      <Button title={'start review'}
              onPress={() => navigation.navigate('HardSkills')}
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
export default Greeting;