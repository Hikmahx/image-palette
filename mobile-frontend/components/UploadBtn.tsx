import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import * as DocumentPicker from "expo-document-picker"; // Import from expo-document-picker
import { useSelector, useDispatch } from "react-redux";
import { setImage } from "../redux/reducers/uploadSlice";
import { RootState } from "../redux/store";

const UploadBtn = () => {
  const { image } = useSelector((state: RootState) => state.upload);
  const dispatch = useDispatch();

  const pickedDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Accept any type of document
      });

      console.log(result);
      console.log(
        "MIME Type:",
        result.assets[0].mimeType.includes("image/svg")
      ); // Log the MIME type

      // if (result.type === "success") {
      if (result.assets[0].mimeType.includes("image/svg")) {
        dispatch(setImage(result.assets[0]));
      }
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };

  return (
    <View>
      <Button title="Browse" onPress={pickedDocument} />
    </View>
  );
};

export default UploadBtn;
