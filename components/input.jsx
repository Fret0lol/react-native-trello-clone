import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles'
export function MyInput({ label, valeur, etat }) {
    return (
        <View style={styles.contener}>
            <Text style={styles.labelInput}>{label}</Text>
            <TextInput value={valeur} onChangeText={etat} style={styles.input} />
        </View>
    )
}