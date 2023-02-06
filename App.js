import { ImageBackground, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from './src/Screens/RegistrationSccreen/RegistrationScreen';
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';
import { Home } from './src/Screens/Home/Home';

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Medium: require('./assets/fonts/Roboto-Medium.ttf'),
    Bold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen
            options={{ headerShown: false }}
            name="RegistrationScreen"
            component={RegistrationScreen}
          />
          <MainStack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <MainStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
