import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import { styles } from './CreatePostsScreen.styles';
import { Fontisto, SimpleLineIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
// test
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../../firebase/config';

export const CreatePostsScreen = ({ navigation }) => {
  const [postName, setPostName] = useState('');
  const [postLocation, setPostLocation] = useState('');
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [photoView, setPhotoView] = useState('default');

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState('');

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onNameChange = (value) => {
    setPostName(value);
  };
  const onLocationChange = (value) => {
    setPostLocation(value);
  };
  const toggleKeyboardShown = () => {
    setIsKeyboardShown(!isKeyboardShown);
  };

  const useDisableBtn = () => {
    return postName === '' || postLocation === '' || photo === '';
  };

  const resetPostState = () => {
    setPhotoView('default');
    setPhoto('');
    setPostName('');
    setPostLocation('');
  };
  return (
    <>
      <View style={styles.customHeader}>
        <TouchableOpacity
          style={{ marginLeft: 16, position: 'absolute', left: 0, bottom: 16 }}
          onPress={() => {
            navigation.goBack();
            setPhotoView('default');
          }}
        >
          <AntDesign name="arrowleft" size={24} color="#212121CC" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>?????????????? ????????????????????</Text>
      </View>
      <View style={styles.container}>
        {!isKeyboardShown && (
          <View style={styles.photoContainer}>
            {photoView === 'default' && (
              <>
                <View style={styles.photo}>
                  <TouchableOpacity
                    style={styles.addPhotoBtn}
                    onPress={() => setPhotoView('camera')}
                  >
                    <Fontisto name="camera" size={20} color="#BDBDBD" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.photoTitle}>?????????????????? ????????</Text>
              </>
            )}

            {photoView === 'camera' && (
              <Camera
                style={styles.camera}
                ref={(ref) => {
                  setCameraRef(ref);
                }}
              >
                <TouchableOpacity
                  style={{ ...styles.addPhotoBtn }}
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                      setPhoto(uri);
                    }
                    setPhotoView('preview');
                  }}
                >
                  <Fontisto name="camera" size={20} color="#BDBDBD" />
                </TouchableOpacity>
              </Camera>
            )}

            {photoView === 'preview' && (
              <View>
                <ImageBackground
                  source={{ uri: photo }}
                  style={styles.photo}
                  imageStyle={{ borderRadius: 8 }}
                >
                  <TouchableOpacity
                    style={{ ...styles.addPhotoBtn }}
                    onPress={() => setPhotoView('camera')}
                  >
                    <Fontisto name="camera" size={20} color="#BDBDBD" />
                  </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.photoTitle}>?????????????????????????? ????????</Text>
              </View>
            )}
          </View>
        )}
        {photoView !== 'camera' && (
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <View>
              <View style={styles.postName}>
                <TextInput
                  placeholder="????????????????..."
                  placeholderTextColor="#BDBDBD"
                  style={styles.postNameInput}
                  onChangeText={onNameChange}
                  value={postName}
                  onFocus={toggleKeyboardShown}
                  onBlur={toggleKeyboardShown}
                />
              </View>
              <View style={styles.postLocation}>
                <SimpleLineIcons
                  name="location-pin"
                  size={24}
                  color="#BDBDBD"
                  style={{ position: 'absolute', left: 0, bottom: 16 }}
                />
                <TextInput
                  placeholder="??????????????????"
                  placeholderTextColor="#BDBDBD"
                  style={styles.postLocationInput}
                  onChangeText={onLocationChange}
                  value={postLocation}
                  onFocus={toggleKeyboardShown}
                  onBlur={toggleKeyboardShown}
                />
              </View>

              <TouchableOpacity
                style={{
                  ...styles.addPostBtn,
                  backgroundColor: useDisableBtn() ? '#F6F6F6' : '#FF6C00',
                }}
                onPress={() => {
                  navigation.navigate('PostsNavScreen', {
                    screen: 'Posts',
                    params: {
                      uri: photo,
                      postTitle: postName,
                      postLocation: postLocation,
                      location: location,
                    },
                  });
                  resetPostState();
                }}
              >
                <Text
                  style={{ ...styles.addBtnTitle, color: useDisableBtn() ? '#BDBDBD' : '#fff' }}
                >
                  ????????????????????????
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )}
        {!isKeyboardShown && photoView !== 'camera' && (
          <TouchableOpacity style={styles.deletePostBtn} onPress={resetPostState}>
            <Feather name="trash-2" size={20} color="#BDBDBD" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
