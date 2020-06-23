import React from "react";
import "./style/App.css";
import {Provider} from "react-redux";
import store from "./redux/store";
import Header from "./components/elements/Header";
import CityList from "./components/elements/CityList";
import CategoryList from "./components/elements/CategoryList";
import ClubList from "./components/elements/ClubList";

const App = () => {

  const fetchURL = "https://instasport.co/dashboard/api/v1/clubs/?format=json";

  return (
    <>
      <Provider store={store}>

        <Header />
        <CityList fetchURL={fetchURL}/>
        <CategoryList fetchURL={fetchURL}/>
        <ClubList fetchURL={fetchURL}/>

      </Provider>
    </>
  );
};

export default App;
