import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Worship from './pages/Worship';
import Notices from './pages/Notices';
import Projects from './pages/Projects';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Courses" component={Courses} />
                <Stack.Screen name="Worship" component={Worship} />
                <Stack.Screen name="Notices" component={Notices} />
                <Stack.Screen name="Projects" component={Projects} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};