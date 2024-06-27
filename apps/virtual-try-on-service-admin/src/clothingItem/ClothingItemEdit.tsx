import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClothingItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Brand" source="brand" />
        <div />
        <TextInput label="Name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
