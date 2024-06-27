import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SizeRecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ClothingItem" source="clothingItem" />
        <TextInput label="RecommendedSize" source="recommendedSize" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
