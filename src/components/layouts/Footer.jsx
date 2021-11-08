/**
 * footer component
 */
/* eslint-disable */
import React from 'react';
import { useHistory } from "react-router-dom";

// material ui
import {
    Box,
    Grid,
    Divider,
    Hidden,
} from '@material-ui/core';

const Footer = (props) => {
    const history = useHistory();
    return (
        <Box>
            <Grid container direction='column'>
                <Grid item>
                    <Divider style={{ width: '100%' }} />
                </Grid>
                <Grid item>
                    <Grid container spacing={3} direction="row" justify="space-around" alignItems="center" className="mt-5 mb-5">
                        <Hidden smUp>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/help')}>お問い合わせ</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/questions')}>よくある質問</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/termsofuse')}>利用規約</span>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/summary')}>会社概要</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/privacypolicy')}>プライバシーポリシー</span>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://gradalis.site/gradalis_html/', "_blank")}>特定商取引に基づく表記について</span>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span>Copylight GRADALIS合同会社.2021</span>
                            </Grid>
                        </Hidden>
                        <Hidden xsDown mdUp>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/help')}>お問い合わせ</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/questions')} >よくある質問</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/termsofuse')}>利用規約</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/summary')}>会社概要</span>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/privacypolicy')}>プライバシーポリシー</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://gradalis.site/gradalis_html/', "_blank")}>特定商取引に基づく表記について</span>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span>Copylight GRADALIS合同会社.2021</span>
                            </Grid>
                        </Hidden>
                        <Hidden smDown>
                            <Grid item>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/help')}>お問い合わせ</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/questions')} >よくある質問</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/termsofuse')}>利用規約</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/summary')}>会社概要</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/privacypolicy')}>プライバシーポリシー</span>
                                <span> ・ </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://gradalis.site/gradalis_html/', "_blank")}>特定商取引に基づく表記について</span>
                            </Grid>
                            <Grid item>
                                <span>Copylight GRADALIS合同会社.2021</span>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Grid >
        </Box >
    )
}

export default React.memo(Footer);
