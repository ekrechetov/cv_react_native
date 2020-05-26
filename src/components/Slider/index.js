import React, { useState, useRef, useEffect } from 'react'
import SliderItem from './SliderItem'
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'

const Slider = ({ screens }) => {

  const [ selectedIndex, setSelectedIndex ] = useState(0)
  const scrollRef = useRef(null)

  function setActiveDot(event) {
    const { width } = event.nativeEvent.layoutMeasurement
    const contentOffset = event.nativeEvent.contentOffset.x
    const pageIndex = Math.floor(Math.ceil(contentOffset) / width)
    //console.log(contentOffset+" / " + width + " = " + pageIndex)
    setSelectedIndex(pageIndex)
  }

  function scroll() {
    scrollRef.current.scrollTo({
      animated: true,
      y: 0,
      x: Dimensions.get('window').width * selectedIndex,
    })
  }

  function setItem() {
    setSelectedIndex((selectedIndex) =>
      selectedIndex === screens.length - 1 ? 0 : selectedIndex + 1,
    )
  }

  if (scrollRef.current !== null) {
    // console.log("run")
    scroll()
  }

  //autoplay mode:
  useEffect(() => {
    const autoplay = setInterval(setItem, 2000)
    return () => clearInterval(autoplay)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setActiveDot}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {screens.map((item) => SliderItem({ item }))}
      </ScrollView>
      <View>
        <View style={styles.circle}>
          {screens.map((item, index) => (
            <View
              key={item.key}
              style={[ styles.dot, index === selectedIndex && styles.activeDot ]}
            />
          ))
          }
        </View>

      </View>
    </View>
  )
}
export default Slider

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gray',
  },
  scrollView: {
    flexGrow: 0,
  },
  circle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    margin: 6,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
  },
  activeDot: {
    width: 9,
    height: 9,
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
})