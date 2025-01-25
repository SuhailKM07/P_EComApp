
import React from 'react';
import { View, Text, StatusBar, ImageBackground, Pressable } from 'react-native';
import { SizeConfig } from '../../component/SizeConfig';
import { ImageGridCollection } from './Components/Helper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationTypeChecking } from '../../routs/NavigationTypes';
import { Icon } from 'react-native-basic-elements';
import { PressableIcons } from '../../component/PressableIcons';

type CollectionsProps = NativeStackScreenProps<NavigationTypeChecking, 'Collections'>

const Collections: React.FC<CollectionsProps> = ({ navigation, route }) => {
    return (

        <View>
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                hidden={true}
            />
            <View>
                <View >
                    <ImageBackground
                        source={require('../../assets/images/Collection/collectionbg.png')}
                        style={{
                            width: '100%',
                            height: SizeConfig.height * 30,
                            // resizeMode: 'center'
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            flexDirection: 'row',

                        }}
                    >


                        <View style={{
                            paddingHorizontal: SizeConfig.width * 5,
                            paddingVertical: SizeConfig.height * 6,
                            width: '100%',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>

                            <PressableIcons
                                type={"Entypo"}
                                name={"chevron-left"}
                                color={"#1E3354"}
                                onPressFunction={() => {
                                    navigation.goBack()
                                }}
                            />
                            <Text
                                style={{
                                    color: 'white',
                                    fontFamily: 'RedHatDisplay-Bold',
                                    fontSize: SizeConfig.fontSize * 6,
                                }}
                            >
                                Autumn{'\n'}
                                Collection{'\n'}
                                2021
                            </Text>
                        </View>

                    </ImageBackground>
                </View>

                {/* Bottom Sheet */}
                <View style={{
                    borderTopLeftRadius: SizeConfig.width * 7,
                    borderTopRightRadius: SizeConfig.width * 7,
                    height: SizeConfig.height * 80,
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: -SizeConfig.height * 75,
                    zIndex: 10,
                    overflow: 'hidden'
                }}>
                    <ImageGridCollection />
                </View>
            </View>
        </View>
    );
}
export default Collections;
