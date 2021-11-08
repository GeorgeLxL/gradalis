import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// material ui
import {
    Container,
    Typography,
    Grid,
    Button,
    withWidth,
    Box,
} from '@material-ui/core';

import BackgroundImg from '../../assets/bg_img.png';

const MyPage = (props) => {
    const history = useHistory();

    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';
    const isMd = width === 'md';

    return (
        <Fragment>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                    backgroundImage: isXs ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 39%, rgba(0, 0, 0, 1) 100%), url(${BackgroundImg})` : "none",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" style={{ marginBottom: 60, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                    <Typography variant="subtitle2" align="left" style={{ marginTop: 20 }}>マイページ</Typography>
                    <Grid container justify="center" alignItems="center" spacing={10} className="mt-20">
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Button
                                variant="outlined"
                                color="default"
                                fullWidth
                                style={{ borderRadius: 5, border: '1px solid white', padding: 10 }}
                                onClick={() => history.push({
                                    pathname: '/profile',
                                    state: { isResetPage: false },
                                })}
                            >
                                お客様情報
                        </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Button
                                variant="outlined"
                                color="default"
                                fullWidth
                                style={{ borderRadius: 5, border: '1px solid white', padding: 10 }}
                                onClick={() => history.push('/questions')}
                            >
                                {'Q&A'}
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Button
                                variant="outlined"
                                color="default"
                                fullWidth
                                style={{ borderRadius: 5, border: '1px solid white', padding: 10 }}
                                onClick={() => history.push('/help')}
                            >
                                お問い合わせ
                        </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Button
                                variant="outlined"
                                color="default"
                                fullWidth
                                style={{ borderRadius: 5, border: '1px solid white', padding: 10 }}
                                onClick={() => history.push({
                                    pathname: '/profile',
                                    state: { isResetPage: true },
                                })}
                            >
                                パスワード変更
                        </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Button
                                variant="outlined"
                                color="default"
                                fullWidth
                                style={{ borderRadius: 5, border: '1px solid white', padding: 10 }}
                                onClick={() => history.push('/leave')}
                            >
                                退会について
                        </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Button
                                variant="outlined"
                                color="default"
                                fullWidth
                                style={{ borderRadius: 5, border: '1px solid white', padding: 10 }}
                                onClick={() => history.push('/logout')}
                            >
                                ログアウト
                        </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment >
    );
};

MyPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(MyPage));