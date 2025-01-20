import React from 'react'
import SliderDrawer from './src/routs/SliderDrawerComp/SliderDrawer';

export default function App() {
  return (
    // <StackNav />
    <SliderDrawer />
  )
}



// import * as React from 'react';
// import { FlatList, Pressable, Text, View } from 'react-native';
// import { Drawer } from 'react-native-drawer-layout';
// import { drawerCompStyle } from './src/routs/SliderDrawerComp/Components/styles';
// import { DrawerLinksButtons, DrawerOtherSectionNavBtnComp, HeadderSection, ThemControlerBtns } from './src/routs/SliderDrawerComp/Components/Healper';
// import { SizeConfig } from './src/component/SizeConfig';
// import { DrawerMainNavBtn, DrawerOtherSectionNavBtn } from './src/routs/SliderDrawerComp/Components/Data';

// export default function App() {
//   const [open, setOpen] = React.useState(false);
//   const [mainBtnIndex, setMainBtnIndex] = React.useState(-1);
//   const [drawerOtherBtnIndex, setDrawerOtherBtnIndex] = React.useState(-1)

//   return (
//     <Drawer
//       open={open}
//       onOpen={() => setOpen(true)}
//       onClose={() => setOpen(false)}
//       renderDrawerContent={() => {
//         return (
//           <View style={{
//             flex: 1,
//             paddingHorizontal: SizeConfig.width * 5,
//             alignItems: 'center',
//             justifyContent: 'space-around',
//           }}>
//             <HeadderSection />

//             <View style={drawerCompStyle.MainNavBtnComp}>
//               <FlatList
//                 data={DrawerMainNavBtn}
//                 keyExtractor={item => item.id + ''}
//                 contentContainerStyle={drawerCompStyle.MainFlatListCompStyle}
//                 scrollEnabled={false}
//                 renderItem={(
//                   ({ item, index }) => {
//                     return (
//                       <DrawerLinksButtons
//                         imgURI={item.imgURI}
//                         content={item.content}
//                         mainBtnIndex={mainBtnIndex}
//                         index={index}
//                         setMainBtnIndex={setMainBtnIndex}
//                         setDrawerOtherBtnIndex={setDrawerOtherBtnIndex}
//                       />
//                     )
//                   }
//                 )}
//               />
//               <Text style={drawerCompStyle.drawerDividerText}>
//                 OTHER
//               </Text>
//               <View style={drawerCompStyle.otherNavBtnComp}>
//                 <FlatList
//                   data={DrawerOtherSectionNavBtn}
//                   keyExtractor={item => item.id + ''}
//                   contentContainerStyle={drawerCompStyle.otherFlatListCompStyle}
//                   scrollEnabled={false}
//                   renderItem={(
//                     ({ item, index }) => {
//                       return (
//                         <DrawerOtherSectionNavBtnComp
//                           imgURI={item.imgURI}
//                           content={item.content}
//                           drawerOtherBtnIndex={drawerOtherBtnIndex}
//                           index={index}
//                           setDrawerOtherBtnIndex={setDrawerOtherBtnIndex}
//                           setMainBtnIndex={setMainBtnIndex}
//                         />
//                       )
//                     }
//                   )}
//                 />
//               </View>
//             </View>
//             <ThemControlerBtns />
//           </View >
//         )
//       }}
//     >

//       <Pressable onPress={() => { setOpen(!open) }} >
//         <Text>
//           press
//         </Text>
//       </Pressable>



//     </Drawer>
//   );
// }