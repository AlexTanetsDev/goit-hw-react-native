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
const defaultValues = { email: '', password: '' };

export const LoginScreen = () => {
    const [loginFormValue, setLoginFormValue] = useState(defaultValues);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isLoginInputOnFocus, setIsLoginInputOnFocus] = useState(false);
    const [isPassImputOnFocus, setIsPassImputOnFocus] = useState(false)

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
    
    const handleSubmit = () => {
        console.log(loginFormValue);
        setLoginFormValue(defaultValues)
}

    return (
        
        <TouchableWithoutFeedback onPress={keyboardHide} >
          
         
            <View style={styles.wrapper}>
                   <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={styles.registrationFormBox}>

                    <Text style={styles.formTitle} >
                        Войти
                    </Text>
                    <View style={styles.form}>
                
                        <TextInput style={(isLoginInputOnFocus ? styles.inputOnFocus : styles.input)}
                            keyboardType={'email-address'}
                            placeholder={"Адрес электронной почты"}
                            onChangeText={handleEmailImputChange}
                            value={loginFormValue.email}
                            onFocus={() => {
                                setIsShowKeyboard(true);
                                setIsLoginInputOnFocus(true);
                            }}
                            onSubmitEditing={() => setIsShowKeyboard(false)}
                            onBlur={() => setIsLoginInputOnFocus(false)} />
       
                        <TextInput style={(isPassImputOnFocus ? styles.inputOnFocus : styles.input)}
                            secureTextEntry={true}
                            placeholder={'Пароль'}
                            onChangeText={handlePasswordChange}
                            value={loginFormValue.password}
                            onFocus={() => {
                                setIsShowKeyboard(true);
                                setIsPassImputOnFocus(true)
                            }}
                            onSubmitEditing={() => setIsShowKeyboard(false)}
                            onBlur={() => setIsPassImputOnFocus(false)} />
                
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
    },

});