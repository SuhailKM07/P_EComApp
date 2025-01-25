import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ImageProps } from "react-native";


type OrderItem = {
    id: string;
    img: ImageProps;
    productName: string;
    price: string;
    size: string;
    color: string;
    count: number
    active: boolean
};

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
    YourCart: undefined
    OrderInfo: {
        data: OrderItem[];
        totalPrice: number;
    };
    RateProductScreen: undefined;
    TrackingOrder: undefined;
    Collections: undefined;
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
    Collections: undefined
}