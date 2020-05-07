import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NavigationService from './NavigationService'
import GreetingScreen from '../containers/Greeting/Greeting'
import HardSkillsScreen from '../containers/HardSkills/HardSkills'

const Stack = createStackNavigator()

const Switch = (
  <Stack.Navigator initialRouteName="Greeting" screenOptions={{ headerMode: 'none' }} headerMode='none'>
    <Stack.Screen name="Greeting" component={GreetingScreen}/>
    <Stack.Screen name="HardSkills" component={HardSkillsScreen}/>
  </Stack.Navigator>
)

export default () => (
  <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
    {Switch}
  </NavigationContainer>
)
