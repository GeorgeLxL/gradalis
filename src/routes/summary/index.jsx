import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// material ui
import {
    Container,
    Typography,
    Grid,
    withWidth,
    Box,
} from '@material-ui/core';

import BackgroundImg from '../../assets/bg_img.png';

const SummaryPage = (props) => {
    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';
    const isMd = width === 'md';

    return (
        <Fragment>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: '1',
                    justifyContent: 'center',
                    backgroundImage: isXs ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 39%, rgba(0, 0, 0, 1) 100%), url(${BackgroundImg})` : "none",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" style={{ marginBottom: 60, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                    <Typography variant="subtitle1" align="left" style={{ marginTop: 20 }}>会社概要</Typography>
                    <Grid container justify="center" alignItems="center" spacing={3} className="mt-20">
                        <Grid item xs={12} sm={11} md={10} lg={10} xl={10}>
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <th className="p-10" style={{ border: '1px solid white', textAlign: 'center', width: props.width === 'xs' ? '40%' : '30%' }}>
                                            <Typography variant="body1">社名</Typography>
                                        </th>
                                        <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                            <Typography variant="body1">Gradalis合同会社</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                            <Typography variant="body1">代表</Typography>
                                        </th>
                                        <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                            <Typography variant="body1">木田亜努</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                            <Typography variant="body1">本店所在地</Typography>
                                        </th>
                                        <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                            <Typography variant="body1">東京都中央区築地3-9-10築地ビル9Fアルファパートナーズ国際法律事務所内</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                            <Typography variant="body1">設立</Typography>
                                        </th>
                                        <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                            <Typography variant="body1">2021年5月6日</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                            <Typography variant="body1">顧問弁護士</Typography>
                                        </th>
                                        <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                            <Typography variant="body1">アルファパートナーズ国際法律事務所　　戸谷雅美</Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment >
    );
};

SummaryPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(SummaryPage));