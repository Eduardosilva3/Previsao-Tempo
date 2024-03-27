import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import { Ionicons, FontAwesome , Feather, FontAwesome5, MaterialIcons} from '@expo/vector-icons';
import PrevisaoToday from './src/PrevisaoToday';
import { LinearGradient } from 'expo-linear-gradient';
import PrevisaoDay from './src/PrevisaoDay';
import ApiClima from './api/ApiClima';
import { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [picketWidth, setPickerWidth] = useState(150);
  const [selectedCity, setSelectedCity] = useState('');

 
  const handleCityChange = (city) => {
    console.log('Cidade selecionada:', city);
    setSelectedCity(city);
  };

  
  const capitaisBrasil = [
    'Fortaleza,CE', 
    'João Pessoa,PB',  'Recife,PE', 'Caruaru,PE', 'Garanhuns,PE','Palmares,PE','Carpina,PE',
    'Porto Alegre,RS', 'São Paulo,SP'
  ];

  const exibiApenasCidade = (cidade) => {
    return cidade.split(',')[0];
  }


  const [dados, setDados] = useState(null);

  const fetchDados = () => {
    ApiClima.getPrevisaoCity(selectedCity)
      .then((response) => {
        
        console.log('Dados recebidos:', response.data);
        setDados(response.data.results);
      })
      .catch((error) => {
        console.error('Houve um erro!', error);
        ApiClima.getPrevisao().then((response) => {
          console.log('Dados recebidos:', response.data);
          setDados(response.data.results);
        }).catch((error) => {
          console.error('Houve um erro!', error);
        });

      });
  }

  useEffect(() => {
    fetchDados();

    const maxLength = capitaisBrasil.reduce((max, cidade) => {
      return cidade.length > max ? cidade.length : max;
    }, 0);

    setPickerWidth(maxLength * 10);
  
  }, [selectedCity]);


  const verificaDiaNoiteEstilo = (dados) => {
    if(dados.currently == 'noite'){
      
      return styles.containerNoite;

    }else{
      return styles.containerDia;
    }
  }

  return (
    dados ? <View style={verificaDiaNoiteEstilo(dados)}>
      <StatusBar style="auto" translucent backgroundColor='transparent' />

      {dados.currently == 'noite' ? <LinearGradient
        // Background Linear Gradient
        colors={['#0b3274', '#2b4ab3']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      /> : <LinearGradient
        // Background Linear Gradient
        colors={['#33abdd', '#33abdd']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />}
      
      <View style={styles.cabecalho}>
      
      <View style={styles.leftContainer}>
    <Ionicons name="location-outline" size={24} color="white" />
    <RNPickerSelect
  onValueChange={handleCityChange}
  items={capitaisBrasil.map((cidade) => ({ label: exibiApenasCidade(cidade), value: cidade }))}
  style={{
    ...pickerSelectStyles,
    iconContainer: {
      top: 12,
      right: 12,
    },
    inputAndroidContainer: {
      ...pickerSelectStyles.inputAndroid,
      width: picketWidth
    },
    }
  }
  placeholder={{ label: dados ? dados.city_name : 'Carregando', value:  dados ? dados.city : ''}}
  Icon={() => {
    return <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
  }}
/>
  </View>

       
       
        
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>
      <View style={styles.previsaoToday}>
        {dados ? <PrevisaoToday dados={dados} /> : <Text>Carregando...</Text>}
      </View>

      <View style={styles.cardVento}>
        <View style={styles.textInfo}>
        <FontAwesome5 name="cloud-rain" size={24} color="white" />
        
        {dados ? <Text style={styles.text}>{dados.forecast[0].rain_probability}%</Text> : <Text>Carregando...</Text>}
        </View>
        <View style={styles.textInfo}>
        <FontAwesome name="thermometer" size={24} color="white" />
        {dados ?  <Text style={styles.text}>{dados.humidity}%</Text> : <Text>Carregando...</Text>}
        </View>
        <View style={styles.textInfo}>
        <Feather name="wind" size={24} color="white" />
        {dados ? <Text style={styles.text}>{dados.wind_speedy}</Text> : <Text>Carregando...</Text>}
        </View>
      </View>
      <View style={styles.cardDay}>
        {dados ? <PrevisaoDay dados={dados} /> : <Text>Carregando...</Text>}
      </View>
      
      
    </View> : <Text>Carregando...</Text>
    
  );
}

const styles = StyleSheet.create({
  containerDia: {
    flex: 1,
    backgroundColor: '#33abdd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNoite: {
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
    top: -70,
    
  },
  cardVento:{
    backgroundColor: 'hsla(220, 30%, 20%, 0.3)',
    width: '80%',
    height: '8%',
    bottom: 300,
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
  },
  cardDay:{
    backgroundColor: 'hsla(220, 30%, 20%, 0.3)',
    width: '80%',
    height: '25%',
    bottom: 280,
    borderRadius: 10, 
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    height: 50, width: 150, color: '#fff', backgroundColor: 'transparent', borderColor: 'white', borderWidth: 1 ,
    marginLeft: 10, // Adicione algum espaço entre o ícone de GPS e o seletor
  },
  itemStyle:{
    color: '#fff',
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 10,
  }

});

const pickerSelectStyles = StyleSheet.create({
  
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
    width: 150,
  },
});

