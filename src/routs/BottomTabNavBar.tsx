import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import { HeaderShownContext, PlatformPressable } from '@react-navigation/elements';
import { View } from "react-native";
import { Text } from "react-native-basic-elements";
import React from 'react';


function MyTabBar({ state, descriptors, navigation }: {
    state: any;
    descriptors: any;
    navigation: any;
}) {
    const { buildHref } = useLinkBuilder();

    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'gray' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

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
                    <PlatformPressable
                        key={index}
                        href={buildHref(route.name, route.params)}
                        onPress={onPress}

                        style={{ flex: 1, backgroundColor: 'white' }}
                    >
                        <Text style={{ color: isFocused ? 'red' : 'green' }}>
                            {label}
                        </Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}

let HomeScreen = () => {
    return (
        <View>
            <Text>
                Hello
            </Text>
        </View>
    )
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
            <Tab.Screen name="Temp" options={{ headerShown: false }} component={Temp} />
            <Tab.Screen name="sales" options={{ headerShown: false }} component={sales} />
            <Tab.Screen name="google" options={{ headerShown: false }} component={customer} />
        </Tab.Navigator>
    );
};

export default BottomTabNavBar;

// const BottomTabNavBar = createBottomTabNavigator({
//     tabBar: (props) => <MyTabBar {...props} />,
//     screens: {
//         Home: HomeScreen,
//     },
// });

// export default BottomTabNavBar


