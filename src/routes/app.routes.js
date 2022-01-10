import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';

export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
            name='Início'
            component={Dashboard}/>
            <Screen 
            name='Saldo'
            component={Dashboard}/>
            <Screen 
            name='Vendas'
            component={Dashboard}/>
        </Navigator>
    )
}
