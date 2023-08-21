import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React from "react";
import tw from "twrnc";
import UploadBtn from "./UploadBtn";
import ImageUpload from "../assets/svg/image-upload.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import SvgUri from "react-native-svg-uri";

const FileUpload = () => {
  const { image } = useSelector((state: RootState) => state.upload);

  return (
    <View
      style={tw`bg-white flex-1 max-w-xl w-full px-8 py-9 m-4 min-h-full flex flex-col items-center rounded-xl m-2`}
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
              tw`text-xs text-gray-400 mb-6`,
              { fontFamily: "Poppins_400Regular" },
            ]}
          >
            File should be Svg
          </Text>
          <View
            style={tw`w-full h-48 p-6 rounded-lg bg-grayish-blue border-2 border-dashed border-gray-400 flex flex-col items-center`}
          >
            <View
              style={tw`w-full flex-1 flex items-center justify-center`}
              >
              {image ? (
                <>
                  {/* <Image
                    source={{ uri: image }}
                    style={tw`w-full rounded-xl flex-1 flex items-center justify-center m-auto`}

                  /> */}
                  <SvgUri
                    width="100%"
                    height="100%"
                    source={{ uri: image.uri }} // Use the URI of the selected SVG image
                  />
                </>
              ) : (

                  <ImageUpload
                    width={"100%"}
                    height={"100%"}
                    style={tw`w-full flex items-center justify-center m-auto`}
                  />
              )}
            </View>
          </View>
          <TouchableOpacity
            style={tw`bg-blue text-white mt-6 px-4 relative rounded-md text-xs flex items-center justify-center cursor-pointer hover:border-blue hover:border-1 hover:bg-white hover:text-blue transition-all`}
          >
            <UploadBtn />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FileUpload;
