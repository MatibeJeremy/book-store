"use client"

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter'
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Inter'
                },
            },
        },
        // Add other component styles as needed
    },
});
