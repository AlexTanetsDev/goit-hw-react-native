import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native"


export const RegistrationScreen = () => {
    
    return (
        <View style={styles.registrationFormBox}>

            <Text style={styles.formTitle} >
                Регистрация
            </Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder={'Логин'} />
                <TextInput style={styles.input} keyboardType={'email-address'} placeholder={"Адрес электронной почты"} />
                <TextInput style={{ ...styles.input, marginBottom: 43 }} secureTextEntry={true} placeholder={'Пароль'} />
                <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                    <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
            </View>
          
            <Text style={styles.navLink}>
                Уже есть аккаунт? Войти
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    registrationFormBox: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#FFFFFF",
    
  
    },

    formTitle: {
        // fontFamily: ''
        fontSize: 30,
        marginTop: 92,
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