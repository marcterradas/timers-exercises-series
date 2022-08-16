import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

import Workout from "../pages/Workout";
import Timer from "../pages/Timer";
import Settings from "../pages/Settings";

const Tab = createBottomTabNavigator();

const Footer = () => {
  const { t } = useTranslation();
  let workout = t("workouts");
  let timer = t("timers");
  let settings = t("settings");

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case workout:
              iconName = focused ? "list" : "list-outline";
              break;
            case timer:
              iconName = focused ? "timer" : "timer-outline";
              break;
            case settings:
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
        name={workout}
        component={Workout}
        options={{ tabBarLabel: t("workouts") }}
      />
      <Tab.Screen
        name={timer}
        component={Timer}
        options={{ tabBarLabel: t("timers") }}
      />
      <Tab.Screen
        name={settings}
        component={Settings}
        options={{ tabBarLabel: t("settings") }}
      />
    </Tab.Navigator>
  );
};

export default Footer;
