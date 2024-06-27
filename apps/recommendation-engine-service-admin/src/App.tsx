import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SizeRecommendationList } from "./sizeRecommendation/SizeRecommendationList";
import { SizeRecommendationCreate } from "./sizeRecommendation/SizeRecommendationCreate";
import { SizeRecommendationEdit } from "./sizeRecommendation/SizeRecommendationEdit";
import { SizeRecommendationShow } from "./sizeRecommendation/SizeRecommendationShow";
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
        title={"RecommendationEngineService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SizeRecommendation"
          list={SizeRecommendationList}
          edit={SizeRecommendationEdit}
          create={SizeRecommendationCreate}
          show={SizeRecommendationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
