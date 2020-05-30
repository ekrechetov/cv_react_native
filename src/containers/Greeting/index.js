import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors, Typography, Styles } from '../../styles'
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
      title: 'React',
    },
    {
      key: 4,
      title: 'React-Native',
    },
    {
      key: 5,
      title: 'React Hooks',
    },
    {
      key: 6,
      title: 'Redux, Context',
    },
    {
      key: 7,
      title: 'Npm, Git, Scrum',
    },
  ]

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ ...Typography.title, marginBottom: 10 }}>
          C V
        </Text>
        <Text style={{ ...Typography.subTitle, color: 'white' }}>
          like react-native app
        </Text>
      </View>

      <Avatar />

      <View style={{ alignItems: 'center' }}>

        <Text style={{ ...Typography.title, marginBottom: 10, color: 'black' }}>
          Yevhenii Krechetov
        </Text>

        <Text style={Typography.subTitle}>
          Java Script developer
        </Text>
      </View>

      <Slider screens={ screens }/>

      <View style={{ paddingHorizontal: 20, width: '100%', maxWidth: 600 }}>
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
    paddingTop: 36,
    paddingBottom: 26,
  },
})