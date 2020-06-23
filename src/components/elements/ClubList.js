import React, {useEffect} from 'react';
import {fetchClubs} from "../../redux";
import {connect} from "react-redux";
import "../../style/ClubList.css";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ClubList = (props) => {

  useEffect(() => {
    props.fetchClubs(props.fetchURL);
  }, [props.currentCity, props.currentCategory]);


  return (
    <div className="ClubListDiv">
      {props.filteredClubList.map((club, index) =>
        <div className="LogoTextDiv">
          <a href={club.link} target="_blank">
            <img
              className="ClubListLogo"
              key={index}
              src={club.logo ? club.logo : "./_23-2147946074.jpg"}
              onError={ e => {
                e.target.onerror = null;
                e.target.src = "./_23-2147946074.jpg"; // Dummy club image
              }}
            />

          </a>
          <span className="ClubTitle">{club.title_short}</span>
        </div>
      )}

      {props.filteredClubList.length <1 && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}
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