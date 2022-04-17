import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import "./languages/i18n";

import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <NavigationContainer>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
