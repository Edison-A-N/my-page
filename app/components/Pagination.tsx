import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

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
        <div style={{
            position: 'fixed', // Fixed position
            right: '20px', // 20px from the right
            bottom: '20px', // 20px from the bottom
            backgroundColor: '#333', // Dark gray background
            padding: '10px', // Padding around the buttons
            borderRadius: '5px', // Optional: rounded corners for the background
        }}>
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                style={{
                    border: '1px solid #ccc',
                    boxShadow: '2px 2px 2px #aaa',
                    backgroundColor: '#f0f0f0',
                    marginRight: '10px', // Add space between buttons
                }}
            >
                Previous
            </button>
            <span style={{ color: '#fff' }}>{` Page ${currentPage} of ${totalPages} `}</span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                style={{
                    border: '1px solid #ccc',
                    boxShadow: '2px 2px 2px #aaa',
                    backgroundColor: '#f0f0f0',
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
