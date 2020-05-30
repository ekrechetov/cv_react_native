import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NavigationService from './NavigationService'
import GreetingScreen from '../containers/Greeting'
import AboutScreen from '../containers/About'
import HardSkillsScreen from '../containers/HardSkills'
import PortfolioScreen from '../containers/Portfolio'
import ExperienceScreen from '../containers/Experience'
import EducationScreen from '../containers/Education'
import SoftSkillsScreen from '../containers/SoftSkills'
import ContactsScreen from '../containers/Contacts'

const Stack = createStackNavigator()

const Switch = (
  <Stack.Navigator initialRouteName="Greeting" screenOptions={{ headerMode: 'none' }} headerMode='none'>
    <Stack.Screen name="Greeting" component={GreetingScreen}/>
    <Stack.Screen name="About" component={AboutScreen}/>
    <Stack.Screen name="HardSkills" component={HardSkillsScreen}/>
    <Stack.Screen name="Portfolio" component={PortfolioScreen}/>
    <Stack.Screen name="Experience" component={ExperienceScreen}/>
    <Stack.Screen name="Education" component={EducationScreen}/>
    <Stack.Screen name="SoftSkills" component={SoftSkillsScreen}/>
    <Stack.Screen name="Contacts" component={ContactsScreen}/>
  </Stack.Navigator>
)

const AppNavigation = () => (
  <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
    {Switch}
  </NavigationContainer>
)
export default AppNavigation