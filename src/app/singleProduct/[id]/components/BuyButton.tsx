'use client';

import React from 'react'

const BuyButton = () => {
    const handleBuyButton = () => {
        console.log("Product Buy button clicked");
    }

    return (
        <div>
            {/* buy button */}
            <button onClick={handleBuyButton}>Buy</button>
        </div>
    )
}

export default BuyButton
