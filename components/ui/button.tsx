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
      className={`btn-primary px-4 py-2 rounded-md ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;