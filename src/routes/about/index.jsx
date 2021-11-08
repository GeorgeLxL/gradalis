import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// material ui
import {
    Box,
    Container,
    Typography,
    withWidth,
} from '@material-ui/core';

// component
import BackgroundImg from '../../assets/bg_img.png';

const AboutPage = (props) => {
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
                    justifyContent: 'center',
                    backgroundImage: isXs ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 39%, rgba(0, 0, 0, 1) 100%), url(${BackgroundImg})` : "none",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                    <Typography variant="subtitle1" align="center" style={{ marginTop: 20 }}>GRADALISより皆様へ</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 20 }}>投資の世界では、『トレンドフォロー』が相場で勝つ秘訣だと言われています。</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 10 }}>もちろん世界中の人たちが、それは理解しています.....では</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 50 }}>『どうすれば、トレンドを知ることができるのか』</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 50 }}>それが中々分からないから、世界中の投資家たちは苦労しているわけです。</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 10 }}>トレードは、以下2点が分かれば優位に立ち回れます。</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 50 }}>①トレンドが「始まる」タイミング</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 10 }}>②トレンドが「終わる」タイミング</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 50 }}>GRADALISのサインシステムは、</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 10 }}>リアルタイムで 上下どちらにトレンドが出ているかを表示する高性能システムです。</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 10 }}>トレンド発生から終わりまで、 矢印サインで皆様のトレードをサポートします。</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 50 }}>相場で勝つ=トレンドがわかる</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 50 }}>GRADALISをご活用頂き、</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 10 }}>今までとは、違った感覚のトレードを体験してください。</Typography>
                </Container>
            </Box>
        </Fragment >
    );
};

AboutPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(AboutPage));
