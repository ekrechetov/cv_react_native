import React from 'react'
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Linking } from 'react-native'
import { Typography, Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import ASSETS from '../../assets'
import AppBar from '../../components/AppBar'
import Contact from '../../components/Contact'

const Contacts = () => {

  const linkTo = (url) => {
    Linking.openURL(url).catch((error) => console.error('An error occurred', error))
  }

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="Contacts"
      />
      <View style={styles.content}>
        <View>
          <Contact
            img={ASSETS.phone}
            description={'+38 050 310 32 39'}
          />
          <Contact
            img={ASSETS.email}
            description={'jenya-99@ukr.net'}
          />
          <TouchableOpacity onPress={() => linkTo('https://github.com/ekrechetov')}>
            <Contact
              img={ASSETS.git}
              description={'https://github.com/ekrechetov'}
              linked={true}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => linkTo('https://www.linkedin.com/in/yevhenii-krechetov-157962192/')}>
            <Contact
              img={ASSETS.linkedIn}
              description={'https://www.linkedin.com/in/ \n yevhenii-krechetov-157962192/'}
              linked={true}
            />
          </TouchableOpacity>
          <Contact
            img={ASSETS.map}
            description={'Kyiv, Ukraine'}
          />
        </View>
        <Button
          title={'back to the beginning'}
          onPress={() => NavigationService.navigate('Greeting')}
        />
      </View>
    </SafeAreaView >
  )
}
export default Contacts

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
  },
  text: {
    ...Typography.text,
  },
})