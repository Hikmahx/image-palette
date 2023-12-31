import {  ScrollView, View, Text } from "react-native";
import React from "react";
import FileUpload from "../components/FileUpload";
import tw from 'twrnc';

const SvgScreen = () => {
  return (
    <ScrollView>
    <View style={tw`flex items-center my-8 px-6`}>
      <FileUpload />
    </View>
    </ScrollView>
  );
};

export default SvgScreen;
