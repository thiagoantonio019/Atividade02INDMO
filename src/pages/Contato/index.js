import { View, Text, Image, SafeAreaView, StyleSheet, Button, TextInput } from "react-native"



export default function Contato() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Nome:</Text>
                <TextInput style={styles.input} placeholder="Insira seu nome"></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text>Numero:</Text>
                <TextInput style={styles.input} placeholder="numero"></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text>Email:</Text>
                <TextInput style={styles.input} placeholder="email@example.com"></TextInput>
            </View>

            <Button title='Enviar' onPress={()=> alert('Contato Cadastrado com secesso!!')}/>
            
        </SafeAreaView>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', 
    },
    inputContainer: {
        marginBottom: 20, 
    },
    input: {
        height: 40, 
        width: 300, 
        borderWidth: 1, 
        borderColor: '#cccccc',
        borderRadius: 5, 
        paddingLeft: 10, 
        marginTop: 5, 
        backgroundColor: '#ffffff', 
    },
});