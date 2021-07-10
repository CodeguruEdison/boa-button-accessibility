import React, { FC } from 'react'
import "./Button.css";

export interface IButtonProps extends React.ButtonHTMLAttributes<any> {
    text: string,
    buttonType?: string,
    // description: string
}

const Button: FC<IButtonProps> = (props) => {
    const { children, text, buttonType, role, ...rest } = props;
    // const isButton: boolean = !role
    // const renderSpan = (): JSX.Element => <span role={role} aria-describedby={text}>{text}</span>
    // const renderButton = (): JSX.Element => {
    //     return (

    //         <button className={buttonType} {...rest} aria-describedby={text} >
    //             <span>{text}</span>
    //             {children}
    //         </button>)

    // }
    return (
        //   isButton ? renderButton() : renderSpan()
        <button className={buttonType} {...rest} aria-describedby={text} >
            <span>{text}</span>
            {children}
        </button>

    )
}
export default Button;
