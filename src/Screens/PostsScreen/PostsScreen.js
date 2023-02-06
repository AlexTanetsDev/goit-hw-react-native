import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, Item } from 'react-native';
import { styles } from './PostsScreen.styles';

export const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  console.log('posts', posts);
  useEffect(() => {
    console.log('arrived', route.params);
    if (route.params) setPosts((prevstate) => [...prevstate, route.params]);
  }, [route.params]);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={require('../../../assets/UserAva.jpg')} style={styles.userAvatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      {posts?.length !== 0 && (
        <SafeAreaView>
          <FlatList
            data={posts}
            renderItem={({ item }) => <Text>{item.postTitle}</Text>}
            keyExtractor={(item) => item.postTitle}
          />
        </SafeAreaView>
      )}
    </View>
  );
};
