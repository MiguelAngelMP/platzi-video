/* eslint-disable import/prefer-default-export */

const setFavorite = (payload) => {
  return {
    type: 'SET_FAVORITE',
    payload,
  };
};

const deleteFavorite = (payload) => {
  return {
    type: 'DELETE_FAVORITE',
    payload,
  };
};

const loginRequest = (payload) => {
  return {
    type: 'LOGIN_REQUEST',
    payload,
  };
};

const logoutRequest = (payload) => {
  return {
    type: 'LOGOUT_REQUEST',
    payload,
  };
};

const registerRequest = (payload) => {
  return {
    type: 'REGISTER_REQUEST',
    payload,
  };
};

const getVideoSource = (payload) => {
  return {
    type: 'GET_VIDEO_SOURCE',
    payload,
  };
};

export {
  setFavorite,
  deleteFavorite,
  loginRequest,
  logoutRequest,
  registerRequest,
  getVideoSource,
};