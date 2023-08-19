import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#f60', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%'
    }, 
    texto : {
        color: '#fff', 
        fontSize: 30, 
    },
    botao: {
        margin: 5,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 30,
        padding: 10,
        width: '50%',
        textAlign: 'center',
        alignItems: 'center',
    },
    txtBotao: {
        color: 'blue'
    }
});

export default styles;