import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './PostsScreen.styles';
import { SimpleLineIcons, AntDesign, Feather } from '@expo/vector-icons';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/Auth/selectors';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase/config';

export const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const [photo, setPhoto] = useState(user.photoURL);

  useEffect(() => {
    if (route.params && !posts.includes(route.params))
      setPosts((prevstate) => [...prevstate, route.params]);
  }, [route.params]);

  // useEffect(() => {
  //   updateProfile(auth.currentUser, {
  //     displayName: user.login,
  //     photoURL: user.userPhoto,
  //   })
  //     .then(() => {
  //       console.log('Updated!!!');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    // const storageRef = ref(storage, 'photos');
    // const testImg = fetch(photo);
    // console.log(photo);
    // console.log(testImg);
    // const testFile = testImg.blob();
    // uploadBytes(storageRef, testFile).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.user}>
          <Image source={require('../../../assets/images/UserAva.jpg')} style={styles.userAvatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        {posts?.length !== 0 && (
          <SafeAreaView style={{ paddingBottom: 70 }}>
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={{ uri: item.uri }}
                    style={{ height: 240, borderRadius: 8, resizeMode: 'cover', marginTop: 32 }}
                  />
                  <Text style={{ marginTop: 8, fontFamily: 'Medium' }}>{item.postTitle}</Text>
                  <View style={{ flexDirection: 'row', marginTop: 11 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Comment', { uri: item.uri })}
                      >
                        <Image
                          source={require('../../../assets/images/Shape.png')}
                          style={{ width: 18, height: 18, marginRight: 9 }}
                        />
                      </TouchableOpacity>
                      <Text>0</Text>
                    </View>
                    <TouchableOpacity
                      style={{ flexDirection: 'row', marginLeft: 50 }}
                      onPress={() =>
                        navigation.navigate('Map', {
                          location: item.location,
                          title: item.postTitle,
                        })
                      }
                    >
                      <SimpleLineIcons
                        name="location-pin"
                        size={18}
                        color="#BDBDBD"
                        style={{ marginRight: 8 }}
                      />
                      <Text style={{ textDecorationLine: 'underline' }}>{item.postLocation}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.postTitle}
            />
          </SafeAreaView>
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <AntDesign name="appstore-o" size={25} color="#4169e1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerBtn}
          onPress={() => navigation.navigate('CreatePostsScreen')}
        >
          <AntDesign name="plus" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Feather name="user" size={25} color={'#BDBDBD'} />
        </TouchableOpacity>
      </View>
    </>
  );
};
