import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Colors } from '../../styles'
import FadeInView from '../FadeInView'
import { menuItems } from '../../assets/menuItems'
import MenuItem from '../MenuItem'

const DropdownMenu = (props) => {

  return (
    <>
      <FadeInView
        isMenuOpen={props.isMenuOpen}
        style={styles.dropdownMenu}
      >
        {
          menuItems.map((item) =>
            <MenuItem
              key={item.id}
              text={item.text}
              routeName={item.routeName}
              toggleMenu={props.toggleMenu}
            />,
          )
        }
      </FadeInView>

      <TouchableOpacity
        style={[ styles.modal, props.isMenuOpen && { height: Dimensions.get('window').height } ]}
        onPress={() => { props.toggleMenu() }}
      />
    </>
  )
}
export default DropdownMenu

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: -40,
    zIndex: 4,
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