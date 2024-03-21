import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function PrevisaoToday() {
  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/nublado.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.textTemp}>31°</Text>
      <Text style={styles.text}>Precipitação</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={styles.text}>Max.: 31°</Text>
        <Text style={styles.text}>Min.: 22°</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b4ab3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    marginTop: '5%' // Para garantir que o cabeçalho esteja sobre o conteúdo
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    color: '#fff',
    paddingRight: '1%',
    paddingLeft: '1%'

  } ,
  textTemp:{
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'

  } ,
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },

});
