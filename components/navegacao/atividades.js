import { View, Text, TouchableOpacity } from 'react-native';

// importa arquivo de estilização
import styles from './exemplosStyles.js';

// definição das funções dos componentes
function Atividades({ navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto} >
                Atividades
            </Text>
            
        <TouchableOpacity
            title='Atividade 1'
            onPress={() => navigation.navigate('Atv1')}
            style={styles.botao}

        >
            <Text style={styles.txtBotao}>Atividade 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
            title='Atividade 2'
            onPress={() => navigation.navigate('Atv2')}
            style={styles.botao}

        >
            <Text style={styles.txtBotao}>Atividade 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
            title='Atividade 3'
            onPress={() => navigation.navigate('Atv3')}
            style={styles.botao}

        >
            <Text style={styles.txtBotao}>Atividade 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
            title='Atividade 4'
            onPress={() => navigation.navigate('Atividade 4')}
            style={styles.botao}

        >
            <Text style={styles.txtBotao}>Atividade 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
            title='Atividade 5'
            onPress={() => navigation.navigate('Atividade 5')}
            style={styles.botao}

        >
            <Text style={styles.txtBotao}>Atividade 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
            title='Atividade 6'
            onPress={() => navigation.navigate('Atividade 1')}
            style={styles.botao}

        >
            <Text style={styles.txtBotao}>Atividade 6</Text>
        </TouchableOpacity>
        <TouchableOpacity
            title='Atividade 7'
            onPress={() => navigation.navigate('Atv7')}
            style={styles.botao}

        >
            <Text style={styles.txtBotao}>Atividade 7</Text>
        </TouchableOpacity>
        </View>
    );
}

// definição da função padrão que será exportada (nem sempre é necessário)
export default Atividades;