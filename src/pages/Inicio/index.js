import { View, Text, text, text1, Image, SafeAreaView, StyleSheet, Button } from "react-native"



export default function Inicio() {
    return (
      <SafeAreaView>
        {/* Imagem no topo */}
        <Image
          source={require('../../assets/senai.png')}
          style={styles.image}
        />
        {/* Contêiner para o texto */}
        <View style={styles.textContainer}>
          <Text>Thiago Antonio Sousa Santos</Text>
          <Text>Sumaré, 07/02/2024</Text>
          <Text>Escola SENAI Celso Charuri</Text>
          <Text>Técnico em Desenvolvimento de Sistemas</Text>
          <Text>INDMO - Interface para Dispositivos Móveis</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50,
      padding: 20, 
    },
    image: {
      width: 400,
      height: 90,
      marginBottom: 20, 
    },
    textContainer: {
      alignItems: 'center',
      marginTop: 150
    
    },
  });