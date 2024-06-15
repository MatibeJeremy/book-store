"use client"

import React from 'react';
import { Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { setToastNotification } from '@/app/store/reducers/search';

interface SnackbarWrapperProps {
    children: React.ReactNode;
}
const SnackbarWrapper: React.FC<SnackbarWrapperProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const open = useAppSelector(state => state.search.toastNotification);
    const toastText = useAppSelector(state => state.search.toastNotificationText);

    const handleClose = () => {
        dispatch(setToastNotification(false));
    };

    return (
        <>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message={toastText}
            />
        </>
    );
};

export default SnackbarWrapper;
