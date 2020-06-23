import React, {useEffect} from 'react';
import {fetchClubs} from "../../redux";
import {connect} from "react-redux";
import "../../style/ClubList.css";

const ClubList = (props) => {

  useEffect(() => {
    props.fetchClubs(props.fetchURL);
  }, [props.currentCity, props.currentCategory]);


  return (
    <div className="ClubListDiv">
      {props.filteredClubList.map((element, index) =>
        <div className="LogoTextDiv">
          <a href={element.link} target="_blank">
            <img
              className="ClubListLogo"
              key={index}
              src={element.logo ? element.logo : "./_23-2147946074.jpg"}
              onError={ e => {
                e.target.onerror = null;
                e.target.src = "./_23-2147946074.jpg"; // Dummy club image
              }}
            />

          </a>
          <span className="ClubTitle">{element.title_short}</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filteredClubList: state.reducerClub.filteredClubList,
    currentCategory: state.reducerClub.currentCategory,
    currentCity: state.reducerClub.currentCity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClubs: url => dispatch(fetchClubs(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubList);