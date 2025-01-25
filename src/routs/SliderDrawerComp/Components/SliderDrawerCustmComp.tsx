import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { SizeConfig } from '../../../component/SizeConfig'
import { DrawerLinksButtons, DrawerOtherSectionNavBtnComp, HeadderSection, ThemControlerBtns } from './Healper'
import { DrawerMainNavBtn, DrawerOtherSectionNavBtn } from './Data'
import { drawerCompStyle } from './styles'

export default function SliderDrawerCustmComp(props: DrawerContentComponentProps) {

    const [mainBtnIndex, setMainBtnIndex] = useState(-1);
    const [drawerOtherBtnIndex, setDrawerOtherBtnIndex] = useState(-1)




    return (
        <View style={{
            flex: 1,
            paddingHorizontal: SizeConfig.width * 1,
            // backgroundColor : 'red',
        }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={drawerCompStyle.drawerCompStyle}
            >
                <HeadderSection />
                <View style={drawerCompStyle.MainNavBtnComp}>
                    <FlatList
                        data={DrawerMainNavBtn}
                        keyExtractor={item => item.id + ''}
                        contentContainerStyle={drawerCompStyle.MainFlatListCompStyle}
                        scrollEnabled={false}
                        renderItem={(
                            ({ item, index }) => {
                                return (
                                    <DrawerLinksButtons
                                        imgURI={item.imgURI}
                                        content={item.content}
                                        mainBtnIndex={mainBtnIndex}
                                        index={index}
                                        setMainBtnIndex={setMainBtnIndex}
                                        setDrawerOtherBtnIndex={setDrawerOtherBtnIndex}
                                        navigation={props.navigation}
                                    />
                                )
                            }
                        )}
                    />
                    <Text style={drawerCompStyle.drawerDividerText}>
                        OTHER
                    </Text>
                    <View style={drawerCompStyle.otherNavBtnComp}>
                        <FlatList
                            data={DrawerOtherSectionNavBtn}
                            keyExtractor={item => item.id + ''}
                            contentContainerStyle={drawerCompStyle.otherFlatListCompStyle}
                            scrollEnabled={false}
                            renderItem={(
                                ({ item, index }) => {
                                    return (
                                        <DrawerOtherSectionNavBtnComp
                                            imgURI={item.imgURI}
                                            content={item.content}
                                            drawerOtherBtnIndex={drawerOtherBtnIndex}
                                            index={index}
                                            setDrawerOtherBtnIndex={setDrawerOtherBtnIndex}
                                            setMainBtnIndex={setMainBtnIndex}
                                           
                                        />
                                    )
                                }
                            )}
                        />
                    </View>
                </View>
                <ThemControlerBtns />
            </DrawerContentScrollView >
        </View >
    )
}
