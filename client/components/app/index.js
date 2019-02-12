import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import CameraScreen from './CameraScreen';
import PhotoPreviewScreen from './PhotoPreviewScreen';
import ActivityScreen from './ActivityScreen';
import UserScreen from './UserScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Instagram',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
const ExploreStack = createStackNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        headerTitle: 'Search',
      },
    },
  },
  {
    initialRouteName: 'Explore',
  }
);
const PostStack = createStackNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        headerTitle: 'Camera',
      },
    },
    Preview: {
      screen: PhotoPreviewScreen,
      navigationOptions: {
        headerTitle: 'Preview',
      },
    },
  },
  {
    initialRouteName: 'Camera',
  }
);
const ActivityStack = createStackNavigator(
  {
    Activity: {
      screen: ActivityScreen,
      navigationOptions: {
        headerTitle: 'Activity',
      },
    },
  },
  {
    initialRouteName: 'Activity',
  }
);
const UserStack = createStackNavigator(
  {
    User: {
      screen: UserScreen,
      // navigationOptions: {
      //   headerTitle: 'You',
      // },
    },
  },
  {
    initialRouteName: 'User',
  }
);

const AppTabs = createBottomTabNavigator(
  {
    HomeTab: HomeStack,
    ExploreTab: ExploreStack,
    PostTab: PostStack,
    ActivityTab: ActivityStack,
    UserTab: UserStack,
  },
  {
    initialRouteName: 'HomeTab',
  }
);

export default AppTabs;
