
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { auth } from '../auth/lib/firebase';
import { HomeScreen } from '../auth/screens/HomeScreen';
import { LoginScreen } from '../auth/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })

    return unsubscribe
  }, [])
	return (
		<Stack.Navigator>
        {!isSignedIn ? <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> : (

        <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
	)
}