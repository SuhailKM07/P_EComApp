import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Inputcust from '../../component/Inputcust';
import BtnCust from '../../component/BtnCust';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationTypeChecking } from '../../routs/NavigationTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SizeConfig } from '../../component/SizeConfig';
import { Css } from './Styles';
import SocialImgLinks from './Component/SocialImgLinks';
import CustomSnackBar from '../../component/CustomSnackBar';
import Snackbar from 'react-native-snackbar';

type LogInScreenProps = NativeStackScreenProps<NavigationTypeChecking, 'LogInScreen'>

const LogInScreen: React.FC<LogInScreenProps> = ({ navigation }) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <ScrollView style = {{flex : 1  }}>
                <View style={[styles.Container, Css.layoutAlign]}>

                    <StatusBar
                        translucent
                        backgroundColor="rgba(255, 255, 255, 0)"
                        barStyle={'dark-content'}
                    />

                    <Text style={styles.headerText}>
                        Log into{"\n"}
                        your account
                    </Text>

                    <View>

                        <Inputcust
                            inputStyle={[styles.inputStyle, { marginTop: SizeConfig.height * 8 }]}
                            onChangeFun={onChangeEmail}
                            placeholder="Email address"
                            keyboardType="email-address"
                            value={email}
                        />


                        <View
                            style={styles.passwordContainer}
                        >
                            <Inputcust
                                inputStyle={styles.inputStyle}
                                onChangeFun={onChangePassword}
                                placeholder="Password"
                                keyboardType="email-address"
                                value={password}
                            />
                            <Text style={{
                                textAlign: 'right',
                                fontFamily: 'RedHatDisplay-Light',
                                fontSize: SizeConfig.fontSize * 3.5
                            }}
                                onPress={() => {
                                    navigation.navigate('EnterEmailScreen')
                                }} >
                                Forgot Password?
                            </Text>
                        </View>

                    </View>

                    <View
                        style={styles.bottomContainer}
                    >

                        <View style={styles.bottomSubContainer} >
                            <BtnCust
                                buttonContent='LOG IN'
                                buttonStyle={styles.btnContainer}
                                buttonTextStyle={styles.btnText}
                                onPushFun={() => {
                                    if (!(email.length > 0 && password.length > 0)) {
                                        CustomSnackBar('Please fill all the details !!!', 'red')
                                    }
                                    else {
                                        CustomSnackBar('Welcome to the home screen', 'green')
                                    }
                                }}
                            />
                            <Text
                                style={styles.dumyText}
                            >
                                or log in with
                            </Text>
                            <View>
                                <View>
                                    <SocialImgLinks />
                                </View>
                            </View>
                        </View>

                        <View style={styles.navigationContainer}>
                            <View style={styles.navigationSubContainer} >
                                <Text style={styles.navigationDumyText}>
                                    Don’t have an account?
                                </Text>
                                <Pressable hitSlop={100} >
                                    <Text style={styles.navigationLinkText}
                                        onPress={() => {
                                            navigation.navigate('SignUpScreen')
                                        }}
                                    >
                                        Sign Up
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1, 
    },
    headerText: {
        fontSize: SizeConfig.width * 7,
        fontFamily: 'RedHatDisplay-Bold',
        lineHeight: SizeConfig.height * 6
    },
    passwordContainer: {
        gap: SizeConfig.height * 3,
        marginBottom: SizeConfig.height * 5
    },
    inputStyle: {
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
        fontFamily: 'ReadHatDisplay-Light',
        marginTop: SizeConfig.height * 2,
        fontSize: SizeConfig.fontSize * 4,
        color: 'black'
    },
    imgStyle: {
        width: SizeConfig.width * 12,
        height: SizeConfig.width * 12
    },
    bottomContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    bottomSubContainer: { gap: SizeConfig.height * 2, alignItems: 'center', justifyContent: 'center' },
    btnContainer: {
        backgroundColor: '#2D201C',
        height: SizeConfig.height * 6,
        width: SizeConfig.width * 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 10
    },
    btnText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.fontSize * 3.5
    },
    dumyText: {
        textAlign: 'center',
        color: '#666666',
        fontFamily: 'RedHatDisplay-Light'
    },
    linkContainer: {
        flexDirection: 'row',
        gap: SizeConfig.width * 5
    },
    navigationContainer: {
        marginTop: SizeConfig.height * 15,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    navigationSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigationDumyText: {
        width: SizeConfig.width * 42.5,
        fontFamily: 'RedHatDisplay-Medium',
        fontSize: SizeConfig.fontSize * 4, 
    },
    navigationLinkText: {
        width: SizeConfig.width * 15,
        textDecorationLine: 'underline',
        fontFamily: 'RedHatDisplay-Medium',
        fontSize: SizeConfig.fontSize * 3.5,
        textDecorationStyle: 'dashed', 
        textAlign: 'center'
    }
})

export default LogInScreen