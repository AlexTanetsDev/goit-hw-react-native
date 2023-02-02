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
});
