import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';

const Tab = createMaterialTopTabNavigator()

export function UserRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Register" component={RegisterScreen} />
        </Tab.Navigator>
    )
}