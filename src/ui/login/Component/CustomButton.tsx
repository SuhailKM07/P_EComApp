import React from 'react'
import { View, Text, Pressable, StyleProp, ViewStyle, GestureResponderEvent, TextStyle } from 'react-native'

interface CustomButtonTypeChecking {
    pressableStyle: StyleProp<ViewStyle>;
    pressableOnPress: (event: GestureResponderEvent) => void;
    compStyle: StyleProp<ViewStyle>;
    textStyle: StyleProp<TextStyle>;
    content: string
}

export default function CustomButton({
    pressableStyle,
    pressableOnPress,
    compStyle,
    textStyle,
    content
}: CustomButtonTypeChecking) {
    return (
        <Pressable
            style={pressableStyle}
            onPress={pressableOnPress}
        >
            <View
                style={compStyle}
            />
            <Text style={textStyle}>
                {content}
            </Text>
        </Pressable>
    )
}