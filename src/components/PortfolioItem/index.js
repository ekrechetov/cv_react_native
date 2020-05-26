import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Typography } from '../../styles'

const PortfolioItem = ({ project }) => {

  const linkTo = (url) => {
    Linking.openURL(url).catch((error) => console.error('An error occurred', error))
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        {project.id}. {project.title}
      </Text>

      <TouchableOpacity onPress={() => linkTo(project.deployLink)}>
        <Text style={[ styles.text, styles.link ]}>
          {project.deployLink}
        </Text>
        <Image
          source={ project.source }
          style={{ width: '100%', height: 120, marginBottom: 15 }}
        />
      </TouchableOpacity>

      <Text style={[ Typography.text, styles.text ]}>
        {project.text}
      </Text>

      <TouchableOpacity onPress={() => linkTo(project.gitLink)}>
        <Text style={[ Typography.text, styles.text, styles.link ]}>
          {project.gitLink}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default PortfolioItem

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingBottom: 26,
  },
  title: {
    ...Typography.text,
    fontWeight: '700',
    marginVertical: 10,
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  text: {
    marginBottom: 5,
    ...Typography.text,
  },
})