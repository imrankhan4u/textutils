import React from 'react';
import './custom.css';

const Alert = React.memo((props) => {
    return (
        <>
            {props.showAlert && (
                <div className='customBox' >
                    <div className='customAlert'>
                        <strong>{props.showAlert.msg}</strong>
                    </div>
                </div>
            )}
        </>
    );
});

export default Alert;
