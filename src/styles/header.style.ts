import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  titleView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 22,
    marginLeft: 20,
  },
  pencilIcon: {
    color: '#26cf68',
    fontSize: 20,
  },
  inputView: {
    position: 'relative',
    color: '#fff',
  },
  input: {
    height: 40,
    marginTop: 15,
    padding: 10,
    paddingLeft: 38,
    backgroundColor: '#2e2e42',
    borderRadius: 20,
    color: '#fff',
    placeholderTextColor: '#fff',
  },
  inputIcon: {
    position: 'absolute',
    top: 25,
    left: 10,
    fontSize: 24,
    color: '#fff',
  },
});
