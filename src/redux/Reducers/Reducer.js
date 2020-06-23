import {FETCH_CITIES} from "../ActionTypes/ActionTypes";
import {FETCH_CATEGORIES} from "../ActionTypes/ActionTypes";
import {FETCH_CLUBS} from "../ActionTypes/ActionTypes";
import {SET_CURRENT_CITY} from "../ActionTypes/ActionTypes";
import {SET_CURRENT_CATEGORY} from "../ActionTypes/ActionTypes";

export const initialState = {
  cityList: [],
  categoryList: [],
  clubList: [],
  filteredClubList: [],
  currentCity: "",
  currentCategory: ""
};

const clubReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CITIES:
      return {
        ...state,
        cityList: [...action.payload]
      };

    case FETCH_CATEGORIES: {

      let newArr = [];

      if (state.currentCity) { // if city selected

        let filteredByCityArr = state.clubList.filter(element => element.city.title === state.currentCity);
        let categoryArr = filteredByCityArr.map(element => element.activity.map(element => element.slug));

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

        newArr = [...uniqueMergedCategoryArr];

      } else { // if no city selected (default)
        newArr = [...action.payload];
      }

      return {
        ...state,
        categoryList: newArr
      };
    }

    case FETCH_CLUBS: {

      let newArr = [];

      for (let x = 0; x < state.clubList.length; x++) {

        if (state.currentCity && state.currentCategory) { // Both city and category selected
          for (let y = 0; y < state.clubList[x].activity.length; y++) {
            if (state.clubList[x].city.title === state.currentCity && state.clubList[x].activity[y].slug === state.currentCategory) {
              newArr.push(state.clubList[x]);
            }
          }
        } else if (state.currentCity) { // Only city selected
          if (state.clubList[x].city.title === state.currentCity) {
            newArr.push(state.clubList[x]);
          }
        } else if (state.currentCategory) { // Only category selected
          for (let y = 0; y < state.clubList[x].activity.length; y++) {
            if (state.clubList[x].activity[y].slug === state.currentCategory) {
              newArr.push(state.clubList[x]);
            }
          }
        }
      }

      if (!state.currentCity && !state.currentCategory) { // Nothing selected (default)
        newArr = [...action.payload];
      }

      return {
        ...state,
        clubList: [...action.payload],
        filteredClubList: newArr
      };
    }

    case SET_CURRENT_CITY:

      return {
        ...state,
        currentCity: action.payload
      };

    case SET_CURRENT_CATEGORY:

      return {
        ...state,
        currentCategory: action.payload
      };

    default:
      return state;
  }
};
export default clubReducer;