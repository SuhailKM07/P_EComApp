import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from 'react'
import { Icon } from "react-native-basic-elements";
import { SizeConfig } from "../../component/SizeConfig";

const HeadderSection = ({ showDescription, toggleDescription, content }) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>{content}</Text>
        <TouchableOpacity
            onPress={toggleDescription}
            style={styles.iconWrapper}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
            <Icon
                type="FontAwesome"
                name={showDescription ? 'chevron-up' : 'chevron-down'}
                size={15}
            />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: SizeConfig.height * 7,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F6',
    },
    headerText: {
        fontSize: SizeConfig.fontSize * 4.5,
        fontFamily: 'RedHatDisplay-SemiBold',
    },
    iconWrapper: {
        width: SizeConfig.width * 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})