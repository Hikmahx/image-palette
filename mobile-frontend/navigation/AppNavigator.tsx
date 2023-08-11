import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SvgScreen from "../screens/SvgScreen";
import OtherImagesScreen from "../screens/OtherImagesScreen";
import { View, Text } from "react-native";
import tw from "twrnc";

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <View style={tw`flex-1`}>
        <View style={tw`flex items-center justify-center m-8 py-16`}>
          <Text>This is the header</Text>
        </View>

        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarIndicatorStyle: {
              backgroundColor: "red",
              borderBlockColor: "#000",
              borderBottomColor: "transparent",
              borderWidth: 1,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderColor: "black",
              // backfaceVisibility: "hidden",
              height: 40,
              borderBottomWidth: 0, // Add a bottom border for inactive tabs
            },
            tabBarIndicatorContainerStyle:{

            },
            // tabBarBounces: true,
            tabBarLabelStyle: {
              fontSize: 12,
              // backgroundColor: "white",
              paddingHorizontal: 30,
              paddingVertical: 5,
              margin: 0,
            },
            tabBarStyle: {
              // paddingVertical: 22,
              // backgroundColor: "#5858A0",
              borderBottomWidth: 2, // Add a bottom border for inactive tabs
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
