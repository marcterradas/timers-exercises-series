import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { languages, changeLanguage } from "../../languages/i18n";

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen ...</Text>
    </View>
  );
};

export default SettingsScreen;
