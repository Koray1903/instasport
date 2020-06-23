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

    case FETCH_CATEGORIES:
      return {
        ...state,
        categoryList: [...action.payload]
      };

    case FETCH_CLUBS: {

      let newArr = [];

      for (let x = 0; x < state.clubList.length; x++) {

        if (state.currentCity && state.currentCategory) { // Both city and category selected
          for (let y = 0; y < state.clubList[x].activity.length; y++) {
            if (state.clubList[x].city.title == state.currentCity && state.clubList[x].activity[y].slug == state.currentCategory) {
              newArr.push(state.clubList[x]);
            }
          }
        } else if (state.currentCity) { // Only city selected
          if (state.clubList[x].city.title == state.currentCity) {
            newArr.push(state.clubList[x]);
          }
        } else if (state.currentCategory) { // Only category selected
          for (let y = 0; y < state.clubList[x].activity.length; y++) {
            if (state.clubList[x].activity[y].slug == state.currentCategory) {
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