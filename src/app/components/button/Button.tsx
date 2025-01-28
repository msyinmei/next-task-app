'use client';
import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-semibold transition-colors ${className} ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-button-blue hover:bg-blue-600 text-white'}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;