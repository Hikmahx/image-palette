import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import UploadBtn from "./UploadBtn";
import ImageUpload from "../assets/svg/image-upload.svg";

const FileUpload = () => {

  
  return (
    <View
      style={tw`bg-white flex-1 max-w-xl px-8 py-9 m-4 min-h-full flex flex-col items-center rounded-xl m-2`}
    >
      <View style={tw`w-full`}>
        <View style={tw`upload-wrapper flex flex-col items-center`}>
          <Text
            style={[
              tw`text-dark-gray text-lg mb-4`,
              { fontFamily: "Poppins_400Regular" },
            ]}
          >
            Upload your image
          </Text>
          <Text
            style={[
              tw`text-xs text-gray mb-6`,
              { fontFamily: "Poppins_400Regular" },
            ]}
          >
            File should be Jpeg, Png,...
          </Text>
          <View
            style={tw`w-full h-56 p-6 rounded-lg bg-grayish-blue border-2 border-dashed border-pale-blue-border flex flex-col items-center`}
          >
            <View style={tw`img-wrapper w-2/5 mb-5`}>
              {/* <Image source={{uri:'../assets/image-upload.svg'}} alt="upload an image" style={tw`w-full`} /> */}
              <ImageUpload  width={'100%'} height={'100%'}/>
              
            </View>
          </View>
          <Text style={tw`text-light-gray m-6 text-xs`}>Or</Text>
          <TouchableOpacity
            style={tw`bg-blue text-white px-4 h-8 relative rounded-md text-xs flex items-center justify-center cursor-pointer hover:border-blue hover:border-1 hover:bg-white hover:text-blue transition-all`}
          >
            <Text style={tw`m-auto`}>Choose a file</Text>
            {/* {fileResponse.map((file, index) => (
              <Text
                key={index.toString()}
                style={StyleSheet.uri}
                numberOfLines={1}
                ellipsizeMode={"middle"}
              >
                {file?.uri}
              </Text>
            ))} */}
            {/* <Button title="Select 📑" onPress={handleDocumentSelection} /> */}
            <UploadBtn />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FileUpload;
