import React, { useState } from 'react';
import styles from './ntfModal.module.scss'
const NtfModal = ({ isOpen, onClose, title, subTitle, imgSrc }) => {
    const [zoomLevel, setZoomLevel] = useState(100); // Initial zoom level

    const handleClose = () => {
        setZoomLevel(100); // Reset zoom level when closing
        onClose();
    };

    const handleZoomIn = () => {
        if (zoomLevel < 200) {
            setZoomLevel(zoomLevel + 10);
        }
    };

    const handleZoomOut = () => {
        if (zoomLevel > 100) {
            setZoomLevel(zoomLevel - 10);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div id='ntf-modal' className={styles.modalContainer} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.closeIcon} onClick={handleClose}>
                    <img src='/images/cross.svg' alt='Close' />
                </span>
                <div className={styles.contentContainer}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <h3 className={styles.modalSubtitle}>{subTitle}</h3>
                    {imgSrc && <img
                        className={styles.modalImage}
                        src={imgSrc}
                        alt="Modal Image"
                        style={{ transform: `scale(${zoomLevel / 100})` }}
                    />}
                </div>
                <div className={styles.zoomControls}>
                    <img onClick={handleZoomIn} src='/images/zoom-in.svg' alt='Zoom in' />
                    <img onClick={handleZoomOut} src='/images/zoom-out.svg' alt='Zoom Out' />
                </div>
            </div>
        </div>
    );
};

export default NtfModal;
