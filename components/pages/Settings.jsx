import { React, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import {
  languages,
  changeLanguage,
  defaultLanguage,
} from "../../languages/i18n";

const SettingsScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const languagesElements = languages.map((language) => {
    return (
      <Picker.Item
        key={language.key}
        label={language.value}
        value={language.key}
      />
    );
  });
  const { t } = useTranslation();

  const styles = {
    container: {
      padding: 10,
    },
    select: {
      marginTop: 10,
      backgroundColor: "#fff",
    },
  };

  function updateLanguage(lanugage) {
    changeLanguage(lanugage);
    setSelectedLanguage(lanugage);
  }

  return (
    <View style={styles.container}>
      <Text>{t("change_language")}</Text>
      <Picker
        style={styles.select}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => updateLanguage(itemValue)}
      >
        {languagesElements}
      </Picker>
    </View>
  );
};

export default SettingsScreen;
