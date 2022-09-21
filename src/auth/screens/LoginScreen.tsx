import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from "react-native"
import { auth } from "../lib/firebase"


export const LoginScreen = ({}) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignup = async () => {
		try {
			const {user} = await createUserWithEmailAndPassword(auth, email, password)
	
			console.log('Registered in', user.email)
		} catch (error) {
			if (error instanceof Error && 'message' in error) {
				alert(error.message)
			}
		}
	}

	const handleLogin = async () => {
		try {
			const {user} = await signInWithEmailAndPassword(auth, email, password)
	
			console.log('Logged in', user.email)
		} catch (error) {
			if (error instanceof Error && 'message' in error) {
				alert(error.message)
			}
		}
	}

	return (
		<KeyboardAvoidingView behavior="padding" className="flex-1 justify-center items-center bg-gray-50">
		<Text className="text-4xl text-center font-bold mb-8">Login Screen</Text>

		<TextInput
		placeholder="Email"
		className="w-3/4 p-4 border border-gray-400 rounded-lg text-lg mb-2" 
		value={email}
		onChangeText={text => {
			setEmail(text)
		}}
		/>

		<TextInput
		placeholder="Password"
		secureTextEntry
		className="w-3/4 p-4 border border-gray-400 rounded-lg text-lg"
		value={password}
		onChangeText={text => {
			setPassword(text)
		}}

		/>

		<View className="mt-8 space-y-2">
		<Pressable className="px-4 py-2 rounded-lg bg-gray-600 w-32" onPress={handleLogin}>
			<Text className="uppercase font-medium text-lg text-white text-center">Login</Text>
		</Pressable>

		<Pressable className="px-4 py-2 rounded-lg border border-gray-600 w-32" onPress={handleSignup}>
			<Text className="uppercase font-medium text-lg text-gray-600 text-center">Register</Text>
		</Pressable>
		</View>

	      </KeyboardAvoidingView>
	)
}