import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../containers/HomeScreen';

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarVisible: false,
      header: null,
      gesturesEnabled: false,
    },
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      MainStack: MainStack,
    },
    {
      initialRouteName: 'MainStack',
    }
  )
);

export default AppContainer;
