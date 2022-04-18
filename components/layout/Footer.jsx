import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

import WorkoutScreen from "../pages/Workout";
import TimerScreen from "../pages/Timer";
import SettingsScreen from "../pages/Settings";

const Tab = createBottomTabNavigator();

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "workout":
              iconName = focused ? "list" : "list-outline";
              break;
            case "timer":
              iconName = focused ? "timer" : "timer-outline";
              break;
            case "settings":
              iconName = focused ? "settings" : "settings-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="workout"
        component={WorkoutScreen}
        options={{ tabBarLabel: t("workout") }}
      />
      <Tab.Screen
        name="timer"
        component={TimerScreen}
        options={{ tabBarLabel: t("timer") }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ tabBarLabel: t("settings") }}
      />
    </Tab.Navigator>
  );
};

export default Footer;
