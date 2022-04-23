import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import "./languages/i18n";
import Footer from "./src/layout/Footer";

LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);

const App = () => {
  return (
    <NavigationContainer>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
