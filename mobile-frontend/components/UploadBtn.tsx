import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import DocumentPicker, {
  DocumentPickerResponse,
} from "react-native-document-picker";


const UploadBtn = () => {
  const [pickedDocument, setPickedDocument] =
    useState<DocumentPickerResponse | null>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // You can specify the types of files you want to allow here
      });
      // const response = await DocumentPicker.pick({
      //   presentationStyle: 'fullScreen',
      // });
      // console.log(
      //   result.uri,
      //   result.type, // MIME type
      //   result.name,
      //   result.size
      // );
      console.log(result)

      setPickedDocument(result as any);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled document picker");
      } else {
        throw err;
      }
    }
  };

  return (
    <View>
      <Button title="Pick a Document" onPress={pickDocument} />
      {pickedDocument && (
        <View>
          <Text>File: {pickedDocument.name}</Text>
          <Text>Type: {pickedDocument.type}</Text>
          <Text>Size: {pickedDocument.size} bytes</Text>
        </View>
      )}
    </View>
  );
};

export default UploadBtn;
