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
    ImageBackground,
    Dimensions
} from "react-native";
import { useState, useEffect } from "react";




export const LoginScreen = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isLoginInputOnFocus, setIsLoginInputOnFocus] = useState(false);
    const [isPassImputOnFocus, setIsPassImputOnFocus] = useState(false)

    const [showPassword, setShowPassword] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassvord, setIsValidPassvord] = useState(true);
    
     const [isHorizontal, setIsHorizontal] = useState(Dimensions.get('window').width > 450);
    
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
    
       useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({ window }) => {
              
                setIsHorizontal(window.width > 450);
            
            },
        );
        return () => subscription?.remove();
    });
    
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
        
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <ImageBackground source={require('../assets/PhotoBG.jpg')} style={styles.backgroundImg}>
         
            <View style={styles.wrapper}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : ""}>
                    <View style={styles.registrationFormBox}>

                        <Text style={styles.formTitle} >
                            Войти
                        </Text>
                        <View style={styles.form}>
                            <View style={{marginBottom: 16}}>
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
                       
                        
                            <View style={{marginBottom: isHorizontal ? 20 : 43}}>
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
        
                            {!isShowKeyboard && <Text style={{ ...styles.navLink, marginBottom: isHorizontal? 20 : 115 }}>
                            Нет аккаунта? Зарегистрироваться
                        </Text>}

                    </View>
                </KeyboardAvoidingView>
            </View>
                  
        
          </ImageBackground>
       
        </TouchableWithoutFeedback>
    
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
       
    },
          backgroundImg: {
    flex: 1,
    resizeMode: 'cover'
  },

    registrationFormBox: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#FFFFFF",
        paddingBottom: 15,
  
    },

    formTitle: {
        fontFamily: 'Medium',
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
     

    },

    inputOnFocus: {
        height: 50,
        borderRadius: 8,
        padding: 16,
     

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
      
    
    },
    btnTitle: {
        color: "#f0f8ff",
        fontSize: 18,
    },
  
    navLink: {
        fontFamily: 'Regular',
        textAlign: 'center',
        marginTop: 16,
       
        color: '#1B4371',
    },

});