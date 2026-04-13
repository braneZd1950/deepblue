import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { BookingScreen } from './src/screens/BookingScreen';
import { PricelistScreen } from './src/screens/PricelistScreen';
import { GalleryScreen } from './src/screens/GalleryScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { theme } from './src/theme';
import type { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.bg,
    card: theme.card,
    primary: theme.accent,
    text: theme.text,
    border: theme.line,
    notification: theme.accentSoft,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.text,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: theme.bg },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'DEEP BLUE' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Rezervacije' }} />
        <Stack.Screen name="Pricelist" component={PricelistScreen} options={{ title: 'Cjenik' }} />
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Galerija' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
