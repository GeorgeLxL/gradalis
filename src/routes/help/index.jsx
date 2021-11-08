import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// material ui
import {
    Box,
    Container,
    withWidth,
    Typography,
} from '@material-ui/core';
// component
import BackgroundImg from '../../assets/bg_img.png';

const HelpPage = (props) => {
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
                <Container maxWidth="lg" style={{ marginBottom: 100, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                  <Typography variant="subtitle1" align={isXs ? "center" : "left"} style={{ marginTop: 20, marginBottom: 30 }}>お問い合わせフォーム</Typography>
                  <Container style={{height: '100%'}}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSesGTqggR3dRMHkMbg4Q7PiJoOzODyMZ5MQXCARx56XOmQd_Q/viewform"
                    style={{width: '100%', height: '100%'}}></iframe>
                  </Container>
                </Container>
            </Box>
        </Fragment >
    );
};

HelpPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(HelpPage));