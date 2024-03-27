import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import imagens from './Imagens';





export default function PrevisaoToday({dados}) {
  
  
 

  



  return (
    <View style={styles.container}>
        <Image
        source={imagens[dados.condition_slug]}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.textTemp}>{dados.temp}°</Text>
      <Text style={styles.text}>Precipitação</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={styles.text}>Max.: {dados.forecast[0].max}°</Text>
        <Text style={styles.text}>Min.: {dados.forecast[0].min}°</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
