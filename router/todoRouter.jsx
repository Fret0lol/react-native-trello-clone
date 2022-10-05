import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CategorieScreen } from '../screens/CategorieScreen/CategorieScreen';
import { NewTache } from '../vues/newTache';

const Tab = createMaterialTopTabNavigator()

export function TodoRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Categorie" component={CategorieScreen} />
            <Tab.Screen name="newTache" component={NewTache} />
        </Tab.Navigator>
    )
}