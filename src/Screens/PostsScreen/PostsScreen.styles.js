import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },

  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 15,
    resizeMode: 'cover',
    marginRight: 8,
  },

  userName: {
    fontFamily: 'Bold',
    fontSize: 13,
  },

  userEmail: {
    fontSize: 11,
  },

  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#BDBDBD',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingBottom: 3,
  },

  footerBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
