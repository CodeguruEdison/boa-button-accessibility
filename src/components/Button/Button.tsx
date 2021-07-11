import React, { FC } from 'react'
import "./Button.css";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    buttonType?: string,

}

const Button: FC<IButtonProps> = (props) => {
    const { children, text, buttonType, role, ...rest } = props;

    return (
        <button className={buttonType} {...rest} aria-describedby={text}>
            <span>{text}</span>
            {children}
        </button>

    )
}
export default Button;
