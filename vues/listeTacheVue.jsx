import { useContext, useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { getMesTaches } from "../api/database";
import { Tache } from "../components/tache";
import { TodoContext } from "../context";
import { styles } from "../styles";

export function ListeTacheVue() {

    const { user, taches, settaches } = useContext(TodoContext);
    useEffect(() => {
        getMesTaches(user.uid).then(data => {
            settaches(data);
        })

    }, []);
    return (
        <SafeAreaView style={styles.safe}>
            <View>
                {taches.map((elem, key) => <Tache key={key} nom={elem} />)}

            </View>
        </SafeAreaView>
    )
}