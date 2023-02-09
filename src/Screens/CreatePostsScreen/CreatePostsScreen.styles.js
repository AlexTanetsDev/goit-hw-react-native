import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: '#fff',
  },
  customHeader: {
    position: 'relative',
    backgroundColor: '#fff',
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: '#0000004D',
    justifyContent: 'flex-end',
    paddingBottom: 11,
    paddingLeft: 20,
    paddingRight: 20,
  },

  screenTitle: {
    alignSelf: 'center',
    fontFamily: 'Medium',
    fontSize: 17,
    lineHeight: 22,
  },
  photo: {
    backgroundColor: '#E8E8E8',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },

  camera: {
    height: '80%',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },

  addPhotoBtn: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,

    alignItems: 'center',
    justifyContent: 'center',
  },

  photoTitle: { fontSize: 16, color: '#BDBDBD' },

  postName: {
    marginTop: 33,
  },

  postNameInput: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    fontSize: 16,
  },

  postLocation: {
    position: 'relative',
    marginTop: 16,
  },

  postLocationInput: {
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    fontSize: 16,
  },

  addPostBtn: {
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },

  addBtnTitle: {
    fontSize: 16,
  },

  deletePostBtn: {
    backgroundColor: '#F6F6F6',
    width: 70,
    height: 40,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
  },
});
