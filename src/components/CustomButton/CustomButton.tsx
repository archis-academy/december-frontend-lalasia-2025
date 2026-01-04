import React from 'react'

type Props = {
    className?: string;
    text?: string;
    children?: React.ReactElement
}

export default function CustomButton({ className, text, children }: Props) {
    return (
        <button className={className}>
            <span>{text}</span>
            {children}
        </button>
    )
}