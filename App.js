import React from "react";
import AppLoading from "expo-app-loading";
import theme from "./src/global/theme";
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './src/routes/app.routes'
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { Dashboard } from "./src/screens/Dashboard";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
