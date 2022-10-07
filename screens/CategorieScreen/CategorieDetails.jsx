import React, {useState, useContext, useEffect} from "react";
import {Image, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import styles from "./style";
import {deleteCategorie, getOneCategorie} from "../../api/categorie";
import {TodoContext} from "../../context";

export function CategorieDetails({navigation}) {
	const {user, categorie} = useContext(TodoContext);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			getOneCategorie(user.uid, categorie.name).then((data) => {
				setTodos(data.todos || []);
			});
		});
		return unsubscribe;
	}, [navigation]);

	const onReturnPress = () => {
    navigation.navigate('Categorie')
  }

	const onCategoriePress = () => {
		navigation.push("TodoRouter");
	};

	const onDeletePress = () => {
		deleteCategorie(user.uid, categorie.name).then(() => {
			alert('Categorie remove');
			navigation.navigate('Categorie');
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={() => onReturnPress()}>
					<Text style={styles.buttonTitle}>Return to categories</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => onDeletePress()}>
					<Text style={styles.buttonTitle}>Delete categorie</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>Todos</Text>
			<ScrollView style={{width: "100%"}}>
				{todos.map((elem, key) => (
					<TouchableOpacity key={key} style={styles.categorie} onPress={() => onCategoriePress(elem)}>
						<Text>{elem}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}
