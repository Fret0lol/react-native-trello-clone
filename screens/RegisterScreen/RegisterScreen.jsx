import React, {useState, useContext} from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {TodoContext} from "../../context/index";
import { createUser } from '../../api/auth';
import styles from "./style";

export function RegisterScreen() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const {setuser} = useContext(TodoContext);

	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match.");
			return;
		}
		createUser(email, password)
			.then((data) => {
				setuser(data);
			})
			.catch((err) => alert(err));
	};

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView style={{flex: 1, width: "100%"}} keyboardShouldPersistTaps="always">
				<Image style={styles.logo} source={require("../../assets/logo.png")} />
				<TextInput
					style={styles.input}
					placeholder="Full Name"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setFullName(text)}
					value={fullName}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setEmail(text)}
					value={email}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Password"
					onChangeText={(text) => setPassword(text)}
					value={password}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Confirm Password"
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
					<Text style={styles.buttonTitle}>Create account</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>
		</View>
	);
}
