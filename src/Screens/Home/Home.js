import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Home.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from '../PostsScreen/PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen/CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <View style={styles.container}>
      <Tabs.Navigator>
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity style={styles.logoutBtn}>
                  <MaterialIcons name="logout" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              );
            },
            headerTitle: 'Публикации',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: 'Medium', fontSize: 17, lineHeight: 22 },
            tabBarShowLabel: false,
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="appstore-o" size={size} color={color} />;
            },
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
