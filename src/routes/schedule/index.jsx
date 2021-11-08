import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// material ui
import {
    Container,
    Box,
    Typography,
    withWidth,
    Grid,
    Hidden,
} from '@material-ui/core';

// component
import GBPUSDJOMON from '../../assets/thumb1.jpg';
import BTCJPYJOMON from '../../assets/thumb2.jpg';
import JP225JOMON from '../../assets/thumb3.jpg';
import GBPUSDKOKU from '../../assets/thumb4.jpg';
import BTCJPYKOKU from '../../assets/thumb5.jpg';
import JP225KOKU from '../../assets/thumb6.jpg';

import BackgroundImg from '../../assets/bg_img.png';

const temp = [{
    title: 'GBP/USD-JOMON-',
    channel: 'channel1',
    thumb: GBPUSDJOMON,
},
{
    title: 'BTC/JPY-JOMON-',
    channel: 'channel2',
    thumb: BTCJPYJOMON,
},
{
    title: '日経225-JOMON-',
    channel: 'channel3',
    thumb: JP225JOMON,
},
{
    title: 'GBP/USD-KOKU-',
    channel: 'channel4',
    thumb: GBPUSDKOKU,
},
{
    title: 'BTC/JPY-KOKU-',
    channel: 'channel5',
    thumb: BTCJPYKOKU,
},
{
    title: '日経225-KOKU-',
    channel: 'channel6',
    thumb: JP225KOKU,
}];

const SchedulePage = (props) => {
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
                    backgroundImage: props.width === 'xs' ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 39%, rgba(0, 0, 0, 1) 100%), url(${BackgroundImg})` : "none",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                    <Hidden mdUp>
                        <Box style={{ marginTop: 20 }}>
                            <Typography variant="subtitle1" align="left">配信ラインナップ</Typography>
                            <Typography variant="subtitle2" style={{ color: 'red' }}>月~金 09:00~24:00まで 15時間配信中!</Typography>
                        </Box>
                    </Hidden>
                    <Hidden smDown>
                        <Box style={{ marginTop: 20, display: 'flex', alignItems: 'baseline' }}>
                            <Typography variant="subtitle1" align="left">配信ラインナップ</Typography>
                            <Typography variant="subtitle2" className="ml-20" style={{ color: 'red' }}>月~金 09:00~24:00まで 15時間配信中!</Typography>
                        </Box>
                    </Hidden>
                    <Grid container justify="space-between" spacing={5}>
                        {temp.map((data, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={key}>
                                <Box
                                    className="mt-10"
                                    onClick={() => history.push({
                                        pathname: '/play',
                                        state: {
                                            channel: data.channel,
                                            title: data.title,
                                        },
                                    })}
                                >
                                    <img src={data.thumb} alt={data.title} />
                                </Box>
                                <Typography variant="subtitle2" align="left" className="mt-20">{data.title}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Fragment >
    );
};

SchedulePage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(SchedulePage));