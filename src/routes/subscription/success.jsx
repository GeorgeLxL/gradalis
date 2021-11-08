import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

// material ui
import {
    Container,
    Grid,
    Typography,
    withWidth,
} from '@material-ui/core';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';
import { useAuthAction } from '../../store/slices/auth.slice';

const SuccessPage = (props) => {
    const profile = useASelector((state) => state.auth.profile, []);
    const location = useLocation();
    const params = queryString.parse(location.search);

    const reflectSubscriptionInfo = useAuthAction('reflectSubscriptionInfo');
    const updatePaymentMethod = useAuthAction('updatePaymentMethod');

    useEffect(() => {
        if (params.type === 'update') {
            const data = {
                session_id: params.session_id,
            };
            updatePaymentMethod({ data });
        } else {
            const data = {
                email: profile.email,
            };
            reflectSubscriptionInfo({ data });
        }
    }, []);

    return (
        <Fragment>
            <Container
                maxWidth="lg"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                    justifyContent: 'center',
                    marginBottom: 0,
                    marginTop: props.width === 'xs' ? 100 : 0,
                }}
            >
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Grid item xs={10} sm={7} md={4} lg={4} xl={4}>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={2} >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography variant="body1" align="center">
                                    アカウント作成完了
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mt-50">
                                <Typography variant="body2" align="center">
                                    ありがとうございます。
                                </Typography>
                                <Typography variant="body2" align="center">
                                    アカウントの登録が完了しました。
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Fragment >
    );
};

SuccessPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(SuccessPage));