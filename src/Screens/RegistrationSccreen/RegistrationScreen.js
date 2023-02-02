import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Keyboard,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useState, useEffect } from 'react';
import { registrStyles } from './RegaistrationScreen.styles';

export const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [isLoginInputOnFocus, setIsLoginInputOnFocus] = useState(false);
  const [isPassImputOnFocus, setIsPassImputOnFocus] = useState(false);
  const [isEmailImputOnFocus, setIsEmailImputOnFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidLogin, setIsValidLogin] = useState(true);
  const [isValidPassvord, setIsValidPassvord] = useState(true);

  const [isHorizontal, setIsHorizontal] = useState(Dimensions.get('window').width > 450);

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (mailformat.test(email)) {
      setIsValidEmail(true);
    }
  }, [email]);

  useEffect(() => {
    if (login !== '') {
      setIsValidLogin(true);
    }
  }, [login]);

  useEffect(() => {
    if (password !== '') {
      setIsValidPassvord(true);
    }
  }, [password]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsHorizontal(window.width > 450);
    });
    return () => subscription?.remove();
  }, []);

  const handleEmailImputChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLoginChange = (value) => {
    setLogin(value);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (email === '' || password === '' || login === '' || !isValidEmail) {
      alert('Заполните все поля или проверьте правильность ввода!');
      return;
    }

    console.log({ email: email, login: login, password: password });
    setEmail('');
    setLogin('');
    setPassword('');
    navigation.navigate('Home');
  };

  const togglePasswordShow = () => setShowPassword(!showPassword);

  const validationEmail = () => {
    if (!mailformat.test(email)) {
      setIsValidEmail(false);
    }
  };

  const validationPassword = () => {
    if (password === '') {
      setIsValidPassvord(false);
    }
  };

  const validationLogin = () => {
    if (login === '') {
      setIsValidLogin(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require('../../../assets/PhotoBG.jpg')}
        style={registrStyles.backgroundImg}
      >
        <View style={registrStyles.wrapper}>
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : ''}>
            <View style={registrStyles.registrationFormBox}>
              <View style={registrStyles.avatarBox}>
                <View style={registrStyles.addAvatarBtn}>
                  <Image source={require('../../../assets/Union.png')}></Image>
                </View>
              </View>

              <Text
                style={{
                  ...registrStyles.formTitle,
                  marginBottom: isHorizontal ? 10 : 33,
                }}
              >
                Регистрация
              </Text>
              <View style={registrStyles.form}>
                <View style={{ marginBottom: 16 }}>
                  {!isValidLogin && (
                    <Text style={registrStyles.inValidValue}>Это обязательное поле</Text>
                  )}
                  <TextInput
                    style={isLoginInputOnFocus ? registrStyles.inputOnFocus : registrStyles.input}
                    placeholder={'Логин'}
                    placeholderTextColor={'#BDBDBD'}
                    onChangeText={handleLoginChange}
                    value={login}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsLoginInputOnFocus(true);
                    }}
                    onSubmitEditing={() => setIsShowKeyboard(false)}
                    onBlur={() => {
                      setIsLoginInputOnFocus(false);
                      validationLogin();
                    }}
                  />
                </View>

                <View style={{ marginBottom: 16 }}>
                  {!isValidEmail && (
                    <Text style={registrStyles.inValidValue}>Некорректное значение</Text>
                  )}

                  <TextInput
                    style={isEmailImputOnFocus ? registrStyles.inputOnFocus : registrStyles.input}
                    keyboardType={'email-address'}
                    placeholder={'Адрес электронной почты'}
                    placeholderTextColor={'#BDBDBD'}
                    onChangeText={handleEmailImputChange}
                    value={email}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsEmailImputOnFocus(true);
                    }}
                    onSubmitEditing={() => setIsShowKeyboard(false)}
                    onBlur={() => {
                      setIsEmailImputOnFocus(false);
                      validationEmail();
                    }}
                  />
                </View>

                <View style={{ marginBottom: isHorizontal ? 15 : 43 }}>
                  {!isValidPassvord && (
                    <Text style={registrStyles.inValidValue}>Это обязательное поле</Text>
                  )}
                  <View style={{ position: 'relative' }}>
                    <Text style={registrStyles.passwordShowText} onPress={togglePasswordShow}>
                      {!showPassword ? 'Показать' : 'Скрыть'}
                    </Text>

                    <TextInput
                      style={isPassImputOnFocus ? registrStyles.inputOnFocus : registrStyles.input}
                      secureTextEntry={!showPassword}
                      placeholder={'Пароль'}
                      placeholderTextColor={'#BDBDBD'}
                      onChangeText={handlePasswordChange}
                      value={password}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsPassImputOnFocus(true);
                      }}
                      onSubmitEditing={() => setIsShowKeyboard(false)}
                      onBlur={() => {
                        setIsPassImputOnFocus(false);
                        validationPassword();
                      }}
                    />
                  </View>
                </View>

                {!isShowKeyboard && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={registrStyles.btn}
                    onPress={handleSubmit}
                  >
                    <Text style={registrStyles.btnTitle}>Войти</Text>
                  </TouchableOpacity>
                )}
              </View>

              {!isShowKeyboard && (
                <Text
                  style={{
                    ...registrStyles.navLink,
                    marginBottom: isHorizontal ? 0 : 30,
                  }}
                >
                  Уже есть аккаунт?{' '}
                  <Text onPress={() => navigation.navigate('LoginScreen')}>Войти</Text>
                </Text>
              )}
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
