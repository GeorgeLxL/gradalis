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
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
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
    },
})(TextField);

const CssDialog = withStyles((theme) => ({
    root: {
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}))(Dialog);

const LogInPage = (props) => {
    const history = useHistory();
    const [fields, setFiedls] = useState({});
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [restoreAccessEmail, setRestoreAccessEmail] = useState('');
    const [restoreAccessEmailValid, setRestoreAccessEmailValid] = useState(true);

    const loading = useASelector((state) => state.global.loading, []);

    const { width } = props;
    const isXs = width === 'xs';

    const setSnackBar = useGlobalAction('setSnackBar');
    const setLoading = useGlobalAction('setLoading');
    const setAlertDialog = useGlobalAction('setAlertDialog');
    const loginRequest = useAuthAction('loginRequest');
    const restoreAccessRequest = useAuthAction('restoreAccessRequest');

    // Email Validation Regex
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleChange = (e) => {
        fields[e.target.name] = e.target.value;
        setFiedls(fields);
    };

    const handleValidation = () => {
        const errors = {};
        let formIsValid = true;

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
            errors.passwordHelperText = "パスワードフィールドは必須です。";
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
        const meta = {
            redirect: history.push,
            path: '/home',
        };

        setLoading(true);

        data.username = data.email;
        loginRequest({ data, meta });
    };

    const restoreAccessEmailValidation = (email) => {
        return emailRegex.test(String(email).toLowerCase());
    };

    const restoreAccessEmailChange = (e) => {
        setRestoreAccessEmail(e.target.value);
        if (restoreAccessEmailValidation(e.target.value)) {
            setRestoreAccessEmailValid(false);
        } else {
            setRestoreAccessEmailValid(true);
        }
    };

    const sendRestoreAccessEmail = () => {
        const data = {
            email: restoreAccessEmail,
        };

        restoreAccessRequest({ data });
        setShowModal(false);
        setAlertDialog({ alertDialogState: true, alertDialogMessage: 'E-メールで一時的なパスワードリセットリンクを確認し、クリック後すぐに新しいパスワードを設定してください。' });
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
                <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs ? 200 : 50 }}>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={10} sm={7} md={4} lg={4} xl={4}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={3} >
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant="body1" align="center">
                                        ログイン
                                </Typography>
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
                                        視聴を開始する
                                </Button>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mt-20">
                                    <Typography variant="caption" align="center" style={{ cursor: 'pointer' }} onClick={() => history.push('/signup')}>
                                        初めて利用する方はこちら
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: -15 }}>
                                    <Typography variant="caption" align="center" style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                                        パスワードを忘れた方はこちら
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <CssDialog open={showModal} onClose={() => setShowModal(false)}>
                <DialogTitle>パスワード再設定</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ fontSize: 14, color: 'white' }}>
                        GRADALISアカウントをお持ちの場合は、このE-メールへのパスワードリセットリンクが届きます。
                    </DialogContentText>
                    <CssTextField
                        autoFocus
                        required={true}
                        variant="outlined"
                        margin="dense"
                        name="email"
                        label="E-mail"
                        type="email"
                        fullWidth
                        value={restoreAccessEmail}
                        error={restoreAccessEmailValid}
                        onChange={restoreAccessEmailChange}
                        helperText={restoreAccessEmailValid ? "E-メールが無効です。" : ""}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="default"
                        onClick={() => setShowModal(false)}
                        style={{ borderRadius: 50, border: '1px solid #fff', fontWeight: 'bold' }}
                    >
                        {'キャンセル'}
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={sendRestoreAccessEmail}
                        disabled={restoreAccessEmailValid}
                        style={{ borderRadius: 50, fontWeight: 'bold' }}
                    >
                        {'送信'}
                    </Button>
                </DialogActions>
            </CssDialog>
        </Fragment>
    );
};

LogInPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(LogInPage));