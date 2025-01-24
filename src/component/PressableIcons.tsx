import * as React from 'react';
import { Pressable, StyleSheet } from "react-native"
import { Icon } from "react-native-basic-elements"
import { SizeConfig } from "./SizeConfig"

export const PressableIcons = ({
    type,
    name,
    color,
    onPressFunction
}: {
    type: any,
    name: string
    color?: any
    onPressFunction?: any
}) => (
    <Pressable
        onPress={onPressFunction}
        style={styles.backBtnCon}
    >
        <Icon
            type={type}
            name={name}
            size={SizeConfig.width * 6}
            color={color}
            style={{ width: SizeConfig.width * 6 }}
        />
    </Pressable>
)

const styles = StyleSheet.create({
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