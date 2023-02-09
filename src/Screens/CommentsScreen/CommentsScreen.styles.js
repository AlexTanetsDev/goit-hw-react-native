import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  photo: {
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },

  input: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    height: 50,
    paddingLeft: 16,
    paddingRight: 45,
    fontFamily: 'Medium',
    fontSize: 16,
    lineHeight: 19,
  },

  addCommentBtn: {
    position: 'absolute',
    top: 13,
    right: 8,

    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  postContentBox: {
    backgroundColor: '#F6F6F6',
    flexGrow: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    padding: 16,
    maxWidth: '87%',
  },
});
