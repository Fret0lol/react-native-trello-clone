import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ListeTacheVue } from '../vues/listeTacheVue';
import { NewTache } from '../vues/newTache';
const Tab = createMaterialTopTabNavigator()
export function TodoRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Liste" component={ListeTacheVue} />
            <Tab.Screen name="newTache" component={NewTache} />
        </Tab.Navigator>
    )
}