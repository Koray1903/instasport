import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCategories, setCurrentCategory} from "../../redux";
import "../../style/CategoryList.css";

const CategoryList = (props) => {

  useEffect(() => {
    props.fetchCategories(props.fetchURL);
  }, [props.currentCity]);


  return (
    <div className="CategoryListDiv">
      {props.categoryList.map((category, index) =>
        <button
          className="CategoryListButton"
          onClick={() => {
            props.setCurrentCategory(category);
          }}
          key={index}>{category}</button>
      )}

      <img className="UndoButton" // reset filter
           onClick={() => {
             props.setCurrentCategory("");
           }}
           src="./undo.svg" alt="logo"/>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    categoryList: state.reducerClub.categoryList,
    currentCity: state.reducerClub.currentCity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: url => dispatch(fetchCategories(url)),
    setCurrentCategory: category => dispatch(setCurrentCategory(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);