import { createSlice } from '@reduxjs/toolkit';

import { makeActionHook } from '../../utilities/recipies.util';

const INITIAL_STATE = {
    profile: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        reset: state => INITIAL_STATE,
        signupRequest: () => { },
        loginRequest: () => { },
        authSuccess: (state, action) => {
            state.profile = action.payload;
        },
        restoreAccessRequest: () => { },
        restoreAccess: () => { },
        resetPassword: () => { },
        updateProfile: () => { },
        // deleteAccount: () => { },
        logout: (state, action) => {
            state.profile = null;
        },
        fetchCheckoutSession: () => { },
        reflectSubscriptionInfo: () => { },
        cancelSubscriptionAndDeleteAccount: () => { },
        createCheckoutSessionToUpdateCardInfo: () => { },
        updatePaymentMethod: () => { },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export const useAuthAction = makeActionHook(authActions);
