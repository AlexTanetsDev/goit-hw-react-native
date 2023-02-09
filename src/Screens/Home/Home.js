import { View, TouchableOpacity } from 'react-native';
import { styles } from './Home.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreatePostsScreen } from '../CreatePostsScreen/CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
import { Feather, AntDesign } from '@expo/vector-icons';
import { PostsNavigationScreen } from '../PostsNavigationScreen/PostsNavigationScreen';

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <View style={styles.container}>
      <Tabs.Navigator>
        <Tabs.Screen
          name="PostsNavScreen"
          component={PostsNavigationScreen}
          options={{
            headerShown: false,
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="appstore-o" size={size} color={color} />;
            },
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarButton: (props) => <TouchableOpacity {...props} style={styles.createPostBtn} />,
            tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="plus" size={size} color="#fff" />;
            },
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitleStyle: { fontFamily: 'Medium', fontSize: 17, lineHeight: 22 },
            tabBarShowLabel: false,
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarIcon: ({ focused, color, size }) => {
              return <Feather name="user" size={size} color={color} />;
            },
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};
