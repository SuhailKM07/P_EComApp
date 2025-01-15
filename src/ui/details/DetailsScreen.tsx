import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, Image, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { SizeConfig } from "../../component/SizeConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-basic-elements";
import { componentStyles } from "./styles";
import NormalProductImgSlider from "./NormalProductImgSlider";
import Details from "./BottomSheetDetailsSection/Details";
import BtnCust from "../../component/BtnCust";

const DetailsScreen = () => {
  // Hooks
  const sheetRef = useRef<BottomSheet>(null);

  // Callbacks
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="white"
        barStyle="dark-content"
      />

      <GestureHandlerRootView style={styles.container}>
        {/* Header Section */}
        <View
          style={[
            styles.SliderMainComp,
          ]}
        >
          <View
            style={[styles.detailsNavBarCon, componentStyles.horizontalPadding,]}
          >
            <View
              style={styles.backBtnCon}
            >
              <Icon
                type="Entypo"
                name="chevron-left"
                size={SizeConfig.width * 6}
                color="#1E3354"
                style={{ width: SizeConfig.width * 6 }}
              />
            </View>
            <View
              style={styles.heartBtnCon}
            >
              <Icon
                type="AntDesign"
                name="heart"
                size={SizeConfig.width * 6}
                color="#FF6E6E"
                style={{ width: SizeConfig.width * 6 }}
              />
            </View>
          </View>
          <NormalProductImgSlider />

          <BtnCust

            buttonContent='Add To Cart'
            prefixIcon={
              <Icon
                type='FontAwesome5'
                name='shopping-bag'
                color={'white'}
                size={SizeConfig.width * 6}
                style={{ width: SizeConfig.width * 6 }}
              />
            }
            buttonStyle={{
              backgroundColor: '#343434',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: SizeConfig.height * 10,
              zIndex: 10,
              width: '100%',
              borderTopRightRadius: SizeConfig.width * 7,
              borderTopLeftRadius: SizeConfig.width * 7
            }}
            buttonTextStyle={{
              fontSize: SizeConfig.fontSize * 4,
              color: 'white',
              fontFamily: 'RedHatDisplay-Bold',
              // backgroundColor : 'green'
            }}

          />


        </View>

        <BottomSheet
          ref={sheetRef}
          index={0}
          snapPoints={["52%", "90%"]}
          onChange={handleSheetChange}
          handleIndicatorStyle={{ display: 'none' }}
          enableDynamicSizing={false}
          backgroundStyle={{
            borderTopRightRadius: SizeConfig.width * 5,
            borderTopLeftRadius: SizeConfig.width * 5,
            elevation: 10,
            backgroundColor: 'white',
          }}
        >
          <BottomSheetScrollView
            nestedScrollEnabled
            contentContainerStyle={styles.contentContainer}
          >
            <Details />
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SliderMainComp: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    flex: 1
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  detailsNavBarCon: {
    width: "100%",
    height: SizeConfig.height * 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: 'absolute',
    zIndex: 1,
    top: 0
  },
  backBtnCon: {
    elevation: 2,
    backgroundColor: "white",
    width: SizeConfig.width * 10,
    borderRadius: SizeConfig.width * 100,
    alignItems: "center",
    justifyContent: "center",
    height: SizeConfig.width * 10,
  },
  heartBtnCon: {
    elevation: 2,
    backgroundColor: "white",
    width: SizeConfig.width * 10,
    borderRadius: SizeConfig.width * 100,
    alignItems: "center",
    justifyContent: "center",
    height: SizeConfig.width * 10,
  }
});

export default DetailsScreen;

