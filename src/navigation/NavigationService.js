import { CommonActions } from '@react-navigation/native'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    )
  }
}

function navigateAndReset(routeName) {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.reset({
        index: 0,
        key: null,
        routes: [
          { name: routeName },
        ],
      }),
    )
  }
}

function goBack() {
  if (_navigator) {
    _navigator.dispatch(CommonActions.goBack())
  }
}

const NavigationService = {
  navigate,
  goBack,
  navigateAndReset,
  setTopLevelNavigator,
}

export default NavigationService
