import 'react-native-gesture-handler'
import React from 'react'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {

  const [isFontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
  })

  if (!isFontsLoaded) {
    return <AppLoading />
  }

  return (
    <AppNavigation />
  )
}

export default App;