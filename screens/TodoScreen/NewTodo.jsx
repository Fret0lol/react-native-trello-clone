import React, {useState, useContext, useEffect} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import styles from "./style";
import {TodoContext} from "../../context";
import {addTodo} from "../../api/todo";

export function NewTodoScreen({navigation}) {
	const {user, categorie} = useContext(TodoContext);
	const [todoName, setTodoName] = useState("");

	const onCreatePress = () => {
		addTodo(user.uid, categorie.name, todoName).then(() => {
			alert("Successful todo add !");
			navigation.navigate({name: "Todos"});
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>New Todo</Text>
			<KeyboardAwareScrollView style={{flex: 1, width: "100%"}} keyboardShouldPersistTaps="always">
				<TextInput
					style={styles.input}
					placeholder="Todo name"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setTodoName(text)}
					value={todoName}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={() => onCreatePress()}>
					<Text style={styles.buttonTitle}>New Todo</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>
		</View>
	);
}
