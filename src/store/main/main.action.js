import axios from 'axios';

import { RECEIVE_APPLICATIONS_LIST_DATA, RECEIVE_APPLICATIONS_LIST_ITEM } from './main.types';

// TODO: Move to env file
const API_URL = 'https://api.recruitment.4soft.tech';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}/list`);

      dispatch({ type: RECEIVE_APPLICATIONS_LIST_DATA, data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getItemById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}/details/${id}`);

      dispatch({ type: RECEIVE_APPLICATIONS_LIST_ITEM, data });
    } catch (error) {
      console.error(error);
    }
  };
};