import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// material ui
import {
    Container,
    Box,
    Grid,
    Typography,
    Button,
    withWidth,
} from '@material-ui/core';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';

// component
import BackgroundImg from '../../assets/bg_img.png';
import Thumb from '../../assets/thumb1.jpg';

const HomePage = (props) => {
    const history = useHistory();
    const profile = useASelector((state) => state.auth.profile, []);

    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';

    const handleClick = () => {
        if (!profile) {
            history.push('/subscription');
        }
    };

    return (
        <Fragment>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                    justifyContent: 'center',
                    backgroundImage: isXs ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 39%, rgba(0, 0, 0, 1) 100%), url(${BackgroundImg})` : `url(${BackgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" style={{ height: '100%', marginTop: isXs || isSm ? 200 : 50, marginBottom: isXs ? 50 : 0 }}>
                    <Grid container justify="flex-end" alignItems="center" spacing={5} style={{ height: '100%' }}>
                        <Grid item xs={12} sm={11} md={10} lg={11} xl={11} style={{ textAlign: isXs ? 'center' : '' }}>
                            <Typography variant={isXs ? "subtitle2" : "subtitle1"}>世界初 会員制</Typography>
                            <Typography variant={isXs ? "subtitle2" : "subtitle1"}>トレンドサインLIVE配信サービス</Typography>
                            <Typography variant={"subtitle1"} style={{ fontWeight: 'bold', fontSize: isXs ? 32 : 40 }}>GRADALIS</Typography>
                            <Typography variant="body1" style={{ marginTop: 30, color: 'red' }}>
                                月~金 09:00~24:00まで 15時間配信中!
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: 30 }}>
                                誰もが知りたかった相場のトレンドを完全視覚化
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: 10 }}>
                                プロトレーダーから投資初心者まで
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: 10 }}>
                                全ての方のトレードを力強くサポートします
                            </Typography>
                            <Box style={{ width: '100%' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="mt-20"
                                    style={{ borderRadius: 15, padding: 5, width: isXs ? '100%' : 400, backgroundColor: '#00a2ff', color: 'white' }}
                                    size="small"
                                    onClick={() => window.open('https://gradalis.site/lp/', "_blank")}
                                >
                                    <Typography variant="body1">
                                        GRADALISの詳しい使い方はこちら
                                    </Typography>
                                </Button>
                            </Box>
                            {!profile &&
                                <Box style={{ width: '100%' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="mt-20"
                                        style={{ borderRadius: 5, padding: 10, width: isXs ? '100%' : 400 }}
                                        size="small"
                                        onClick={() => history.push('/subscription')}
                                    >
                                        <Box style={{ display: 'block' }}>
                                            <Typography style={{ fontSize: 20 }}>10日間の無料体験を始める</Typography>
                                            <Typography style={{ fontSize: 11 }}>無料期間中に解約すれば料金はかかりません</Typography>
                                        </Box>
                                    </Button>
                                </Box>
                            }
                            {/* <Button
                                variant="outlined"
                                className="mt-20"
                                style={{ borderRadius: 5, padding: 10, border: '1px solid #fff', width: isXs ? '100%' : 200 }}
                                size="small"
                                onClick={() => history.push('/schedule')}
                            >
                                詳しくはこちらから
                            </Button> */}
                        </Grid>
                        {isXs &&
                            <>
                                <Grid item xs={12}>
                                    <Typography variant="body1" align="left" onClick={handleClick}>配信中</Typography>
                                    <Box
                                        className="mt-10"
                                        onClick={() => history.push({
                                            pathname: '/play',
                                            state: {
                                                channel: 'channel1',
                                                title: 'GBP/USD-JOMON-',
                                            },
                                        })}
                                    >
                                        <img src={Thumb} alt={'thumb'} style={{ width: '100%' }} />
                                    </Box>
                                    {/* <Typography variant="body2" align="left" className="mt-10">FX LIVE GBP=USD トレーダー：鈴木</Typography>
                                    <Typography variant="caption" align="left">2021.03.10 13:00〜配信中</Typography> */}
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <Typography variant="body1" align="left">配信中</Typography>
                                    <Box
                                        className="mt-10"
                                        onClick={() => history.push({
                                            pathname: '/play',
                                            state: {
                                                channel: 'channel1',
                                                title: 'GBP/USD-JOMON-',
                                            },
                                        })}
                                    >
                                        <img src={Thumb} alt={'thumb'} />
                                    </Box>
                                    <Typography variant="body2" align="left" className="mt-10">FX LIVE GBP=USD トレーダー：鈴木</Typography>
                                    <Typography variant="caption" align="left">2021.03.10 13:00〜配信中</Typography>
                                </Grid> */}
                            </>
                        }
                    </Grid>
                </Container>
            </Box>
        </Fragment >
    );
};

HomePage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(HomePage));