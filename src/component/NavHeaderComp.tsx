import { Pressable, StyleSheet, Text, View } from "react-native"
import { PressableIcons } from "./PressableIcons"
import { OrderScreenStyle } from "../ui/Order/AddToCart/Styles"
import * as React from 'react'
import { SizeConfig } from "./SizeConfig"
import { NavigationProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { NavigationTypeChecking } from "../routs/NavigationTypes"
import { Icon } from "react-native-basic-elements"


type NavHeaderCompProps = {
    Content: string;
    navigation?: NativeStackNavigationProp<NavigationTypeChecking, any, any>;
};

export const NavHeaderComp: React.FC<NavHeaderCompProps> = ({
    Content,
    navigation,
}) => {
    return (
        <View style={styles.NavHeaderComp}>
            <View>

                <Pressable
                    onPress={() => {
                        if (navigation) {
                            navigation.pop();
                        }

                    }}
                    style={styles.backBtnCon}
                >
                    <Icon
                        type={"Entypo"}
                        name={"chevron-left"}
                        size={SizeConfig.width * 6}
                        color={"#1E3354"}
                        style={{ width: SizeConfig.width * 6 }}
                    />
                </Pressable>
            </View>
            <Text style={styles.NavHeaderText}>{Content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    NavHeaderComp: {
        flexDirection: 'row',
        position: 'relative',
        width: '100%',
        height: SizeConfig.height * 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    NavHeaderText: {
        width: '80%',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.fontSize * 5,
    },
    backBtnCon: {
        elevation: 2,
        backgroundColor: "white",
        width: SizeConfig.width * 10,
        borderRadius: SizeConfig.width * 100,
        alignItems: "center",
        justifyContent: "center",
        height: SizeConfig.width * 10,
    },
})