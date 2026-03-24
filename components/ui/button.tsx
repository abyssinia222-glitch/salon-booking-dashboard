import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-white ${disabled ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'}`}
    >
      {children}
    </button>
  );
};

export default Button;