import {
    ImageBackground,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationTypeChecking } from '../../routs/NavigationTypes';
import { SizeConfig } from '../../component/SizeConfig';
import CustomButton from './Component/CustomButton';


// Define the props for WelcomeScreen
type WelcomeScreenProps = NativeStackScreenProps<NavigationTypeChecking, 'WelcomeScreen'>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />
            <ImageBackground
                source={require('../../assets/images/Login/welmain.png')}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <View style={styles.content}>

                    <View
                        style={styles.subContent}
                    >
                        <View>
                            <Text
                                style={styles.firstText}
                            >
                                Welcome to GemStore!
                            </Text>
                            <Text
                                style={styles.secondText}
                            >
                                The home for a fashionista
                            </Text>
                        </View>
                        {/* Button Section */}
                        <View style={styles.btnComponent}>
                            <CustomButton
                                pressableStyle={styles.pressableStyle}
                                pressableOnPress={() => {
                                    navigation.navigate('IntroSlider')
                                }}
                                compStyle={styles.viewCompStyle}
                                textStyle={styles.textCompStyle}
                                content='Get Started'
                            />
                        </View>

                    </View>
                </View>
            </ImageBackground >
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    blurContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#767779',
        position: 'absolute',
        inset: 0,
        opacity: 0.98,
    },
    buttonContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#767779',
    },
    subContent: {
        height: SizeConfig.height * 26,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginBottom: SizeConfig.height * 15,
    },
    firstText: {
        color: 'white',
        fontSize: SizeConfig.fontSize * 6.5,
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-Bold',
        // fontWeight: 600,
        marginBottom: SizeConfig.height * 1.5,
    },
    secondText: {
        color: 'white',
        fontSize: SizeConfig.fontSize * 4,
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-Medium',
    },
    btnSubContainer: {
        width: SizeConfig.width * 48,
        height: SizeConfig.height * 7,
        borderRadius: SizeConfig.width * 8,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    btnText: {
        color: 'white',
        fontSize: SizeConfig.fontSize * 4.5,
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-SemiBold',
        // fontWeight: 700
    },
    btnComponent: {
        alignItems: 'center',
        justifyContent: 'center',
        height: SizeConfig.height * 15,
        marginTop: SizeConfig.height * 6
    },
    pressableStyle: {
        width: SizeConfig.width * 50,
        height: SizeConfig.height * 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: SizeConfig.width * 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white'
    },
    viewCompStyle: {
        backgroundColor: '#767779',
        position: 'absolute',
        inset: 0,
        opacity: 0.9,
    },
    textCompStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: SizeConfig.fontSize * 4
    }
});

export default WelcomeScreen