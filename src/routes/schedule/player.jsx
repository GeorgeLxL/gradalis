import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import AgoraRTC from 'agora-rtc-sdk';

// material ui
import {
    Container,
    Box,
    Typography,
    withWidth,
} from '@material-ui/core';

import { useGlobalAction } from '../../store/slices/global.slice';

import appConfig from '../../constants/AppConfig';

const PlayerPage = (props) => {
    const { width } = props;
    const isXs = width === 'xs';
    const isSm = width === 'sm';
    const isMd = width === 'md';

    const location = useLocation();
    const channel = location.state?.channel;
    
    const title = location.state?.title;

    const setSnackBar = useGlobalAction('setSnackBar');

    const [streamID, setStreamID] = useState('');
    const [url, setURL] = useState('');

    useEffect(() => {
        let url = "";
        switch(channel) {
            case "channel1":
                url = "https://twitcasting.tv/c:gradalis1/embeddedplayer/live?auto_play=true&default_mute=true";
                setURL(url);
                break;
            case "channel2":
                url = "https://twitcasting.tv/c:gradalis2/embeddedplayer/live?auto_play=true&default_mute=true";
                setURL(url);
                break;
            case "channel3":
                url = "https://twitcasting.tv/c:gradalis3/embeddedplayer/live?auto_play=true&default_mute=true";
                setURL(url);
                break;
            case "channel4":
                url = "https://twitcasting.tv/c:gradalis4/embeddedplayer/live?auto_play=true&default_mute=true";
                setURL(url);
                break;
            case "channel5":
                url = "https://twitcasting.tv/c:gradalis5/embeddedplayer/live?auto_play=true&default_mute=true";
                setURL(url);
                break;
            default:
                url = "https://twitcasting.tv/c:gradalis6/embeddedplayer/live?auto_play=true&default_mute=true";
                setURL(url);
        };
        const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
        client.init(appConfig.Agora_App_ID, () => {
            console.log("client initialized");
            client.join(null, channel, null, (uid) => {
                // Create a local stream
                client.on("stream-added", (evt) => {
                    client.subscribe(evt.stream, handleError);
                });
                // Play the remote stream when it is subsribed
                client.on("stream-subscribed", (evt) => {
                    const stream = evt.stream;
                    const streamId = String(stream.getId());
                    setStreamID(streamId);
                    const streamContainer = document.getElementById(streamId);

                    if (!streamContainer.hasChildNodes()) {
                        stream.play(streamId);
                    } else {
                        streamContainer.innerHTML = '';
                        stream.play(streamId);
                    }
                });
                client.on('stream-removed', (evt) => {
                    setStreamID('');
                });
                client.on('peer-leave', (evt) => {
                    setStreamID('');
                    setSnackBar({ snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '共有が中止されました。' });
                });
            }, handleError);
        }, handleError);
    }, []);

    const handleError = (err) => {
        console.log("Error: ", err);
        setSnackBar({ snackBarState: true, snackBarVariant: 'warning', snackBarMessage: '通信に問題が発生しました。しばらくしてからもう一度試してください。' });
    };

    return (
        <Fragment>
            <Container
                maxWidth="lg"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                    marginTop: isXs || isSm || isMd ? 150 : 100,
                }}
            >
                <Typography variant="body1" align="left" style={{ marginTop: 20 }}>{title}</Typography>
                <Box className="mt-10" style={{ marginBottom: 50 }}>
                    <div id={streamID} className="shared-screen">
                        <iframe src={url} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </Box>
            </Container>
        </Fragment >
    );
};

PlayerPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(PlayerPage));