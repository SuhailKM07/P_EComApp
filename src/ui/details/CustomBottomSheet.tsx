// import React, { useEffect, useRef, useState } from 'react';
// import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
// import { SizeConfig } from '../../component/SizeConfig';
// import { Gesture, GestureHandlerRootView, GestureDetector } from 'react-native-gesture-handler';
// import Animated, { useSharedValue, withTiming, useAnimatedStyle, runOnJS } from 'react-native-reanimated';


// export default () => {
//   const animatedHeight = useSharedValue(SizeConfig.height * 50);
//   const [gestureRecognize, setGestureRecognize] = useState(true);
//   let [isInitial, setIsInitial] = useState(0);
//   const [isOnTop, setOnTop] = useState(true)

//   const panGesture = Gesture.Pan()
//     .onEnd((e) => {
//       runOnJS(setIsInitial)(e.translationY >= 0 ? 0 : 1)
//       console.log(isInitial)
//     })
//     .onUpdate((e) => {
//       let targetHeight = e.translationY >= 0 ? SizeConfig.height * 50 : SizeConfig.height * 90;
//       animatedHeight.value = withTiming(targetHeight, { duration: 300 });
//         e.translationY >= 0 ? runOnJS(setGestureRecognize)(true) : runOnJS(setGestureRecognize)(false)
//     })
//     .enabled(gestureRecognize);
//   const animatedHeaderStyle = useAnimatedStyle(() => {
//     return {
//       height: animatedHeight.value,
//     };
//   });
//   const previousY = useRef(0);  
//   const previousX = useRef(0);  
  
//   const handleTouchMove = (event: any) => {
//     const currentY = event.nativeEvent.pageY;
//     const currentX = event.nativeEvent.pageX;
  
//     const deltaY = currentY - previousY.current;  
//     const deltaX = currentX - previousX.current;  
  
//     const isVertical = Math.abs(deltaY) > Math.abs(deltaX);
  
//     if (isVertical) {
//       if (!(deltaY > 0)) {
//         setGestureRecognize(true); 
//         console.log("heloo it is enteed" , gestureRecognize)
//       }
//     } else {
//       setGestureRecognize(true); 
//     }
  
//     previousY.current = currentY;
//     previousX.current = currentX;
//   };


  
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={{ position: 'relative', flex: 1 }}>
//         <GestureDetector gesture={panGesture}>
//           <Animated.View style={[styles.header, animatedHeaderStyle]}>
//             <ScrollView
//               onTouchMove={handleTouchMove}
//               onScroll={(event) => {
//                 const contentOffsetY = event.nativeEvent.contentOffset.y;
//                 setOnTop(contentOffsetY === 0)
//                 setGestureRecognize(contentOffsetY === 0);
//               }}
//             >
//               <View style={styles.contentContainer}>
//                 <Text style={styles.text}>
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   Histor, Purpose and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   History, Purpose, and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   History, Purpose, and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   History, Purpose, and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   History, Purpose, and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   History, Purpose, and Usage History, Purpose, and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   History, Purpose, and Usage
//                   Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
//                   History, Purpose, and Usage
//                 </Text>
//               </View>
//               <Text style={styles.headerText}>Animated Header</Text>
//             </ScrollView>
//           </Animated.View>
//         </GestureDetector>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: 'tomato',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   contentContainer: {
//     padding: 16,

//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 24,
//     marginBottom: 16,
//   },
// });



//  ----------------------------------------------

// import React from 'react';
// import {
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   useDerivedValue,
//   withDelay,
//   withTiming,
// } from 'react-native-reanimated';
// import { SizeConfig } from '../../component/SizeConfig';

// function BottomSheet({ isOpen, toggleSheet, duration = 500, children }) {
//   const height = useSharedValue(0);
//   const progress = useDerivedValue(() =>
//     withTiming(isOpen.value ? 0 : 1, { duration })
//   );

//   const sheetStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: progress.value * 2 * height.value }],
//   }));

//   const backgroundColorSheetStyle = {
//     backgroundColor: 'gray',
//   };

//   const backdropStyle = useAnimatedStyle(() => ({
//     opacity: 1 - progress.value,
//     zIndex: isOpen.value
//       ? 1
//       : withDelay(duration, withTiming(-1, { duration: 0 })),
//   }));

//   return (
//     <>
//       <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
//         <TouchableOpacity style={styles.flex} onPress={toggleSheet} />
//       </Animated.View>
//       <Animated.View
//         onLayout={(e) => {
//           height.value = e.nativeEvent.layout.height;
//         }}
//         style={[sheetStyles.sheet, sheetStyle, backgroundColorSheetStyle]}>
//         {children}
//       </Animated.View>
//     </>
//   );
// }

// const sheetStyles = StyleSheet.create({
//   sheet: {
//     padding: 16,
//     // paddingRight: '2rem',
//     // paddingLeft: '2rem',
//     height: SizeConfig.height * 50,
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     zIndex: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backdrop: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
// });


// export default function App() {
//   const isOpen = useSharedValue(false);

//   const toggleSheet = () => {
//     isOpen.value = !isOpen.value;
//   };

//   const contentStyle = {
//     color: '#001a72',
//     textDecorationColor: '#f8f9ff',
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
//         <ScrollView
//           onScroll={(event) => {
//             const contentOffsetY = event.nativeEvent.contentOffset.y;
//             if(contentOffsetY === 0) {
//               toggleSheet()
//             }
//             // setOnTop(contentOffsetY === 0)
//             // setGestureRecognize(contentOffsetY === 0);
//           }}
//         >
//           <Animated.Text style={contentStyle}>
//             Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details. Discover the indispensable convenience of a bottom sheet in mobile
//             app. Seamlessly integrated, it provides quick access to supplementary
//             features and refined details.
//           </Animated.Text>
//           <View style={styles.buttonContainer}>
//             <Pressable style={[styles.bottomSheetButton]}>
//               <Text style={[styles.bottomSheetButtonText, contentStyle]}>
//                 Read more
//               </Text>
//             </Pressable>
//           </View>
//         </ScrollView>
//       </BottomSheet>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     height: 250,
//     // backgroundColor: 'red'
//   },
//   buttonContainer: {
//     marginTop: 16,
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-around',
//   },
//   toggleButton: {
//     backgroundColor: '#b58df1',
//     padding: 12,
//     borderRadius: 48,
//   },
//   toggleButtonText: {
//     color: 'white',
//     // padding: '0.5rem',
//   },
//   safeArea: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   bottomSheetButton: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     paddingBottom: 2,
//   },
//   bottomSheetButtonText: {
//     fontWeight: 600,
//     textDecorationLine: 'underline',
//   },
// });




// import * as React from 'react';
// import MainContent from "./MainContent";
// import Sheet from "./Sheet";
// import ExampleComponent from "./ExampleComponent";
// import { View } from 'react-native';



// function DetailsScreen() {
//     return (
//       <View style={{ flex: 1 }}>
//         <MainContent/>
//         <Sheet>
//           <ExampleComponent style={{ height: 60, marginBottom: 10 }} />
//           <View style={{ flexDirection: 'row', marginBottom: 10 }}>
//             <ExampleComponent style={{ flex: 1, height: 120, marginRight: 10 }} />
//             <ExampleComponent style={{ flex: 1, height: 120 }} />
//           </View>          
//         </Sheet>
//       </View>
//     );
//   }
  
//   export default DetailsScreen