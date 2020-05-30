import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Typography } from '../../styles'

const Contact = (props) => {

  return(
    <View style={styles.container}>
      <Image
        source={props.img}
        style={{ width: 18, height: 18 }}
      />
      <Text style={[ styles.description, props.linked && styles.link ]}>
        {props.description}
      </Text>
    </View>
  )
}
export default Contact

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    ...Typography.text,
    marginLeft: 18,
    paddingVertical: 16,
  },
  link: {
    textDecorationLine: 'underline',
  }
})