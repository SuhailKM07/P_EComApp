import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNav from '../../routs/StackNav';
import SliderDrawerCustmComp from './Components/SliderDrawerCustmComp';
import { DrawerNavigationTypeChecking } from '../NavigationTypes';
import { enableScreens } from 'react-native-screens'
import { SizeConfig } from '../../component/SizeConfig';

const Drawer = createDrawerNavigator<DrawerNavigationTypeChecking>();

const SliderDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <SliderDrawerCustmComp {...props} />}
                initialRouteName="StackNav"
                screenOptions={{
                    drawerType: 'front',
                    headerShown: false,
                    swipeEnabled: false,
                    drawerHideStatusBarOnOpen: true,
                    drawerStyle: {
                        width: '80%',
                        borderTopRightRadius: SizeConfig.width * 7,
                        borderBottomRightRadius: SizeConfig.width * 7,
                    }
                }}

            >
                <Drawer.Screen name="StackNav" component={StackNav} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
export default SliderDrawer;
