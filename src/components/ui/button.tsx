// PaginationButton.tsx
import React, { type ReactNode } from "react";
import "../../App.css";

interface PaginationButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className="pagination-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
