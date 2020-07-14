import React, { FC } from "react";

import "./button.css";

interface iProp {
    loading: boolean;
    type: ButtonType;
    children?: any;
    onClick?: any;
    className: String;
    disabled?: boolean;
}

export enum ButtonType {
    submit = "submit",
    button = "button",
}

const PrimaryButton: FC<iProp> = ({ loading, type, children, onClick, className, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled} type={type} className={`${className}`}>
            {loading ? (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <>{children}</>
            )}
        </button>
    );
};

export default PrimaryButton;
