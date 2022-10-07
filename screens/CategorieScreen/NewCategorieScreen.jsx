import React, { useState, useContext, useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import { getCategories } from '../../api/categorie';
import { TodoContext } from '../../context';
import { addCategorie } from '../../api/categorie';


export function NewCategorieScreen({ navigation }) {

    const { user } = useContext(TodoContext)
    const [ categoriesName, setCategorieName ] = useState('')

    const onCreatePress = () => {
      addCategorie(user.uid, categoriesName).then(() => {
        alert('Successful categorie add !')
        navigation.navigate({name: 'Categorie'})
        setCategorieName('')
      })
    }

    return (
      <View style={styles.container}>
      <Text style={styles.title}>New Categorie</Text>
      <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always">   
          <TextInput
              style={styles.input}
              placeholder='Categorie name'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setCategorieName(text)}
              value={categoriesName}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
          <TouchableOpacity
              style={styles.button}
              onPress={() => onCreatePress()}>
              <Text style={styles.buttonTitle}>New Categorie</Text>
          </TouchableOpacity>
      </KeyboardAwareScrollView>
  </View>
    )
}