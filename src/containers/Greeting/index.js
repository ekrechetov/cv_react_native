import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Typography, Styles } from '../../styles'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import Slider from '../../components/Slider'

const Greeting = ({ navigation }) => {

  const screens = [
    {
      key: 1,
      title: 'HTML, CSS, SCSS',
    },
    {
      key: 2,
      title: 'Java Script',
    },
    {
      key: 3,
      title: 'React & React-Native',
    },
    {
      key: 4,
      title: 'React Hooks',
    },
    {
      key: 5,
      title: 'Redux, React Context',
    },
    {
      key: 6,
      title: 'Npm, Git, Scrum',
    },
  ]

  const screen = Dimensions.get('screen')

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

  let title
  dimensions.screen.height < 450 ?
    title = 'CV like react-native app' :
    title = 'C V \n like react-native app'

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ ...Typography.title, marginBottom: 10, textAlign: 'center' }}>
          {title}
        </Text>
      </View>

      <Avatar />

      <View style={{ alignItems: 'center' }}>

        <Text style={{ ...Typography.title, marginBottom: 6, color: 'black' }}>
          Yevhenii Krechetov
        </Text>

        <Text style={Typography.subTitle}>
          Java Script developer
        </Text>
      </View>

      {dimensions.screen.height > 430 &&
        <Slider screens={ screens }/>
      }

      <View style={styles.btnContainer}>
        <Button
          title={'start review'}
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </SafeAreaView >
  )
}
export default Greeting

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    justifyContent: 'space-between',
    paddingTop: 26,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})