import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import { Styles } from '../../styles'
import Button from '../../components/Button'
import NavigationService from '../../navigation/NavigationService'
import AppBar from '../../components/AppBar'
import HrLine from '../../components/hrLine'
import { projects } from '../../assets/projects'
import PortfolioItem from '../../components/PortfolioItem'

const Portfolio = () => {

  return (
    <SafeAreaView style={styles.container}>

      <AppBar
        headLineText="Portfolio"
      />

      <HrLine />

      <ScrollView
        contentContainerStyle={ styles.contentContainer }
      >
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
    ...Styles.container,
  },
  contentContainer: {
    ...Styles.contentContainer,
  },
})