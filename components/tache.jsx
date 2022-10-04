import { Text, View } from "react-native";
import { styles } from "../styles";

export function Tache({ nom }) {
    return (
        <View style={styles.tache}>
            <Text style={styles.tacheTxt}>{nom}</Text>
        </View>
    )
}