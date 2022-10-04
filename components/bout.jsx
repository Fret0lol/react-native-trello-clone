import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles'
export function MyBout({ label, click }) {
    return (
        <TouchableOpacity style={[styles.btn]} onPress={click}>
            <Text style={styles.labelInput}>{label}</Text>
        </TouchableOpacity>
    )
}