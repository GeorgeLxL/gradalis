import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// material ui
import {
    Box,
    Container,
    Button,
    Grid,
    TextField,
    CircularProgress,
    InputAdornment,
    IconButton,
    withWidth,
    Typography,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/core/styles';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';
import { useGlobalAction } from '../../store/slices/global.slice';
import { useAuthAction } from '../../store/slices/auth.slice';

// components
import BackgroundImg from '../../assets/bg_img.png';

const CssTextField = withStyles({
    root: {
        '& label.MuiFormLabel-root': {
            color: '#898989',
        },
        '& label.Mui-focused': {
            color: '#DAC720',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#ACACAC',
        },
        '& .MuiIconButton-label': {
            color: '#898989',
        },
        '& p': {
            color: '#f44336',
        },
    },
})(TextField);

const SignUpPage = (props) => {
    const history = useHistory();
    const [fields, setFiedls] = useState({});
    const [errors, setErrors] = useState({
        passwordHelperText: "パスワードには、少なくとも 1 つの数字、少なくとも 1 つの小文字、および少なくとも 1 つの大文字が含まれている必要があります。",
    });
    const [showPassword, setShowPassword] = useState(false);

    const loading = useASelector((state) => state.global.loading, []);

    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';
    const isMd = width === 'md';

    const setSnackBar = useGlobalAction('setSnackBar');
    const setLoading = useGlobalAction('setLoading');
    const signupRequest = useAuthAction('signupRequest');

    // Email Validation Regex
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Password Validation Regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const passwordLengthRegex = /^.{6,}$/;

    const handleChange = (e) => {
        fields[e.target.name] = e.target.value;
        setFiedls(fields);
    };

    const handleValidation = () => {
        const errors = {
            passwordHelperText: "パスワードには、少なくとも 1 つの数字、少なくとも 1 つの小文字、および少なくとも 1 つの大文字が含まれている必要があります。",
        };
        let formIsValid = true;

        // First Name
        if (!fields.first_name || fields.first_name.length === 0) {
            formIsValid = false;
            errors.first_name = true;
            errors.firstNameHelperText = "姓を入力してください。";
        }

        // Last Name
        if (!fields.last_name || fields.last_name.length === 0) {
            formIsValid = false;
            errors.last_name = true;
            errors.lastNameHelperText = "名を入力してください。";
        }

        // Email
        if (!fields.email || fields.email.length === 0) {
            formIsValid = false;
            errors.email = true;
            errors.emailHelperText = "E-メールは必須です。";
        } else {
            if (!emailRegex.test(String(fields.email).toLowerCase())) {
                formIsValid = false;
                errors.email = true;
                errors.emailHelperText = "E-メールが無効です。";
            }
        }

        // Password
        if (!fields.password || fields.password.length === 0) {
            formIsValid = false;
            errors.password = true;
        } else if (!passwordLengthRegex.test(String(fields.password))) {
            formIsValid = false;
            errors.password = true;
        } else if (!passwordRegex.test(String(fields.password))) {
            formIsValid = false;
            errors.password = true;
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleClick = () => {
        if (handleValidation()) {
            handleSubmit();
        } else {
            setSnackBar({ snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '正確な情報を入力してください。' });
        }
    };

    const handleSubmit = () => {
        const data = fields;

        if (!fields.invite_code) data.invite_code = null;

        setLoading(true);
        signupRequest({ data, meta: null });
    };

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
                <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs || isSm || isMd ? 200 : 50 }}>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={10} sm={7} md={4} lg={4} xl={4}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2} >
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant="body1" align="center">
                                        アカウントを作成
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ width: '100%' }}>
                                    <CssTextField
                                        label={'姓'}
                                        name="first_name"
                                        type="text"
                                        required={true}
                                        error={errors.first_name}
                                        helperText={errors.firstNameHelperText}
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ width: '100%' }}>
                                    <CssTextField
                                        label={'名'}
                                        name="last_name"
                                        type="text"
                                        required={true}
                                        error={errors.last_name}
                                        helperText={errors.lastNameHelperText}
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ width: '100%' }}>
                                    <CssTextField
                                        label={'E-メール'}
                                        name="email"
                                        type="email"
                                        required={true}
                                        error={errors.email}
                                        helperText={errors.emailHelperText}
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ width: '100%' }}>
                                    <CssTextField
                                        label={'パスワード'}
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required={true}
                                        error={errors.password}
                                        helperText={errors.passwordHelperText}
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ width: '100%' }}>
                                    <CssTextField
                                        label={'紹介コード（例：A0828）'}
                                        name="invite_code"
                                        type="invite_code"
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ width: '100%' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleClick}
                                        disabled={loading}
                                        fullWidth
                                        className="mt-20"
                                        style={{ borderRadius: 5, padding: 10 }}
                                        endIcon={loading ? <CircularProgress size={20} style={{ color: 'white' }} /> : <></>}
                                    >
                                        次のステップへ＞
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mt-20">
                                    <Typography variant="caption" align="center" style={{ cursor: 'pointer' }} onClick={() => history.push('/login')}>
                                        すでに登録済みの方はこちらからログイン
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    );
};

SignUpPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(SignUpPage));