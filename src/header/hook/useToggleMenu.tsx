import { useState } from 'react';

export const useToggleMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleToogleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return {
    menuIsOpen,
    handleToogleMenu,
  };
};
