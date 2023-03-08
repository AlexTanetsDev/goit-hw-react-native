import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { styles } from './CommentsScreen.styles';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export const CommentsScreen = ({ route, navigation }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const { uri } = route.params;

  const onCommentSent = () => {
    if (comment.trim() === '') {
      alert('Комментарий не можит быть пустым!');
      return;
    }

    setComments((prevstate) => [...prevstate, comment]);
    setComment('');
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.photo} />
      {comments?.length !== 0 && (
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', marginTop: 24 }}>
                <View style={styles.postContentBox}>
                  <Text style={{ fontSize: 13 }}>{item}</Text>
                  <Text style={{ fontSize: 10, color: '#BDBDBD' }}>Date/Of/post</Text>
                </View>
                <Image
                  source={require('../../../assets/images/UserAva.jpg')}
                  style={{ height: 28, width: 28, borderRadius: 14, marginLeft: 16 }}
                />
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </SafeAreaView>
      )}

      <View style={{ marginTop: 'auto', position: 'relative', paddingTop: 5 }}>
        <TextInput
          style={styles.input}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
          value={comment}
          onChangeText={(value) => setComment(value)}
          multiline={true}
          // textAlignVertical="top"
        />
        <TouchableOpacity style={styles.addCommentBtn} onPress={onCommentSent}>
          <AntDesign name="arrowup" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
