import { all, takeEvery, call, fork, put } from 'redux-saga/effects';
import { apis } from '../../api';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY, PRODUCT_PLANS } from '../../constants/Plans';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export function* signupRequest() {
    yield takeEvery("auth/signupRequest", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/signup/', action.payload.data, false);
            if (res.status === 200) {
                const profile = { ...res.data.result, readyToRedirect: true };

                yield put({
                    type: "auth/authSuccess",
                    payload: profile,
                    meta: action.payload.meta,
                });

                const data = {
                    price_info: PRODUCT_PLANS[0].price_info,
                    email: res.data.result.email,
                    trial_period_days: PRODUCT_PLANS[0].trial_period_days,
                };

                yield put({
                    type: "auth/fetchCheckoutSession",
                    payload: { data },
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '登録に失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } catch (err) {
            if (err.response.status === 400) {
                yield put({
                    type: "global/setSnackBar",
                    payload: {
                        snackBarState: true,
                        snackBarVariant: 'warning',
                        snackBarMessage:
                            Object.values(err.response.data.message)[0][0] ?
                                Object.values(err.response.data.message)[0][0]
                                :
                                Object.values(err.response.data.message)[0],
                    },
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '登録に失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* loginRequest() {
    yield takeEvery("auth/loginRequest", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/login/', action.payload.data, false);
            if (res.status === 200) {
                if (!res.data.result.subscribed) {
                    action.payload.meta.path = '/subscription';
                }
                yield put({
                    type: "auth/authSuccess",
                    payload: res.data.result,
                    meta: action.payload.meta,
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: 'ログインに失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } catch (err) {
            if (err.response.status === 400) {
                yield put({
                    type: "global/setSnackBar",
                    payload: {
                        snackBarState: true,
                        snackBarVariant: 'warning',
                        snackBarMessage:
                            Object.values(err.response.data.message)[0][0] ?
                                Object.values(err.response.data.message)[0][0]
                                :
                                Object.values(err.response.data.message)[0],
                    },
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: 'ログインに失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* authSuccess() {
    yield takeEvery("auth/authSuccess", function* (action) {
        if (action.meta) {
            yield call(action.meta.redirect, action.meta.path);
        }
    });
}

export function* logout() {
    yield takeEvery("auth/logout", function* (action) {
        try {
            yield call(action.payload.meta.redirect, action.payload.meta.path);
        } catch (err) { }
    });
}

export function* restoreAccessRequest() {
    yield takeEvery("auth/restoreAccessRequest", function* (action) {
        try {
            yield call(apis.POST, `auth/forgot-password/`, action.payload.data, false);
        } catch (err) { }
    });
}

export function* restoreAccess() {
    yield takeEvery("auth/restoreAccess", function* (action) {
        try {
            const res = yield call(apis.POST, `auth/restore-access/${action.payload.data.password_reset_key}/`, {}, false);
            if (res.status === 200) {
                yield put({
                    type: "auth/authSuccess",
                    payload: res.data.result,
                    meta: action.payload.meta,
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
                yield call(action.payload.meta.redirect, action.payload.meta.path);
            }
        } catch (err) {
            if (err.response.status === 400) {
                yield put({
                    type: "global/setSnackBar",
                    payload: {
                        snackBarState: true,
                        snackBarVariant: 'warning',
                        snackBarMessage:
                            Object.values(err.response.data.message)[0][0] ?
                                Object.values(err.response.data.message)[0][0]
                                :
                                Object.values(err.response.data.message)[0],
                    },
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
            yield call(action.payload.meta.redirect, action.payload.meta.path);
        }
    });
}

export function* resetPassword() {
    yield takeEvery("auth/resetPassword", function* (action) {
        try {
            const res = yield call(apis.POST, `auth/reset-password/`, action.payload.data, true);
            if (res.status === 200) {
                yield put({
                    type: "auth/authSuccess",
                    payload: res.data.result,
                    meta: action.payload.meta,
                });
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'success', snackBarMessage: '変更しました。' },
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } catch (err) {
            if (err.response.status === 400) {
                yield put({
                    type: "global/setSnackBar",
                    payload: {
                        snackBarState: true,
                        snackBarVariant: 'warning',
                        snackBarMessage:
                            Object.values(err.response.data.message)[0][0] ?
                                Object.values(err.response.data.message)[0][0]
                                :
                                Object.values(err.response.data.message)[0],
                    },
                });
            } else {
                yield put({
                    type: "global/setSnackBar",
                    payload: { snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* updateEmailRequest() {
    yield takeEvery("auth/updateEmailRequest", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/update-email-request/', action.payload.data, true);
            if (res.status === 200) {
                yield put({
                    type: "auth/setEmailUpdateStep",
                    payload: 2,
                });
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } catch (err) {
            if (err.response.status === 400) {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* updateEmail() {
    yield takeEvery("auth/updateEmail", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/update-email/', action.payload.data, true);
            if (res.status === 200) {
                yield put({
                    type: "auth/authSuccess",
                    payload: res.data.result,
                    meta: action.payload.meta,
                });
                yield put({
                    type: "auth/setEmailUpdateStep",
                    payload: 0,
                });
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } catch (err) {
            if (err.response.status === 400) {
                yield put({
                    type: "global/setAlertDialog",
                    payload: {
                        alertDialogState: true,
                        alertDialogMessage:
                            Object.values(err.response.data.message)[0][0] ?
                                Object.values(err.response.data.message)[0][0]
                                :
                                Object.values(err.response.data.message)[0],
                    },
                });
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* updateProfile() {
    yield takeEvery("auth/updateProfile", function* (action) {
        try {
            const res = yield call(apis.PATCH, `auth/update-profile/${action.payload.data.id}/`, action.payload.data, true);
            if (res.status === 200) {
                yield put({
                    type: "auth/authSuccess",
                    payload: res.data.result,
                    meta: null,
                });
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } catch (err) {
            if (err.response.status === 400) {
                yield put({
                    type: "global/setAlertDialog",
                    payload: {
                        alertDialogState: true,
                        alertDialogMessage:
                            Object.values(err.response.data.message)[0][0] ?
                                Object.values(err.response.data.message)[0][0]
                                :
                                Object.values(err.response.data.message)[0],
                    },
                });
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

// export function* deleteAccount() {
//     yield takeEvery("auth/deleteAccount", function* (action) {
//         try {
//             const res = yield call(apis.POST, `auth/delete/${action.payload.data.id}/`, {}, true);
//             if (res.status === 200) {
//                 yield put({ type: "global/reset" });
//                 yield put({ type: "auth/reset" });
//                 yield call(action.payload.meta.redirect, action.payload.meta.path);
//             } else {
//                 yield put({
//                     type: "global/setAlertDialog",
//                     payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
//                 });
//             }
//         } catch (err) {
//             if (err.response.status === 400) {
//                 yield put({
//                     type: "global/setAlertDialog",
//                     payload: {
//                         alertDialogState: true,
//                         alertDialogMessage:
//                             Object.values(err.response.data.message)[0][0] ?
//                                 Object.values(err.response.data.message)[0][0]
//                                 :
//                                 Object.values(err.response.data.message)[0],
//                     },
//                 });
//             } else {
//                 yield put({
//                     type: "global/setAlertDialog",
//                     payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
//                 });
//             }
//         } finally {
//             yield put({
//                 type: "global/setLoading",
//                 payload: false,
//             });
//         }
//     });
// }

export function* fetchCheckoutSession() {
    yield takeEvery("auth/fetchCheckoutSession", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/create-checkout-session/', action.payload.data, true);
            if (res.status === 200) {
                const sessionId = res.data.result;
                const stripe = yield stripePromise;
                try {
                    yield stripe.redirectToCheckout({
                        sessionId,
                    });
                } catch (err) {
                    yield put({
                        type: "global/setAlertDialog",
                        payload: { alertDialogState: true, alertDialogMessage: '支払いはできません。管理者に連絡してください。' },
                    });
                }
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '支払いはできません。管理者に連絡してください。' },
                });
            }
        } catch (err) {
            yield put({
                type: "global/setAlertDialog",
                payload: { alertDialogState: true, alertDialogMessage: '支払いはできません。管理者に連絡してください。' },
            });
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* reflectSubscriptionInfo() {
    yield takeEvery("auth/reflectSubscriptionInfo", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/reflect-subscription-info/', action.payload.data, true);
            if (res.status === 200) {
                yield put({
                    type: "auth/authSuccess",
                    payload: res.data.result,
                    meta: null,
                });
            }
        } catch (err) { }
    });
}

export function* cancelSubscriptionAndDeleteAccount() {
    yield takeEvery("auth/cancelSubscriptionAndDeleteAccount", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/cancel-subscription-del-account/', action.payload.data, true);
            if (res.status === 200) {
                yield put({ type: "global/reset" });
                yield put({ type: "auth/reset" });
                yield call(action.payload.meta.redirect, action.payload.meta.path);
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
                });
            }
        } catch (err) {
            yield put({
                type: "global/setAlertDialog",
                payload: { alertDialogState: true, alertDialogMessage: '失敗しました。しばらくしてからもう一度試してください。' },
            });
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* createCheckoutSessionToUpdateCardInfo() {
    yield takeEvery("auth/createCheckoutSessionToUpdateCardInfo", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/create-checkout-session-to-update-payment-method/', action.payload.data, true);
            if (res.status === 200) {
                const sessionId = res.data.result;
                const stripe = yield stripePromise;
                try {
                    yield stripe.redirectToCheckout({
                        sessionId,
                    });
                } catch (err) {
                    yield put({
                        type: "global/setAlertDialog",
                        payload: { alertDialogState: true, alertDialogMessage: 'クレジットカード情報の変更に失敗しました。' },
                    });
                }
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: 'クレジットカード情報の変更に失敗しました。' },
                });
            }
        } catch (err) {
            yield put({
                type: "global/setAlertDialog",
                payload: { alertDialogState: true, alertDialogMessage: 'クレジットカード情報の変更に失敗しました。' },
            });
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export function* updatePaymentMethod() {
    yield takeEvery("auth/updatePaymentMethod", function* (action) {
        try {
            const res = yield call(apis.POST, 'auth/update-payment-method/', action.payload.data, true);
            if (res.status === 200) {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: 'クレジットカード情報を変更しました。' },
                });
            } else {
                yield put({
                    type: "global/setAlertDialog",
                    payload: { alertDialogState: true, alertDialogMessage: 'クレジットカード情報の変更に失敗しました。' },
                });
            }
        } catch (err) {
            yield put({
                type: "global/setAlertDialog",
                payload: { alertDialogState: true, alertDialogMessage: 'クレジットカード情報の変更に失敗しました。' },
            });
        } finally {
            yield put({
                type: "global/setLoading",
                payload: false,
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(signupRequest),
        fork(loginRequest),
        fork(authSuccess),
        fork(logout),
        fork(restoreAccessRequest),
        fork(restoreAccess),
        fork(resetPassword),
        fork(updateEmailRequest),
        fork(updateEmail),
        fork(updateProfile),
        // fork(deleteAccount),
        fork(fetchCheckoutSession),
        fork(reflectSubscriptionInfo),
        fork(cancelSubscriptionAndDeleteAccount),
        fork(createCheckoutSessionToUpdateCardInfo),
        fork(updatePaymentMethod),
    ]);
}