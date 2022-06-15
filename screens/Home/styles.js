import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 'initial',
    height: '100%',
},
  logo: {
    width: 50,
    height: 50,
    top: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: '100%',
    marginRight: '10%',
},

  infoText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginRight: 20,
  color: 'white',
},

image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    resizeMode: 'contain',
},


});


export default styles;
