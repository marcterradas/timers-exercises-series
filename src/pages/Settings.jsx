import { React } from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../components/LanguageSelect";

const SettingsScreen = () => {
  const { t } = useTranslation();

  const styles = {
    container: {
      padding: 10,
    },
  };

  return (
    <View style={styles.container}>
      <Text>{t("change_language")}</Text>
      <LanguageSelect />
    </View>
  );
};

export default SettingsScreen;
