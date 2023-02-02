import { View, Text, Image } from 'react-native';
import { styles } from './PostsScreen.styles';

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={require('../../../assets/UserAva.jpg')} style={styles.userAvatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};
