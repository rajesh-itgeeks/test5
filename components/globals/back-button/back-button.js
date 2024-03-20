import React from 'react'

function BackButton() {
    return (
        <div style={{ cursor: "pointer" }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6563 24L16.3437 24M16.3437 24L24 31.6562M16.3437 24L24 16.3438" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="45" y="45" width="42" height="42" rx="21" transform="rotate(-180 45 45)" stroke="white" stroke-width="2" />
            </svg>
        </div>
    )
}

export default BackButton
