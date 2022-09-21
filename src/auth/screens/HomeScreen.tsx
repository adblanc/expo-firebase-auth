import { signOut } from "firebase/auth"
import { Pressable, Text, View } from "react-native"
import { auth } from "../lib/firebase"


export const HomeScreen = () => {

	const handleSignOut = () => {
		signOut(auth)
	}

	return (
		<View className="flex-1 justify-center items-center bg-gray-50">
			<Text className="text-center text-xl font-medium mb-8">Email : {auth.currentUser?.email}</Text>

		<Pressable className="px-4 py-2 rounded-lg border border-gray-600 w-32" onPress={handleSignOut}>
			<Text className="uppercase font-medium text-lg text-gray-600 text-center">Sign out</Text>
		</Pressable>
	      	</View>
	)
}