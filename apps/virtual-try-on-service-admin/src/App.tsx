import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PhotoUploadList } from "./photoUpload/PhotoUploadList";
import { PhotoUploadCreate } from "./photoUpload/PhotoUploadCreate";
import { PhotoUploadEdit } from "./photoUpload/PhotoUploadEdit";
import { PhotoUploadShow } from "./photoUpload/PhotoUploadShow";
import { BodyMeasurementsList } from "./bodyMeasurements/BodyMeasurementsList";
import { BodyMeasurementsCreate } from "./bodyMeasurements/BodyMeasurementsCreate";
import { BodyMeasurementsEdit } from "./bodyMeasurements/BodyMeasurementsEdit";
import { BodyMeasurementsShow } from "./bodyMeasurements/BodyMeasurementsShow";
import { ClothingItemList } from "./clothingItem/ClothingItemList";
import { ClothingItemCreate } from "./clothingItem/ClothingItemCreate";
import { ClothingItemEdit } from "./clothingItem/ClothingItemEdit";
import { ClothingItemShow } from "./clothingItem/ClothingItemShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VirtualTryOnService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PhotoUpload"
          list={PhotoUploadList}
          edit={PhotoUploadEdit}
          create={PhotoUploadCreate}
          show={PhotoUploadShow}
        />
        <Resource
          name="BodyMeasurements"
          list={BodyMeasurementsList}
          edit={BodyMeasurementsEdit}
          create={BodyMeasurementsCreate}
          show={BodyMeasurementsShow}
        />
        <Resource
          name="ClothingItem"
          list={ClothingItemList}
          edit={ClothingItemEdit}
          create={ClothingItemCreate}
          show={ClothingItemShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
