import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

const FadeInView = ({ children, isMenuOpen, style }) => {

  const [ fadeAnim ] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: isMenuOpen ? style.height : 0,
        duration: 200,
      },
    ).start()
  }, [ isMenuOpen ])

  return (
    <Animated.View style={{ ...style, height: fadeAnim }}>
      {children}
    </Animated.View>
  )
}
export default FadeInView