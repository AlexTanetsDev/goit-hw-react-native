import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './CreatePostsScreen.styles';
import { Fontisto, SimpleLineIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export const CreatePostsScreen = ({ navigation }) => {
  const [postName, setPostName] = useState('');
  const [postLocation, setPostLocation] = useState('');
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

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
    return postName === '' || postLocation === '';
  };

  console.log(navigation);

  return (
    <>
      <View style={styles.customHeader}>
        <TouchableOpacity
          style={{ marginLeft: 16, position: 'absolute', left: 0, bottom: 16 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color="#212121CC;
"
          />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Создать публикацию</Text>
      </View>
      <View style={styles.container}>
        {!isKeyboardShown && (
          <View style={styles.photoContainer}>
            <View style={styles.photo}>
              <TouchableOpacity style={styles.addPhotoBtn}>
                <Fontisto name="camera" size={20} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <Text style={styles.photoTitle}>Загрузите фото</Text>
          </View>
        )}
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View>
            <View style={styles.postName}>
              <TextInput
                placeholder="Название..."
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
                placeholder="Местность"
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
            >
              <Text style={{ ...styles.addBtnTitle, color: useDisableBtn() ? '#BDBDBD' : '#fff' }}>
                Опубликовать
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        {!isKeyboardShown && (
          <TouchableOpacity style={styles.deletePostBtn}>
            <Feather name="trash-2" size={20} color="#BDBDBD" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
