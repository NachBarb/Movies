import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import ReactPlayer from "react-player";

import "./ModalVideo.scss";

const ModalVideo = (props) => {

    const { videoKey, videoPlatform, isOpen, close } = props;
    const [urlVideo, SetUrlVideo] = useState(null);

    useEffect(() => {
        
        switch (videoPlatform) {
            case "YouTube":
                SetUrlVideo(`https://youtu.be/${videoKey}`)
                break;
            case "Vimeo":
                SetUrlVideo(`https://vimeo.com/${videoKey}`)
                break;

            default:
                break;
        }

    }, [videoKey, videoPlatform])

    return (
        <Modal className='modal-video' visible={isOpen}
            centered onCancel={close} footer={false}>
            <ReactPlayer url={urlVideo} controls />
        </Modal>
    )
}

export default ModalVideo