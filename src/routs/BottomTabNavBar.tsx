import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-basic-elements";
import React from 'react';
import HomeScreen from "../ui/home/HomeScreen";
import { SizeConfig } from "../component/SizeConfig";


function MyTabBar({ state, descriptors, navigation }: {
    state: any;
    descriptors: any;
    navigation: any;
}) {

    return (

        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <View style={styles.BottomNavBar}>
                {state.routes.map((route: any, index: number) => {
                    const isFocused = state.index === index;
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    return (
                        <Pressable
                            key={index}
                            onPress={onPress}
                            style={styles.pressableBtn}
                            hitSlop={20}
                        >
                            <Image
                                source={
                                    label == 'Home' ?
                                        require('../assets/images/Home/home.png') :
                                        label == 'Search' ?
                                            require('../assets/images/Home/search.png') :
                                            label == 'Cart' ?
                                                require('../assets/images/Home/cart.png') :
                                                require('../assets/images/Home/profile.png')
                                }
                                style={[styles.BottomNavBarIcon, { tintColor: isFocused ? 'black' : 'gray' }]}
                            />
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}


let Temp = () => {
    return (
        <View>
            <Text>
                Temp
            </Text>
        </View>
    )
}
let sales = () => {
    return (
        <View>
            <Text>
                Temp
            </Text>
        </View>
    )
}
let customer = () => {
    return (
        <View>
            <Text>
                Temp
            </Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

const BottomTabNavBar = () => {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="Search" options={{ headerShown: false }} component={Temp} />
            <Tab.Screen name="Cart" options={{ headerShown: false }} component={sales} />
            <Tab.Screen name="Profile" options={{ headerShown: false }} component={customer} />
        </Tab.Navigator>
    );
};

export default BottomTabNavBar;

const styles = StyleSheet.create({
    BottomNavBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: SizeConfig.height * 8,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 2,
    },
    pressableBtn: {
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomNavBarIcon: {
        width: SizeConfig.width * 5.5,
        height: SizeConfig.width * 5.5,
        resizeMode: 'center',
    }
})



