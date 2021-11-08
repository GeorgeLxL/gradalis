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

const LeaveSuccessPage = (props) => {
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
                <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                    <Typography variant="subtitle1" style={{ marginTop: 20 }}>退会完了</Typography>
                    <Typography variant="body1" style={{ marginTop: 30 }}>退会処理が正常に行われました。 </Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>GRADALISをご愛顧頂き、誠にありがとうございました。 </Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>今後もサービス改善に努めて参ります。 </Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>またの御愛顧をお待ちしております。 </Typography>
                </Container>
            </Box>
        </Fragment >
    );
};

LeaveSuccessPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(LeaveSuccessPage));
