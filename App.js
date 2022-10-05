import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { UserRouter } from './router/userRouter';
import { TodoContext } from './context'
import { CategorieRouter } from './router/categorieRouter'

export default function App() {
  const [user, setuser] = useState(null);
  const [taches, settaches] = useState([]);
  return (
    <TodoContext.Provider value={{ user, setuser, taches, settaches }} >
      <NavigationContainer>
        {(user) ?
          <CategorieRouter></CategorieRouter>
          : <UserRouter></UserRouter>}

      </NavigationContainer>
    </TodoContext.Provider>
  );
}

