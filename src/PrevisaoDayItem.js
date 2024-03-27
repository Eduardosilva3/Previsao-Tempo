import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import imagens from './Imagens';


const PrevisaoDayItem = ({ temperatura, icone, hora , dia}) => {
    
     

    const verificaDia = (dia) => {
        const [diaSemana, diaMes] = dia.split('/');

        const diaRecebido = parseInt(diaSemana,10);

        

        const diaData = new Date();
        const diaHoje = diaData.getDate();

       
        
        if(diaRecebido == diaHoje){
            
            return styles.containerDia;
        }else{
            return styles.container;
        }

    }

   
    
  return (
    <View style={verificaDia(dia)}>
      <View style={styles.content}>
        <Text style={styles.dados}>{temperatura}° C</Text>
        <Image
        source={imagens[icone]}
        style={{ width: 40, height: 40 }}
      />
        <Text style={styles.dados}>{hora}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10, 
        
    
        
      },
  containerDia: {
    padding: 10,
    borderRadius: 10, 
    backgroundColor: 'hsla(220, 30%, 40%, 0.3)',
    borderColor: '#add8e6',
    borderWidth: 1,

    
  },
  content: {
    display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dados: {
   padding: 6,
   color: '#fff',
  },    
});

export default PrevisaoDayItem;