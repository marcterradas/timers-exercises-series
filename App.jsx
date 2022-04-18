import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import "./languages/i18n";

import Footer from "./src/layout/Footer";

const App = () => {
  return (
    <NavigationContainer>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
