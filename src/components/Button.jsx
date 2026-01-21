import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-brand-blue text-white hover:bg-opacity-90 hover:shadow-lg focus:ring-brand-blue",
        secondary: "bg-brand-pink text-background hover:bg-opacity-90 hover:shadow-lg focus:ring-brand-pink",
        outline: "border-2 border-white text-white hover:bg-white hover:text-background focus:ring-white",
        ghost: "text-white/80 hover:text-white hover:bg-white/10",
        white: "bg-white text-background hover:bg-gray-100 focus:ring-gray-200 rounded-md w-auto",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
