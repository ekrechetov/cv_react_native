import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
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

      <ScrollView contentContainerStyle={styles.content}>
        <View>
          {
            projects.map((item, index) =>
              <PortfolioItem key={index} project={item} />,
            )
          }

          <Button
            title={'next'}
            onPress={() => NavigationService.navigate('Experience')}
          />
        </View>
      </ScrollView>

    </SafeAreaView >
  )
}
export default Portfolio

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  content: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 26,
    maxWidth: 600,
  },
})