import React from 'react';

// material ui
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// custom hooks
import { useASelector } from '../../utilities/recipies.util';
import { useGlobalAction } from '../../store/slices/global.slice';

const CssDialog = withStyles((theme) => ({
    root: {
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}))(Dialog);

const SignIn = (props) => {
    const alertDialogState = useASelector((state) => state.global.alertDialogState, []);
    const alertDialogMessage = useASelector((state) => state.global.alertDialogMessage, []);

    const setAlertDialog = useGlobalAction('setAlertDialog');

    return (
        <CssDialog open={alertDialogState} onClose={() => setAlertDialog({ alertDialogState: false, alertDialogMessage: '' })}>
            <DialogTitle>
                {"メッセージ"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{ fontSize: 14, color: 'white' }}>
                    {alertDialogMessage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="default"
                    onClick={() => setAlertDialog({ alertDialogState: false, alertDialogMessage: '' })}
                    style={{ borderRadius: 50, border: '1px solid #fff', fontWeight: 'bold' }}
                >
                    {'キャンセル'}
                </Button>
            </DialogActions>
        </CssDialog>
    );
};

export default React.memo(SignIn);