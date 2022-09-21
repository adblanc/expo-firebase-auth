import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/app.navigator';

export default function App() {
  return (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
  );
}