'use client'

import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    // boxShadow: theme.shadows[4],
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
}));

const PaginationButton = styled(Button)(({ theme }) => ({
    minWidth: 'unset',
    padding: theme.spacing(1),
}));

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <PaginationContainer>
            <PaginationButton
                onClick={handlePrev}
                disabled={currentPage === 1}
                variant="contained"
                color="primary"
                size="small"
            >
                <ArrowBackIosNewIcon fontSize="small" />
            </PaginationButton>
            <Typography variant="body2">
                Page {currentPage} of {totalPages}
            </Typography>
            <PaginationButton
                onClick={handleNext}
                disabled={currentPage === totalPages}
                variant="contained"
                color="primary"
                size="small"
            >
                <ArrowForwardIosIcon fontSize="small" />
            </PaginationButton>
        </PaginationContainer>
    );
};

export default Pagination;
