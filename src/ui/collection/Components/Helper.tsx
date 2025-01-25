import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import { SizeConfig } from '../../../component/SizeConfig';
import GridBlockSheet from './GridBlockSheet';

export const ImageGridCollection = () => {
    return (
        <GridBlockSheet flex={1}>
            <GridBlockSheet
                wrap={'wrap'}
                alignItems={'center'}
                // justifyContent={'center'}
                flex={1}
                style={{
                    gap: SizeConfig.width * 3,
                    backgroundColor: 'white',
                    paddingHorizontal: SizeConfig.width * 4,
                    paddingVertical: SizeConfig.height * 3,
                }}>
                <Image
                    source={require('../../../assets/images/Collection/collection4.png')}
                    style={{
                        width: SizeConfig.width * 45,
                        height: SizeConfig.height * 35,
                        borderRadius: SizeConfig.width * 3,
                        marginTop: SizeConfig.height * 3,
                    }}
                />

                <Image
                    source={require('../../../assets/images/Collection/collection2.png')}
                    style={{
                        width: SizeConfig.width * 45,
                        height: SizeConfig.height * 32,
                        borderRadius: SizeConfig.width * 3,
                        // backgroundColor: 'gray',
                    }}
                />
                <Image
                    source={require('../../../assets/images/Collection/collection3.png')}
                    style={{
                        width: SizeConfig.width * 45,
                        height: SizeConfig.height * 35,
                        borderRadius: SizeConfig.width * 3,
                        // backgroundColor: 'gray',
                    }}
                />
                <Image
                    source={require('../../../assets/images/Collection/collection1.png')}
                    style={{
                        width: SizeConfig.width * 45,
                        height: SizeConfig.height * 30,
                        borderRadius: SizeConfig.width * 3,
                        // backgroundColor: 'gray',
                    }}
                />

                <GridBlockSheet position={'absolute'} bottom={SizeConfig.height * 3} right={0}>
                    <Pressable
                        style={{
                            width: SizeConfig.width * 40,
                            height: SizeConfig.height * 6,
                            backgroundColor: 'black',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: SizeConfig.width * 3,
                            borderBottomLeftRadius: SizeConfig.width * 3,
                        }}>
                        <Text style={{ color: 'white' }}>VIEW ALL</Text>
                    </Pressable>
                </GridBlockSheet>
            </GridBlockSheet>
        </GridBlockSheet>
    )
}