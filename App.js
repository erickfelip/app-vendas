import React from 'react'
/* import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'react-native' */
import theme from './src/global/theme'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'
import { Dashboard } from './src/screens/Dashboard'


export default function App(){
  return(
    <ThemeProvider theme={theme}>
    <Dashboard />
    </ThemeProvider> 
  )
}