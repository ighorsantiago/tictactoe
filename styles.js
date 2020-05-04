import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt_title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#fff',
    margin: 50,
    marginTop: 50
  },

  btn_inicio: {
    alignSelf: 'center',
    marginTop: 100,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 3, 
  },

  txt: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },

  board: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  square: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 5,
    marginRight: 5,
    justifyContent: 'center'
  },
});

export default styles;