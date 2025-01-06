import React from 'react'
import StackNav from './src/routs/StackNav';
import BottomTabNavBar from './src/routs/BottomTabNavBar';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <StackNav />
    // <NavigationContainer>
    //   <BottomTabNavBar />
    // </NavigationContainer>
  )
}
