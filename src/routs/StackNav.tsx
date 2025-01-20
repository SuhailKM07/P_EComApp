import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from '../ui/login/WelcomeScreen';
import { NavigationTypeChecking } from '../routs/NavigationTypes';
import IntroSlider from '../ui/login/IntroSlider';
import SignUpScreen from '../ui/login/SignUpScreen';
import LogInScreen from '../ui/login/LogInScreen';
import EnterEmailScreen from '../ui/login/Forgotpassword/EnterEmailScreen';
import VerificationCodeScreen from '../ui/login/Forgotpassword/VerificationCodeScreen';
import CreatePassword from '../ui/login/Forgotpassword/CreatePassword';
import { View } from 'react-native';
import BottomTabNavBar from './BottomTabNavBar';
import DetailsScreen from '../ui/details/DetailsScreen';
import SliderDrawer from '../routs/SliderDrawerComp/SliderDrawer';
const Stack = createNativeStackNavigator<NavigationTypeChecking>();
export default function StackNav() {
    return (
        <View style={{
            flex: 1
        }}>
            {/* <NavigationContainer> */}
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
                <Stack.Screen
                    name={"BottomTabBar"}
                    component={BottomTabNavBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"DetailsScreen"}
                    component={DetailsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"SliderDrawer"}
                    component={SliderDrawer}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
            {/* </NavigationContainer> */}
        </View>

    )
}
