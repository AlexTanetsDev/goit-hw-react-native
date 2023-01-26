
import { StyleSheet, View, ImageBackground} from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/PhotoBG.jpg')} style={styles.backgroundImg}>

        <LoginScreen />
        {/* <RegistrationScreen /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    backgroundImg: {
        flex: 1,
        resizeMode: 'cover'
    },
});
