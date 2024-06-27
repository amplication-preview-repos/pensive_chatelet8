import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SizeRecommendationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ClothingItem" source="clothingItem" />
        <TextInput label="RecommendedSize" source="recommendedSize" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
