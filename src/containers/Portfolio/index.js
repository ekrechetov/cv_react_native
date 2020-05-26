import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import { Colors } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import ASSETS from '../../assets'
import AppBar from '../../components/AppBar'
import IconButton from '../../components/IconButton'
import HrLine from '../../components/hrLine'
import { projects } from '../../assets/projects'
import PortfolioItem from '../../components/PortfolioItem'

const Portfolio = () => {

  const onSettings = () => {
    console.log('Click')
  }

  const rightPartContent = (
    <IconButton
      source={ASSETS.settings}
      imageStyle={{ width: 20, height: 20 }}
      onPress={onSettings}
    />
  )

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="Portfolio"
        rightPartContent={rightPartContent}
      />

      <HrLine />

      <ScrollView contentContainerStyle={ styles.content }>

        {
          projects.map((item, index) =>
            <PortfolioItem key={index} project={item} />,
          )
        }

        <Button
          title={'next'}
          onPress={() => NavigationService.navigate('Experience')}
        />

      </ScrollView>

    </SafeAreaView >
  )
}
export default Portfolio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teal,
  },
  content: {
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 26,
  },
})