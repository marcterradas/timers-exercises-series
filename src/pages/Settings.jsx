import { React } from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import LanguageSelect from "../components/LanguageSelect";
import ActionButton from "../components/ActionButton";

import { clear } from "../logic/workout";
import styles from "../styles/settings.styles";

const SettingsScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>{t("change_language")}</Text>
        <LanguageSelect />
      </View>
      <View style={styles.item}>
        <ActionButton
          label={t("delete")}
          type="centerRemoveButton"
          callBack={clear}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
