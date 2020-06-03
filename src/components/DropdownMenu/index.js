import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Typography, Colors } from '../../styles'
import NavigationService from '../../navigation/NavigationService'
import FadeInView from '../FadeInView'

const DropdownMenu = (props) => {

  const navigateTo = (routeName) => {
    NavigationService.navigate(routeName)
    props.toggleMenu()
  }

  return (
    <FadeInView
      isMenuOpen={props.isMenuOpen}
      style={styles.dropdownMenu}
    >
      <Text onPress={() => navigateTo('Greeting')} style={styles.text}>Home</Text>
      <Text onPress={() => navigateTo('About')} style={styles.text}>About me</Text>
      <Text onPress={() => navigateTo('HardSkills')} style={styles.text}>Technical skills</Text>
      <Text onPress={() => navigateTo('Portfolio')} style={styles.text}>Portfolio</Text>
      <Text onPress={() => navigateTo('Experience')} style={styles.text}>Experience</Text>
      <Text onPress={() => navigateTo('Education')} style={styles.text}>Education</Text>
      <Text onPress={() => navigateTo('SoftSkills')} style={styles.text}>Soft Skills</Text>
      <Text onPress={() => navigateTo('Contacts')} style={styles.text}>Contacts</Text>
    </FadeInView>
  )
}
export default DropdownMenu

const styles = StyleSheet.create({
  text: {
    ...Typography.text,
    marginVertical: 6,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 45,
    right: 0,
    height: 325,
    paddingHorizontal: 40,
    backgroundColor: Colors.floralwhite,
    borderRadius: 5,
    overflow: 'hidden',
    zIndex: 5,
    //shadow:
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
})