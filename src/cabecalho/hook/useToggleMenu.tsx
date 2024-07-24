import { useState } from 'react';

export const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleToogleMenu,
  };
};
