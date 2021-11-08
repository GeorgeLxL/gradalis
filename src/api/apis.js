import axios from 'axios';
import appConfig from '../constants/AppConfig';
import { store } from "../index";

const POST = (url, params, authRequired) => {
  const state = store.getState();
  const config = {
    headers: authRequired ?
      {
        Authorization: 'Token ' + state.auth.profile.token,
      } : {},
  };

  return axios.post(`${appConfig.URL}/api/${url}`, params, config);
};

const PATCH = (url, params, authRequired) => {
  const state = store.getState();
  const config = {
    headers: authRequired ?
      {
        Authorization: 'Token ' + state.auth.profile.token,
      } : {},
  };

  return axios.patch(`${appConfig.URL}/api/${url}`, params, config);
};

const PUT = (url, params, authRequired) => {
  const state = store.getState();
  const config = {
    headers: authRequired ?
      {
        Authorization: 'Token ' + state.auth.profile.token,
      } : {},
  };

  return axios.put(`${appConfig.URL}/api/${url}`, params, config);
};

const DELETE = (url, params, authRequired) => {
  const state = store.getState();
  const config = {
    headers: authRequired ?
      {
        Authorization: 'Token ' + state.auth.profile.token,
      } : {},
  };

  return axios.delete(`${appConfig.URL}/api/${url}`, params, config);
};

const GET = (url, params, authRequired) => {
  const state = store.getState();
  const config = {
    headers: authRequired ?
      {
        Authorization: 'Token ' + state.auth.profile.token,
      } : {},
  };

  return axios.get(`${appConfig.URL}/api/${url}?${dictToURI(params)}`, config);
};

const dictToURI = (dict) => {
  const str = [];
  for (const p in dict) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
  }
  return str.join("&");
};

export default {
  POST,
  PATCH,
  DELETE,
  GET,
  PUT,
};