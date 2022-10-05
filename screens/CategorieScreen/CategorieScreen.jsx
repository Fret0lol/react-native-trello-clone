import React, {useState, useContext, useEffect} from "react";
import {Image, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import styles from "./style";
import {getCategories} from "../../api/categorie";
import {TodoContext} from "../../context";

export function CategorieScreen({navigation}) {
	const {user} = useContext(TodoContext);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			getCategories(user.uid).then((data) => {
				setCategories(data);
			});
		});
		return unsubscribe;
	}, [navigation]);

	const onCategoriePress = () => {};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Categories</Text>
			<ScrollView style={{width: '100%'}}>
				{categories.map((elem, key) => (
					<TouchableOpacity key={key} style={styles.categorie} onPress={() => onCategoriePress(elem)}>
						<Text>{elem}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}
