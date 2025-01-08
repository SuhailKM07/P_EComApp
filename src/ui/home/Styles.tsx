import { StyleSheet } from "react-native"
import { SizeConfig } from "../../component/SizeConfig"

export const componentStyles = StyleSheet.create({
    layoutAlign: {
        paddingHorizontal: SizeConfig.width * 7,
        paddingVertical: SizeConfig.height * 2,
        flex: 1
    },
    paddingHorizontalStyle: {
        paddingHorizontal: SizeConfig.width * 7,
    },
    paddingVerticalStyle: {
        paddingVertical: SizeConfig.height * 2,
    }
})