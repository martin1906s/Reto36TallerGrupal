import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, Soy Martin Simbaña 😉</Text>
        <Text style={styles.p1}>Agua</Text>
        <Text style={styles.p2}>Papas</Text>
        <Text style={styles.p3}>Arroz</Text>     
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blueviolet',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p1:{
        backgroundColor: 'white',
    },
    p2:{
        backgroundColor: 'greenyellow',
    },
    p3:{
        backgroundColor: 'crimson',
    },
  });