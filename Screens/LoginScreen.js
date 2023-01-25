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
    ImageBackground
} from "react-native";
import { useState } from "react";

export const LoginScreen = () => {
    const [loginFormValue, setLoginFormValue] = useState({email: '', password: ''});
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    
    const handleEmailImputChange = (value) => {
        setLoginFormValue((prevstate) => { return { ...prevstate, email: value } });
    }; 

    const handlePasswordChange = (value) => {
         setLoginFormValue((prevstate) => { return { ...prevstate, password: value } });
    };

      const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
      };
    

    return (
        
        <TouchableWithoutFeedback onPress={keyboardHide} >
            <ImageBackground source={require('../assets/PhotoBG.jpg')} style={styles.backgroundImg}>
                {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}> */}
         
                    <View style={styles.registrationFormBox}>

                        <Text style={styles.formTitle} >
                            Войти
                        </Text>
                        <View style={styles.form}>
                
                            <TextInput style={styles.input}
                                keyboardType={'email-address'}
                                placeholder={"Адрес электронной почты"}
                                onChangeText={handleEmailImputChange}
                                value={loginFormValue.email}
                                onFocus={() => setIsShowKeyboard(true)}
                                onSubmitEditing={() => setIsShowKeyboard(false)} />
       
                            <TextInput style={{ ...styles.input, marginBottom: 43 }}
                                secureTextEntry={true}
                                placeholder={'Пароль'}
                                onChangeText={handlePasswordChange}
                                value={loginFormValue.password}
                                onFocus={() => setIsShowKeyboard(true)}
                                onSubmitEditing={() => setIsShowKeyboard(false)} />
                
                            {!isShowKeyboard && <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                                <Text style={styles.btnTitle}>Войти</Text>
                            </TouchableOpacity>}
                        </View>
        
                        {!isShowKeyboard && <Text style={styles.navLink}>
                            Нет аккаунта? Зарегистрироваться
                        </Text>}

                    </View>
        
                {/* </KeyboardAvoidingView> */}
       
            </ImageBackground>
        </TouchableWithoutFeedback>
    
    );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,   
    justifyContent: 'flex-end',
    resizeMode: 'cover'
  },

    registrationFormBox: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#FFFFFF",
    
  
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
        backgroundColor: '#F6F6F6',
        padding: 16,
        marginBottom: 16,

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
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 65,
    },

});