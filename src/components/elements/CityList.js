import React, {useEffect} from "react";
import {connect} from "react-redux";
import { fetchCities, setCurrentCity, setCurrentCategory} from "../../redux";
import "../../style/CityList.css";

const CityList = (props) => {

  useEffect(() => {
    props.fetchCities(props.fetchURL);
  }, []);

  return (
    <div className="CityListDiv">
      {props.cityList.map((city, index) =>
        <button
          className="CityListButton"
          onClick={() => {
            props.setCurrentCity(city);
            props.setCurrentCategory("");
          }}
          key={index}>{city}</button>
      )}

      <img className="UndoButton" // reset filter
           onClick={() => {
             props.setCurrentCity("");
           }}
           src="./undo.svg" alt="logo"/>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    cityList: state.reducerClub.cityList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: url => dispatch(fetchCities(url)),
    setCurrentCity: city => dispatch(setCurrentCity(city)),
    setCurrentCategory: category => dispatch(setCurrentCategory(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList);