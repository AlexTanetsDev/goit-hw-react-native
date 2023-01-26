import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const LoginScreen = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isLoginInputOnFocus, setIsLoginInputOnFocus] = useState(false);
    const [isPassImputOnFocus, setIsPassImputOnFocus] = useState(false)

    const [showPassword, setShowPassword] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
     const [isValidPassvord, setIsValidPassvord] = useState(true);
    
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if (mailformat.test(email)) {
            setIsValidEmail(true);
        };
    }, [email]);

   useEffect(() => {
        if (password !== '') {
            setIsValidPassvord(true);
        } 
   }, [password]);
    
          const [fontsLoaded] = useFonts({
      'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf')
  });
    
      const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
    
    
    const handleEmailImputChange = (value) => {
        setEmail(value);
    }; 

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

      const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
      };
    
    const handleSubmit = () => {
if (email === '' || password === '' || !isValidEmail) {
            alert("Заполните все поля или проверьте правильность ввода!");
            return;
            
        };

        console.log({ email: email, password: password });
        setEmail('');
        setPassword('');
    };

    const togglePasswordShow = () => setShowPassword(!showPassword);

    const validationEmail = () => {
         if (!mailformat.test(email)) {
            setIsValidEmail(false);
        };
    };

       const validationPassword = () => {
        if (password === '') {
            setIsValidPassvord(false);
        }
    };
  

    return (
        
        <TouchableWithoutFeedback onPress={keyboardHide} onLayout={onLayoutRootView} >
          
         
            <View style={styles.wrapper}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : ""}>
                    <View style={styles.registrationFormBox}>

                        <Text style={{...styles.formTitle, fontFamily: 'Roboto-Medium'}} >
                            Войти
                        </Text>
                        <View style={styles.form}>
                            <View>
                                {!isValidEmail && <Text style={styles.inValidValue}>Некорректное значение</Text>}
                                <TextInput style={(isLoginInputOnFocus ? styles.inputOnFocus : styles.input)}
                                    keyboardType={'email-address'}
                                    placeholder={"Адрес электронной почты"}
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
                                    placeholderTextColor={'#BDBDBD'} />
                            
                            </View>
                       
                        
                            <View>
                                {!isValidPassvord && <Text style={styles.inValidValue}>Это обязательное поле</Text>}
                                <View style={{ position: "relative" }}>
                                    <Text style={styles.passwordShowText} onPress={togglePasswordShow}>{!showPassword ? 'Показать' : 'Скрыть'}</Text>
                                    <TextInput style={(isPassImputOnFocus ? styles.inputOnFocus : styles.input)}
                                        secureTextEntry={!showPassword}
                                        placeholder={'Пароль'}
                                        onChangeText={handlePasswordChange}
                                        value={password}
                                        onFocus={() => {
                                            setIsShowKeyboard(true);
                                            setIsPassImputOnFocus(true)
                                        }}
                                        onSubmitEditing={() => setIsShowKeyboard(false)}
                                        onBlur={() => {
                                            setIsPassImputOnFocus(false);
                                            validationPassword();
                                        }
                                        }
                                        placeholderTextColor={'#BDBDBD'} />
                                </View>
                           
                            </View>
       
                
                            {!isShowKeyboard && <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={handleSubmit}>
                                <Text style={styles.btnTitle}>Войти</Text>
                            </TouchableOpacity>}
                        </View>
        
                        {!isShowKeyboard && <Text style={styles.navLink}>
                            Нет аккаунта? Зарегистрироваться
                        </Text>}

                    </View>
                </KeyboardAvoidingView>
            </View>
                  
        
          
       
        </TouchableWithoutFeedback>
    
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
       
    },

    registrationFormBox: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#FFFFFF",
        paddingBottom: 17,
  
    },

    formTitle: {
        // fontFamily: ''
        fontSize: 30,
        marginTop: 32,
        marginBottom: 33,
        textAlign: 'center',
   
    },

    form: {
        marginHorizontal: 16,
    },

    input: {
        height: 50,
        borderRadius: 8,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        padding: 16,
        marginBottom: 16,

    },

    inputOnFocus: {
        height: 50,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,

        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderLeftColor: "#FF6C00",
        borderRightColor: "#FF6C00",
        borderTopColor: "#FF6C00",
        borderBottomColor: "#FF6C00",
        backgroundColor: '#fff'
    },

    inValidValue: {
        paddingLeft: 15,
        marginBottom: 5,
        color: "red", 
      fontSize: 16,
    },
    
     passwordShowText: {
        position: 'absolute',
        zIndex: 111,
        right: 16,
        top: 16,
        
         color: '#1B4371',
    },


    btn: {
        backgroundColor: "#FF6C00",
        height: 50,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 27,
    
    },
    btnTitle: {
        color: "#f0f8ff",
        fontSize: 18,
    },
  
    navLink: {
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 45,
        color: '#1B4371',
    },

});