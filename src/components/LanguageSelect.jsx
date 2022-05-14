import { React, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  languages,
  defaultLanguage,
  changeLanguage,
} from "../../languages/i18n";
import styles from "../styles/settings.styles";

const LanguageSelect = () => {
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

  function updateLanguage(lanugage) {
    setSelectedLanguage(lanugage);
    changeLanguage(lanugage);
  }

  return (
    <Picker
      style={styles.select}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue) => updateLanguage(itemValue)}
    >
      {languagesElements}
    </Picker>
  );
};

export default LanguageSelect;
