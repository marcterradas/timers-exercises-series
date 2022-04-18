import { React, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  languages,
  changeLanguage,
  defaultLanguage,
} from "../../languages/i18n";

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
  const styles = {
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
