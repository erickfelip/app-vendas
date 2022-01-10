import React from "react";
import AppLoading from "expo-app-loading";
import theme from "./src/global/theme";
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
      <Dashboard />
    </ThemeProvider>
  );
}
