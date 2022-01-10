import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components';

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor: theme.colors.primary,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                height: 50,
            }
        }}
        >
            <Screen 
            name='Início'
            component={Dashboard}
            options={{
                tabBarIcon: (({ size, color}) => 
                <MaterialIcons 
                name="format-list-bulleted"
                size={size}
                color={color}
                />
                )
            }}
            />
            <Screen 
            name='Saldo'
            component={Dashboard}
            options={{
                tabBarIcon: (({ size, color}) => 
                <MaterialIcons 
                name="attach-money"
                size={size}
                color={color}
                />
                )
            }}/>
            <Screen 
            name='Vendas'
            component={Dashboard}
            options={{
                tabBarIcon: (({ size, color}) => 
                <MaterialCommunityIcons 
                name="cart-outline"
                size={size}
                color={color}
                />
                )
            }}/>
        </Navigator>
    )
}
