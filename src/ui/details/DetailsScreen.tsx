// import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SizeConfig } from '../../component/SizeConfig'
// import { SafeAreaView } from 'react-native-safe-area-context'

// export default function DetailsScreen() {
//     return (
//         <SafeAreaView style={{ flex: 1, position: 'relative' }}>
//             <View style={{ flex: 1, position: 'relative', }}>
//                 <View style={{
//                     top: 0,
//                     position: 'absolute',
//                     zIndex: 11,
//                     width: '100%',
//                     height: SizeConfig.height * 5,
//                     alignItems: 'center',
//                     // backgroundColor: 'yellow',
//                     justifyContent: 'center',
//                 }}>
//                     <Text style={{ textAlign: 'center', color: 'black' }}>
//                         Hello
//                     </Text>
//                 </View>
//                 <View style={{ flex: 1, backgroundColor: 'red' }} >
//                     <ScrollView
//                         showsVerticalScrollIndicator={false}
//                         style={{ flex: 1 }}
//                         stickyHeaderIndices={[0]}


//                     >
//                         <View>
//                             <Image
//                                 source={require('../../assets/images/Home/slider1.png')}
//                                 style={{ height: SizeConfig.height * 30, width: SizeConfig.width * 100 }}
//                             />
//                         </View>
//                         <View>
//                             <View style={{ zIndex: 10 }}>
//                                 <Text>
//                                     "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
//                                 </Text>
//                             </View>

//                             <View style={{ zIndex: 10 }}>
//                                 <Text>
//                                     "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
//                                     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//                                     "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
//                                 </Text>
//                             </View>
//                         </View>
//                     </ScrollView>
//                 </View>
//             </View>
//         </SafeAreaView >
//     )
// }
// const styles = StyleSheet.create({})


// import React, { useState } from 'react';
// import { Animated, ScrollView, Text, View, StyleSheet } from 'react-native';
// import { SizeConfig } from '../../component/SizeConfig';

// export default () => {
//   const [scrollY] = useState(new Animated.Value(0));

//   const headerHeight = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [SizeConfig.height * 50, SizeConfig.height * 90],
//     extrapolate: 'clamp',
//   });

//   return (
//     <>
//       <Animated.View
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: headerHeight,
//           backgroundColor: 'tomato',
//         }}
//       />

//       <ScrollView
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}

//       >
//         <View style={{ height: 100 , backgroundColor : 'red' }} />

//         <View style={{ height: SizeConfig.height * 50 }}>
//           <Text style={styles.text}>
//             "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
//             {"\n\n"}
//             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//             {"\n\n"}
//             "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
//           </Text>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 16,
//     lineHeight: 24,
//     paddingHorizontal: 16,  // Add padding to ensure the text doesn't go edge to edge
//     flexWrap: 'wrap',  // Ensure long text breaks into multiple lines if necessary
//   },
// });



import React, { useState } from 'react';
import { Animated, ScrollView, Text, View, StyleSheet } from 'react-native';
import { SizeConfig } from '../../component/SizeConfig';

export default () => {
  const [scrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [SizeConfig.height * 50, SizeConfig.height * 90],
    extrapolate: 'clamp',
  });

  return (
    <>
      {/* Animated Header */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,  // Ensure header is at the top
          left: 0,
          right: 0,
          height: headerHeight,
          backgroundColor: 'tomato',
        }}
      />

      {/* ScrollView with content */}
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: SizeConfig.height * 50 }}  // Adjust padding to make room for header
      >
        {/* Content starts here */}
        <View style={styles.contentContainer}>
          <Text style={styles.text}>
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
          </Text>

          <Text style={styles.text}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </Text>

          <Text style={styles.text}>
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          </Text>
        </View>

        {/* Additional content or space can be added below */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,  // Add padding to ensure the text doesn't go edge to edge
    flexWrap: 'wrap',  // Ensure long text breaks into multiple lines if necessary
    marginBottom: 16,  // Add margin for spacing between text blocks
  },
  contentContainer: {
    paddingBottom: 16,  // Add padding at the bottom for spacing
  },
});
