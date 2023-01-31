import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backgroundImg: {
        flex: 1,
        resizeMode: 'cover',
    },

    registrationFormBox: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFFFFF',
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
        borderLeftColor: '#FF6C00',
        borderRightColor: '#FF6C00',
        borderTopColor: '#FF6C00',
        borderBottomColor: '#FF6C00',
        backgroundColor: '#fff',
    },

    inValidValue: {
        paddingLeft: 15,
        marginBottom: 5,
        color: 'red',
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
        backgroundColor: '#FF6C00',
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        color: '#f0f8ff',
        fontSize: 18,
    },

    navLink: {
        fontFamily: 'Regular',
        textAlign: 'center',
        marginTop: 16,

        color: '#1B4371',
    },
});
