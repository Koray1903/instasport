import {FETCH_CITIES} from "../ActionTypes/ActionTypes";
import {FETCH_CATEGORIES} from "../ActionTypes/ActionTypes";
import {FETCH_CLUBS} from "../ActionTypes/ActionTypes";
import {SET_CURRENT_CITY} from "../ActionTypes/ActionTypes";
import {SET_CURRENT_CATEGORY} from "../ActionTypes/ActionTypes";

/* FETCH CITIES */
export const fetchCities = url => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        let cityArr = data.map((element) => element.city.title);
        let uniqueCityArr = new Set(cityArr);

        dispatch(fetchedCities(uniqueCityArr));
      });
  };
};

export const fetchedCities = (data) => {
  return {
    type: FETCH_CITIES,
    payload: data
  };
};
/* FETCH CITIES */

/* FETCH CATEGORIES */
export const fetchCategories = url => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        let categoryArr = data.map(element => element.activity.map(element => element.slug));

        function merge(arr) { // merges separate arrays
          let newArr = [];
          for (let x = 0; x < arr.length; x++) {
            for (let y = 0; y < arr[x].length; y++) {
              newArr.push(arr[x][y]);
            }
          }
          return newArr;
        }

        let uniqueMergedCategoryArr = new Set(merge(categoryArr)); // remove duplicates

        dispatch(fetchedCategories(uniqueMergedCategoryArr));
      });
  };
};

export const fetchedCategories = (data) => {
  return {
    type: FETCH_CATEGORIES,
    payload: data
  };
};
/* FETCH CATEGORIES */

/* FETCH CLUBS */
export const fetchClubs = url => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        dispatch(fetchedClubs(data));
      });
  };
};

export const fetchedClubs = (data) => {
  return {
    type: FETCH_CLUBS,
    payload: data
  };
};
/* FETCH CLUBS */


/* SET CITY & CATEGORY */
export const setCurrentCity = (data) => {
  return {
    type: SET_CURRENT_CITY,
    payload: data
  };
};

export const setCurrentCategory = (data) => {
  return {
    type: SET_CURRENT_CATEGORY,
    payload: data
  };
};
/* SET CITY & CATEGORY */