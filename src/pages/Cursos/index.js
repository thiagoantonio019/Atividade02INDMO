import { View, Text, Image, SafeAreaView,StyleSheet, Button } from "react-native"



export default function Cursos() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>DESENVOLVIMENTO DE SISTEMAS</Text>
                <Text style={styles.subtitulo}>Desenvolver sites</Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.titulo}>Eletricista de manutenção</Text>
                <Text style={styles.subtitulo}>elétrica Industrial e Predial</Text>
            </View>


            <View style={styles.box}>
                <Text style={styles.titulo}>Exel Basico</Text>
                <Text style={styles.subtitulo}>Aprender os fundamentos do Exel</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    box: {
        borderWidth: 1, 
        borderColor: 'grey', 
        padding: 20, 
        marginBottom: 20, 
        width: '100%', 
        backgroundColor: '#f0f0f0', 
    },
    titulo: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitulo: {
        textAlign: 'center',
    },
});