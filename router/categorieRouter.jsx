import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CategorieScreen } from '../screens/CategorieScreen/CategorieScreen';
import { NewCategorieScreen } from '../screens/CategorieScreen/NewCategorieScreen';

const Tab = createMaterialTopTabNavigator()

export function CategorieRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Categorie" component={CategorieScreen} />
            <Tab.Screen name="New Categorie" component={NewCategorieScreen} />
        </Tab.Navigator>
    )
}