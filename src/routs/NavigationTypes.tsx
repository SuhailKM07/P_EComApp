import { ParamListBase } from "@react-navigation/native";

export interface NavigationTypeChecking extends ParamListBase {
    WelcomeScreen: undefined
    IntroSlider: undefined
    SignUpScreen: undefined
    LogInScreen: undefined
    EnterEmailScreen: undefined
    VerificationCodeScreen: undefined
    CreatePassword: undefined
    BottomTabBar: undefined
    HomeScreen: undefined
    DetailsScreen: undefined
}

export interface BottomTabNavigationTypeChecking extends ParamListBase {
    Home: undefined;
    Search: undefined;
    Cart: undefined;
    Profile: undefined;
    SliderDrawer: undefined;
}

export interface DrawerNavigationTypeChecking extends ParamListBase {
    StackNav: undefined
    HomeScreen: undefined
}