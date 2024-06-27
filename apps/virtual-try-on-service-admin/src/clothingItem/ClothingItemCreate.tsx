import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClothingItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Brand" source="brand" />
        <div />
        <TextInput label="Name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
