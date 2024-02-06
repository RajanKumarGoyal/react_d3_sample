import React from 'react';
import QRCode from "qrcode.react";

const Qr = () => {

    return (
        <div className="container">
            <QRCode value="40" />
        </div>
    );
};

export default Qr;