import { createSlice } from '@reduxjs/toolkit';

import { makeActionHook } from '../../utilities/recipies.util';

const INITIAL_STATE = {
  navigationIndex: 0,
  loading: false,
  snackBarState: false,
  snackBarVariant: 'warning',
  snackBarMessage: '',
  alertDialogState: false,
  alertDialogMessage: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState: INITIAL_STATE,
  reducers: {
    reset: state => INITIAL_STATE,
    setNavigationIndex: (state, { payload }) => {
      state.navigationIndex = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setSnackBar: (state, { payload }) => {
      state.snackBarState = payload.snackBarState;
      state.snackBarVariant = payload.snackBarVariant;
      state.snackBarMessage = payload.snackBarMessage;
    },
    setAlertDialog: (state, { payload }) => {
      state.alertDialogState = payload.alertDialogState;
      state.alertDialogMessage = payload.alertDialogMessage;
    },
  },
});

export const globalActions = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
export const useGlobalAction = makeActionHook(globalActions);
