import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SvgScreen from "../screens/SvgScreen";
import OtherImagesScreen from "../screens/OtherImagesScreen";
import { View, Text } from "react-native";
import tw from "twrnc";
import {
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <View style={tw`flex-1 bg-blue-500`}>
        <View style={tw`flex items-center justify-center m-8 py-16 bg-blue-500`}>
          <Text style={[tw`uppercase text-white text-xl`, {fontFamily: 'Poppins_800ExtraBold' }]}>svg gallery</Text>
        </View>

        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "white",
            tabBarIndicatorStyle: {
              backgroundColor: "white",
              // borderBlockColor: "#000",
              borderBottomColor: "transparent",
              borderWidth: 0,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderColor: "black",
              // backfaceVisibility: "hidden",
              height: 50,
              borderBottomWidth: 0, 
              paddingBottom: 50,
              // paddingTop: 50,
              marginTop: 50,
              overflow: "hidden",
              
            },
            tabBarIndicatorContainerStyle:{

            },
            // tabBarBounces: true,
            tabBarLabelStyle: {
              fontSize: 12,
              // backgroundColor: "white",
              paddingHorizontal: 50,
              paddingVertical: 5,
              fontWeight: "normal",
              // margin: 10,
            },
            tabBarStyle: {
              // paddingVertical: 22,
              // backgroundColor: "#3b82f6",
              backgroundColor: "transparent",
              borderBottomWidth: 0, 
            },
            tabBarItemStyle: {
              borderBottomWidth: 0,
            },
          }}
        >
          <Tab.Screen name="Home" component={SvgScreen} />
          <Tab.Screen name="Settings" component={OtherImagesScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppNavigator;
