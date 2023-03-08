import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from '../RegistrationSccreen/RegistrationScreen';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { Home } from '../Home/Home';
import { useSelector } from 'react-redux';
import { selectError, selectLoginStatus } from '../../Redux/Auth/selectors';
import { View, Text, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Auth/authSlice';

const MainStack = createStackNavigator();

export const RootRoutingPage = () => {
  const dispatch = useDispatch();
  const logInStatus = useSelector(selectLoginStatus);
  const error = useSelector(selectError);

  return (
    <>
      {logInStatus === 'default' && (
        <MainStack.Navigator initialRouteName="RegistrationScreen">
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
        </MainStack.Navigator>
      )}

      {logInStatus === 'pending' && (
        <View>
          <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 30 }}>
            Wait a minute. Checking.......
          </Text>
        </View>
      )}
      {logInStatus === 'rejected' && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 30, color: 'red' }}>
            {error}
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              borderRadius: 20,
              alignSelf: 'center',
              backgroundColor: '#BDBDBD',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
            onPress={() => dispatch(logOut())}
          >
            <Text style={{ fontFamily: 'Medium', fontSize: 18, color: '#fff' }}>GO Back</Text>
          </TouchableOpacity>
        </View>
      )}
      {logInStatus === 'fulfield' && <Home />}
    </>
  );
};
