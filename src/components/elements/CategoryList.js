import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCategories, setCurrentCategory} from "../../redux";
import "../../style/CategoryList.css";

const CategoryList = (props) => {

  useEffect(() => {
    props.fetchCategories(props.fetchURL);
  }, []);


  return (
    <div className="CategoryListDiv">
      {props.categoryList.map((element, index) =>
        <button
          className="CategoryListButton"
          onClick={() => {
            console.log(element);
            props.setCurrentCategory(element);
          }}
          key={index}>{element}</button>
      )}

      <img className="UndoButton"
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