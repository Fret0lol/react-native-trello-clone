import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserRouter } from './router/userRouter';
import { TodoContext } from './context'
import { CategorieRouter } from './router/categorieRouter'
import { TodoRouter } from './router/todoRouter';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setuser] = useState(null);
  const [categorie, setcategorie] = useState('');
  return (
    <TodoContext.Provider value={{ user, setuser, categorie, setcategorie }} >
      <NavigationContainer>
        <Stack.Navigator>
          {(user) ?
            <Stack.Screen name="CategorieRouter" component={CategorieRouter} options={{ headerShown: false }}></Stack.Screen>
            : <Stack.Screen name="UserRouter" component={UserRouter} options={{ headerShown: false }}></Stack.Screen>}
          <Stack.Screen name="TodoRouter" component={TodoRouter} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </TodoContext.Provider>
  );
}

