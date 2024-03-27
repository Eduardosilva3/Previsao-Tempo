import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrevisaoDayItem from './PrevisaoDayItem';
import { FlashList } from "@shopify/flash-list";
import { parse } from 'react-native-svg';



export default function PrevisaoDay({dados}) {


    
   
    const mesesAbreviados = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
      ];
    const diaDeHoje = new Date().getDate();
    const mes = new Date().getMonth();
    const mesString = mesesAbreviados[mes];
    //cloud-rain
  return (
    
        <View style={styles.cardVento}>
        <View style={styles.cabecalho}>
        <Text style={styles.text}>Today</Text>
        <Text style={styles.text}>{mesString}, {diaDeHoje}</Text>
        </View>  
        <View style={styles.cardsPrevisao}>


        <FlashList
            data={dados.forecast}
            renderItem={({ item }) => (
                <PrevisaoDayItem
                    temperatura={item.max}
                    icone={item.condition}
                    hora={item.weekday}
                    dia={item.date}
                />
            )}
            estimatedItemSize={10}
            horizontal={true}
           
        />
        

        </View>
        
    </View>
   
  );
}

const styles = StyleSheet.create({
    cardVento:{
        width: '100%',
        height: '100%',
        borderRadius: 10, 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      cabecalho:{
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
        paddingTop: 5,
        
      },
        text:{
            color: '#fff',
            paddingRight: '1%',
            paddingLeft: '1%'
        
        } ,
        cardsPrevisao:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: 10,
            paddingTop: 5,
            paddingBottom: 50,
            borderRadius: 10,
            marginTop: 30,
            marginBottom: 50
        }
      

})
