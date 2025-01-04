import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from '../ui/Login/WelcomeScreen';
import { NavigationTypeChecking } from '../routs/NavigationTypes';
import IntroSlider from '../ui/Login/IntroSlider';
import SignUpScreen from '../ui/Login/SignUpScreen';
import LogInScreen from '../ui/Login/LogInScreen';
import EnterEmailScreen from '../ui/Login/Forgotpassword/EnterEmailScreen';
import VerificationCodeScreen from '../ui/Login/Forgotpassword/VerificationCodeScreen';
import CreatePassword from '../ui/Login/Forgotpassword/CreatePassword';
import { View } from 'react-native';


const Stack = createNativeStackNavigator<NavigationTypeChecking>();


export default function StackNav() {
    return (
        <View style={{
            flex: 1
        }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="WelcomeScreen" >
                    <Stack.Screen
                        name="WelcomeScreen"
                        component={WelcomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="IntroSlider"
                        component={IntroSlider}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUpScreen"
                        component={SignUpScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={"LogInScreen"}
                        component={LogInScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={"EnterEmailScreen"}
                        component={EnterEmailScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={"VerificationCodeScreen"}
                        component={VerificationCodeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={"CreatePassword"}
                        component={CreatePassword}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
}
