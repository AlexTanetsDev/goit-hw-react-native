import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, Item } from 'react-native';
import { styles } from './PostsScreen.styles';

export const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log('arrived', route.params);
    if (route.params) setPosts((prevstate) => [...prevstate, route.params]);
  }, [route.params]);

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
            renderItem={({ item }) => (
              <View>
                <Image />
                <Text>{item.postName}</Text>
                <View>
                  <View>
                    <Text>CommentsCount</Text>
                  </View>
                  <View>
                    <Text>{item.postLocation}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.postTitle}
          />
        </SafeAreaView>
      )}
    </View>
  );
};
