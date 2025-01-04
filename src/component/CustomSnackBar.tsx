import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Snackbar from 'react-native-snackbar';

export default function CustomSnackBar(message: string, color?: string) {
    return (
        Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
            textColor: color ? color : 'black',
            fontFamily : 'RedHatDisplay-Bold'
        })
    )
}
