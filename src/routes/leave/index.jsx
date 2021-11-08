import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// material ui
import {
    Box,
    Container,
    Typography,
    withWidth,
    Checkbox,
    Button,
    CircularProgress,
} from '@material-ui/core';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';
import { useGlobalAction } from '../../store/slices/global.slice';
import { useAuthAction } from '../../store/slices/auth.slice';

// component
import BackgroundImg from '../../assets/bg_img.png';

const LeavePage = (props) => {
    const history = useHistory();

    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';
    const isMd = width === 'md';

    const [checked, setChecked] = useState(false);

    const profile = useASelector((state) => state.auth.profile, []);
    const loading = useASelector((state) => state.global.loading, []);

    const setLoading = useGlobalAction('setLoading');
    const setSnackBar = useGlobalAction('setSnackBar');
    // const deleteAccount = useAuthAction('deleteAccount');
    const cancelSubscriptionAndDeleteAccount = useAuthAction('cancelSubscriptionAndDeleteAccount');

    const handleClick = () => {
        if (!checked) {
            setSnackBar({ snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '上記の内容を確認しましたか？' });
        } else {
            const data = {
                // id: profile.id,
                email: profile.email,
            };

            const meta = {
                redirect: history.push,
                path: '/leavesuccess',
            };

            setLoading(true);
            cancelSubscriptionAndDeleteAccount({ data, meta });
        }
    };

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
                    <Typography variant="subtitle1" style={{ marginTop: 20 }}>退会について</Typography>
                    <Typography variant="body1" style={{ marginTop: 30 }}>この度は、GRADALISのサービスをご利用いただき誠にありがとうございました。</Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>退会の前に、下記をご確認ください</Typography>
                    <Typography variant="body1" style={{ marginTop: 30 }}>⚪︎ GRADALISを退会すると、紐づく全てのサービスの利用ができなくなります</Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>⚪︎ 一度退会した会員情報等は、退会後に元に戻すことはできません</Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>⚪︎ 再度入会する場合、10日間の無料体験機能はご利用になれません</Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>⚪︎ ご利用期間中に退会した場合、ご利用期間中でもサービスの利用はできなくなります</Typography>

                    <Box style={{ marginTop: 30, border: '1px solid white', padding: '5px 0px 5px 15px', maxWidth: 280, cursor: 'pointer' }} onClick={(e) => setChecked(!checked)}>
                        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                            上記の内容を確認しました
                        <Checkbox checked={checked} color="primary" style={{ color: 'white' }} />
                        </Typography>
                    </Box>

                    <Button
                        variant="outlined"
                        color="default"
                        className="mt-30"
                        style={{ borderRadius: 5, border: '1px solid white', padding: '10px 20px' }}
                        onClick={handleClick}
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} style={{ color: 'white' }} /> : <></>}
                    >
                        退会する
                    </Button>
                </Container>
            </Box>
        </Fragment >
    );
};

LeavePage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(LeavePage));
