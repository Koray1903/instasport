import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCities,setCurrentCity} from "../../redux";
import "../../style/CityList.css";

const CityList = (props) => {

  useEffect(() => {
    props.fetchCities(props.fetchURL);
  }, []);

  return (
    <div className="CityListDiv">
      {props.cityList.map((element, index) =>
        <button
          className="CityListButton"
          onClick={() => {
            console.log(element);
            props.setCurrentCity(element);
          }}
          key={index}>{element}</button>
      )}

      <img className="UndoButton"
           onClick={() => {
             props.setCurrentCity("");
           }}
           src="./undo.svg" alt="logo"/>

    </div>
  );
};


const mapStateToProps = state => {
  return {
    cityList: state.reducerClub.cityList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: url => dispatch(fetchCities(url)),
    setCurrentCity: city => dispatch(setCurrentCity(city)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList);