import React, { useEffect, useRef, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Animated } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { SizeConfig } from "../../component/SizeConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import { componentStyles } from "./styles";
import NormalProductImgSlider from "./Components/NormalProductImgSlider";
import { PressableIcons } from '../../component/PressableIcons'
import {
  HeadderSection,
  ReadMoreOrLessBtn,
  ReviewContentComp,
  ReviewGraphGroth,
  SimilarproductCards,
  StarsSection,
  toggleAnimation,
  toggleDescription,
  toggleSimilarProduct
} from "./Components/Healper";
import DetailsDescBottomSheet from "./Components/DetailsDescBottomSheet";
import {
  Color,
  productData,
  ratingsGrapData,
  ReadLessData,
  ReadMoreData,
  reviewContentData,
  SizeData
} from "./Components/Data";
import { Icon } from "react-native-basic-elements";
import BtnCust from "../../component/BtnCust";
import { FlatList, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationTypeChecking } from "../../routs/NavigationTypes";

type DetailsScreenProps = NativeStackScreenProps<NavigationTypeChecking, 'DetailsScreen'>

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation, route }) => {
  const [openAllSection, setOpenAllSection] = useState(0)
  const [selectColor, setSelectColor] = useState(0)
  const [selectSize, setSelectSize] = useState(0);
  const [showSimilarProduct, setShowSimilarProduct] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;
  const SimilarProductAnimation = useRef(new Animated.Value(0)).current;
  const ReviewAnimation = useRef(new Animated.Value(0)).current;
  const sheetRef = useRef<BottomSheet>(null);

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, showMoreDescription ? SizeConfig.height * 33 : SizeConfig.height * 15],
  });

  const animatedSimilarProductHeight = SimilarProductAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SizeConfig.height * 32],
  });


  const ReviewAnimatedHeight = ReviewAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SizeConfig.height * 70],
  });

  useEffect(() => {
    if (openAllSection === 1) {
      setShowDescription(true);
      setShowSimilarProduct(true);
      setShowAnimation(true);

      toggleDescription({ animation, showDescription: false, setShowDescription });
      toggleAnimation({ ReviewAnimation, showAnimation: false, setShowAnimation });
      toggleSimilarProduct({ SimilarProductAnimation, showSimilarProduct: false, setShowSimilarProduct });
    } else if (openAllSection === 0) {
      setShowDescription(false);
      setShowSimilarProduct(false);
      setShowAnimation(false);

      toggleDescription({ animation, showDescription: true, setShowDescription });
      toggleAnimation({ ReviewAnimation, showAnimation: true, setShowAnimation });
      toggleSimilarProduct({ SimilarProductAnimation, showSimilarProduct: true, setShowSimilarProduct });
    }
  }, [openAllSection, animation, ReviewAnimation, SimilarProductAnimation]);




  return (


    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />
        <View
          style={[componentStyles.detailsNavBarCon, componentStyles.horizontalPadding,]}
        >
          <PressableIcons
            type={"Entypo"}
            name={"chevron-left"}
            color={"#1E3354"}
            onPressFunction={() => {
              navigation.pop()
            }}
          />
          <PressableIcons
            type={"AntDesign"}
            name={"heart"}
            color={"#FF6E6E"}
          />
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
          buttonStyle={componentStyles.addToCartBtnComp}
          buttonTextStyle={componentStyles.addToCartBtn}

        />

        <DetailsDescBottomSheet setOpenAllSection={setOpenAllSection} sheetRef={sheetRef} >
          <View style={[componentStyles.horizontalPadding]}>
            <View style={componentStyles.productHeadderCom}>
              <View style={componentStyles.productTittleComp}>
                <Text style={componentStyles.productTittle}>
                  Sportwear Set
                </Text>
                <Text style={componentStyles.productPrice}>
                  $ 80.00
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }} >
                <View style={componentStyles.rattingSubComp}>
                  <StarsSection />
                </View>
                <Text style={componentStyles.rattingCount}>
                  (83)
                </Text>
              </View>
            </View>

            <View style={componentStyles.selectVarietyComp}>
              {/* Color Section */}
              <View style={componentStyles.selectVarietyCompOne}>
                <Text style={componentStyles.selectVarietyCompOneTitle}>
                  Color
                </Text>
                <View style={{ flexDirection: 'row', gap: SizeConfig.width * 2 }}>
                  {Color.map((color, index) => (
                    <TouchableOpacity
                      key={index + 'A'}
                      onPress={() => {
                        setSelectColor(index)
                      }}
                      style={[componentStyles.selectColorComp, { borderWidth: selectColor == index ? 0.1 : 0 }]}
                    >
                      <View
                        style={[componentStyles.selectColorInnerComp, {
                          backgroundColor: color
                        }]}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Size Section */}
              <View style={{ justifyContent: 'center', width: SizeConfig.width * 38 }}>
                <Text style={componentStyles.selectSizeVarietyComp}>
                  Size
                </Text>
                <View style={componentStyles.selectSizeVarietyDataComp}>
                  {SizeData.map((size, index) => (
                    <TouchableOpacity
                      key={index + 'B'}
                      onPress={() => {
                        setSelectSize(index)
                      }}
                      style={[componentStyles.selectSizeVarietyDataMainComp, {
                        backgroundColor: selectSize == index ? '#515151' : '#FAFAFA'
                      }]}
                    >
                      <Text style={[componentStyles.selectSizeVarietyTextComp, { color: selectSize == index ? 'white' : '#333' }]}>
                        {size}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            {/* <DiscriptionSectionScreen /> */}

            {/* Header Section */}
            <HeadderSection
              showDescription={showDescription}
              toggleDescription={() => {
                toggleDescription({ animation, showDescription, setShowDescription })
              }}
              content={'Description'}
            />


            {/* Animated Description Section */}
            <Animated.View style={[componentStyles.descriptionContainer, { height: animatedHeight }]}>
              <Text style={componentStyles.descriptionText}>
                {ReadLessData}
                {
                  showMoreDescription ?
                    <>
                      {ReadMoreData}

                      <ReadMoreOrLessBtn setShowMoreDescription={setShowMoreDescription} controlStatus={false} content={'Read Less'} />

                    </>
                    :
                    <ReadMoreOrLessBtn setShowMoreDescription={setShowMoreDescription} controlStatus={true} content={'Read More'} />
                }
              </Text>
            </Animated.View>

            {/* <Reviews /> */}

            <View style={{ flex: 1 }}>
              {/* Header Section */}
              <HeadderSection
                showDescription={showAnimation}
                toggleDescription={() => {
                  toggleAnimation({ ReviewAnimation, showAnimation, setShowAnimation })
                }}
                content={'Review'}
              />
              {/* Animated Description Section */}
              <Animated.View style={[{ height: ReviewAnimatedHeight, overflow: 'hidden', }]}>
                <View style={componentStyles.ratingHeadderComp} >
                  <View style={componentStyles.ratingHeadderSubComp}>
                    <Text style={componentStyles.noOfRatings} >
                      4.9
                    </Text>
                    <Text style={componentStyles.totalRatings}>
                      OUT OF 5
                    </Text>
                  </View>
                  <View style={{
                    alignItems: 'flex-end',
                    gap: SizeConfig.width * 2
                  }} >
                    {
                      <View style={componentStyles.starsSubComp}>
                        <StarsSection />
                      </View>
                    }
                    <Text style={componentStyles.totalNumberOfRatings}>
                      83 ratings
                    </Text>
                  </View>
                </View>


                {/* <ReviewsGrap /> */}

                <View>
                  <View style={componentStyles.grapComp}>

                    {
                      ratingsGrapData.map((data, index) => {
                        return (
                          <ReviewGraphGroth data={data} index={index + 'C'} />
                        )
                      })
                    }
                  </View>
                  <View style={componentStyles.addReviewComp}>
                    <Text style={componentStyles.addTotalReview}>
                      47 Reviews
                    </Text>
                    <View style={componentStyles.addReviewBtnComp}>
                      <Text style={componentStyles.addReviewBtnText}>
                        WRITE A REVIEW
                      </Text>
                      <Icon
                        type='FontAwesome5'
                        name='pencil-alt'
                        color={'#8A8A8F'}
                        size={SizeConfig.width * 3}

                      />
                    </View>
                  </View>


                </View>
                {/* <ReviewContent /> */}

                {
                  reviewContentData.map((data, index) => (
                    <ReviewContentComp data={data} index={index + 'D'} />
                  ))
                }

              </Animated.View>
            </View>
          </View>

          {/* <SimilarProduct /> */}

          <View style={{ marginBottom: SizeConfig.height * 11, }}>
            <HeadderSection
              showDescription={showSimilarProduct}
              toggleDescription={() => {
                toggleSimilarProduct({ SimilarProductAnimation, showSimilarProduct, setShowSimilarProduct })
              }}
              content={'Similar Product'}
              containerStyle={{ marginHorizontal: SizeConfig.width * 7 }}
            />

            {/* Animated Description Section */}
            <Animated.View style={[componentStyles.descriptionContainer, { height: showSimilarProduct ? SizeConfig.height * 34 : SizeConfig.height * 0 }]}>
              {/* <SimilarProductCard /> */}


              <View style={{ backgroundColor: '#fff' }}>
                <PanGestureHandler
                  activeOffsetX={[-20, 20]}
                  failOffsetY={[-10, 10]}
                  simultaneousHandlers={[sheetRef]}
                >
                  <FlatList
                    data={productData}
                    nestedScrollEnabled={true}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={componentStyles.flatListContent}
                    renderItem={({ item }) => (
                      <SimilarproductCards item={item} />
                    )}
                  />
                </PanGestureHandler>
              </View>
            </Animated.View>
          </View>
        </DetailsDescBottomSheet >
      </GestureHandlerRootView>
    </SafeAreaView >
  );
};

export default DetailsScreen