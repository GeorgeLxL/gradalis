import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useHistory } from "react-router-dom";

// material ui
import {
    Container,
    Box,
    Button,
    Grid,
    CircularProgress,
    withWidth,
    Typography,
    Divider,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';
import { useGlobalAction } from '../../store/slices/global.slice';
import { useAuthAction } from '../../store/slices/auth.slice';

// components
import { PRODUCT_PLANS, STRIPE_PUBLISHABLE_KEY } from '../../constants/Plans';
import BackgroundImg from '../../assets/bg_img.png';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const SubscriptionPage = (props) => {
    const history = useHistory();

    const profile = useASelector((state) => state.auth.profile, []);
    const loading = useASelector((state) => state.global.loading, []);

    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';
    const isMd = width === 'md';

    const setLoading = useGlobalAction('setLoading');
    const setSnackBar = useGlobalAction('setSnackBar');
    const fetchCheckoutSession = useAuthAction('fetchCheckoutSession');
    const reflectSubscriptionInfo = useAuthAction('reflectSubscriptionInfo');
    // const cancelSubscription = useAuthAction('cancelSubscription');
    const createCheckoutSessionToUpdateCardInfo = useAuthAction('createCheckoutSessionToUpdateCardInfo');

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (profile) {
            const data = {
                email: profile.email,
            };
            reflectSubscriptionInfo({ data });
        }
    }, []);

    const subscribe = () => {
        if (!checked) {
            setSnackBar({ snackBarState: true, snackBarVariant: 'warning', snackBarMessage: 'まず、利用規約に同意してください。' });
        } else {
            if (profile) {
                setLoading(true);
                const data = {
                    price_info: PRODUCT_PLANS[0].price_info,
                    email: profile.email,
                    trial_period_days: PRODUCT_PLANS[0].trial_period_days,
                };
                fetchCheckoutSession({ data });
            } else {
                history.push('/signup');
            }
        }
    };

    // const cancelSubscribe = () => {
    //     setLoading(true);
    //     const data = {
    //         email: profile.email,
    //     };
    //     cancelSubscription({ data });
    // };

    const saveNewCardInfo = () => {
        setLoading(true);
        const data = {
            email: profile.email,
        };
        createCheckoutSessionToUpdateCardInfo({ data });
    };

    return (
        <Fragment>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                    justifyContent: 'center',
                    backgroundImage: isXs ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 39%, rgba(0, 0, 0, 1) 100%), url(${BackgroundImg})` : "none",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={11} sm={8} md={5} lg={5} xl={5}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2} >
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant="body1" align="center">GRADALISへようこそ！</Typography>
                                </Grid>
                                {!profile &&
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button
                                            variant="outlined"
                                            className="mt-20"
                                            style={{ borderRadius: 5, padding: 10, border: '1px solid #fff' }}
                                            size="small"
                                            fullWidth
                                            onClick={() => history.push('/login')}
                                        >
                                            会員の方 ログインはこちら
                                        </Button>
                                    </Grid>
                                }
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Box className="p-10 pl-20 pr-20" style={{ backgroundColor: 'white', maxWidth: 500 }}>
                                        <Typography variant="subtitle2" align="center" className="p-10" style={{ color: '#000', fontWeight: 'bold' }}>月額プラン</Typography>
                                        <Divider style={{ backgroundColor: '#000', width: '100%', height: 2 }} />
                                        <Typography variant="body2" align="center" className="pt-20" style={{ color: '#000' }}>月々のお支払い</Typography>
                                        <Typography variant="subtitle2" align="center" className="pt-5" style={{ color: '#000', fontWeight: 'bold' }}>
                                            {PRODUCT_PLANS[0].currency}{PRODUCT_PLANS[0].price}円 <Typography variant="body2" style={{ display: 'inline-block' }}>(税込)</Typography>
                                        </Typography>

                                        <Divider style={{ backgroundColor: '#000', width: '100%', height: 2, marginTop: 10 }} />
                                        <Box>
                                            <Typography variant="body2" align="center" className="mt-20" style={{ color: '#000', width: '100%', backgroundColor: '#d5d5d5', padding: 4, borderRadius: 50 }}>
                                                ※無料体験を始めていただく際のご注意①
                                            </Typography>
                                            <Box className="m-15">
                                                <Typography variant="caption" style={{ color: '#000', width: '100%' }}>
                                                    アカウント作成後10日間は、無料でご利用いただけます。<br />
                                                    無料期間中に解約していただければ、<br />
                                                    料金はかかりませんのでご安心ください。
                                                </Typography>
                                            </Box>
                                            <Box className="m-15">
                                                <Typography variant="caption" style={{ color: '#000', width: '100%' }}>
                                                    無料期間終了日の翌日から、月額29,800円（税込）が<br />
                                                    発生いたしますのでご注意ください。
                                                </Typography>
                                            </Box>
                                            <Box className="m-15">
                                                <Typography variant="caption" style={{ color: '#000', width: '100%' }}>
                                                    再度ご入会された場合はご登録完了時に、月額料金が<br />
                                                    発生いたしますのでご注意ください。
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" align="center" className="mt-20" style={{ color: '#000', width: '100%', backgroundColor: '#d5d5d5', padding: 4, borderRadius: 50 }}>
                                                ※無料体験を始めていただく際のご注意②
                                            </Typography>
                                            <Box className="m-15">
                                                <Typography variant="caption" style={{ color: '#000', width: '100%' }}>
                                                    お申し込みにあたり、<br />
                                                    メールアドレス、クレジットカード/デビットカード<br />
                                                    の記載をお願いしております。<br />
                                                    これら情報を記載していただく理由は以下2点です。

                                                </Typography>
                                            </Box>
                                            <Box className="m-15">
                                                <Typography variant="caption" style={{ color: '#000', width: '100%' }}>
                                                    １、無料体験を複数回申し込まれる方がおられますので、<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;それを防止する為にお願いをしております。
                                                </Typography>
                                            </Box>
                                            <Box className="m-15">
                                                <Typography variant="caption" style={{ color: '#000', width: '100%' }}>
                                                    ２、無料期間終了後に本サービスの手続きを<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;スムーズに行っていただく為に<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;決済情報のご登録をお願いしております。
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box style={{ border: '1px solid black', padding: '10px 10px 5px 10px', margin: '25px 5px 5px 5px' }}>
                                            <Typography variant="caption" align="center" className="mt-10" style={{ color: '#000', fontWeight: 'bold' }}>
                                                お申し込みに際しては、必ず<a href="https://gradalis.info/termsofuse" target="_blank" rel="noreferrer">利用規約</a>をご確認ください。
                                            </Typography>
                                            <FormGroup className="mt-5" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000' }}>
                                                <FormControlLabel
                                                    control={<Checkbox checked={checked} onChange={(e) => setChecked(!checked)} color="default" />}
                                                    label="利用規約に同意する"
                                                />
                                            </FormGroup>
                                        </Box>

                                        <Box className="pb-30 pr-30 pl-30">
                                            <Elements stripe={stripePromise}>
                                                {profile && profile.subscribed ?
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={saveNewCardInfo}
                                                        disabled={loading}
                                                        fullWidth
                                                        className="mt-20"
                                                        style={{ borderRadius: 5, padding: '10px 15px 10px 15px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                                                        endIcon={loading ? <CircularProgress size={20} style={{ color: 'white' }} /> : <></>}
                                                    >
                                                        {loading ? '要請処理中...' : 'クレジットカード情報の変更'}
                                                    </Button>
                                                    // <CssCancelButton
                                                    //     className="button subscription-btn"
                                                    //     disabled={loading}
                                                    //     onClick={this.cancelSubscription}
                                                    // >
                                                    //     {loading ? '要請処理中...' : '購読キャンセル'}
                                                    // </CssCancelButton>
                                                    :
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={subscribe}
                                                        disabled={loading}
                                                        fullWidth
                                                        className="mt-20"
                                                        style={{ borderRadius: 5, padding: '10px 15px 10px 15px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                                                        endIcon={loading ? <CircularProgress size={20} style={{ color: 'white' }} /> : <></>}
                                                    >
                                                        {loading ? '要請処理中...' : '10日間の無料体験に申し込む'}
                                                    </Button>
                                                }
                                            </Elements>
                                        </Box>
                                    </Box>
                                </Grid>
                                {profile && profile.subscribed &&
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mt-10">
                                        <Typography variant="body2" align="center">
                                            {profile.trial_end.split('-')[0]}年{profile.trial_end.split('-')[1]}月{profile.trial_end.split('-')[2]}日から
                                        </Typography>
                                        <Typography variant="body2" align="center">
                                            月額29,800{PRODUCT_PLANS[0].currency}が請求されます。
                                        </Typography>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment >
    );
};

SubscriptionPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(SubscriptionPage));