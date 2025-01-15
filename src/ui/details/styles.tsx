import { StyleSheet } from "react-native"
import { SizeConfig } from "../../component/SizeConfig"

export const componentStyles = StyleSheet.create({
    layoutAlign: {
        paddingHorizontal: SizeConfig.width * 7,
        paddingVertical: SizeConfig.height * 3.5,
        flex: 1,
        backgroundColor: 'white'
    },
    leftAlignPadding: {
        paddingLeft: SizeConfig.width * 7,
    },
    rightAlignPadding: {
        paddingRight: SizeConfig.width * 7,
    },
    horizontalPadding: {
        paddingHorizontal: SizeConfig.width * 7,
    }

})