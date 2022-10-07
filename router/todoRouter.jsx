import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CategorieDetails } from '../screens/CategorieScreen/CategorieDetails';
import { NewTodoScreen } from '../screens/TodoScreen/NewTodo';

const Tab = createMaterialTopTabNavigator()

export function TodoRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Todos" component={CategorieDetails} />
            <Tab.Screen name="New Todo" component={NewTodoScreen} />
        </Tab.Navigator>
    )
}