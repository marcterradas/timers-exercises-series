import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

import './languages/i18n'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen ...</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

function App() {
    const { t } = useTranslation()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={t('home')} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App