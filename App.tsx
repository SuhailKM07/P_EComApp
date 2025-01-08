import React from 'react'
import StackNav from './src/routs/StackNav';
import BottomTabNavBar from './src/routs/BottomTabNavBar';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './src/ui/details/DetailsScreen';



export default function App() {
  return (
    // <StackNav />
    <DetailsScreen />
    // <NavigationContainer>
    //   <BottomTabNavBar />
    // </NavigationContainer>
  )
}
