import React from 'react'

type Props = {
    className?: string;
    text?: string;
    children?: React.ReactElement,
    handleClick(e: any): void
    id: string
}

export default function CustomButton({ className, text, children, handleClick, id }: Props) {
    return (
        <button
            className={className}
            onClick={(e) => handleClick(e)}
            id={id}
        >
            <span>{text}</span>
            {children}
        </button>
    )
}