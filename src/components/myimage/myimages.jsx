import React from 'react'
import Image from 'react-bootstrap/Image'
import slide from '../../assets/bg.jpg';

import './myimagestyle.css'
export const MyImages = () => {
    return (
        <>
            <Image className="bg" src={slide} fluid />
        </>
    )
}
