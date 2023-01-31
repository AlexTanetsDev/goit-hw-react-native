import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useState, useEffect } from 'react';
import { loginStyles } from './LoginScreen.styles';

export const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isLoginInputOnFocus, setIsLoginInputOnFocus] = useState(false);
  const [isPassImputOnFocus, setIsPassImputOnFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassvord, setIsValidPassvord] = useState(true);

  const [isHorizontal, setIsHorizontal] = useState(
    Dimensions.get('window').width > 450,
  );

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (mailformat.test(email)) {
      setIsValidEmail(true);
    }
  }, [email]);

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

  const handleEmailImputChange = value => {
    setEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (email === '' || password === '' || !isValidEmail) {
      alert('Заполните все поля или проверьте правильность ввода!');
      return;
    }

    console.log({ email: email, password: password });
    setEmail('');
    setPassword('');
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

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require('../../../assets/PhotoBG.jpg')}
        style={loginStyles.backgroundImg}
      >
        <View style={loginStyles.wrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
          >
            <View style={loginStyles.registrationFormBox}>
              <Text style={loginStyles.formTitle}>Войти</Text>
              <View style={loginStyles.form}>
                <View style={{ marginBottom: 16 }}>
                  {!isValidEmail && (
                    <Text style={loginStyles.inValidValue}>
                      Некорректное значение
                    </Text>
                  )}
                  <TextInput
                    style={
                      isLoginInputOnFocus
                        ? loginStyles.inputOnFocus
                        : loginStyles.input
                    }
                    keyboardType={'email-address'}
                    placeholder={'Адрес электронной почты'}
                    onChangeText={handleEmailImputChange}
                    value={email}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsLoginInputOnFocus(true);
                    }}
                    onSubmitEditing={() => setIsShowKeyboard(false)}
                    onBlur={() => {
                      setIsLoginInputOnFocus(false);
                      validationEmail();
                    }}
                    placeholderTextColor={'#BDBDBD'}
                  />
                </View>

                <View style={{ marginBottom: isHorizontal ? 20 : 43 }}>
                  {!isValidPassvord && (
                    <Text style={loginStyles.inValidValue}>
                      Это обязательное поле
                    </Text>
                  )}
                  <View style={{ position: 'relative' }}>
                    <Text
                      style={loginStyles.passwordShowText}
                      onPress={togglePasswordShow}
                    >
                      {!showPassword ? 'Показать' : 'Скрыть'}
                    </Text>
                    <TextInput
                      style={
                        isPassImputOnFocus
                          ? loginStyles.inputOnFocus
                          : loginStyles.input
                      }
                      secureTextEntry={!showPassword}
                      placeholder={'Пароль'}
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
                      placeholderTextColor={'#BDBDBD'}
                    />
                  </View>
                </View>

                {!isShowKeyboard && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyles.btn}
                    onPress={handleSubmit}
                  >
                    <Text style={loginStyles.btnTitle}>Войти</Text>
                  </TouchableOpacity>
                )}
              </View>

              {!isShowKeyboard && (
                <Text
                  style={{
                    ...loginStyles.navLink,
                    marginBottom: isHorizontal ? 20 : 115,
                  }}
                >
                  Нет аккаунта? Зарегистрироваться
                </Text>
              )}
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
