import React from "react";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

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

  function updateLanguage(lanugage, key) {
    changeLanguage(lanugage);
    setSelectedLanguage(lanugage);
  }

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) =>
        updateLanguage(itemValue, itemIndex)
      }
    >
      {languagesElements}
    </Picker>
  );
};

export default SettingsScreen;
