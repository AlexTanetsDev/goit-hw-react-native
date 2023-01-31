import { StyleSheet } from 'react-native';

export const registrStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    backgroundImg: {
        flex: 1,
        resizeMode: 'cover',
    },

    registrationFormBox: {
        position: 'relative',

        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFFFFF',
        paddingBottom: 60,
    },

    avatarBox: {
        position: 'absolute',
        top: -60,

        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        alignSelf: 'center',
        borderRadius: 16,
    },

    addAvatarBtn: {
        position: 'absolute',
        bottom: 20,
        right: -12,

        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#FF6C00',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#FFFFFF',

        width: 25,
        height: 25,
    },

    formTitle: {
        fontFamily: 'Medium',
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
        textAlign: 'center',
        marginTop: 16,
        color: '#1B4371',
    },
});
