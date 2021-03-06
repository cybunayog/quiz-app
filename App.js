import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Quiz from './screens/Quiz';
import QuizIndex from './screens/QuizIndex';

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Quizzes',
    },
  },
  Quiz: {
    screen: Quiz,
    // Object destructring
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.getParam("title"),
      headerStyle: {
        beckgroundColor: navigation.getParam("color")
      },
    }),
  },
});

const AppNavigator = createAppContainer(MainStack);

export default AppNavigator;
