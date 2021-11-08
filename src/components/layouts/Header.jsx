/**
 * site header one component
 */
/* eslint-disable */
import React from 'react';
import { useHistory } from "react-router-dom";

// material ui
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Grid,
    Tabs,
    Tab,
    Button,
    Hidden,
    Box,
} from '@material-ui/core';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';
import { useGlobalAction } from '../../store/slices/global.slice';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: theme.typography.subtitle1.fontSize,
    },
}));

const Header = (props) => {
    const history = useHistory();
    const classes = useStyles();

    const navigationIndex = useASelector((state) => state.global.navigationIndex, []);
    const profile = useASelector((state) => state.auth.profile, []);

    const setNavigationIndex = useGlobalAction('setNavigationIndex');

    const handleClick = (index) => {
        setNavigationIndex(index);
        if (index === 0) {
            history.push('/home');
        } else if (index === 1) {
            history.push('/schedule')
        } else if (index === 2) {
            history.push('/about');
        } else if (index === 3) {
            history.push('/notice');
        }
    };

    return (
        <AppBar
            position="fixed"
            className="header-fixed"
            color="secondary"
        >
            <Hidden mdDown>
                <Grid container direction="row" justify="space-around" alignItems="center" className="iron-fixed-header">
                    <Grid
                        item
                        className={classes.title}
                        lg={2} xl={3}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                        onClick={() => history.push('/')}
                    >
                        GRADALIS
                    </Grid>
                    <Grid
                        item
                        lg={7} xl={6}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Tabs
                            value={navigationIndex}
                            indicatorColor="primary"
                            onChange={(e, value) => handleClick(value)}
                        >
                            <Tab label="ホーム" value={0} />
                            <Tab label="配信ラインナップ" value={1} />
                            <Tab label="サービスについて" value={2} />
                            <Tab label="ご注意" value={3} />
                        </Tabs>
                    </Grid>
                    <Grid
                        item
                        lg={3} xl={3}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        {profile ?
                            <Button
                                variant="contained"
                                color="primary"
                                className="mr-10"
                                style={{ borderRadius: 5, fontWeight: 'bold' }}
                                onClick={() => history.push('/mypage')}
                            >
                                マイページ
                            </Button>
                            :
                            <>
                                <Button
                                    variant="contained"
                                    color="default"
                                    className="mr-10"
                                    style={{ borderRadius: 5, fontWeight: 'bold' }}
                                    onClick={() => history.push('/login')}
                                >
                                    ログイン
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="mr-10"
                                    style={{ borderRadius: 5, fontWeight: 'bold' }}
                                    onClick={() => history.push('/subscription')}
                                >
                                    10日間の無料体験を始める
                                </Button>
                            </>
                        }
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden lgUp>
                <Grid container direction="row" justify="space-around" alignItems="center" className="iron-fixed-header">
                    <Grid
                        item
                        xs={12} sm={12} md={12}
                        className={classes.title}
                    >
                        {profile &&
                            <Grid container justify="space-around" alignItems="center">
                                <Grid item>
                                    <Box style={{ paddingTop: 8 }} onClick={() => history.push('/')}>GRADALIS</Box>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="mr-10"
                                        style={{ borderRadius: 5, fontWeight: 'bold' }}
                                        onClick={() => history.push('/mypage')}
                                    >
                                        マイページ
                                    </Button>
                                </Grid>
                            </Grid>
                        }
                        {!profile &&
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box style={{ paddingTop: 8 }} onClick={() => history.push('/')}>GRADALIS</Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        className="mr-10"
                                        style={{ borderRadius: 5, fontWeight: 'bold' }}
                                        onClick={() => history.push('/login')}
                                    >
                                        ログイン
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="mr-10"
                                        style={{ borderRadius: 5, fontWeight: 'bold' }}
                                        onClick={() => history.push('/subscription')}
                                    >
                                        10日間の無料体験を始める
                                    </Button>
                                </Grid>
                            </Grid>
                        }
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={12} md={12}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Tabs
                            value={navigationIndex}
                            indicatorColor="primary"
                            onChange={(e, value) => handleClick(value)}
                        >
                            <Tab label="ホーム" value={0} />
                            <Tab label="配信ラインナップ" value={1} />
                            <Tab label="サービスについて" value={2} />
                            <Tab label="ご注意" value={3} />
                        </Tabs>
                    </Grid>
                </Grid>
            </Hidden>
        </AppBar>
    );
}

export default Header;