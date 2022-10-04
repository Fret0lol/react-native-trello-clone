import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Alert, Keyboard, SafeAreaView } from 'react-native'
import { ajoutTache } from '../api/database';
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { TodoContext } from '../context';
import { styles } from '../styles';

export function NewTache() {
    const [tache, settache] = useState("");
    const { user, settaches, taches } = useContext(TodoContext);
    const handleClick = () => {
        Keyboard.dismiss()
        //    console.log(tache);
        ajoutTache(user.uid, tache).then(() => {
            Alert.alert('Tache ajouté')
            settaches([...taches, tache])
        }).catch(err => Alert.alert(err))
        // connectUser(login, mdp).then(data => {
        //     setuser(data);
        // }).catch(err => Alert.alert(err))
    }
    return (
        <SafeAreaView style={styles.safe}>

            <View style={styles.contConnect}>
                <MyInput label={"tache"} valeur={tache} etat={settache} />
                <MyBout label="Valider" click={handleClick} />

            </View>
            <StatusBar ></StatusBar>
        </SafeAreaView>

    )
}