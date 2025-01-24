import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { SizeConfig } from '../../../component/SizeConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DetailsDescBottomSheet({ children, setOpenAllSection, sheetRef }: {
    children: any;
    setOpenAllSection: (index: number) => void;
    sheetRef: any;
}) {


    const handleSheetChange = useCallback((index: number) => {
        setOpenAllSection(index);
        console.log("details desc bottom sheet  ")
    }, []);
    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <BottomSheet
                ref={sheetRef}
                index={0}
                snapPoints={["52%", "90%"]}
                onChange={handleSheetChange}
                handleIndicatorStyle={{ display: 'none' }}
                enableDynamicSizing={false}
                enableOverDrag = {false}
                backgroundStyle={{
                    borderTopRightRadius: SizeConfig.width * 5,
                    borderTopLeftRadius: SizeConfig.width * 5,
                    // elevation: 10,
                    backgroundColor: 'white',
                }}
            >
                <BottomSheetScrollView
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ backgroundColor: "white" }}
                >
                    {
                        children
                    }
                </BottomSheetScrollView>
            </BottomSheet>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({})