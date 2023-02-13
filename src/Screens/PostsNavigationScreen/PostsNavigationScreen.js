import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen } from '../PostsScreen/PostsScreen';
import { CommentsScreen } from '../CommentsScreen/CommentsScreen';
import { MapScreen } from '../MapScreen/MapScreen';
import { MaterialIcons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Auth/authSlice';

const PostsStack = createStackNavigator();

export const PostsNavigationScreen = () => {
  const dispatch = useDispatch();

  return (
    <PostsStack.Navigator>
      <PostsStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity style={{ marginRight: 10 }} onPress={() => dispatch(logOut())}>
                <MaterialIcons name="logout" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            );
          },
          headerTitle: 'Публикации',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Medium', fontSize: 17, lineHeight: 22 },
        }}
      />
      <PostsStack.Screen
        name="Comment"
        component={CommentsScreen}
        options={{
          headerTitle: 'Комментарии',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Medium', fontSize: 17, lineHeight: 22 },
        }}
      />
      <PostsStack.Screen name="Map" component={MapScreen} />
    </PostsStack.Navigator>
  );
};
