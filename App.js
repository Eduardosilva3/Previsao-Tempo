import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import { Ionicons, FontAwesome , Feather, FontAwesome5} from '@expo/vector-icons';
import PrevisaoToday from './src/PrevisaoToday';
import { SvgUri } from 'react-native-svg';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.text}>Fortaleza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        
      </View>
      <View style={styles.previsaoToday}>
        <PrevisaoToday></PrevisaoToday>
      </View>
      <View style={styles.cardVento}>
        <View style={styles.textInfo}>
        <FontAwesome5 name="cloud-rain" size={24} color="white" />
        <Text style={styles.text}>6%</Text>
        </View>
        <View style={styles.textInfo}>
        <FontAwesome name="thermometer" size={24} color="white" />
        <Text style={styles.text}>90%</Text>
        </View>
        <View style={styles.textInfo}>
        <Feather name="wind" size={24} color="white" />
        <Text style={styles.text}>19 Km/h</Text>
        </View>
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
    marginTop: '10%' // Para garantir que o cabeçalho esteja sobre o conteúdo
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    color: '#fff',
    marginLeft: 5,
    marginRight: 8
    

  }, 
  previsaoToday:{
    top: -150
  },
  cardVento:{
    backgroundColor: '#1e3887',
    width: '80%',
    height: '8%',
    bottom: 350,
    borderRadius: 10, 
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInfo:{
    display:'flex',
    flexDirection: 'row',
    marginLeft: 8
  }

});
