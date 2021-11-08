import React, { Fragment, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

// material ui
import {
    Container,
    Typography,
    Grid,
    Button,
    withWidth,
    TextField,
    CircularProgress,
    Box,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';
import { useGlobalAction } from '../../store/slices/global.slice';
import { useAuthAction } from '../../store/slices/auth.slice';

// component
import BackgroundImg from '../../assets/bg_img.png';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#DAC720',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFF',
        },
    },
})(TextField);

const ProfilePage = (props) => {
    const history = useHistory();

    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';
    const isMd = width === 'md';

    const location = useLocation();
    const isResetPage = location.state?.isResetPage;

    const profile = useASelector((state) => state.auth.profile, []);
    const loading = useASelector((state) => state.global.loading, []);

    const setSnackBar = useGlobalAction('setSnackBar');
    const setLoading = useGlobalAction('setLoading');
    const resetPassword = useAuthAction('resetPassword');

    const [resetProcess, setResetProcess] = useState(isResetPage);
    const [fields, setFiedls] = useState({});
    const [errors, setErrors] = useState({});

    // Password Validation Regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const passwordLengthRegex = /^.{6,}$/;

    const handleChange = (e) => {
        fields[e.target.name] = e.target.value;
        setFiedls(fields);
    };

    const handleClick = () => {
        if (handleValidation()) {
            handleSubmit();
        } else {
            setSnackBar({ snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '正確な情報を入力してください。' });
        }
    };

    const handleSubmit = () => {
        const data = {
            current_password: fields.old_password,
            password: fields.new_password,
            repeat_password: fields.repeat_password,
        };
        const meta = {
            redirect: history.push,
            path: '/profile',
        };

        setLoading(true);
        resetPassword({ data, meta });
    };

    const handleValidation = () => {
        const errors = {};
        let formIsValid = true;

        if (!fields.old_password || fields.old_password.length === 0) {
            formIsValid = false;
            errors.old_password = true;
        }

        if (!fields.new_password || fields.new_password.length === 0) {
            formIsValid = false;
            errors.new_password = true;
        } else if (!passwordLengthRegex.test(String(fields.new_password))) {
            formIsValid = false;
            errors.new_password = true;
        } else if (!passwordRegex.test(String(fields.new_password))) {
            formIsValid = false;
            errors.new_password = true;
        }

        if (!fields.repeat_password || !fields.new_password || fields.repeat_password !== fields.new_password) {
            formIsValid = false;
            errors.repeat_password = true;
        }

        setErrors(errors);
        return formIsValid;
    };


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
                <Container maxWidth="lg" style={{ marginBottom: 60, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
                    <Typography variant="subtitle1" align="left" style={{ marginTop: 20 }}>お客様情報</Typography>
                    <Grid container justify="center" alignItems="center" spacing={3} className="mt-20">
                        <Grid item xs={12} sm={11} md={10} lg={10} xl={10}>
                            {!resetProcess ?
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <th className="p-10" style={{ border: '1px solid white', textAlign: 'center', width: props.width === 'xs' ? '40%' : '30%' }}>
                                                <Typography variant="body1">メールアドレス</Typography>
                                            </th>
                                            <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                                <Typography variant="body1">{profile.email}</Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                                <Typography variant="body1">パスワード</Typography>
                                            </th>
                                            <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                                ********
                                                <Button
                                                    variant="outlined"
                                                    color="default"
                                                    size="small"
                                                    style={{ borderRadius: 5, border: '1px solid white' }}
                                                    onClick={() => setResetProcess(true)}
                                                    className="ml-20"
                                                >
                                                    パスワードを変更する
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                                <Typography variant="body1">アイコン選択</Typography>
                                            </th>
                                            <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                                <Typography variant="body1">実装予定</Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                                <Typography variant="body1">ニックネーム</Typography>
                                            </th>
                                            <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                                <Typography variant="body1">実装予定</Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="p-10" style={{ border: '1px solid white', textAlign: 'center' }}>
                                                <Typography variant="body1">入会日</Typography>
                                            </th>
                                            <td className="p-10 pl-30" style={{ border: '1px solid white' }}>
                                                <Typography variant="body1">
                                                    {profile.subscribed && `${profile.trial_end.split('-')[0]}年${profile.trial_end.split('-')[1]}月${profile.trial_end.split('-')[2]}日`}
                                                </Typography>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                :
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <th className="p-15" style={{ border: '1px solid white', textAlign: 'center', width: props.width === 'xs' ? '40%' : '30%' }}>
                                                <Typography variant="body1">現在のパスワード</Typography>
                                            </th>
                                            <td className="p-15" style={{ border: '1px solid white' }}>
                                                <CssTextField
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    type="password"
                                                    name="old_password"
                                                    required={true}
                                                    error={errors.old_password}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="p-15" style={{ border: '1px solid white', textAlign: 'center' }}>
                                                <Typography variant="body1">新しいパスワード</Typography>
                                            </th>
                                            <td className="p-15" style={{ border: '1px solid white' }}>
                                                <CssTextField
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    type="password"
                                                    name="new_password"
                                                    required={true}
                                                    error={errors.new_password}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="p-15" style={{ border: '1px solid white', textAlign: 'center' }}>
                                                <Typography variant="body1">パスワードの確認</Typography>
                                            </th>
                                            <td className="p-15" style={{ border: '1px solid white' }}>
                                                <CssTextField
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    type="password"
                                                    name="repeat_password"
                                                    required={true}
                                                    error={errors.repeat_password}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                        </Grid>
                        {resetProcess &&
                            <Grid item xs={12} sm={11} md={10} lg={10} xl={10} style={{ textAlign: 'right' }}>
                                <Button
                                    variant="outlined"
                                    color="default"
                                    style={{ borderRadius: 5, border: '1px solid white', padding: 10, width: 120 }}
                                    onClick={handleClick}
                                    disabled={loading}
                                    endIcon={loading ? <CircularProgress size={20} style={{ color: 'white' }} /> : <></>}
                                >
                                    変更する
                            </Button>
                            </Grid>
                        }
                    </Grid>
                </Container>
            </Box>
        </Fragment >
    );
};

ProfilePage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(ProfilePage));